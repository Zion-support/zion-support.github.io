import React from 'react';

const EnterpriseSolutionsShowcase2026: React.FC = () => {
  const enterpriseSolutions = [
    {
      id: 1,
      title: 'AI-Powered Enterprise Automation',
      slug: 'ai-enterprise-automation-2026',
      excerpt: 'Transform your enterprise with comprehensive AI automation, achieving 95% process efficiency. From workflow optimization to intelligent decision-making systems.',
      category: 'Enterprise Automation',
      industry: 'All Industries',
      roi: '300%',
      savings: '$2M+',
      icon: '🤖',
      gradient: 'from-blue-500 to-cyan-500',
      badge: 'BEST SELLER',
      features: [
        'Workflow Automation',
        'Intelligent Routing',
        'Process Optimization',
      ],
    },
    {
      id: 2,
      title: 'Quantum-Enhanced Analytics',
      slug: 'quantum-analytics-2026',
      excerpt: 'Leverage quantum computing for advanced analytics, delivering 1000x faster data processing and unprecedented insights for enterprise decision-making.',
      category: 'Advanced Analytics',
      industry: 'Financial Services',
      roi: '500%',
      savings: '$5M+',
      icon: '⚡',
      gradient: 'from-purple-500 to-pink-500',
      badge: 'NEW',
      features: [
        'Quantum Processing',
        'Real-time Analytics',
        'Predictive Modeling',
      ],
    },
    {
      id: 3,
      title: 'Autonomous Operations Suite',
      slug: 'autonomous-operations-2026',
      excerpt: 'Complete self-managing infrastructure with 99.99% uptime, self-healing systems, and autonomous optimization for maximum efficiency.',
      category: 'Infrastructure',
      industry: 'Technology',
      roi: '400%',
      savings: '$3M+',
      icon: '🔄',
      gradient: 'from-green-500 to-emerald-500',
      badge: 'TRENDING',
      features: [
        'Self-Healing Systems',
        'Autonomous Scaling',
        'Predictive Maintenance',
      ],
    }
  ];

  return (
    <div className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            Enterprise Solutions 2026
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Revolutionary AI-powered solutions designed to transform enterprise operations and drive unprecedented growth
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {enterpriseSolutions.map((solution) => (
            <div key={solution.id} className="bg-gray-800 rounded-2xl p-8 hover:bg-gray-700 transition-all duration-300 group">
              <div className="flex items-center justify-between mb-6">
                <div className={`w-16 h-16 bg-gradient-to-r ${solution.gradient} rounded-xl flex items-center justify-center text-2xl`}>
                  {solution.icon}
                </div>
                <span className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold">
                  {solution.badge}
                </span>
              </div>

              <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors">
                {solution.title}
              </h3>

              <p className="text-gray-300 mb-6 leading-relaxed">
                {solution.excerpt}
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">{solution.roi}</div>
                  <div className="text-sm text-gray-400">ROI</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">{solution.savings}</div>
                  <div className="text-sm text-gray-400">Annual Savings</div>
                </div>
              </div>

              <div className="mb-6">
                <div className="text-sm text-gray-400 mb-2">Key Features:</div>
                <div className="flex flex-wrap gap-2">
                  {solution.features.map((feature, index) => (
                    <span key={index} className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-400">
                  <div>Industry: {solution.industry}</div>
                  <div>Category: {solution.category}</div>
                </div>
                <a
                  href={`/solutions/${solution.slug}`}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href="/solutions"
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
          >
            Explore All Solutions
          </a>
        </div>
      </div>
    </div>
  );
};

export default EnterpriseSolutionsShowcase2026;