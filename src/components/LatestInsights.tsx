import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { latestInsights } from '../content/insights';

const LatestInsights: React.FC = () => {
  const featured = latestInsights.filter(i => i.featured).slice(0, 3);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Latest Insights</h2>
            <p className="text-gray-600">Expert perspectives on AI, technology, and innovation</p>
          </div>
          <Link to="/blog" className="text-indigo-600 font-semibold hover:text-indigo-800 flex items-center gap-2">
            View All
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {featured.map((insight) => (
            <article key={insight.id} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all p-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold text-indigo-600 uppercase tracking-wide">
                  {insight.category}
                </span>
                {insight.featured && (
                  <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full font-medium">
                    Featured
                  </span>
                )}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {insight.title}
              </h3>
              
              <p className="text-gray-600 text-sm mb-4">
                {insight.summary}
              </p>
              
              <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {new Date(insight.date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {insight.readMinutes} min
                  </div>
                </div>
              </div>
              
              {insight.author && (
                <div className="mt-3 text-sm text-gray-600">
                  By {insight.author}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestInsights;