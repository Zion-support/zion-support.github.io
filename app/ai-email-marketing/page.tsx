import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIEmailMarketingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
            AI Email Marketing
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium">
            Supercharge Your Email Campaigns with AI
          </p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Create, send, and optimize email campaigns that convert. Our AI analyzes your audience, 
            writes compelling copy, and optimizes send times for maximum engagement and revenue.
          </p>
        </section>

        {/* Features Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
            AI Email Marketing Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="cyber-card hologram-card">
              <div className="text-4xl mb-4">✍️</div>
              <h3 className="text-xl font-bold text-white mb-4">AI Content Generation</h3>
              <p className="text-gray-300 mb-4">
                Generate compelling subject lines, email copy, and CTAs that drive opens and clicks.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Subject line optimization</li>
                <li>• Personalized content</li>
                <li>• A/B testing variants</li>
                <li>• Tone matching</li>
              </ul>
            </div>

            <div className="cyber-card hologram-card">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-white mb-4">Smart Segmentation</h3>
              <p className="text-gray-300 mb-4">
                AI automatically segments your audience based on behavior, preferences, and engagement.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Behavioral segmentation</li>
                <li>• Predictive modeling</li>
                <li>• Dynamic lists</li>
                <li>• Lifecycle targeting</li>
              </ul>
            </div>

            <div className="cyber-card hologram-card">
              <div className="text-4xl mb-4">⏰</div>
              <h3 className="text-xl font-bold text-white mb-4">Send Time Optimization</h3>
              <p className="text-gray-300 mb-4">
                AI determines the optimal send time for each subscriber to maximize open rates.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Individual send times</li>
                <li>• Time zone optimization</li>
                <li>• Engagement patterns</li>
                <li>• Continuous learning</li>
              </ul>
            </div>

            <div className="cyber-card hologram-card">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-white mb-4">Advanced Analytics</h3>
              <p className="text-gray-300 mb-4">
                Deep insights into campaign performance with AI-powered recommendations.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Predictive analytics</li>
                <li>• Revenue attribution</li>
                <li>• Churn prediction</li>
                <li>• Performance forecasting</li>
              </ul>
            </div>

            <div className="cyber-card hologram-card">
              <div className="text-4xl mb-4">🔄</div>
              <h3 className="text-xl font-bold text-white mb-4">Automated Workflows</h3>
              <p className="text-gray-300 mb-4">
                Set up complex email sequences that adapt based on subscriber behavior and engagement.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Behavioral triggers</li>
                <li>• Dynamic content</li>
                <li>• Conditional logic</li>
                <li>• Re-engagement campaigns</li>
              </ul>
            </div>

            <div className="cyber-card hologram-card">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-bold text-white mb-4">Design Automation</h3>
              <p className="text-gray-300 mb-4">
                AI creates beautiful, responsive email templates that match your brand automatically.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Template generation</li>
                <li>• Brand consistency</li>
                <li>• Mobile optimization</li>
                <li>• Accessibility features</li>
              </ul>
            </div>
          </div>
        </section>

        {/* AI Capabilities Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
            Advanced AI Capabilities
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="cyber-card hologram-card">
              <h3 className="text-2xl font-bold text-white mb-4">Predictive Customer Journey</h3>
              <p className="text-gray-300 mb-6">
                AI maps customer journeys and predicts the next best action for each subscriber.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>✓ Journey mapping</li>
                <li>✓ Next-best-action prediction</li>
                <li>✓ Churn prevention</li>
                <li>✓ Upsell opportunities</li>
              </ul>
            </div>
            <div className="cyber-card hologram-card">
              <h3 className="text-2xl font-bold text-white mb-4">Content Personalization</h3>
              <p className="text-gray-300 mb-6">
                Every email is personalized with AI-generated content tailored to each subscriber.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>✓ Dynamic content blocks</li>
                <li>✓ Product recommendations</li>
                <li>✓ Personalized offers</li>
                <li>✓ Content optimization</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
            Pricing Plans
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="cyber-card hologram-card">
              <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$79/month</div>
              <ul className="text-gray-300 space-y-3 mb-8">
                <li>✓ Up to 10,000 subscribers</li>
                <li>✓ 50,000 emails/month</li>
                <li>✓ Basic AI features</li>
                <li>✓ Email support</li>
                <li>✓ Standard templates</li>
              </ul>
              <a href="/contact" className="cyber-button w-full text-center block">
                Get Started
              </a>
            </div>

            <div className="cyber-card hologram-card border-2 border-cyan-400">
              <div className="text-center mb-4">
                <span className="bg-cyan-400 text-black px-3 py-1 rounded-full text-sm font-bold">MOST POPULAR</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$199/month</div>
              <ul className="text-gray-300 space-y-3 mb-8">
                <li>✓ Up to 50,000 subscribers</li>
                <li>✓ 250,000 emails/month</li>
                <li>✓ Advanced AI features</li>
                <li>✓ Priority support</li>
                <li>✓ Custom templates</li>
                <li>✓ Advanced analytics</li>
                <li>✓ A/B testing</li>
              </ul>
              <a href="/contact" className="cyber-button w-full text-center block">
                Get Started
              </a>
            </div>

            <div className="cyber-card hologram-card">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$499/month</div>
              <ul className="text-gray-300 space-y-3 mb-8">
                <li>✓ Unlimited subscribers</li>
                <li>✓ Unlimited emails</li>
                <li>✓ Full AI suite</li>
                <li>✓ 24/7 dedicated support</li>
                <li>✓ White-label options</li>
                <li>✓ API access</li>
                <li>✓ Custom integrations</li>
              </ul>
              <a href="/contact" className="cyber-button w-full text-center block">
                Contact Sales
              </a>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
            Why Choose Our AI Email Marketing?
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Proven Results</h3>
              <div className="space-y-6">
                <div className="cyber-card">
                  <div className="text-3xl font-bold text-green-400 mb-2">40%</div>
                  <div className="text-gray-300">Higher open rates</div>
                </div>
                <div className="cyber-card">
                  <div className="text-3xl font-bold text-blue-400 mb-2">60%</div>
                  <div className="text-gray-300">Increase in click-through rates</div>
                </div>
                <div className="cyber-card">
                  <div className="text-3xl font-bold text-purple-400 mb-2">3x</div>
                  <div className="text-gray-300">Faster campaign creation</div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Key Benefits</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3">✓</span>
                  <span>AI-optimized subject lines and content</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3">✓</span>
                  <span>Intelligent audience segmentation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3">✓</span>
                  <span>Optimal send time for each subscriber</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3">✓</span>
                  <span>Automated A/B testing and optimization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3">✓</span>
                  <span>Advanced analytics and insights</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-slate-800 to-purple-900 rounded-2xl p-12 cyber-card">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
            Start Your AI Email Marketing Journey
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Join 400+ businesses using our AI email marketing to boost engagement and drive revenue.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+13024640950"
              className="cyber-button"
            >
              📞 Call Now: (302) 464-0950
            </a>
            <a
              href="/contact"
              className="cyber-button"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              Get Free Trial
            </a>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AIEmailMarketingPage;