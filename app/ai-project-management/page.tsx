'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function AIProjectManagementPage() {
  return (
    <>
      <Helmet>
        <title>AI Project Management Solutions - Zion Tech Group</title>
        <meta name="description" content="Intelligent AI-powered project management with predictive analytics, resource optimization, and automated task allocation. Starting at $199/month." />
        <meta name="keywords" content="AI project management, project automation, resource optimization, predictive analytics, task management" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-project-management" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text cyber-text">
              AI Project Management
            </h1>
            <p className="text-xl text-cyan-400 mb-8 font-medium">
              Intelligent project management powered by AI
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
              Revolutionize your project management with AI-driven insights, predictive analytics, and automated resource optimization that delivers projects 40% faster and 30% under budget.
            </p>
          </section>

          {/* Features Grid */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">AI-Powered Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="cyber-card p-6 energy-pulse">
                <div className="text-4xl mb-4 text-center">🔮</div>
                <h3 className="text-xl font-bold text-white mb-4 text-center">Predictive Analytics</h3>
                <p className="text-gray-300 text-center">
                  AI predicts project risks, delays, and resource needs with 90% accuracy to keep projects on track.
                </p>
              </div>
              
              <div className="cyber-card p-6 energy-pulse">
                <div className="text-4xl mb-4 text-center">⚡</div>
                <h3 className="text-xl font-bold text-white mb-4 text-center">Smart Task Allocation</h3>
                <p className="text-gray-300 text-center">
                  Automatically assign tasks to the right team members based on skills, workload, and availability.
                </p>
              </div>
              
              <div className="cyber-card p-6 energy-pulse">
                <div className="text-4xl mb-4 text-center">📊</div>
                <h3 className="text-xl font-bold text-white mb-4 text-center">Real-time Insights</h3>
                <p className="text-gray-300 text-center">
                  Get instant visibility into project health, team performance, and budget utilization.
                </p>
              </div>
              
              <div className="cyber-card p-6 energy-pulse">
                <div className="text-4xl mb-4 text-center">🎯</div>
                <h3 className="text-xl font-bold text-white mb-4 text-center">Resource Optimization</h3>
                <p className="text-gray-300 text-center">
                  AI optimizes resource allocation to maximize efficiency and minimize project costs.
                </p>
              </div>
              
              <div className="cyber-card p-6 energy-pulse">
                <div className="text-4xl mb-4 text-center">🚨</div>
                <h3 className="text-xl font-bold text-white mb-4 text-center">Risk Management</h3>
                <p className="text-gray-300 text-center">
                  Proactive risk identification and mitigation strategies powered by machine learning.
                </p>
              </div>
              
              <div className="cyber-card p-6 energy-pulse">
                <div className="text-4xl mb-4 text-center">📈</div>
                <h3 className="text-xl font-bold text-white mb-4 text-center">Performance Tracking</h3>
                <p className="text-gray-300 text-center">
                  Advanced metrics and KPIs to track team productivity and project success rates.
                </p>
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">Pricing Plans</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="cyber-card p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Team</h3>
                <div className="text-4xl font-bold text-cyan-400 mb-6">$199<span className="text-lg">/month</span></div>
                <ul className="text-gray-300 space-y-3 mb-8">
                  <li>Up to 10 team members</li>
                  <li>5 active projects</li>
                  <li>Basic AI insights</li>
                  <li>Standard integrations</li>
                  <li>Email support</li>
                </ul>
                <a href="/contact" className="cyber-button w-full">Get Started</a>
              </div>
              
              <div className="cyber-card p-8 text-center border-2 border-cyan-400">
                <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
                <div className="text-4xl font-bold text-cyan-400 mb-6">$499<span className="text-lg">/month</span></div>
                <ul className="text-gray-300 space-y-3 mb-8">
                  <li>Up to 50 team members</li>
                  <li>Unlimited projects</li>
                  <li>Advanced AI analytics</li>
                  <li>Custom integrations</li>
                  <li>Priority support</li>
                  <li>Resource optimization</li>
                </ul>
                <a href="/contact" className="cyber-button w-full">Get Started</a>
              </div>
              
              <div className="cyber-card p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
                <div className="text-4xl font-bold text-cyan-400 mb-6">Custom</div>
                <ul className="text-gray-300 space-y-3 mb-8">
                  <li>Unlimited team members</li>
                  <li>Unlimited projects</li>
                  <li>Full AI suite</li>
                  <li>White-label solution</li>
                  <li>24/7 dedicated support</li>
                  <li>Custom AI training</li>
                </ul>
                <a href="/contact" className="cyber-button w-full">Contact Sales</a>
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">Proven Results</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-4">40%</div>
                <h3 className="text-xl font-bold text-white mb-2">Faster Delivery</h3>
                <p className="text-gray-300">Projects completed 40% faster with AI optimization</p>
              </div>
              
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl font-bold text-green-400 mb-4">30%</div>
                <h3 className="text-xl font-bold text-white mb-2">Cost Reduction</h3>
                <p className="text-gray-300">Average 30% reduction in project costs</p>
              </div>
              
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl font-bold text-pink-400 mb-4">95%</div>
                <h3 className="text-xl font-bold text-white mb-2">On-Time Delivery</h3>
                <p className="text-gray-300">95% of projects delivered on time</p>
              </div>
              
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl font-bold text-yellow-400 mb-4">85%</div>
                <h3 className="text-xl font-bold text-white mb-2">Team Productivity</h3>
                <p className="text-gray-300">85% increase in team productivity</p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Transform Your Project Management Today</h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Join 1,000+ teams using our AI project management solutions to deliver better projects faster and more efficiently.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+13024640950" className="cyber-button">
                📞 Call: (302) 464-0950
              </a>
              <a href="/contact" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300">
                Get Free Trial
              </a>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
}