import React from 'react';
import Link from 'next/link';

export default function GuidesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-teal-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Implementation Guides
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Comprehensive guides and resources to help you implement AI, micro SaaS, and IT solutions successfully. 
              Learn from our experts and accelerate your digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Expert Help
              </Link>
              <Link 
                href="/case-studies" 
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Guides */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Implementation Guides
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Step-by-step guides to help you implement cutting-edge technologies
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/guides/ai-2026-implementation-roadmap" className="group">
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">🤖</div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-green-600">AI 2026 Implementation Roadmap</h3>
                <p className="text-gray-600 mb-4">
                  Complete roadmap for implementing AI solutions in your organization, from planning to deployment.
                </p>
                <div className="text-sm text-gray-500 mb-2">📅 Updated: October 2025</div>
                <div className="text-sm text-gray-500 mb-4">⏱️ Read time: 15 min</div>
                <span className="text-green-600 font-medium group-hover:text-green-800">Read Guide →</span>
              </div>
            </Link>
            
            <Link href="/guides/ai-2027-implementation-roadmap" className="group">
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-green-600">AI 2027 Implementation Roadmap</h3>
                <p className="text-gray-600 mb-4">
                  Advanced AI implementation strategies for next-generation autonomous systems and quantum computing.
                </p>
                <div className="text-sm text-gray-500 mb-2">📅 Updated: October 2025</div>
                <div className="text-sm text-gray-500 mb-4">⏱️ Read time: 20 min</div>
                <span className="text-green-600 font-medium group-hover:text-green-800">Read Guide →</span>
              </div>
            </Link>
            
            <Link href="/guides/autonomous-business-processes-implementation-guide-2026" className="group">
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-green-600">Autonomous Business Processes</h3>
                <p className="text-gray-600 mb-4">
                  Guide to implementing autonomous business processes that adapt and optimize in real-time.
                </p>
                <div className="text-sm text-gray-500 mb-2">📅 Updated: October 2025</div>
                <div className="text-sm text-gray-500 mb-4">⏱️ Read time: 18 min</div>
                <span className="text-green-600 font-medium group-hover:text-green-800">Read Guide →</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Guide Categories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Guide Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore guides organized by technology and implementation focus
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-semibold mb-3">AI & Machine Learning</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive guides for implementing AI solutions, from basic concepts to advanced applications.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• AI Strategy Development</li>
                <li>• Machine Learning Model Deployment</li>
                <li>• Natural Language Processing</li>
                <li>• Computer Vision Implementation</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-3">Micro SaaS Development</h3>
              <p className="text-gray-600 mb-4">
                Step-by-step guides for building scalable SaaS applications and microservices architecture.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• SaaS Architecture Design</li>
                <li>• API Development Best Practices</li>
                <li>• Cloud Deployment Strategies</li>
                <li>• Scaling and Performance Optimization</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-4xl mb-4">☁️</div>
              <h3 className="text-xl font-semibold mb-3">IT Infrastructure</h3>
              <p className="text-gray-600 mb-4">
                Infrastructure guides covering cloud migration, DevOps, and enterprise IT solutions.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Cloud Migration Planning</li>
                <li>• DevOps Implementation</li>
                <li>• Security Best Practices</li>
                <li>• Monitoring and Observability</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold mb-3">Security & Compliance</h3>
              <p className="text-gray-600 mb-4">
                Security implementation guides for protecting your applications and data.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Security Architecture Design</li>
                <li>• Compliance Implementation</li>
                <li>• Threat Detection Setup</li>
                <li>• Incident Response Planning</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold mb-3">Data & Analytics</h3>
              <p className="text-gray-600 mb-4">
                Data management and analytics implementation guides for business intelligence.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Data Pipeline Architecture</li>
                <li>• Analytics Platform Setup</li>
                <li>• Real-time Data Processing</li>
                <li>• Business Intelligence Implementation</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold mb-3">Emerging Technologies</h3>
              <p className="text-gray-600 mb-4">
                Guides for implementing cutting-edge technologies like quantum computing and edge AI.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Quantum Computing Basics</li>
                <li>• Edge AI Implementation</li>
                <li>• Blockchain Integration</li>
                <li>• IoT Solution Development</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Implementation Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A proven methodology for successful technology implementation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Assessment</h3>
              <p className="text-gray-600 text-sm">
                Evaluate current systems and identify opportunities for improvement
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Planning</h3>
              <p className="text-gray-600 text-sm">
                Develop comprehensive implementation strategy and roadmap
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Implementation</h3>
              <p className="text-gray-600 text-sm">
                Execute implementation with continuous monitoring and optimization
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">4</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Optimization</h3>
              <p className="text-gray-600 text-sm">
                Monitor performance and continuously optimize for better results
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Need Help with Implementation?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Our experts are ready to help you implement these technologies successfully. 
            Get personalized guidance and support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Expert Consultation
            </Link>
            <Link 
              href="/case-studies" 
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              View Success Stories
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}