import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Cloud, Cpu, Database, Shield, Users, Zap } from 'lucide-react';

const AiDatabaseSolutionsPage = () => {
  const features = [
    {
      icon: <Database className="w-8 h-8" />,
      title: "AI-Powered Database Optimization",
      description: "Intelligent query optimization and performance tuning using machine learning algorithms to maximize database efficiency."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Advanced Security & Compliance",
      description: "Enterprise-grade security features with automated compliance monitoring and data protection protocols."
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Real-time Analytics",
      description: "Advanced analytics engine that processes data in real-time to provide instant insights and decision support."
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud-Native Architecture",
      description: "Scalable cloud infrastructure that automatically adjusts to your data processing needs and growth."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Multi-tenant Support",
      description: "Secure multi-tenant architecture that allows multiple organizations to use the platform independently."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "High Performance",
      description: "Optimized for speed with sub-millisecond response times and support for millions of concurrent users."
    }
  ];

  const benefits = [
    "Reduce database costs by up to 60%",
    "Improve query performance by 10x",
    "Automated scaling and optimization",
    "24/7 monitoring and alerting",
    "Enterprise-grade security",
    "Easy integration with existing systems"
  ];

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Database Solutions - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered database solutions for modern enterprises. Optimize performance, enhance security, and scale effortlessly." />
        <meta name="keywords" content="AI database, database optimization, cloud database, enterprise database, data analytics" />
      </Helmet>

      <div className="container mx-auto px-4 py-20">
        {/* Hero Section */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            AI Database Solutions
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Transform your data infrastructure with our cutting-edge AI-powered database solutions. 
            Optimize performance, enhance security, and scale effortlessly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105">
              Get Started Today
            </button>
            <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300">
              View Demo
            </button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 transition-all duration-500 hover:bg-white/20 hover:scale-105 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-blue-400 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-12 mb-20">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Why Choose Our AI Database Solutions?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Key Benefits</h3>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Performance Metrics</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Query Speed</span>
                  <span className="text-green-400 font-bold">10x Faster</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Cost Reduction</span>
                  <span className="text-green-400 font-bold">60% Less</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Uptime</span>
                  <span className="text-green-400 font-bold">99.99%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Scalability</span>
                  <span className="text-green-400 font-bold">Unlimited</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Database?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of enterprises already using our AI database solutions to optimize their data infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105">
              Start Free Trial
            </button>
            <button className="border-2 border-white/30 text-white hover:bg-white/10 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiDatabaseSolutionsPage;