import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const DeveloperToolsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        <section className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Developer-tools</h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            This page is under construction. Please check back soon for updates.
          </p>
          <a
            href="/contact"
            className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all"
          >
            Contact Us
          </a>
        </section>
      </main>
      
      <Footer />
import { ArrowRight, Star, CheckCircle, Code, Zap, Shield, Clock, Users } from 'lucide-react';

const DeveloperToolsPage: React.FC = () => {
  const tools = [
    {
      title: 'AI Code Assistant Pro',
      description: 'Advanced AI-powered coding assistant with real-time suggestions, bug detection, and automated refactoring.',
      icon: '🤖',
      price: '$29/month',
      features: [
        'Real-time code suggestions',
        'Automated bug detection',
        'Code refactoring assistance',
        'Multi-language support (Python, JavaScript, Java, C++, Go, Rust)',
        'Git integration and version control',
        'Performance optimization tips',
        'Code documentation generation',
        'Security vulnerability scanning'
      ],
      benefits: 'Save 40% development time',
      popular: true,
      rating: 4.9,
      users: '10,000+'
    },
    {
      title: 'API Testing Suite',
      description: 'Comprehensive API testing and monitoring platform with automated test generation.',
      icon: '🔧',
      price: '$19/month',
      features: [
        'Automated API test generation',
        'Performance monitoring',
        'Load testing capabilities',
        'API documentation generation',
        'Mock server creation',
        'Integration with CI/CD pipelines',
        'Real-time monitoring dashboard',
        'Alert system for failures'
      ],
      benefits: 'Reduce API bugs by 60%',
      popular: true,
      rating: 4.8,
      users: '5,000+'
    },
    {
      title: 'Database Management Pro',
      description: 'AI-powered database management with query optimization and performance monitoring.',
      icon: '🗄️',
      price: '$39/month',
      features: [
        'Query optimization suggestions',
        'Database performance monitoring',
        'Automated backup scheduling',
        'Schema migration tools',
        'Data visualization',
        'Multi-database support',
        'Security auditing',
        'Capacity planning'
      ],
      benefits: 'Optimize database performance by 50%',
      rating: 4.7,
      users: '3,500+'
    },
    {
      title: 'Code Review Assistant',
      description: 'Automated code review with AI-powered suggestions and best practices enforcement.',
      icon: '👁️',
      price: '$25/month',
      features: [
        'Automated code review',
        'Best practices enforcement',
        'Security vulnerability detection',
        'Code quality metrics',
        'Team collaboration tools',
        'Integration with GitHub/GitLab',
        'Custom rule configuration',
        'Performance impact analysis'
      ],
      benefits: 'Improve code quality by 45%',
      rating: 4.6,
      users: '7,200+'
    },
    {
      title: 'DevOps Automation',
      description: 'Complete DevOps automation platform with CI/CD, monitoring, and deployment tools.',
      icon: '🚀',
      price: '$49/month',
      features: [
        'Automated CI/CD pipelines',
        'Container orchestration',
        'Infrastructure as Code',
        'Monitoring and alerting',
        'Auto-scaling capabilities',
        'Multi-cloud deployment',
        'Security scanning',
        'Cost optimization'
      ],
      benefits: 'Deploy 5x faster with 99.9% uptime',
      rating: 4.9,
      users: '8,500+'
    },
    {
      title: 'Security Scanner Pro',
      description: 'Comprehensive security scanning for applications, dependencies, and infrastructure.',
      icon: '🔒',
      price: '$35/month',
      features: [
        'Vulnerability scanning',
        'Dependency security checks',
        'Infrastructure security audit',
        'Compliance reporting',
        'Penetration testing tools',
        'Real-time threat monitoring',
        'Security policy enforcement',
        'Incident response automation'
      ],
      benefits: 'Reduce security risks by 70%',
      rating: 4.8,
      users: '6,800+'
    }
  ];

  const categories = [
    { name: 'Code Editors', count: 8, icon: Code },
    { name: 'Testing Tools', count: 12, icon: CheckCircle },
    { name: 'Database Tools', count: 6, icon: Users },
    { name: 'DevOps Tools', count: 10, icon: Zap },
    { name: 'Security Tools', count: 7, icon: Shield },
    { name: 'Monitoring Tools', count: 9, icon: Clock }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Developer Tools
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Powerful AI-driven development tools that accelerate your coding workflow 
              and improve code quality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Start Free Trial
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                View Documentation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tool Categories
            </h2>
            <p className="text-xl text-gray-600">
              Browse our comprehensive collection of developer tools
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                <category.icon className="w-8 h-8 mx-auto mb-3 text-blue-600" />
                <h3 className="font-semibold text-gray-900 mb-1">{category.name}</h3>
                <p className="text-sm text-gray-600">{category.count} tools</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Tools */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Developer Tools
            </h2>
            <p className="text-xl text-gray-600">
              Hand-picked tools that boost developer productivity
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tools.map((tool, index) => (
              <div key={index} className={`bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow relative ${tool.popular ? 'ring-2 ring-blue-500' : ''}`}>
                {tool.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl">{tool.icon}</div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-blue-600">{tool.price}</div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Star className="w-4 h-4 text-yellow-400 mr-1" />
                      {tool.rating} ({tool.users} users)
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{tool.title}</h3>
                <p className="text-gray-600 mb-4">{tool.description}</p>
                <div className="mb-4">
                  <div className="text-sm font-medium text-green-600 mb-2">{tool.benefits}</div>
                  <ul className="space-y-1">
                    {tool.features.slice(0, 4).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center justify-center">
                  Try Free
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trusted by Developers Worldwide
            </h2>
            <p className="text-xl text-gray-600">
              Join thousands of developers who have improved their productivity
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">50,000+</div>
              <div className="text-gray-600">Active Developers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">1M+</div>
              <div className="text-gray-600">Lines of Code Analyzed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">99.9%</div>
              <div className="text-gray-600">Uptime Guarantee</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Boost Your Development?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Start your free trial today and experience the power of AI-driven development tools
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+13024640950"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center"
            >
              📞 +1 302 464 0950
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              ✉️ kleber@ziontechgroup.com
            </a>
          </div>
          <div className="mt-8 text-sm text-blue-200">
            <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Developer-toolsPage;
export default DeveloperToolsPage;
