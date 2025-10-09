'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const AIInvoiceGeneratorPage: React.FC = () => {
  return (
    <>
      <SEOOptimizer
        title="AI Invoice Generator - Zion Tech Group"
        description="Automated invoice creation, payment tracking, and financial reporting with AI-powered insights. Starting at $79/month."
        keywords={['AI invoice generator', 'automated invoicing', 'payment tracking', 'financial reporting', 'AI insights', 'invoice automation']}
        canonicalUrl="https://ziontechgroup.com/ai-invoice-generator"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 holographic-text cyber-text glitch" data-text="AI Invoice Generator">
              AI Invoice Generator
            </h1>
            <p className="text-xl md:text-2xl text-indigo-400 mb-8 font-medium cyber-glow neon-text">
              Automated Invoice Creation & Financial Management
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
              Streamline your invoicing process with AI-powered invoice generation, automated payment tracking, and intelligent financial reporting. 
              Save 15 hours per week and get paid 40% faster with our smart invoicing platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="tel:+13024640950" className="cyber-button w-full sm:w-auto text-center">
                📞 Call: (302) 464-0950
              </a>
              <a href="/contact" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300">
                Start Free Trial
              </a>
            </div>
          </section>

          {/* Features Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Invoice Management Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="cyber-card hologram-card p-6">
                <div className="text-4xl mb-4">🤖</div>
                <h3 className="text-xl font-bold text-white mb-4">AI Invoice Generation</h3>
                <p className="text-gray-300">Automatically create professional invoices with AI-powered templates and smart data extraction.</p>
              </div>
              <div className="cyber-card hologram-card p-6">
                <div className="text-4xl mb-4">💳</div>
                <h3 className="text-xl font-bold text-white mb-4">Payment Tracking</h3>
                <p className="text-gray-300">Track payments in real-time with automated reminders and payment status updates.</p>
              </div>
              <div className="cyber-card hologram-card p-6">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-xl font-bold text-white mb-4">Financial Reporting</h3>
                <p className="text-gray-300">Generate comprehensive financial reports with AI-powered insights and analytics.</p>
              </div>
              <div className="cyber-card hologram-card p-6">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-bold text-white mb-4">Automated Reminders</h3>
                <p className="text-gray-300">Send intelligent payment reminders based on customer behavior and payment history.</p>
              </div>
              <div className="cyber-card hologram-card p-6">
                <div className="text-4xl mb-4">🔗</div>
                <h3 className="text-xl font-bold text-white mb-4">Integrations</h3>
                <p className="text-gray-300">Connect with accounting software, payment processors, and business tools.</p>
              </div>
              <div className="cyber-card hologram-card p-6">
                <div className="text-4xl mb-4">🔒</div>
                <h3 className="text-xl font-bold text-white mb-4">Security & Compliance</h3>
                <p className="text-gray-300">Bank-level security with GDPR compliance and encrypted data storage.</p>
              </div>
            </div>
          </section>

          {/* Invoice Types Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Supported Invoice Types</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="cyber-card hologram-card p-6 text-center">
                <div className="text-3xl mb-4">💼</div>
                <h3 className="text-lg font-bold text-white mb-2">Service Invoices</h3>
                <p className="text-gray-300 text-sm">Professional services billing</p>
              </div>
              <div className="cyber-card hologram-card p-6 text-center">
                <div className="text-3xl mb-4">🛍️</div>
                <h3 className="text-lg font-bold text-white mb-2">Product Invoices</h3>
                <p className="text-gray-300 text-sm">E-commerce and retail billing</p>
              </div>
              <div className="cyber-card hologram-card p-6 text-center">
                <div className="text-3xl mb-4">🏠</div>
                <h3 className="text-lg font-bold text-white mb-2">Rental Invoices</h3>
                <p className="text-gray-300 text-sm">Property and equipment rental</p>
              </div>
              <div className="cyber-card hologram-card p-6 text-center">
                <div className="text-3xl mb-4">📋</div>
                <h3 className="text-lg font-bold text-white mb-2">Recurring Invoices</h3>
                <p className="text-gray-300 text-sm">Subscription and recurring billing</p>
              </div>
              <div className="cyber-card hologram-card p-6 text-center">
                <div className="text-3xl mb-4">🌍</div>
                <h3 className="text-lg font-bold text-white mb-2">International</h3>
                <p className="text-gray-300 text-sm">Multi-currency and tax support</p>
              </div>
              <div className="cyber-card hologram-card p-6 text-center">
                <div className="text-3xl mb-4">📱</div>
                <h3 className="text-lg font-bold text-white mb-2">Mobile Invoices</h3>
                <p className="text-gray-300 text-sm">On-the-go invoice creation</p>
              </div>
              <div className="cyber-card hologram-card p-6 text-center">
                <div className="text-3xl mb-4">🎯</div>
                <h3 className="text-lg font-bold text-white mb-2">Custom Templates</h3>
                <p className="text-gray-300 text-sm">Branded invoice templates</p>
              </div>
              <div className="cyber-card hologram-card p-6 text-center">
                <div className="text-3xl mb-4">📊</div>
                <h3 className="text-lg font-bold text-white mb-2">Bulk Invoices</h3>
                <p className="text-gray-300 text-sm">Mass invoice generation</p>
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Pricing Plans</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="cyber-card hologram-card p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
                <div className="text-4xl font-bold text-indigo-400 mb-6">$79<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-3 text-gray-300 mb-8">
                  <li>✓ 100 invoices/month</li>
                  <li>✓ Basic templates</li>
                  <li>✓ Payment tracking</li>
                  <li>✓ Email support</li>
                  <li>✓ Mobile app</li>
                </ul>
                <a href="/contact" className="w-full cyber-button text-center block">Get Started</a>
              </div>
              <div className="cyber-card hologram-card p-8 border-2 border-indigo-400">
                <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
                <div className="text-4xl font-bold text-indigo-400 mb-6">$149<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-3 text-gray-300 mb-8">
                  <li>✓ 1,000 invoices/month</li>
                  <li>✓ Advanced templates</li>
                  <li>✓ AI insights</li>
                  <li>✓ Automated reminders</li>
                  <li>✓ Priority support</li>
                  <li>✓ 10 integrations</li>
                </ul>
                <a href="/contact" className="w-full cyber-button text-center block">Most Popular</a>
              </div>
              <div className="cyber-card hologram-card p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
                <div className="text-4xl font-bold text-indigo-400 mb-6">$299<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-3 text-gray-300 mb-8">
                  <li>✓ Unlimited invoices</li>
                  <li>✓ Custom templates</li>
                  <li>✓ Advanced AI features</li>
                  <li>✓ White-label options</li>
                  <li>✓ Dedicated support</li>
                  <li>✓ Unlimited integrations</li>
                  <li>✓ API access</li>
                </ul>
                <a href="/contact" className="w-full cyber-button text-center block">Contact Sales</a>
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Why Choose AI Invoice Generator?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="cyber-card hologram-card p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Proven Results</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="text-3xl">⚡</div>
                    <div>
                      <p className="text-2xl font-bold text-indigo-400">15h</p>
                      <p className="text-gray-300">Hours saved per week</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-3xl">💰</div>
                    <div>
                      <p className="text-2xl font-bold text-indigo-400">40%</p>
                      <p className="text-gray-300">Faster payment collection</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-3xl">📈</div>
                    <div>
                      <p className="text-2xl font-bold text-indigo-400">95%</p>
                      <p className="text-gray-300">Reduction in billing errors</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cyber-card hologram-card p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Customer Success Stories</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-indigo-400 pl-4">
                    <p className="text-gray-300 italic">"We went from spending 20 hours per week on invoicing to just 2 hours. The AI automatically handles everything."</p>
                    <p className="text-indigo-400 font-semibold mt-2">- Sarah Williams, CFO</p>
                  </div>
                  <div className="border-l-4 border-indigo-400 pl-4">
                    <p className="text-gray-300 italic">"Our payment collection time dropped from 45 days to 18 days. The automated reminders work perfectly."</p>
                    <p className="text-indigo-400 font-semibold mt-2">- Michael Rodriguez, Business Owner</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4 neon-text">Ready to Streamline Your Invoicing?</h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses using our AI Invoice Generator to automate their billing process and get paid faster.
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

export default AIInvoiceGeneratorPage;