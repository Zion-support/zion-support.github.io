'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const AIMobileBuilderPage: React.FC = () => {
  return (
    <>
      <SEOOptimizer
        title="AI Mobile App Builder - Zion Tech Group"
        description="Build native mobile apps with AI assistance, drag-and-drop interface, and instant deployment. Starting at $399/month."
        keywords={['AI mobile app builder', 'mobile app development', 'drag and drop', 'instant deployment', 'native apps', 'AI assistance']}
        canonicalUrl="https://ziontechgroup.com/ai-mobile-builder"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 holographic-text cyber-text glitch" data-text="AI Mobile App Builder">
              AI Mobile App Builder
            </h1>
            <p className="text-xl md:text-2xl text-blue-400 mb-8 font-medium cyber-glow neon-text">
              Build Native Mobile Apps with AI
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
              Create stunning native mobile apps for iOS and Android with AI assistance, drag-and-drop interface, and instant deployment. 
              Build apps 10x faster without coding knowledge using our intelligent mobile app builder.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="tel:+13024640950" className="cyber-button w-full sm:w-auto text-center">
                📞 Call: (302) 464-0950
              </a>
              <a href="/contact" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300">
                Start Building
              </a>
            </div>
          </section>

          {/* Features Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">App Building Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="cyber-card hologram-card p-6">
                <div className="text-4xl mb-4">🤖</div>
                <h3 className="text-xl font-bold text-white mb-4">AI-Powered Design</h3>
                <p className="text-gray-300">Generate app designs and layouts automatically with AI-powered design suggestions and templates.</p>
              </div>
              <div className="cyber-card hologram-card p-6">
                <div className="text-4xl mb-4">📱</div>
                <h3 className="text-xl font-bold text-white mb-4">Native Performance</h3>
                <p className="text-gray-300">Build true native apps for iOS and Android with optimal performance and platform-specific features.</p>
              </div>
              <div className="cyber-card hologram-card p-6">
                <div className="text-4xl mb-4">🎨</div>
                <h3 className="text-xl font-bold text-white mb-4">Drag & Drop Builder</h3>
                <p className="text-gray-300">Intuitive visual editor with drag-and-drop components for easy app creation without coding.</p>
              </div>
              <div className="cyber-card hologram-card p-6">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-bold text-white mb-4">Instant Deployment</h3>
                <p className="text-gray-300">Deploy your app to app stores instantly with automated build and submission processes.</p>
              </div>
              <div className="cyber-card hologram-card p-6">
                <div className="text-4xl mb-4">🔗</div>
                <h3 className="text-xl font-bold text-white mb-4">API Integrations</h3>
                <p className="text-gray-300">Connect with 1000+ APIs and services including payment, social media, and cloud platforms.</p>
              </div>
              <div className="cyber-card hologram-card p-6">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-xl font-bold text-white mb-4">Analytics & Testing</h3>
                <p className="text-gray-300">Built-in analytics, A/B testing, and crash reporting for app optimization and monitoring.</p>
              </div>
            </div>
          </section>

          {/* App Types Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">App Types You Can Build</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="cyber-card hologram-card p-6 text-center">
                <div className="text-3xl mb-4">🛍️</div>
                <h3 className="text-lg font-bold text-white mb-2">E-commerce Apps</h3>
                <p className="text-gray-300 text-sm">Online stores and marketplaces</p>
              </div>
              <div className="cyber-card hologram-card p-6 text-center">
                <div className="text-3xl mb-4">💼</div>
                <h3 className="text-lg font-bold text-white mb-2">Business Apps</h3>
                <p className="text-gray-300 text-sm">CRM, productivity, and tools</p>
              </div>
              <div className="cyber-card hologram-card p-6 text-center">
                <div className="text-3xl mb-4">🎮</div>
                <h3 className="text-lg font-bold text-white mb-2">Gaming Apps</h3>
                <p className="text-gray-300 text-sm">Mobile games and entertainment</p>
              </div>
              <div className="cyber-card hologram-card p-6 text-center">
                <div className="text-3xl mb-4">📚</div>
                <h3 className="text-lg font-bold text-white mb-2">Educational Apps</h3>
                <p className="text-gray-300 text-sm">Learning and training platforms</p>
              </div>
              <div className="cyber-card hologram-card p-6 text-center">
                <div className="text-3xl mb-4">🏥</div>
                <h3 className="text-lg font-bold text-white mb-2">Healthcare Apps</h3>
                <p className="text-gray-300 text-sm">Medical and wellness solutions</p>
              </div>
              <div className="cyber-card hologram-card p-6 text-center">
                <div className="text-3xl mb-4">🏠</div>
                <h3 className="text-lg font-bold text-white mb-2">Real Estate Apps</h3>
                <p className="text-gray-300 text-sm">Property and rental platforms</p>
              </div>
              <div className="cyber-card hologram-card p-6 text-center">
                <div className="text-3xl mb-4">🍕</div>
                <h3 className="text-lg font-bold text-white mb-2">Food & Delivery</h3>
                <p className="text-gray-300 text-sm">Restaurant and delivery apps</p>
              </div>
              <div className="cyber-card hologram-card p-6 text-center">
                <div className="text-3xl mb-4">🚗</div>
                <h3 className="text-lg font-bold text-white mb-2">Transportation</h3>
                <p className="text-gray-300 text-sm">Ride-sharing and logistics</p>
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Pricing Plans</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="cyber-card hologram-card p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
                <div className="text-4xl font-bold text-blue-400 mb-6">$399<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-3 text-gray-300 mb-8">
                  <li>✓ 1 app project</li>
                  <li>✓ Basic templates</li>
                  <li>✓ iOS & Android builds</li>
                  <li>✓ 5 API integrations</li>
                  <li>✓ Email support</li>
                </ul>
                <a href="/contact" className="w-full cyber-button text-center block">Get Started</a>
              </div>
              <div className="cyber-card hologram-card p-8 border-2 border-blue-400">
                <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
                <div className="text-4xl font-bold text-blue-400 mb-6">$799<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-3 text-gray-300 mb-8">
                  <li>✓ 5 app projects</li>
                  <li>✓ Advanced templates</li>
                  <li>✓ AI design assistance</li>
                  <li>✓ 25 API integrations</li>
                  <li>✓ Priority support</li>
                  <li>✓ App store submission</li>
                </ul>
                <a href="/contact" className="w-full cyber-button text-center block">Most Popular</a>
              </div>
              <div className="cyber-card hologram-card p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
                <div className="text-4xl font-bold text-blue-400 mb-6">$1,599<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-3 text-gray-300 mb-8">
                  <li>✓ Unlimited app projects</li>
                  <li>✓ Custom templates</li>
                  <li>✓ Advanced AI features</li>
                  <li>✓ Unlimited integrations</li>
                  <li>✓ Dedicated support</li>
                  <li>✓ White-label options</li>
                  <li>✓ API access</li>
                </ul>
                <a href="/contact" className="w-full cyber-button text-center block">Contact Sales</a>
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Why Choose AI Mobile Builder?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="cyber-card hologram-card p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Proven Results</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="text-3xl">⚡</div>
                    <div>
                      <p className="text-2xl font-bold text-blue-400">10x</p>
                      <p className="text-gray-300">Faster development time</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-3xl">💰</div>
                    <div>
                      <p className="text-2xl font-bold text-blue-400">80%</p>
                      <p className="text-gray-300">Cost reduction vs traditional</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-3xl">📱</div>
                    <div>
                      <p className="text-2xl font-bold text-blue-400">1000+</p>
                      <p className="text-gray-300">Apps successfully built</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cyber-card hologram-card p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Customer Success Stories</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-400 pl-4">
                    <p className="text-gray-300 italic">"We built our e-commerce app in 2 weeks instead of 6 months. The AI suggestions were spot-on."</p>
                    <p className="text-blue-400 font-semibold mt-2">- Alex Thompson, Startup Founder</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <p className="text-gray-300 italic">"The drag-and-drop interface is so intuitive. Our non-technical team can now build apps independently."</p>
                    <p className="text-blue-400 font-semibold mt-2">- Maria Garcia, Product Manager</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4 neon-text">Ready to Build Your Mobile App?</h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of developers and businesses using our AI Mobile Builder to create stunning mobile apps without coding.
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

export default AIMobileBuilderPage;