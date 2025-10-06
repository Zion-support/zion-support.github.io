import React from "react";
import { Link } from "react-router-dom";
import { Brain, Zap, Shield, Target, ArrowRight } from "lucide-react";

const EnterpriseSolutionsShowcase2026: React.FC = () => {
  const enterpriseSolutions = [
    {
      id: 1,
      title: 'AI-Powered Enterprise Automation',
      slug: 'ai-enterprise-automation-2026',
      excerpt: 'Transform your enterprise with comprehensive AI automation, achieving 95% process efficiency. From workflow optimization to intelligent decision-making systems.',
      category: 'AI Automation',
      readTime: '12 min',
      publishDate: '2026-01-15',
      featured: true,
      icon: <Brain className="w-6 h-6" />
    },
    {
      id: 2,
      title: 'Advanced Data Analytics Platform',
      slug: 'advanced-data-analytics-2026',
      excerpt: 'Unlock insights from your data with our cutting-edge analytics platform. Real-time processing, predictive modeling, and actionable intelligence.',
      category: 'Data Analytics',
      readTime: '8 min',
      publishDate: '2026-01-12',
      featured: false,
      icon: <Target className="w-6 h-6" />
    },
    {
      id: 3,
      title: 'Cloud Migration & Optimization',
      slug: 'cloud-migration-optimization-2026',
      excerpt: 'Seamless cloud migration with zero downtime. Optimize costs, enhance security, and scale effortlessly with our proven methodologies.',
      category: 'Cloud Solutions',
      readTime: '15 min',
      publishDate: '2026-01-10',
      featured: true,
      icon: <Zap className="w-6 h-6" />
    },
    {
      id: 4,
      title: 'Cybersecurity & Compliance',
      slug: 'cybersecurity-compliance-2026',
      excerpt: 'Comprehensive security solutions ensuring compliance with industry standards. Protect your enterprise from evolving cyber threats.',
      category: 'Security',
      readTime: '10 min',
      publishDate: '2026-01-08',
      featured: false,
      icon: <Shield className="w-6 h-6" />
    }
  ];

  return (
    <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
            Enterprise Solutions 2026
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our comprehensive suite of enterprise-grade solutions designed to transform your business operations and drive unprecedented growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {enterpriseSolutions.map((solution) => (
            <div
              key={solution.id}
              className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 ${
                solution.featured ? 'ring-2 ring-blue-400' : ''
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="text-blue-400">{solution.icon}</div>
                {solution.featured && (
                  <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                    Featured
                  </span>
                )}
              </div>

              <h3 className="text-xl font-bold mb-3">{solution.title}</h3>
              <p className="text-gray-300 text-sm mb-4">{solution.excerpt}</p>

              <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                <span>{solution.readTime} read</span>
                <span>{solution.publishDate}</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-blue-400 text-sm font-medium">{solution.category}</span>
                <Link
                  to={`/solutions/${solution.slug}`}
                  className="flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/enterprise"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
          >
            Explore All Enterprise Solutions
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EnterpriseSolutionsShowcase2026;