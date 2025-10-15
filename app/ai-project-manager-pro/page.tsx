import React from 'react';
import SEOHead from '../components/SEOHead';

const AIProjectManagerProPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="AI Project Manager Pro - Zion Tech Group"
        description="Intelligent project management platform with AI-powered resource allocation, risk prediction, and automated scheduling. Streamline your projects with AI."
        keywords="AI project management, project automation, resource allocation, risk prediction, project scheduling, team collaboration, AI-powered project tools"
        canonicalUrl="https://ziontechgroup.com/ai-project-manager-pro"
      />
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-cyan-600 to-blue-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">AI Project Manager Pro</h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                Intelligent project management with AI-powered resource allocation, risk prediction, and automated scheduling
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="#features" 
                  className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Explore Features
                </a>
                <a 
                  href="/contact" 
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-colors"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div id="features" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Powerful AI Features</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Harness the power of artificial intelligence to optimize your project management processes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">AI Resource Allocation</h3>
              <p className="text-gray-600 mb-4">
                Automatically assign team members to tasks based on their skills, availability, and workload using AI algorithms.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Skill-based matching</li>
                <li>• Workload balancing</li>
                <li>• Availability optimization</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="text-4xl mb-4">⚠️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Risk Prediction Models</h3>
              <p className="text-gray-600 mb-4">
                Identify potential project risks before they become problems using machine learning and historical data analysis.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Early risk detection</li>
                <li>• Mitigation suggestions</li>
                <li>• Historical pattern analysis</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="text-4xl mb-4">📅</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Automated Scheduling</h3>
              <p className="text-gray-600 mb-4">
                Create optimal project timelines automatically considering dependencies, resources, and constraints.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Dependency management</li>
                <li>• Constraint optimization</li>
                <li>• Timeline adjustment</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="bg-gray-100 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
              <p className="text-lg text-gray-600">
                Choose the plan that fits your team size and project needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Basic</h3>
                <div className="text-3xl font-bold text-cyan-600 mb-4">$49<span className="text-lg text-gray-500">/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Up to 5 projects
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    AI resource allocation
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Basic risk prediction
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Team collaboration
                  </li>
                </ul>
                <a href="/contact" className="block w-full bg-cyan-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-cyan-700 transition-colors">
                  Get Started
                </a>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-cyan-500 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Pro</h3>
                <div className="text-3xl font-bold text-cyan-600 mb-4">$129<span className="text-lg text-gray-500">/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Up to 25 projects
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Advanced AI features
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Advanced risk prediction
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Custom workflows
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Priority support
                  </li>
                </ul>
                <a href="/contact" className="block w-full bg-cyan-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-cyan-700 transition-colors">
                  Get Started
                </a>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Enterprise</h3>
                <div className="text-3xl font-bold text-cyan-600 mb-4">$399<span className="text-lg text-gray-500">/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Unlimited projects
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    All AI features
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Custom AI models
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    White-label solution
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    24/7 dedicated support
                  </li>
                </ul>
                <a href="/contact" className="block w-full bg-cyan-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-cyan-700 transition-colors">
                  Contact Sales
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-cyan-600 to-blue-700 text-white py-16">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Project Management?</h2>
            <p className="text-xl mb-8">
              Start using AI-powered project management today and see the difference it makes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Start Free Trial
              </a>
              <a 
                href="tel:+13024640950" 
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-colors"
              >
                Call +1 302 464 0950
              </a>
            </div>
            <div className="mt-8 text-sm">
              <p>Email: kleber@ziontechgroup.com</p>
              <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIProjectManagerProPage;