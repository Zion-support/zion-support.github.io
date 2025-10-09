import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ServicesShowcase from '../components/ServicesShowcase';
import { Helmet } from 'react-helmet-async';

const MicroSaasPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group | AI-Powered Business Tools</title>
        <meta name="description" content="50+ AI-powered micro SAAS applications including SEO optimizer, code reviewer, social media manager, email marketing, and more. Affordable tools for modern businesses." />
        <meta name="keywords" content="micro SAAS, AI tools, business applications, SEO optimizer, code reviewer, social media manager, email marketing, project management" />
        <meta property="og:title" content="Micro SAAS Solutions - Zion Tech Group" />
        <meta property="og:description" content="50+ AI-powered micro SAAS applications for modern businesses. Affordable, powerful tools to boost productivity." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/micro-saas" />
        <link rel="canonical" href="https://ziontechgroup.com/micro-saas" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 neon-text cyber-text">
              Micro SAAS Solutions
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium cyber-glow">
              50+ AI-Powered Business Tools
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Affordable, powerful AI-driven tools designed for modern businesses. From SEO optimization to project management, 
              our micro SAAS applications help you work smarter, not harder.
            </p>
          </section>

          {/* Micro SAAS Services */}
          <section className="mb-16">
            <ServicesShowcase category="micro-saas" showAll={true} />
          </section>

          {/* Features Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center neon-text">
              Why Choose Our Micro SAAS Tools?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="quantum-card p-6 text-center">
                <div className="text-3xl mb-4">💰</div>
                <h3 className="text-lg font-bold text-white mb-3 neon-text">Affordable</h3>
                <p className="text-gray-300 text-sm">
                  Starting from just $79/month, our tools provide exceptional value for money.
                </p>
              </div>
              <div className="quantum-card p-6 text-center">
                <div className="text-3xl mb-4">⚡</div>
                <h3 className="text-lg font-bold text-white mb-3 neon-text">AI-Powered</h3>
                <p className="text-gray-300 text-sm">
                  Leverage cutting-edge AI technology to automate and optimize your workflows.
                </p>
              </div>
              <div className="quantum-card p-6 text-center">
                <div className="text-3xl mb-4">🚀</div>
                <h3 className="text-lg font-bold text-white mb-3 neon-text">Easy to Use</h3>
                <p className="text-gray-300 text-sm">
                  Intuitive interfaces designed for users of all technical skill levels.
                </p>
              </div>
              <div className="quantum-card p-6 text-center">
                <div className="text-3xl mb-4">🔧</div>
                <h3 className="text-lg font-bold text-white mb-3 neon-text">Customizable</h3>
                <p className="text-gray-300 text-sm">
                  Tailor each tool to your specific business needs and requirements.
                </p>
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center neon-text">
              Simple, Transparent Pricing
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="quantum-card p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
                <div className="text-4xl font-bold text-cyan-400 mb-4 neon-text">$79<span className="text-lg text-gray-400">/month</span></div>
                <ul className="text-gray-300 space-y-2 mb-6">
                  <li>✓ 5 Micro SAAS Tools</li>
                  <li>✓ Basic AI Features</li>
                  <li>✓ Email Support</li>
                  <li>✓ Standard Templates</li>
                </ul>
                <a href="/contact" className="cyber-button w-full inline-block text-center">
                  Get Started
                </a>
              </div>
              
              <div className="quantum-card p-8 text-center border-2 border-cyan-400 relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-cyan-400 text-slate-900 px-4 py-1 rounded-full text-sm font-bold">
                  Most Popular
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
                <div className="text-4xl font-bold text-cyan-400 mb-4 neon-text">$199<span className="text-lg text-gray-400">/month</span></div>
                <ul className="text-gray-300 space-y-2 mb-6">
                  <li>✓ 15 Micro SAAS Tools</li>
                  <li>✓ Advanced AI Features</li>
                  <li>✓ Priority Support</li>
                  <li>✓ Custom Templates</li>
                  <li>✓ API Access</li>
                </ul>
                <a href="/contact" className="cyber-button w-full inline-block text-center">
                  Get Started
                </a>
              </div>
              
              <div className="quantum-card p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
                <div className="text-4xl font-bold text-cyan-400 mb-4 neon-text">$499<span className="text-lg text-gray-400">/month</span></div>
                <ul className="text-gray-300 space-y-2 mb-6">
                  <li>✓ All 50+ Tools</li>
                  <li>✓ Premium AI Features</li>
                  <li>✓ 24/7 Support</li>
                  <li>✓ White-label Options</li>
                  <li>✓ Custom Development</li>
                </ul>
                <a href="/contact" className="cyber-button w-full inline-block text-center">
                  Contact Sales
                </a>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="quantum-card p-8 max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text">
                Ready to Boost Your Productivity?
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Join thousands of businesses already using our AI-powered micro SAAS tools to streamline their operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="cyber-button inline-flex items-center justify-center"
                >
                  📞 Call Now: (302) 464-0950
                </a>
                <a
                  href="/contact"
                  className="cyber-button inline-flex items-center justify-center"
                  style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
                >
                  Start Free Trial
                </a>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default MicroSaasPage;