'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function AIDataVisualizationPage() {
  return (
    <>
      <Helmet>
        <title>AI Data Visualization Solutions - Zion Tech Group</title>
        <meta name="description" content="Intelligent AI-powered data visualization with automated insights, interactive dashboards, and predictive analytics. Starting at $149/month." />
        <meta name="keywords" content="AI data visualization, business intelligence, interactive dashboards, data analytics, predictive insights" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-data-visualization" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text cyber-text">
              AI Data Visualization
            </h1>
            <p className="text-xl text-cyan-400 mb-8 font-medium">
              Transform data into actionable insights with AI
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
              Turn complex data into beautiful, interactive visualizations with AI-powered insights that help you make data-driven decisions faster and more accurately.
            </p>
          </section>

          {/* Features Grid */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">AI-Powered Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="cyber-card p-6 energy-pulse">
                <div className="text-4xl mb-4 text-center">🎨</div>
                <h3 className="text-xl font-bold text-white mb-4 text-center">Auto-Generated Charts</h3>
                <p className="text-gray-300 text-center">
                  AI automatically selects the best chart types and creates stunning visualizations from your data.
                </p>
              </div>
              
              <div className="cyber-card p-6 energy-pulse">
                <div className="text-4xl mb-4 text-center">🔍</div>
                <h3 className="text-xl font-bold text-white mb-4 text-center">Smart Insights</h3>
                <p className="text-gray-300 text-center">
                  AI analyzes your data and provides intelligent insights, trends, and recommendations.
                </p>
              </div>
              
              <div className="cyber-card p-6 energy-pulse">
                <div className="text-4xl mb-4 text-center">📱</div>
                <h3 className="text-xl font-bold text-white mb-4 text-center">Interactive Dashboards</h3>
                <p className="text-gray-300 text-center">
                  Create responsive, interactive dashboards that work perfectly on all devices.
                </p>
              </div>
              
              <div className="cyber-card p-6 energy-pulse">
                <div className="text-4xl mb-4 text-center">🤖</div>
                <h3 className="text-xl font-bold text-white mb-4 text-center">Natural Language Queries</h3>
                <p className="text-gray-300 text-center">
                  Ask questions in plain English and get instant visual answers from your data.
                </p>
              </div>
              
              <div className="cyber-card p-6 energy-pulse">
                <div className="text-4xl mb-4 text-center">⚡</div>
                <h3 className="text-xl font-bold text-white mb-4 text-center">Real-time Updates</h3>
                <p className="text-gray-300 text-center">
                  Visualizations update automatically as new data comes in, keeping insights current.
                </p>
              </div>
              
              <div className="cyber-card p-6 energy-pulse">
                <div className="text-4xl mb-4 text-center">🔮</div>
                <h3 className="text-xl font-bold text-white mb-4 text-center">Predictive Analytics</h3>
                <p className="text-gray-300 text-center">
                  AI predicts future trends and outcomes based on historical data patterns.
                </p>
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">Pricing Plans</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="cyber-card p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
                <div className="text-4xl font-bold text-cyan-400 mb-6">$149<span className="text-lg">/month</span></div>
                <ul className="text-gray-300 space-y-3 mb-8">
                  <li>Up to 5 data sources</li>
                  <li>10 dashboards</li>
                  <li>Basic AI insights</li>
                  <li>Standard chart types</li>
                  <li>Email support</li>
                </ul>
                <a href="/contact" className="cyber-button w-full">Get Started</a>
              </div>
              
              <div className="cyber-card p-8 text-center border-2 border-cyan-400">
                <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
                <div className="text-4xl font-bold text-cyan-400 mb-6">$399<span className="text-lg">/month</span></div>
                <ul className="text-gray-300 space-y-3 mb-8">
                  <li>Up to 25 data sources</li>
                  <li>Unlimited dashboards</li>
                  <li>Advanced AI insights</li>
                  <li>All chart types</li>
                  <li>Priority support</li>
                  <li>Custom visualizations</li>
                </ul>
                <a href="/contact" className="cyber-button w-full">Get Started</a>
              </div>
              
              <div className="cyber-card p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
                <div className="text-4xl font-bold text-cyan-400 mb-6">Custom</div>
                <ul className="text-gray-300 space-y-3 mb-8">
                  <li>Unlimited data sources</li>
                  <li>Unlimited dashboards</li>
                  <li>Full AI suite</li>
                  <li>White-label solution</li>
                  <li>24/7 dedicated support</li>
                  <li>Custom AI training</li>
                </ul>
                <a href="/contact" className="cyber-button w-full">Contact Sales</a>
              </div>
            </div>
          </section>

          {/* Use Cases Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">Perfect For</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-xl font-bold text-white mb-4">Business Intelligence</h3>
                <p className="text-gray-300">Transform business data into actionable insights and strategic decisions.</p>
              </div>
              
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl mb-4">📈</div>
                <h3 className="text-xl font-bold text-white mb-4">Sales Analytics</h3>
                <p className="text-gray-300">Track sales performance, identify trends, and optimize revenue strategies.</p>
              </div>
              
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl mb-4">👥</div>
                <h3 className="text-xl font-bold text-white mb-4">Customer Analytics</h3>
                <p className="text-gray-300">Understand customer behavior and preferences through visual data analysis.</p>
              </div>
              
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl mb-4">⚙️</div>
                <h3 className="text-xl font-bold text-white mb-4">Operations</h3>
                <p className="text-gray-300">Monitor operational metrics and optimize business processes with data insights.</p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Start Visualizing Your Data Today</h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Join 2,000+ companies using our AI data visualization platform to make better decisions with their data.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+13024640950" className="cyber-button">
                📞 Call: (302) 464-0950
              </a>
              <a href="/contact" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300">
                Get Free Demo
              </a>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
}