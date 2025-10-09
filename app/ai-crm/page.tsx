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
        keywords={['AI CRM', 'customer relationship management', 'AI insights', 'predictive analytics', 'automated follow-ups']}
        canonicalUrl="https://ziontechgroup.com/ai-crm"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 holographic-text cyber-text glitch" data-text="AI-Powered CRM">
              AI-Powered CRM
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium cyber-glow neon-text">
              Intelligent Customer Relationship Management
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
              Transform your customer relationships with AI-powered insights, automated follow-ups, and predictive analytics. 
              Boost sales by 300% and improve customer satisfaction with our intelligent CRM platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="tel:+13024640950" className="cyber-button w-full sm:w-auto text-center">
                📞 Call: (302) 464-0950
              </a>
              <a href="/contact" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300">
                Get Free Demo
              </a>
            </div>
          </section>

          {/* Features Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="cyber-card hologram-card p-6">
                <div className="text-4xl mb-4">🤖</div>
                <h3 className="text-xl font-bold text-white mb-4">AI-Powered Insights</h3>
                <p className="text-gray-300">Get intelligent recommendations for lead scoring, sales opportunities, and customer behavior analysis.</p>
              </div>
              <div className="cyber-card hologram-card p-6">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-xl font-bold text-white mb-4">Predictive Analytics</h3>
                <p className="text-gray-300">Forecast sales trends, customer churn, and revenue opportunities with advanced machine learning.</p>
              </div>
              <div className="cyber-card hologram-card p-6">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-bold text-white mb-4">Automated Follow-ups</h3>
                <p className="text-gray-300">Never miss an opportunity with intelligent automated follow-up sequences and task management.</p>
              </div>
              <div className="cyber-card hologram-card p-6">
                <div className="text-4xl mb-4">📱</div>
                <h3 className="text-xl font-bold text-white mb-4">Mobile-First Design</h3>
                <p className="text-gray-300">Access your CRM anywhere with our responsive mobile app and offline capabilities.</p>
              </div>
              <div className="cyber-card hologram-card p-6">
                <div className="text-4xl mb-4">🔗</div>
                <h3 className="text-xl font-bold text-white mb-4">500+ Integrations</h3>
                <p className="text-gray-300">Connect with your favorite tools including email, calendar, social media, and marketing platforms.</p>
              </div>
              <div className="cyber-card hologram-card p-6">
                <div className="text-4xl mb-4">🔒</div>
                <h3 className="text-xl font-bold text-white mb-4">Enterprise Security</h3>
                <p className="text-gray-300">Bank-level security with SOC 2 compliance, data encryption, and role-based access control.</p>
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Pricing Plans</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="cyber-card hologram-card p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
                <div className="text-4xl font-bold text-cyan-400 mb-6">$149<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-3 text-gray-300 mb-8">
                  <li>✓ Up to 1,000 contacts</li>
                  <li>✓ Basic AI insights</li>
                  <li>✓ Email integration</li>
                  <li>✓ Mobile app</li>
                  <li>✓ 24/7 support</li>
                </ul>
                <a href="/contact" className="w-full cyber-button text-center block">Get Started</a>
              </div>
              <div className="cyber-card hologram-card p-8 border-2 border-cyan-400">
                <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
                <div className="text-4xl font-bold text-cyan-400 mb-6">$299<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-3 text-gray-300 mb-8">
                  <li>✓ Up to 10,000 contacts</li>
                  <li>✓ Advanced AI analytics</li>
                  <li>✓ Predictive insights</li>
                  <li>✓ 50+ integrations</li>
                  <li>✓ Custom workflows</li>
                  <li>✓ Priority support</li>
                </ul>
                <a href="/contact" className="w-full cyber-button text-center block">Most Popular</a>
              </div>
              <div className="cyber-card hologram-card p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
                <div className="text-4xl font-bold text-cyan-400 mb-6">$599<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-3 text-gray-300 mb-8">
                  <li>✓ Unlimited contacts</li>
                  <li>✓ Full AI suite</li>
                  <li>✓ Custom AI models</li>
                  <li>✓ 500+ integrations</li>
                  <li>✓ White-label options</li>
                  <li>✓ Dedicated support</li>
                </ul>
                <a href="/contact" className="w-full cyber-button text-center block">Contact Sales</a>
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Why Choose Our AI CRM?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="cyber-card hologram-card p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Proven Results</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="text-3xl">📈</div>
                    <div>
                      <p className="text-2xl font-bold text-cyan-400">300%</p>
                      <p className="text-gray-300">Average increase in sales</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-3xl">⏱️</div>
                    <div>
                      <p className="text-2xl font-bold text-cyan-400">70%</p>
                      <p className="text-gray-300">Time saved on admin tasks</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-3xl">💰</div>
                    <div>
                      <p className="text-2xl font-bold text-cyan-400">$2M+</p>
                      <p className="text-gray-300">Average revenue increase</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cyber-card hologram-card p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Customer Success Stories</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-cyan-400 pl-4">
                    <p className="text-gray-300 italic">"The AI insights helped us identify high-value prospects we were missing. Our conversion rate increased by 250% in just 3 months."</p>
                    <p className="text-cyan-400 font-semibold mt-2">- Sarah Johnson, CEO TechCorp</p>
                  </div>
                  <div className="border-l-4 border-cyan-400 pl-4">
                    <p className="text-gray-300 italic">"The automated follow-ups saved us 20 hours per week. Our team can now focus on closing deals instead of managing tasks."</p>
                    <p className="text-cyan-400 font-semibold mt-2">- Mike Chen, Sales Director</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4 neon-text">Ready to Transform Your Sales Process?</h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses already using our AI-powered CRM to boost sales and improve customer relationships.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="tel:+13024640950" className="cyber-button w-full sm:w-auto text-center">
                📞 Call: (302) 464-0950
              </a>
              <a href="mailto:kleber@ziontechgroup.com" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300">
                Email Us
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