// import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, Clock } from 'lucide-react';

const NewContentShowcaseOct2025: React.FC = () => {
  const newContent = [
    {
      type: 'Blog',
      title: 'Vector Database Optimization Guide',
      description: 'Learn how to achieve 50-70% latency reduction and 3-5x memory savings in production vector databases.',
      link: '/blog/ai-2025-oct-vector-database-optimization-guide',
      readTime: '15 min read',
      gradient: 'from-purple-500 to-pink-600',
    },
    {
      type: 'Blog',
      title: 'Advanced LLM Prompt Engineering',
      description: 'Master advanced patterns like Chain-of-Thought, Tree-of-Thoughts, and ReAct for production LLM apps.',
      link: '/blog/ai-2025-oct-llm-prompt-engineering-advanced-patterns',
      readTime: '18 min read',
      gradient: 'from-blue-500 to-cyan-600',
    },
    {
      type: 'Blog',
      title: 'Production ML Monitoring & Observability',
      description: 'Build comprehensive monitoring systems to catch drift, track performance, and maintain model reliability.',
      link: '/blog/ai-2025-oct-production-ml-monitoring-observability',
      readTime: '20 min read',
      gradient: 'from-green-500 to-emerald-600',
    },
    {
      type: 'Service',
      title: 'Vector Database Optimization Services',
      description: 'Expert consulting to optimize your vector database infrastructure for performance, scale, and cost.',
      link: '/services/vector-database-optimization-services',
      readTime: 'Service Offering',
      gradient: 'from-orange-500 to-red-600',
    },
    {
      type: 'Service',
      title: 'LLM Integration & Prompt Engineering',
      description: 'End-to-end consulting for building production-grade LLM applications with advanced prompt engineering.',
      link: '/services/llm-integration-consulting-services',
      readTime: 'Service Offering',
      gradient: 'from-indigo-500 to-purple-600',
    },
  ];

  return (
    <div className="py-12 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full mb-4">
            <Sparkles className="w-5 h-5" />
            <span className="font-semibold">Fresh Content - October 2025</span>
          </div>
          
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Latest Resources & Services
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Practical, production-focused content to help you build better AI systems
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newContent.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 hover:border-gray-300 flex flex-col"
            >
              <div className={`h-2 bg-gradient-to-r ${item.gradient}`} />
              
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs font-bold uppercase tracking-wide bg-gradient-to-r ${item.gradient} text-transparent bg-clip-text`}>
                    {item.type}
                  </span>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="w-4 h-4 mr-1" />
                    {item.readTime}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 mb-4 flex-grow">
                  {item.description}
                </p>
                
                <div className="flex items-center text-blue-600 font-semibold group-hover:gap-3 gap-2 transition-all">
                  <span>{item.type === 'Blog' ? 'Read Article' : 'Learn More'}</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Looking for more AI/ML content?
          </p>
          <Link to="/content-hub"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            View All Resources
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewContentShowcaseOct2025;
