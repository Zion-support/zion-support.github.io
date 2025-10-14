import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Shield, Cloud, BarChart3 } from 'lucide-react';

const AiSolutionsPage: React.FC = () => {
  const solutions = [
    {
      icon: Brain,
      title: 'AI Consulting',
      description: 'Strategic AI consulting to help you identify opportunities and develop AI roadmaps.',
      href: '/ai-consulting'
    },
    {
      icon: BarChart3,
      title: 'AI Analytics',
      description: 'Advanced analytics solutions powered by machine learning and AI algorithms.',
      href: '/ai-analytics'
    },
    {
      icon: Cloud,
      title: 'AI Cloud Solutions',
      description: 'Scalable AI solutions deployed on cloud infrastructure.',
      href: '/ai-cloud'
    },
    {
      icon: Shield,
      title: 'AI Security',
      description: 'AI-powered security solutions to protect your business.',
      href: '/ai-security'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI solutions for your business needs." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                AI Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover our comprehensive AI solutions designed to transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {solutions.map((solution, index) => (
                <Link
                  key={index}
                  to={solution.href}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                >
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <solution.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {solution.title}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {solution.description}
                  </p>
                  <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 font-medium">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AiSolutionsPage;