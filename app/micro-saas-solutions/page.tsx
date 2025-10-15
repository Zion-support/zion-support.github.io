import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Zap, Shield, BarChart3, Cloud, Brain, Users, Globe, Settings } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';

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
      description: "Comprehensive AI-powered analytics with real-time insights and predictions",
      price: "From $149/month",
      icon: <BarChart3 className="w-8 h-8" />,
      link: "/zion-ai-analytics-dashboard-pro",
      featured: true
    },
    {
      name: "Zion AI Code Assistant Pro",
      description: "Intelligent code generation and debugging with support for 50+ programming languages",
      price: "From $79/month",
      icon: <Settings className="w-8 h-8" />,
      link: "/zion-ai-code-assistant-pro",
      featured: false
    },
    {
      name: "Zion AI Content Generator Pro",
      description: "AI-powered content creation for blogs, social media, and marketing materials",
      price: "From $59/month",
      icon: <Zap className="w-8 h-8" />,
      link: "/zion-ai-content-generator-pro",
      featured: false
    },
    {
      name: "Zion AI Customer Support Pro",
      description: "Intelligent customer support chatbot with 24/7 availability and multi-language support",
      price: "From $89/month",
      icon: <Users className="w-8 h-8" />,
      link: "/zion-ai-customer-support-pro",
      featured: false
    }
  ];

  const features = [
    "99.9% Uptime Guarantee",
    "24/7 Customer Support",
    "Free 30-day Trial",
    "No Setup Fees",
    "Scalable Infrastructure",
    "Advanced Security"
  ];

  const benefits = [
    {
      title: "Rapid Deployment",
      description: "Get up and running in minutes, not months",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "Cost Effective",
      description: "Pay only for what you use with flexible pricing",
      icon: <BarChart3 className="w-6 h-6" />
    },
    {
      title: "Scalable",
      description: "Grow from startup to enterprise seamlessly",
      icon: <Cloud className="w-6 h-6" />
    },
    {
      title: "Secure",
      description: "Enterprise-grade security and compliance",
      icon: <Shield className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="Micro SaaS Solutions - Zion Tech Group"
        description="Powerful micro SaaS solutions for modern businesses. AI-powered tools that scale with your growth."
        keywords="micro saas, saas solutions, ai tools, business automation, software as a service"
      />

      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Micro <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">SaaS Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Powerful, focused SaaS solutions that solve specific business problems. 
              Built with AI and designed for modern businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                View All Solutions
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Our Micro SaaS Solutions</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from our curated collection of AI-powered micro SaaS solutions
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:transform hover:scale-105 ${solution.featured ? 'ring-2 ring-cyan-400' : ''}`}>
                {solution.featured && (
                  <div className="flex items-center mb-4">
                    <Star className="w-5 h-5 text-yellow-400 mr-2" />
                    <span className="text-yellow-400 font-semibold">Featured</span>
                  </div>
                )}
                <div className="text-cyan-400 mb-4">
                  {solution.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{solution.name}</h3>
                <p className="text-gray-300 mb-6">{solution.description}</p>
                <div className="text-3xl font-bold text-cyan-400 mb-6">{solution.price}</div>
                <Link
                  to={solution.link}
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold"
                >
                  Learn More
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Why Choose Our Micro SaaS Solutions?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built for modern businesses with cutting-edge technology
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-white">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features List */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">What's Included</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Every solution comes with these powerful features
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <CheckCircle className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" />
                <span className="text-white">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-cyan-600 to-purple-600 rounded-2xl p-12 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses already using our micro SaaS solutions to grow faster.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-cyan-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300">
                Start Free Trial
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MicroSaasSolutionsPage;