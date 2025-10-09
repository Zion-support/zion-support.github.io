'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const AICRMPage: React.FC = () => {
  return (
    <>
      <SEOOptimizer
        title="AI-Powered CRM - Zion Tech Group"
        description="Intelligent customer relationship management with AI insights, automated follow-ups, and predictive analytics. Starting at $149/month."
        keywords={['AI CRM', 'customer relationship management', 'AI insights', 'predictive analytics', 'automated follow-ups', 'sales automation']}
        canonicalUrl="https://ziontechgroup.com/ai-crm"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 holographic-text cyber-text glitch">
              AI-Powered CRM
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium cyber-glow neon-text">
              Intelligent Customer Relationship Management
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
              Transform your sales process with our AI-powered CRM that learns from your data, 
              predicts customer behavior, and automates follow-ups for maximum conversion.
            </p>
          </section>

          {/* Features Grid */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
              Powerful Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="cyber-card p-6 energy-pulse">
                <div className="text-4xl mb-4">🧠</div>
                <h3 className="text-xl font-bold text-white mb-4">AI-Powered Insights</h3>
                <p className="text-gray-300 mb-4">
                  Machine learning algorithms analyze customer interactions to provide actionable insights and recommendations.
                </p>
                <ul className="text-sm text-gray-400 space-y-2">
                  <li>• Predictive lead scoring</li>
                  <li>• Customer behavior analysis</li>
                  <li>• Churn prediction</li>
                  <li>• Revenue forecasting</li>
                </ul>
              </div>

              <div className="cyber-card p-6 energy-pulse">
                <div className="text-4xl mb-4">🤖</div>
                <h3 className="text-xl font-bold text-white mb-4">Automated Follow-ups</h3>
                <p className="text-gray-300 mb-4">
                  Smart automation that sends personalized follow-ups at the optimal time for maximum engagement.
                </p>
                <ul className="text-sm text-gray-400 space-y-2">
                  <li>• Email sequence automation</li>
                  <li>• Call scheduling optimization</li>
                  <li>• Task prioritization</li>
                  <li>• Response time tracking</li>
                </ul>
              </div>

              <div className="cyber-card p-6 energy-pulse">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-xl font-bold text-white mb-4">Advanced Analytics</h3>
                <p className="text-gray-300 mb-4">
                  Comprehensive dashboards with real-time analytics and custom reporting capabilities.
                </p>
                <ul className="text-sm text-gray-400 space-y-2">
                  <li>• Real-time performance metrics</li>
                  <li>• Custom dashboard builder</li>
                  <li>• Sales pipeline visualization</li>
                  <li>• ROI tracking</li>
                </ul>
              </div>

              <div className="cyber-card p-6 energy-pulse">
                <div className="text-4xl mb-4">💬</div>
                <h3 className="text-xl font-bold text-white mb-4">Multi-Channel Communication</h3>
                <p className="text-gray-300 mb-4">
                  Unified communication hub for email, phone, SMS, and social media interactions.
                </p>
                <ul className="text-sm text-gray-400 space-y-2">
                  <li>• Email integration</li>
                  <li>• SMS automation</li>
                  <li>• Social media monitoring</li>
                  <li>• Video call scheduling</li>
                </ul>
              </div>

              <div className="cyber-card p-6 energy-pulse">
                <div className="text-4xl mb-4">🔒</div>
                <h3 className="text-xl font-bold text-white mb-4">Enterprise Security</h3>
                <p className="text-gray-300 mb-4">
                  Bank-level security with GDPR compliance and advanced data protection.
                </p>
                <ul className="text-sm text-gray-400 space-y-2">
                  <li>• End-to-end encryption</li>
                  <li>• GDPR compliance</li>
                  <li>• Role-based access control</li>
                  <li>• Audit trails</li>
                </ul>
              </div>

              <div className="cyber-card p-6 energy-pulse">
                <div className="text-4xl mb-4">🔗</div>
                <h3 className="text-xl font-bold text-white mb-4">Third-Party Integrations</h3>
                <p className="text-gray-300 mb-4">
                  Seamless integration with your existing tools and platforms.
                </p>
                <ul className="text-sm text-gray-400 space-y-2">
                  <li>• Salesforce integration</li>
                  <li>• HubSpot compatibility</li>
                  <li>• Zapier automation</li>
                  <li>• API access</li>
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
                <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
                <div className="text-4xl font-bold text-cyan-400 mb-6">$149<span className="text-lg">/month</span></div>
                <ul className="text-gray-300 space-y-3 mb-8">
                  <li>• Up to 1,000 contacts</li>
                  <li>• Basic AI insights</li>
                  <li>• Email automation</li>
                  <li>• Standard support</li>
                  <li>• Mobile app access</li>
                </ul>
                <a href="/contact" className="cyber-button w-full text-center">
                  Get Started
                </a>
              </div>

              <div className="cyber-card p-8 text-center border-2 border-cyan-400">
                <div className="text-sm text-cyan-400 mb-2 font-bold">MOST POPULAR</div>
                <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
                <div className="text-4xl font-bold text-cyan-400 mb-6">$299<span className="text-lg">/month</span></div>
                <ul className="text-gray-300 space-y-3 mb-8">
                  <li>• Up to 10,000 contacts</li>
                  <li>• Advanced AI insights</li>
                  <li>• Multi-channel automation</li>
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
                <div className="text-4xl font-bold text-cyan-400 mb-6">$599<span className="text-lg">/month</span></div>
                <ul className="text-gray-300 space-y-3 mb-8">
                  <li>• Unlimited contacts</li>
                  <li>• Custom AI models</li>
                  <li>• White-label solution</li>
                  <li>• 24/7 dedicated support</li>
                  <li>• Custom development</li>
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
              Ready to Transform Your Sales Process?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses already using our AI-powered CRM to increase sales by 40% and reduce manual work by 60%.
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
};

export default AICRMPage;