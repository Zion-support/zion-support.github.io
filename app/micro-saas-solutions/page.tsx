import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Zap, Shield, BarChart3, Cloud, Brain, Users, Globe, Settings } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const MicroSaasSolutionsPage: React.FC = () => {
  const solutions = [
    {
      name: "Zion AI Voice Assistant Pro",
      description: "Revolutionary AI voice assistant with 99.5% accuracy and multi-language support",
      price: "From $99/month",
      icon: <Brain className="w-8 h-8" />,
      link: "/zion-ai-voice-assistant-pro",
      featured: true
    },
    {
      name: "Zion AI Fraud Detection Pro",
      description: "Advanced AI fraud detection with 99.7% accuracy and real-time monitoring",
      price: "From $199/month",
      icon: <Shield className="w-8 h-8" />,
      link: "/zion-ai-fraud-detection-pro",
      featured: true
    },
    {
      name: "Zion AI Analytics Dashboard Pro",
      description: "Comprehensive analytics dashboard with AI-powered insights and reporting",
      price: "From $149/month",
      icon: <BarChart3 className="w-8 h-8" />,
      link: "/zion-ai-analytics-dashboard-pro",
      featured: false
    },
    {
      name: "Zion AI Code Assistant Pro",
      description: "Intelligent code assistant with auto-completion and bug detection",
      price: "From $79/month",
      icon: <Settings className="w-8 h-8" />,
      link: "/zion-ai-code-assistant-pro",
      featured: false
    },
    {
      name: "Zion AI Education Solutions Pro",
      description: "AI-powered educational platform with personalized learning paths",
      price: "From $129/month",
      icon: <Users className="w-8 h-8" />,
      link: "/zion-ai-education-solutions-pro",
      featured: false
    },
    {
      name: "Zion AI Cybersecurity Platform",
      description: "Advanced cybersecurity platform with AI threat detection and prevention",
      price: "From $299/month",
      icon: <Shield className="w-8 h-8" />,
      link: "/zion-ai-cybersecurity-platform",
      featured: false
    }
  ];

  const features = [
    {
      title: "Easy Integration",
      description: "Simple API integration with comprehensive documentation",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock support from our expert team",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Scalable Solutions",
      description: "Solutions that grow with your business needs",
      icon: <Cloud className="w-6 h-6" />
    },
    {
      title: "Global Reach",
      description: "Available worldwide with multi-language support",
      icon: <Globe className="w-6 h-6" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group</title>
        <meta name="description" content="Discover our range of micro SaaS solutions designed to streamline your business operations with AI-powered tools." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Micro SaaS Solutions
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Powerful, focused SaaS solutions designed to solve specific business challenges with AI-powered intelligence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors">
                  Explore Solutions
                </button>
                <button className="px-8 py-3 border border-cyan-600 text-cyan-400 rounded-lg hover:bg-cyan-600 hover:text-white transition-colors">
                  View Pricing
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Solutions */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Featured Solutions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.filter(s => s.featured).map((solution, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-colors relative">
                  <div className="absolute top-4 right-4">
                    <Star className="w-6 h-6 text-yellow-400 fill-current" />
                  </div>
                  <div className="text-cyan-400 mb-4">
                    {solution.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {solution.name}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {solution.description}
                  </p>
                  <div className="text-cyan-400 font-semibold mb-4">
                    {solution.price}
                  </div>
                  <Link
                    to={solution.link}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* All Solutions */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              All Solutions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-colors">
                  <div className="text-cyan-400 mb-4">
                    {solution.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {solution.name}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {solution.description}
                  </p>
                  <div className="text-cyan-400 font-semibold mb-4">
                    {solution.price}
                  </div>
                  <Link
                    to={solution.link}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Why Choose Our Solutions?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="text-cyan-400 mb-4 flex justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
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
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Choose from our range of micro SaaS solutions and start your digital transformation journey today.
            </p>
            <button className="px-8 py-3 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors inline-flex items-center">
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default MicroSaasSolutionsPage;