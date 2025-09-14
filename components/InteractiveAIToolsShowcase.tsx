import React, { useState } from 'react';
import Link from 'next/link';

const InteractiveAIToolsShowcase = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Tools', icon: '🛠️' },
    { id: 'automation', name: 'Automation', icon: '🤖' },
    { id: 'analytics', name: 'Analytics', icon: '📊' },
    { id: 'content', name: 'Content', icon: '📝' },
    { id: 'security', name: 'Security', icon: '🔒' },
    { id: 'productivity', name: 'Productivity', icon: '⚡' },
    { id: 'integration', name: 'Integration', icon: '🔗' }
  ];

  const aiTools = [
    {
      id: 1,
      name: 'AI Content Generator Pro',
      description: 'Revolutionary AI-powered content creation tool that generates high-quality, SEO-optimized content at scale.',
      category: 'content',
      icon: '📝',
      features: ['SEO Optimization', 'Multi-language Support', 'Brand Voice Matching', 'Plagiarism Detection'],
      pricing: 'Starting at $99/month',
      rating: 4.9,
      users: '10,000+',
      featured: true,
      url: '/tools/ai-content-generator-pro',
      demoUrl: '/demo/ai-content-generator'
    },
    {
      id: 2,
      name: 'Intelligent Process Automation',
      description: 'Advanced automation platform that streamlines complex business processes with AI-powered decision making.',
      category: 'automation',
      icon: '🤖',
      features: ['Workflow Automation', 'Decision Intelligence', 'Process Optimization', 'Real-time Monitoring'],
      pricing: 'Starting at $299/month',
      rating: 4.8,
      users: '5,000+',
      featured: true,
      url: '/tools/intelligent-process-automation',
      demoUrl: '/demo/process-automation'
    },
    {
      id: 3,
      name: 'Predictive Analytics Engine',
      description: 'Powerful analytics platform that predicts future trends and behaviors using advanced machine learning.',
      category: 'analytics',
      icon: '📊',
      features: ['Predictive Modeling', 'Real-time Insights', 'Custom Dashboards', 'API Integration'],
      pricing: 'Starting at $199/month',
      rating: 4.7,
      users: '8,000+',
      featured: true,
      url: '/tools/predictive-analytics-engine',
      demoUrl: '/demo/predictive-analytics'
    },
    {
      id: 4,
      name: 'AI Security Monitor',
      description: 'Comprehensive security solution that uses AI to detect and prevent cyber threats in real-time.',
      category: 'security',
      icon: '🔒',
      features: ['Threat Detection', 'Automated Response', 'Compliance Monitoring', 'Risk Assessment'],
      pricing: 'Starting at $399/month',
      rating: 4.9,
      users: '3,000+',
      featured: false,
      url: '/tools/ai-security-monitor',
      demoUrl: '/demo/security-monitor'
    },
    {
      id: 5,
      name: 'Smart Productivity Suite',
      description: 'AI-powered productivity tools that optimize workflows and enhance team collaboration.',
      category: 'productivity',
      icon: '⚡',
      features: ['Task Automation', 'Smart Scheduling', 'Team Collaboration', 'Performance Analytics'],
      pricing: 'Starting at $149/month',
      rating: 4.6,
      users: '12,000+',
      featured: false,
      url: '/tools/smart-productivity-suite',
      demoUrl: '/demo/productivity-suite'
    },
    {
      id: 6,
      name: 'Universal Integration Hub',
      description: 'Seamlessly connect and integrate all your business applications with AI-powered data synchronization.',
      category: 'integration',
      icon: '🔗',
      features: ['API Management', 'Data Synchronization', 'Custom Connectors', 'Real-time Sync'],
      pricing: 'Starting at $179/month',
      rating: 4.8,
      users: '6,000+',
      featured: false,
      url: '/tools/universal-integration-hub',
      demoUrl: '/demo/integration-hub'
    },
    {
      id: 7,
      name: 'AI Customer Service Bot',
      description: 'Intelligent customer service solution that provides 24/7 support with human-like interactions.',
      category: 'automation',
      icon: '💬',
      features: ['Natural Language Processing', 'Multi-channel Support', 'Sentiment Analysis', 'Escalation Management'],
      pricing: 'Starting at $249/month',
      rating: 4.7,
      users: '7,000+',
      featured: false,
      url: '/tools/ai-customer-service-bot',
      demoUrl: '/demo/customer-service-bot'
    },
    {
      id: 8,
      name: 'Intelligent Data Processor',
      description: 'Advanced data processing tool that cleans, transforms, and analyzes data using AI algorithms.',
      category: 'analytics',
      icon: '🔄',
      features: ['Data Cleaning', 'ETL Processing', 'Pattern Recognition', 'Automated Insights'],
      pricing: 'Starting at $129/month',
      rating: 4.5,
      users: '4,000+',
      featured: false,
      url: '/tools/intelligent-data-processor',
      demoUrl: '/demo/data-processor'
    }
  ];

  const filteredTools = aiTools.filter(tool => {
    const categoryMatch = selectedCategory === 'all' || tool.category === selectedCategory;
    const searchMatch = tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       tool.description.toLowerCase().includes(searchTerm.toLowerCase());
    return categoryMatch && searchMatch;
  });

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full px-6 py-2 mb-6 font-bold text-sm">
            🛠️ INTERACTIVE AI TOOLS SHOWCASE
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Revolutionary AI Tools
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover our comprehensive suite of AI-powered tools designed to transform 
            your business operations. From automation to analytics, find the perfect 
            solution for your needs.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-12">
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for AI tools, features, or capabilities..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 pr-12 rounded-lg border-2 border-gray-300 focus:border-purple-500 focus:outline-none text-lg"
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                🔍
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg transform scale-105'
                    : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-purple-500 hover:text-purple-600'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredTools.map((tool) => (
            <div
              key={tool.id}
              className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 ${
                tool.featured ? 'ring-2 ring-purple-500' : ''
              }`}
            >
              {tool.featured && (
                <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-4 py-2 rounded-t-2xl text-center">
                  ⭐ FEATURED TOOL
                </div>
              )}
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <div className="text-3xl mr-3">{tool.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">
                        {tool.name}
                      </h3>
                      <div className="flex items-center space-x-2">
                        <div className="flex items-center">
                          <span className="text-yellow-400 mr-1">★</span>
                          <span className="text-sm font-semibold">{tool.rating}</span>
                        </div>
                        <span className="text-gray-400">•</span>
                        <span className="text-sm text-gray-600">{tool.users} users</span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {tool.description}
                </p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Features:</h4>
                  <div className="flex flex-wrap gap-1">
                    {tool.features.slice(0, 3).map((feature, index) => (
                      <span
                        key={index}
                        className="bg-purple-100 text-purple-700 text-xs px-2 py-1 rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                    {tool.features.length > 3 && (
                      <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                        +{tool.features.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                <div className="mb-6">
                  <div className="text-lg font-bold text-green-600 mb-1">
                    {tool.pricing}
                  </div>
                  <div className="text-sm text-gray-500">per month</div>
                </div>

                <div className="flex flex-col sm:flex-row gap-2">
                  <Link
                    href={tool.url}
                    className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg font-semibold text-center hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
                  >
                    Learn More →
                  </Link>
                  <Link
                    href={tool.demoUrl}
                    className="flex-1 border-2 border-purple-600 text-purple-600 px-4 py-2 rounded-lg font-semibold text-center hover:bg-purple-600 hover:text-white transition-all duration-300"
                  >
                    Try Demo
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredTools.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">No tools found</h3>
            <p className="text-gray-600 mb-6">Try adjusting your search terms or category filters.</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Statistics Section */}
        <div className="bg-gradient-to-r from-purple-900 to-blue-900 rounded-2xl p-8 text-white mb-12">
          <h3 className="text-3xl font-bold text-center mb-8">Tools Impact Statistics</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">50+</div>
              <div className="text-gray-300">AI Tools Available</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">100K+</div>
              <div className="text-gray-300">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">99.9%</div>
              <div className="text-gray-300">Uptime Guarantee</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">24/7</div>
              <div className="text-gray-300">Expert Support</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Business?
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Start your AI transformation journey today with our comprehensive suite of tools. 
            Get personalized recommendations and expert guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/tools"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Explore All Tools →
            </Link>
            <Link
              href="/contact"
              className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-purple-600 hover:text-white transition-all duration-300"
            >
              Get Custom Solution
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveAIToolsShowcase;