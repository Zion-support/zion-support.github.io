import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AISalesAutomationPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
            AI Sales Automation
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium">
            Automate Your Sales Process with Intelligent AI
          </p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Transform your sales team with AI-powered automation that identifies leads, nurtures prospects, 
            and closes deals faster. Increase revenue by 250% while reducing manual work by 80%.
          </p>
        </section>

        {/* Features Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
            Sales Automation Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="cyber-card hologram-card">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-white mb-4">Lead Scoring & Qualification</h3>
              <p className="text-gray-300 mb-4">
                AI-powered lead scoring that identifies high-value prospects and prioritizes follow-ups.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Behavioral analysis</li>
                <li>• Intent detection</li>
                <li>• Predictive scoring</li>
                <li>• Real-time qualification</li>
              </ul>
            </div>

            <div className="cyber-card hologram-card">
              <div className="text-4xl mb-4">📧</div>
              <h3 className="text-xl font-bold text-white mb-4">Email Automation</h3>
              <p className="text-gray-300 mb-4">
                Personalized email sequences that nurture leads and drive conversions automatically.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Dynamic personalization</li>
                <li>• A/B testing automation</li>
                <li>• Send time optimization</li>
                <li>• Engagement tracking</li>
              </ul>
            </div>

            <div className="cyber-card hologram-card">
              <div className="text-4xl mb-4">📞</div>
              <h3 className="text-xl font-bold text-white mb-4">Call Automation</h3>
              <p className="text-gray-300 mb-4">
                AI-powered calling that schedules meetings, qualifies leads, and follows up automatically.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Voice AI assistants</li>
                <li>• Natural conversations</li>
                <li>• Meeting scheduling</li>
                <li>• Call transcription</li>
              </ul>
            </div>

            <div className="cyber-card hologram-card">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-xl font-bold text-white mb-4">Chat & Messaging</h3>
              <p className="text-gray-300 mb-4">
                Intelligent chatbots that engage prospects and qualify leads across all channels.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Multi-channel support</li>
                <li>• Context awareness</li>
                <li>• Lead qualification</li>
                <li>• Human handoff</li>
              </ul>
            </div>

            <div className="cyber-card hologram-card">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-white mb-4">Sales Analytics</h3>
              <p className="text-gray-300 mb-4">
                Advanced analytics and reporting that provide insights into sales performance and trends.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Performance dashboards</li>
                <li>• Predictive analytics</li>
                <li>• Revenue forecasting</li>
                <li>• ROI tracking</li>
              </ul>
            </div>

            <div className="cyber-card hologram-card">
              <div className="text-4xl mb-4">🔄</div>
              <h3 className="text-xl font-bold text-white mb-4">Workflow Automation</h3>
              <p className="text-gray-300 mb-4">
                Streamline sales processes with intelligent workflows that adapt to your business needs.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Custom workflows</li>
                <li>• Trigger automation</li>
                <li>• Task management</li>
                <li>• Process optimization</li>
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
              <h3 className="text-2xl font-bold text-white mb-4">Predictive Sales Intelligence</h3>
              <p className="text-gray-300 mb-6">
                Machine learning models that predict which leads are most likely to convert and when.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>✓ Lead conversion probability</li>
                <li>✓ Optimal contact timing</li>
                <li>✓ Churn prediction</li>
                <li>✓ Upsell opportunities</li>
              </ul>
            </div>
            <div className="cyber-card hologram-card">
              <h3 className="text-2xl font-bold text-white mb-4">Conversation Intelligence</h3>
              <p className="text-gray-300 mb-6">
                AI that analyzes sales conversations to identify successful patterns and coaching opportunities.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>✓ Call sentiment analysis</li>
                <li>✓ Keyword tracking</li>
                <li>✓ Objection handling insights</li>
                <li>✓ Performance coaching</li>
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
              <div className="text-4xl font-bold text-cyan-400 mb-6">$199/month</div>
              <ul className="text-gray-300 space-y-3 mb-8">
                <li>✓ Up to 1,000 leads/month</li>
                <li>✓ Basic email automation</li>
                <li>✓ Lead scoring</li>
                <li>✓ Email support</li>
                <li>✓ Standard integrations</li>
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
              <div className="text-4xl font-bold text-cyan-400 mb-6">$499/month</div>
              <ul className="text-gray-300 space-y-3 mb-8">
                <li>✓ Up to 5,000 leads/month</li>
                <li>✓ Advanced automation</li>
                <li>✓ AI calling features</li>
                <li>✓ Priority support</li>
                <li>✓ Custom integrations</li>
                <li>✓ Advanced analytics</li>
                <li>✓ Conversation intelligence</li>
              </ul>
              <a href="/contact" className="cyber-button w-full text-center block">
                Get Started
              </a>
            </div>

            <div className="cyber-card hologram-card">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$1,299/month</div>
              <ul className="text-gray-300 space-y-3 mb-8">
                <li>✓ Unlimited leads</li>
                <li>✓ Full AI suite</li>
                <li>✓ Custom AI training</li>
                <li>✓ 24/7 dedicated support</li>
                <li>✓ White-label options</li>
                <li>✓ API access</li>
                <li>✓ Advanced reporting</li>
              </ul>
              <a href="/contact" className="cyber-button w-full text-center block">
                Contact Sales
              </a>
            </div>
          </div>
        </section>

        {/* ROI Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
            Proven ROI & Results
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Average Results</h3>
              <div className="space-y-6">
                <div className="cyber-card">
                  <div className="text-3xl font-bold text-green-400 mb-2">250%</div>
                  <div className="text-gray-300">Increase in sales revenue</div>
                </div>
                <div className="cyber-card">
                  <div className="text-3xl font-bold text-blue-400 mb-2">80%</div>
                  <div className="text-gray-300">Reduction in manual tasks</div>
                </div>
                <div className="cyber-card">
                  <div className="text-3xl font-bold text-purple-400 mb-2">3x</div>
                  <div className="text-gray-300">Faster lead qualification</div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Key Benefits</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3">✓</span>
                  <span>Automated lead nurturing and follow-up</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3">✓</span>
                  <span>AI-powered lead scoring and qualification</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3">✓</span>
                  <span>Personalized outreach at scale</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3">✓</span>
                  <span>Predictive analytics for better decisions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3">✓</span>
                  <span>Seamless CRM integration</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-slate-800 to-purple-900 rounded-2xl p-12 cyber-card">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
            Ready to Automate Your Sales Process?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Join 300+ sales teams already using our AI automation to close more deals and grow revenue.
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
              Get Free Demo
            </a>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AISalesAutomationPage;