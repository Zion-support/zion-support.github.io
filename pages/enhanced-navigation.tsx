import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

const EnhancedNavigation: React.FC = () => {
  const [activeSection, setActiveSection] = useState('overview');

  const features = [
    {
      icon: '🔍',
      title: 'Smart Search',
      description: 'Intelligent search with autocomplete and suggestions',
      benefits: ['Real-time results', 'Fuzzy matching', 'Search analytics']
    },
    {
      icon: '🍞',
      title: 'Breadcrumb Navigation',
      description: 'Clear path indication for better user orientation',
      benefits: ['Improved UX', 'SEO benefits', 'Easy navigation']
    },
    {
      icon: '📱',
      title: 'Mobile-First Design',
      description: 'Responsive navigation optimized for all devices',
      benefits: ['Touch-friendly', 'Fast loading', 'Consistent experience']
    },
    {
      icon: '🎯',
      title: 'Mega Menu',
      description: 'Organized content display with multiple columns',
      benefits: ['Better organization', 'Visual hierarchy', 'Quick access']
    }
  ];

  const implementationSteps = [
    {
      step: 1,
      title: 'Analysis & Planning',
      description: 'Analyze current navigation and plan improvements',
      duration: '1-2 days'
    },
    {
      step: 2,
      title: 'Design & Prototyping',
      description: 'Create wireframes and interactive prototypes',
      duration: '3-5 days'
    },
    {
      step: 3,
      title: 'Development',
      description: 'Implement navigation components and functionality',
      duration: '5-7 days'
    },
    {
      step: 4,
      title: 'Testing & Optimization',
      description: 'Test across devices and optimize performance',
      duration: '2-3 days'
    },
    {
      step: 5,
      title: 'Launch & Monitor',
      description: 'Deploy and monitor user engagement metrics',
      duration: 'Ongoing'
    }
  ];

  const codeExamples = {
    search: `// Smart search component
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
};`,

    breadcrumbs: `// Breadcrumb navigation
const Breadcrumbs = ({ path }) => {
  const breadcrumbItems = path.split('/').filter(Boolean);
  
  return (
    <nav className="breadcrumbs">
      <ol className="flex items-center space-x-2">
        {breadcrumbItems.map((item, index) => (
          <li key={index}>
            {index === breadcrumbItems.length - 1 ? (
              <span className="current-page">{item}</span>
            ) : (
              <Link href={\`/\${breadcrumbItems.slice(0, index + 1).join('/')}\`}>
                {item}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};`,

    megaMenu: `// Mega menu component
const MegaMenu = ({ isOpen, onClose }) => {
  return (
    <div className={\`mega-menu \${isOpen ? 'open' : ''}\`}>
      <div className="mega-menu-content">
        <div className="menu-section">
          <h3>Products</h3>
          <ul>
            <li><Link href="/products/automation">Automation</Link></li>
            <li><Link href="/products/analytics">Analytics</Link></li>
            <li><Link href="/products/security">Security</Link></li>
          </ul>
        </div>
        <div className="menu-section">
          <h3>Resources</h3>
          <ul>
            <li><Link href="/documentation">Documentation</Link></li>
            <li><Link href="/tutorials">Tutorials</Link></li>
            <li><Link href="/support">Support</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
};`
  };

  const sections = ['overview', 'features', 'implementation', 'code', 'benefits'];

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

          {/* Navigation Tabs */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <div className="flex flex-wrap gap-2 mb-6">
              {sections.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveSection(tab)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    activeSection === tab
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            {/* Overview Section */}
            {activeSection === 'overview' && (
              <div className="space-y-6">
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Navigation Solutions</h2>
                  <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    Our enhanced navigation solutions are designed to improve user experience, 
                    increase engagement, and boost conversion rates through intuitive design patterns.
                  </p>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center p-6 bg-blue-50 rounded-lg">
                    <div className="text-4xl mb-3">📈</div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Better UX</h3>
                    <p className="text-gray-600">Improved user experience leads to higher engagement</p>
                  </div>
                  <div className="text-center p-6 bg-green-50 rounded-lg">
                    <div className="text-4xl mb-3">⚡</div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Fast Loading</h3>
                    <p className="text-gray-600">Optimized performance for better user satisfaction</p>
                  </div>
                  <div className="text-center p-6 bg-purple-50 rounded-lg">
                    <div className="text-4xl mb-3">🎯</div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Higher Conversions</h3>
                    <p className="text-gray-600">Intuitive navigation drives more conversions</p>
                  </div>
                </div>
              </div>
            )}

            {/* Features Section */}
            {activeSection === 'features' && (
              <div className="grid md:grid-cols-2 gap-6">
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
            )}

            {/* Implementation Section */}
            {activeSection === 'implementation' && (
              <div className="space-y-8">
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Implementation Process</h2>
                  <p className="text-lg text-gray-600">
                    Our proven 5-step process ensures successful navigation implementation
                  </p>
                </div>
                <div className="grid lg:grid-cols-2 gap-8">
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
              <div className="space-y-6">
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Code Examples</h2>
                  <p className="text-lg text-gray-600">
                    Ready-to-use code snippets for common navigation patterns
                  </p>
                </div>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Smart Search</h3>
                    <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-xs">
                      {codeExamples.search}
                    </pre>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Breadcrumbs</h3>
                    <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-xs">
                      {codeExamples.breadcrumbs}
                    </pre>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Mega Menu</h3>
                    <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-xs">
                      {codeExamples.megaMenu}
                    </pre>
                  </div>
                </div>
              </div>
            )}

            {/* Benefits Section */}
            {activeSection === 'benefits' && (
              <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Choose Our Navigation Solutions?</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="text-4xl mb-4">🚀</div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Performance Optimized</h3>
                    <p className="text-gray-600">Lightweight, fast-loading navigation components</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="text-4xl mb-4">📱</div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Mobile Responsive</h3>
                    <p className="text-gray-600">Perfect experience across all devices and screen sizes</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="text-4xl mb-4">♿</div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Accessible</h3>
                    <p className="text-gray-600">WCAG compliant navigation for all users</p>
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