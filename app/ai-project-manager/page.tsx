'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const AIProjectManagerPage: React.FC = () => {
  return (
    <>
      <SEOOptimizer
        title="AI Project Manager - Zion Tech Group"
        description="Intelligent project management with AI-powered task optimization, resource allocation, and risk prediction. Starting at $199/month."
        keywords={['AI project management', 'project optimization', 'task automation', 'resource allocation', 'risk prediction', 'team collaboration']}
        canonicalUrl="https://ziontechgroup.com/ai-project-manager"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 holographic-text cyber-text glitch">
              AI Project Manager
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium cyber-glow neon-text">
              Intelligent Project Management
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
              Revolutionize your project management with AI that learns from your team's patterns, 
              optimizes resource allocation, and predicts potential roadblocks before they happen.
            </p>
          </section>

          {/* Features Grid */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
              Smart Project Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="cyber-card p-6 energy-pulse">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-bold text-white mb-4">AI Task Optimization</h3>
                <p className="text-gray-300 mb-4">
                  Automatically prioritize and schedule tasks based on team capacity, deadlines, and dependencies.
                </p>
                <ul className="text-sm text-gray-400 space-y-2">
                  <li>• Smart task prioritization</li>
                  <li>• Automatic scheduling</li>
                  <li>• Dependency management</li>
                  <li>• Resource balancing</li>
                </ul>
              </div>

              <div className="cyber-card p-6 energy-pulse">
                <div className="text-4xl mb-4">👥</div>
                <h3 className="text-xl font-bold text-white mb-4">Team Collaboration</h3>
                <p className="text-gray-300 mb-4">
                  Enhanced team communication with AI-powered insights and automated status updates.
                </p>
                <ul className="text-sm text-gray-400 space-y-2">
                  <li>• Real-time collaboration</li>
                  <li>• Automated standups</li>
                  <li>• Progress tracking</li>
                  <li>• Team performance insights</li>
                </ul>
              </div>

              <div className="cyber-card p-6 energy-pulse">
                <div className="text-4xl mb-4">⚠️</div>
                <h3 className="text-xl font-bold text-white mb-4">Risk Prediction</h3>
                <p className="text-gray-300 mb-4">
                  AI algorithms analyze project data to identify potential risks and suggest mitigation strategies.
                </p>
                <ul className="text-sm text-gray-400 space-y-2">
                  <li>• Early risk detection</li>
                  <li>• Mitigation suggestions</li>
                  <li>• Timeline adjustments</li>
                  <li>• Resource reallocation</li>
                </ul>
              </div>

              <div className="cyber-card p-6 energy-pulse">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-xl font-bold text-white mb-4">Advanced Analytics</h3>
                <p className="text-gray-300 mb-4">
                  Comprehensive project insights with predictive analytics and performance metrics.
                </p>
                <ul className="text-sm text-gray-400 space-y-2">
                  <li>• Project health scoring</li>
                  <li>• Velocity tracking</li>
                  <li>• Budget monitoring</li>
                  <li>• Quality metrics</li>
                </ul>
              </div>

              <div className="cyber-card p-6 energy-pulse">
                <div className="text-4xl mb-4">🔄</div>
                <h3 className="text-xl font-bold text-white mb-4">Workflow Automation</h3>
                <p className="text-gray-300 mb-4">
                  Automate repetitive tasks and streamline project workflows for maximum efficiency.
                </p>
                <ul className="text-sm text-gray-400 space-y-2">
                  <li>• Automated approvals</li>
                  <li>• Status updates</li>
                  <li>• Report generation</li>
                  <li>• Notification management</li>
                </ul>
              </div>

              <div className="cyber-card p-6 energy-pulse">
                <div className="text-4xl mb-4">📱</div>
                <h3 className="text-xl font-bold text-white mb-4">Mobile Access</h3>
                <p className="text-gray-300 mb-4">
                  Full project management capabilities on mobile devices with offline sync.
                </p>
                <ul className="text-sm text-gray-400 space-y-2">
                  <li>• Mobile app</li>
                  <li>• Offline access</li>
                  <li>• Push notifications</li>
                  <li>• Voice commands</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
              Pricing Plans
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="cyber-card p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Team</h3>
                <div className="text-4xl font-bold text-blue-400 mb-6">$199<span className="text-lg">/month</span></div>
                <ul className="text-gray-300 space-y-3 mb-8">
                  <li>• Up to 10 team members</li>
                  <li>• 5 active projects</li>
                  <li>• Basic AI features</li>
                  <li>• Standard support</li>
                  <li>• Mobile app</li>
                </ul>
                <a href="/contact" className="cyber-button w-full text-center">
                  Get Started
                </a>
              </div>

              <div className="cyber-card p-8 text-center border-2 border-blue-400">
                <div className="text-sm text-blue-400 mb-2 font-bold">MOST POPULAR</div>
                <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
                <div className="text-4xl font-bold text-blue-400 mb-6">$399<span className="text-lg">/month</span></div>
                <ul className="text-gray-300 space-y-3 mb-8">
                  <li>• Up to 50 team members</li>
                  <li>• 25 active projects</li>
                  <li>• Advanced AI features</li>
                  <li>• Priority support</li>
                  <li>• Custom integrations</li>
                  <li>• Advanced analytics</li>
                </ul>
                <a href="/contact" className="cyber-button w-full text-center">
                  Get Started
                </a>
              </div>

              <div className="cyber-card p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
                <div className="text-4xl font-bold text-blue-400 mb-6">$799<span className="text-lg">/month</span></div>
                <ul className="text-gray-300 space-y-3 mb-8">
                  <li>• Unlimited team members</li>
                  <li>• Unlimited projects</li>
                  <li>• Custom AI models</li>
                  <li>• 24/7 dedicated support</li>
                  <li>• White-label solution</li>
                  <li>• On-premise deployment</li>
                </ul>
                <a href="/contact" className="cyber-button w-full text-center">
                  Contact Sales
                </a>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Optimize Your Projects?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of teams already using our AI Project Manager to complete projects 30% faster with 40% fewer delays.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+13024640950" className="cyber-button">
                📞 Call: (302) 464-0950
              </a>
              <a href="/contact" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300">
                Start Free Trial
              </a>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default AIProjectManagerPage;