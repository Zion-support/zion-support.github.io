import React from 'react';

export const metadata = {
  title: 'AI Social Media Scheduler | Zion Tech Group',
  description: 'Professional AI-powered social media scheduling services to optimize your content strategy.',
};

export default function ServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI Social Media Scheduler
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Optimize your social media presence with AI-powered scheduling that 
            maximizes engagement and reaches your audience at the perfect times.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">
              Intelligent Content Scheduling
            </h2>
            <p className="text-gray-300 mb-6">
              Our AI analyzes your audience behavior, content performance, and optimal 
              posting times to automatically schedule your social media content for 
              maximum engagement and reach.
            </p>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center">
                <span className="text-green-400 mr-3">✓</span>
                AI-powered optimal timing analysis
              </li>
              <li className="flex items-center">
                <span className="text-green-400 mr-3">✓</span>
                Multi-platform content scheduling
              </li>
              <li className="flex items-center">
                <span className="text-green-400 mr-3">✓</span>
                Content performance prediction
              </li>
              <li className="flex items-center">
                <span className="text-green-400 mr-3">✓</span>
                Automated hashtag optimization
              </li>
            </ul>
          </div>
          <div className="bg-gray-800 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-white mb-4">Scheduling Features</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="text-lg font-semibold text-white">Smart Timing</h4>
                <p className="text-gray-300">AI determines the best times to post for each platform</p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="text-lg font-semibold text-white">Content Optimization</h4>
                <p className="text-gray-300">Optimize content for each platform's algorithm</p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="text-lg font-semibold text-white">Analytics Integration</h4>
                <p className="text-gray-300">Track performance and adjust strategy automatically</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
            Get Started Today
          </button>
        </div>
      </div>
    </div>
  );
}