import React, { useState } from 'react';
import Head from 'next/head';

const EnhancedNavigation: React.FC = () => {
  const [activeSection, setActiveSection] = useState('overview');

  const features = [
    {
      icon: '🔍',
      title: 'Smart Search',
      description: 'Intelligent search with autocomplete and suggestions',
      benefits: ['Faster navigation', 'Better user experience', 'Reduced bounce rate']
    },
    {
      icon: '📱',
      title: 'Mobile-First Design',
      description: 'Responsive navigation optimized for all devices',
      benefits: ['Mobile optimization', 'Touch-friendly interface', 'Consistent experience']
    },
    {
      icon: '🎯',
      title: 'User-Centric',
      description: 'Navigation designed around user behavior and needs',
      benefits: ['Intuitive flow', 'Reduced cognitive load', 'Higher engagement']
    }
  ];

  const implementationSteps = [
    {
      step: 1,
      title: 'Analysis & Planning',
      description: 'Analyze current navigation and user behavior patterns',
      duration: '1-2 weeks'
    },
    {
      step: 2,
      title: 'Design & Prototyping',
      description: 'Create wireframes and interactive prototypes',
      duration: '2-3 weeks'
    },
    {
      step: 3,
      title: 'Development',
      description: 'Implement the new navigation system',
      duration: '3-4 weeks'
    },
    {
      step: 4,
      title: 'Testing & Optimization',
      description: 'User testing and performance optimization',
      duration: '1-2 weeks'
    },
    {
      step: 5,
      title: 'Launch & Monitor',
      description: 'Deploy and monitor user engagement metrics',
      duration: 'Ongoing'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Head>
        <title>Enhanced Navigation - Zion App</title>
        <meta name="description" content="Advanced navigation solutions to improve user experience and site usability" />
        <meta name="keywords" content="navigation, UX, user experience, web design, Zion App" />
      </Head>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Enhanced Navigation
            </h1>
            <p className="text-xl text-gray-600">
              Transform your website's navigation into an intuitive, user-friendly experience
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <div className="flex flex-wrap gap-2 mb-6">
              {['overview', 'features', 'implementation', 'code', 'benefits'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveSection(tab)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    activeSection === tab
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            {/* Overview Section */}
            {activeSection === 'overview' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Navigation Overview</h2>
                <p className="text-gray-600 mb-6">
                  Our enhanced navigation solutions are designed to improve user experience, 
                  increase engagement, and drive conversions. We focus on creating intuitive, 
                  accessible, and mobile-first navigation systems.
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center p-6 bg-blue-50 rounded-lg">
                    <div className="text-4xl mb-3">📈</div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Improved Metrics</h3>
                    <p className="text-gray-600 text-sm">Average 40% increase in user engagement</p>
                  </div>
                  <div className="text-center p-6 bg-green-50 rounded-lg">
                    <div className="text-4xl mb-3">⚡</div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Faster Navigation</h3>
                    <p className="text-gray-600 text-sm">50% reduction in time to find content</p>
                  </div>
                  <div className="text-center p-6 bg-purple-50 rounded-lg">
                    <div className="text-4xl mb-3">📱</div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Mobile Optimized</h3>
                    <p className="text-gray-600 text-sm">Perfect experience on all devices</p>
                  </div>
                </div>
              </div>
            )}

            {/* Features Section */}
            {activeSection === 'features' && (
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">Key Features</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {features.map((feature, index) => (
                    <div key={index} className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                      <div className="text-4xl mb-3">{feature.icon}</div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">{feature.title}</h3>
                      <p className="text-gray-600 mb-4">{feature.description}</p>
                      <ul className="space-y-1">
                        {feature.benefits.map((benefit, idx) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-center">
                            <span className="text-green-500 mr-2">✓</span>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Implementation Section */}
            {activeSection === 'implementation' && (
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">Implementation Process</h2>
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Step-by-Step Process</h3>
                    <div className="space-y-4">
                      {implementationSteps.map((step) => (
                        <div key={step.step} className="flex items-start gap-4">
                          <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">
                            {step.step}
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-800">{step.title}</h4>
                            <p className="text-gray-600 text-sm">{step.description}</p>
                            <span className="text-blue-600 text-xs font-medium">{step.duration}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-yellow-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-yellow-800 mb-3">Best Practices</h3>
                    <ul className="space-y-2 text-yellow-700 text-sm">
                      <li>• Keep navigation consistent across all pages</li>
                      <li>• Use clear, descriptive labels</li>
                      <li>• Implement progressive disclosure</li>
                      <li>• Test with real users</li>
                      <li>• Monitor analytics and iterate</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* Code Section */}
            {activeSection === 'code' && (
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">Code Examples</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Search Component</h3>
                    <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-xs">
{`// Search component with autocomplete
const SearchComponent = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async (searchTerm) => {
    // Search logic here
  };

  return (
    <div className="search-container">
      <input
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
        className="search-input"
      />
      {results.length > 0 && (
        <div className="search-results">
          {results.map((result) => (
            <SearchResult key={result.id} result={result} />
          ))}
        </div>
      )}
    </div>
  );
};`}
                    </pre>
                  </div>
                </div>
              </div>
            )}

            {/* Benefits Section */}
            {activeSection === 'benefits' && (
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">Benefits</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-800">User Experience</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Improved site usability</li>
                      <li>• Reduced bounce rate</li>
                      <li>• Increased time on site</li>
                      <li>• Better conversion rates</li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-800">Business Impact</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Higher user engagement</li>
                      <li>• Improved SEO performance</li>
                      <li>• Better mobile experience</li>
                      <li>• Competitive advantage</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedNavigation;