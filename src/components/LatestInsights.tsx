import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User } from 'lucide-react';

const LatestInsights: React.FC = () => {
  const insights = [
    {
      id: 1,
      title: "AI Platform Architecture 2025",
      excerpt: "Building scalable AI platforms for enterprise success",
      author: "Zion Tech Team",
      date: "2025-09-29",
      category: "AI Architecture",
      readTime: "8 min read"
    },
    {
      id: 2,
      title: "Quantum Computing in Business",
      excerpt: "How quantum computing is revolutionizing enterprise solutions",
      author: "Dr. Sarah Chen",
      date: "2025-09-28",
      category: "Quantum Tech",
      readTime: "12 min read"
    },
    {
      id: 3,
      title: "Edge AI Implementation Guide",
      excerpt: "Complete guide to deploying AI at the edge",
      author: "Mike Johnson",
      date: "2025-09-27",
      category: "Edge Computing",
      readTime: "15 min read"
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest Insights</h2>
          <p className="text-xl text-gray-600">Stay ahead with our expert analysis and industry insights</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {insights.map((insight) => (
            <article key={insight.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                    {insight.category}
                  </span>
                  <span className="text-gray-500 text-sm">{insight.readTime}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                  <Link to={`/insights/${insight.id}`}>{insight.title}</Link>
                </h3>
                
                <p className="text-gray-600 mb-4">{insight.excerpt}</p>
                
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span>{insight.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{insight.date}</span>
                    </div>
                  </div>
                  <Link 
                    to={`/insights/${insight.id}`}
                    className="flex items-center gap-1 text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    Read more
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            to="/insights"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            View All Insights
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LatestInsights;