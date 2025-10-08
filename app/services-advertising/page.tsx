import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import FuturisticBackground from '../components/FuturisticBackground';

const ServicesAdvertisingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid relative">
      <FuturisticBackground />
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 relative z-10">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
            Complete AI & IT Solutions Portfolio
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium">
            Transform Your Business with Our Comprehensive Suite of Services
          </p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            From micro SAAS applications to enterprise AI solutions, we provide everything you need 
            to modernize your business and stay ahead of the competition.
          </p>
        </section>

        {/* AI Services Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
            AI Services & Solutions
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="cyber-card hologram-card">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-bold text-white mb-4">AI Services</h3>
              <p className="text-gray-300 mb-4">Advanced artificial intelligence solutions including machine learning, NLP, and computer vision.</p>
              <div className="text-2xl font-bold text-cyan-400 mb-2">Starting at $1,500/month</div>
              <a href="/ai-services" className="text-cyan-400 hover:text-cyan-300 font-medium">Learn More →</a>
            </div>

            <div className="cyber-card hologram-card">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-xl font-bold text-white mb-4">AI Customer Service</h3>
              <p className="text-gray-300 mb-4">Transform customer experience with intelligent AI chatbots and voice assistants.</p>
              <div className="text-2xl font-bold text-green-400 mb-2">Starting at $299/month</div>
              <a href="/ai-customer-service" className="text-green-400 hover:text-green-300 font-medium">Learn More →</a>
            </div>

            <div className="cyber-card hologram-card">
              <div className="text-4xl mb-4">✍️</div>
              <h3 className="text-xl font-bold text-white mb-4">AI Content Generation</h3>
              <p className="text-gray-300 mb-4">Create high-quality, SEO-optimized content at scale with AI writing tools.</p>
              <div className="text-2xl font-bold text-orange-400 mb-2">Starting at $49/month</div>
              <a href="/ai-content-generation" className="text-orange-400 hover:text-orange-300 font-medium">Learn More →</a>
            </div>

            <div className="cyber-card hologram-card">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-white mb-4">AI Sales Automation</h3>
              <p className="text-gray-300 mb-4">Automate your sales process with AI-powered lead scoring and email sequences.</p>
              <div className="text-2xl font-bold text-indigo-400 mb-2">Starting at $199/month</div>
              <a href="/ai-sales-automation" className="text-indigo-400 hover:text-indigo-300 font-medium">Learn More →</a>
            </div>

            <div className="cyber-card hologram-card">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-white mb-4">AI Data Visualization</h3>
              <p className="text-gray-300 mb-4">Transform data into actionable insights with AI-generated dashboards.</p>
              <div className="text-2xl font-bold text-purple-400 mb-2">Starting at $99/month</div>
              <a href="/ai-data-visualization" className="text-purple-400 hover:text-purple-300 font-medium">Learn More →</a>
            </div>

            <div className="cyber-card hologram-card">
              <div className="text-4xl mb-4">📧</div>
              <h3 className="text-xl font-bold text-white mb-4">AI Email Marketing</h3>
              <p className="text-gray-300 mb-4">Supercharge email campaigns with AI-generated content and optimization.</p>
              <div className="text-2xl font-bold text-teal-400 mb-2">Starting at $79/month</div>
              <a href="/ai-email-marketing" className="text-teal-400 hover:text-teal-300 font-medium">Learn More →</a>
            </div>
          </div>
        </section>

        {/* Micro SAAS Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
            Micro SAAS Solutions
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="cyber-card hologram-card">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-white mb-4">Productivity Tools</h3>
              <p className="text-gray-300 mb-4">Streamline your workflow with intelligent productivity applications.</p>
              <div className="text-lg font-bold text-cyan-400">Starting at $9/month</div>
            </div>

            <div className="cyber-card hologram-card">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-bold text-white mb-4">Marketing Tools</h3>
              <p className="text-gray-300 mb-4">Boost your marketing efforts with specialized AI-powered tools.</p>
              <div className="text-lg font-bold text-pink-400">Starting at $19/month</div>
            </div>

            <div className="cyber-card hologram-card">
              <div className="text-4xl mb-4">🛍️</div>
              <h3 className="text-xl font-bold text-white mb-4">E-commerce Tools</h3>
              <p className="text-gray-300 mb-4">Optimize your online store with intelligent e-commerce solutions.</p>
              <div className="text-lg font-bold text-green-400">Starting at $29/month</div>
            </div>

            <div className="cyber-card hologram-card">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-xl font-bold text-white mb-4">HR & Team Management</h3>
              <p className="text-gray-300 mb-4">Manage your team effectively with smart HR applications.</p>
              <div className="text-lg font-bold text-blue-400">Starting at $39/month</div>
            </div>
          </div>
        </section>

        {/* IT Services Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
            IT Services & Infrastructure
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="cyber-card hologram-card">
              <div className="text-4xl mb-4">☁️</div>
              <h3 className="text-xl font-bold text-white mb-4">Cloud Services</h3>
              <p className="text-gray-300 mb-4">Scale your infrastructure with secure, reliable cloud solutions.</p>
              <div className="text-2xl font-bold text-blue-400 mb-2">Starting at $299/month</div>
              <a href="/it-services" className="text-blue-400 hover:text-blue-300 font-medium">Learn More →</a>
            </div>

            <div className="cyber-card hologram-card">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-bold text-white mb-4">Cybersecurity</h3>
              <p className="text-gray-300 mb-4">Protect your business with advanced security solutions and monitoring.</p>
              <div className="text-2xl font-bold text-red-400 mb-2">Starting at $199/month</div>
              <a href="/cybersecurity" className="text-red-400 hover:text-red-300 font-medium">Learn More →</a>
            </div>

            <div className="cyber-card hologram-card">
              <div className="text-4xl mb-4">⚛️</div>
              <h3 className="text-xl font-bold text-white mb-4">Quantum Computing</h3>
              <p className="text-gray-300 mb-4">Next-generation quantum computing capabilities for complex problem solving.</p>
              <div className="text-2xl font-bold text-purple-400 mb-2">Custom Pricing</div>
              <a href="/quantum-computing" className="text-purple-400 hover:text-purple-300 font-medium">Learn More →</a>
            </div>
          </div>
        </section>

        {/* Specialized Solutions */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
            Specialized Solutions
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="cyber-card hologram-card">
              <div className="text-4xl mb-4">🏥</div>
              <h3 className="text-xl font-bold text-white mb-4">AI Healthcare</h3>
              <p className="text-gray-300 mb-4">Cutting-edge AI solutions for medical imaging and drug discovery.</p>
              <div className="text-2xl font-bold text-green-400 mb-2">Starting at $1,999/month</div>
              <a href="/ai-healthcare" className="text-green-400 hover:text-green-300 font-medium">Learn More →</a>
            </div>

            <div className="cyber-card hologram-card">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-white mb-4">AI Fintech</h3>
              <p className="text-gray-300 mb-4">Revolutionary AI-powered financial services and trading solutions.</p>
              <div className="text-2xl font-bold text-indigo-400 mb-2">Starting at $1,499/month</div>
              <a href="/ai-fintech" className="text-indigo-400 hover:text-indigo-300 font-medium">Learn More →</a>
            </div>

            <div className="cyber-card hologram-card">
              <div className="text-4xl mb-4">🔄</div>
              <h3 className="text-xl font-bold text-white mb-4">Autonomous Systems</h3>
              <p className="text-gray-300 mb-4">Self-managing and self-optimizing systems for enterprise operations.</p>
              <div className="text-2xl font-bold text-yellow-400 mb-2">Starting at $2,500/month</div>
              <a href="/autonomous-systems" className="text-yellow-400 hover:text-yellow-300 font-medium">Learn More →</a>
            </div>
          </div>
        </section>

        {/* Pricing Comparison */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
            Choose Your Solution
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="cyber-card hologram-card">
              <h3 className="text-2xl font-bold text-white mb-4">Starter Package</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$99/month</div>
              <ul className="text-gray-300 space-y-3 mb-8">
                <li>✓ 1 Micro SAAS app</li>
                <li>✓ Basic AI features</li>
                <li>✓ Email support</li>
                <li>✓ Standard integrations</li>
                <li>✓ 5GB storage</li>
              </ul>
              <a href="/contact" className="cyber-button w-full text-center block">
                Get Started
              </a>
            </div>

            <div className="cyber-card hologram-card border-2 border-cyan-400">
              <div className="text-center mb-4">
                <span className="bg-cyan-400 text-black px-3 py-1 rounded-full text-sm font-bold">MOST POPULAR</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Professional Package</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$299/month</div>
              <ul className="text-gray-300 space-y-3 mb-8">
                <li>✓ Up to 3 Micro SAAS apps</li>
                <li>✓ Advanced AI features</li>
                <li>✓ Priority support</li>
                <li>✓ Custom integrations</li>
                <li>✓ 25GB storage</li>
                <li>✓ API access</li>
                <li>✓ Analytics dashboard</li>
              </ul>
              <a href="/contact" className="cyber-button w-full text-center block">
                Get Started
              </a>
            </div>

            <div className="cyber-card hologram-card">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise Package</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$999/month</div>
              <ul className="text-gray-300 space-y-3 mb-8">
                <li>✓ Unlimited Micro SAAS apps</li>
                <li>✓ Full AI suite</li>
                <li>✓ 24/7 dedicated support</li>
                <li>✓ White-label options</li>
                <li>✓ Unlimited storage</li>
                <li>✓ Custom development</li>
                <li>✓ On-premise deployment</li>
              </ul>
              <a href="/contact" className="cyber-button w-full text-center block">
                Contact Sales
              </a>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
            Why Choose Zion Tech Group?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">500+</div>
              <div className="text-gray-300">Enterprise Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">$2.5B+</div>
              <div className="text-gray-300">Cost Savings Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">99.9%</div>
              <div className="text-gray-300">Uptime Guarantee</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="text-gray-300">Support Available</div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-slate-800 to-purple-900 rounded-2xl p-12 cyber-card">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses already using our solutions to drive growth and innovation.
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
          
          <div className="mt-8 text-sm text-gray-400">
            <p>✓ Free initial consultation</p>
            <p>✓ Custom solution design</p>
            <p>✓ 24/7 support available</p>
            <p>✓ No long-term contracts required</p>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ServicesAdvertisingPage;