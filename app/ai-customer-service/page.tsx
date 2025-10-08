import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AICustomerServicePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
            AI Customer Service Solutions
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium">
            Transform Customer Experience with Intelligent AI
          </p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Revolutionize your customer service with our advanced AI-powered solutions. 
            Reduce response times by 90%, increase customer satisfaction by 300%, and cut costs by 60%.
          </p>
        </section>

        {/* Features Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
            Key Features & Capabilities
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="cyber-card hologram-card">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-bold text-white mb-4">Intelligent Chatbots</h3>
              <p className="text-gray-300 mb-4">
                Advanced conversational AI that understands context, emotions, and complex queries.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Natural Language Processing</li>
                <li>• Multi-language Support</li>
                <li>• Sentiment Analysis</li>
                <li>• Context Awareness</li>
              </ul>
            </div>

            <div className="cyber-card hologram-card">
              <div className="text-4xl mb-4">📞</div>
              <h3 className="text-xl font-bold text-white mb-4">Voice AI Assistants</h3>
              <p className="text-gray-300 mb-4">
                Human-like voice interactions with real-time processing and emotional intelligence.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Real-time Speech Processing</li>
                <li>• Voice Cloning Technology</li>
                <li>• Emotional Tone Detection</li>
                <li>• Multi-channel Integration</li>
              </ul>
            </div>

            <div className="cyber-card hologram-card">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-white mb-4">Predictive Analytics</h3>
              <p className="text-gray-300 mb-4">
                Anticipate customer needs and issues before they arise with advanced ML models.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Customer Behavior Prediction</li>
                <li>• Churn Prevention</li>
                <li>• Issue Resolution Forecasting</li>
                <li>• Personalized Recommendations</li>
              </ul>
            </div>

            <div className="cyber-card hologram-card">
              <div className="text-4xl mb-4">🔄</div>
              <h3 className="text-xl font-bold text-white mb-4">Automated Workflows</h3>
              <p className="text-gray-300 mb-4">
                Streamline customer service processes with intelligent automation and routing.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Smart Ticket Routing</li>
                <li>• Automated Escalation</li>
                <li>• Workflow Optimization</li>
                <li>• Performance Monitoring</li>
              </ul>
            </div>

            <div className="cyber-card hologram-card">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-bold text-white mb-4">Omnichannel Support</h3>
              <p className="text-gray-300 mb-4">
                Seamless customer experience across all channels with unified AI intelligence.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Email Integration</li>
                <li>• Social Media Monitoring</li>
                <li>• Live Chat Support</li>
                <li>• Mobile App Integration</li>
              </ul>
            </div>

            <div className="cyber-card hologram-card">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-bold text-white mb-4">Enterprise Security</h3>
              <p className="text-gray-300 mb-4">
                Bank-level security and compliance for all customer interactions and data.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• End-to-end Encryption</li>
                <li>• GDPR Compliance</li>
                <li>• SOC 2 Type II</li>
                <li>• Data Privacy Protection</li>
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
              <div className="text-4xl font-bold text-cyan-400 mb-6">$299/month</div>
              <ul className="text-gray-300 space-y-3 mb-8">
                <li>✓ Up to 1,000 conversations/month</li>
                <li>✓ Basic chatbot functionality</li>
                <li>✓ Email support</li>
                <li>✓ Standard integrations</li>
                <li>✓ Basic analytics</li>
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
              <div className="text-4xl font-bold text-cyan-400 mb-6">$799/month</div>
              <ul className="text-gray-300 space-y-3 mb-8">
                <li>✓ Up to 10,000 conversations/month</li>
                <li>✓ Advanced AI capabilities</li>
                <li>✓ Voice AI integration</li>
                <li>✓ Priority support</li>
                <li>✓ Advanced analytics</li>
                <li>✓ Custom integrations</li>
                <li>✓ Predictive analytics</li>
              </ul>
              <a href="/contact" className="cyber-button w-full text-center block">
                Get Started
              </a>
            </div>

            <div className="cyber-card hologram-card">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">Custom</div>
              <ul className="text-gray-300 space-y-3 mb-8">
                <li>✓ Unlimited conversations</li>
                <li>✓ Full AI suite</li>
                <li>✓ 24/7 dedicated support</li>
                <li>✓ Custom development</li>
                <li>✓ Advanced security</li>
                <li>✓ White-label options</li>
                <li>✓ SLA guarantees</li>
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
            Why Choose Our AI Customer Service?
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Proven Results</h3>
              <div className="space-y-6">
                <div className="cyber-card">
                  <div className="text-3xl font-bold text-green-400 mb-2">90%</div>
                  <div className="text-gray-300">Reduction in response time</div>
                </div>
                <div className="cyber-card">
                  <div className="text-3xl font-bold text-blue-400 mb-2">300%</div>
                  <div className="text-gray-300">Increase in customer satisfaction</div>
                </div>
                <div className="cyber-card">
                  <div className="text-3xl font-bold text-purple-400 mb-2">60%</div>
                  <div className="text-gray-300">Cost reduction in support operations</div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Key Benefits</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3">✓</span>
                  <span>24/7 availability with instant responses</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3">✓</span>
                  <span>Multilingual support for global businesses</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3">✓</span>
                  <span>Seamless integration with existing systems</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3">✓</span>
                  <span>Continuous learning and improvement</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3">✓</span>
                  <span>Scalable solutions for any business size</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-slate-800 to-purple-900 rounded-2xl p-12 cyber-card">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
            Ready to Transform Your Customer Service?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Join 500+ companies already using our AI customer service solutions to deliver exceptional experiences.
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
              Get Free Consultation
            </a>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AICustomerServicePage;