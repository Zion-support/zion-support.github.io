'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIAnalyticsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-grid quantum-particles">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 holographic-text cyber-glitch floating">
              AI Analytics Dashboard
            </h1>
            <p className="text-xl md:text-2xl text-purple-400 mb-8 font-medium cyber-glow pulse-glow">
              Real-time Business Intelligence with AI
            </p>
            <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your data into actionable insights with our AI-powered analytics platform. 
              Get real-time dashboards, predictive modeling, and automated reporting that helps 
              you make data-driven decisions faster than ever.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:+13024640950"
                className="cyber-button w-full sm:w-auto text-center"
              >
                📞 Call Now: (302) 464-0950
              </a>
              <a
                href="/contact"
                className="cyber-button w-full sm:w-auto text-center"
                style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
              >
                Get Free Demo
              </a>
            </div>
          </section>

          {/* Features Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
              Powerful Analytics Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="quantum-hologram p-6 energy-pulse">
                <div className="text-4xl mb-4 text-center cyber-scan-line">📊</div>
                <h3 className="text-xl font-bold text-white mb-3 text-center neon-text">Real-time Dashboards</h3>
                <p className="text-gray-300 text-center">
                  Live data visualization with customizable dashboards that update in real-time 
                  across all your business metrics.
                </p>
              </div>

              <div className="quantum-hologram p-6 energy-pulse">
                <div className="text-4xl mb-4 text-center cyber-scan-line">🔮</div>
                <h3 className="text-xl font-bold text-white mb-3 text-center neon-text">Predictive Modeling</h3>
                <p className="text-gray-300 text-center">
                  Advanced machine learning models that forecast trends, customer behavior, 
                  and business outcomes with 95% accuracy.
                </p>
              </div>

              <div className="quantum-hologram p-6 energy-pulse">
                <div className="text-4xl mb-4 text-center cyber-scan-line">🤖</div>
                <h3 className="text-xl font-bold text-white mb-3 text-center neon-text">AI Insights</h3>
                <p className="text-gray-300 text-center">
                  Automated analysis and recommendations powered by AI that identify 
                  opportunities and risks in your data.
                </p>
              </div>

              <div className="quantum-hologram p-6 energy-pulse">
                <div className="text-4xl mb-4 text-center cyber-scan-line">📈</div>
                <h3 className="text-xl font-bold text-white mb-3 text-center neon-text">Custom Reports</h3>
                <p className="text-gray-300 text-center">
                  Automated report generation with natural language queries and 
                  scheduled delivery to stakeholders.
                </p>
              </div>

              <div className="quantum-hologram p-6 energy-pulse">
                <div className="text-4xl mb-4 text-center cyber-scan-line">🔗</div>
                <h3 className="text-xl font-bold text-white mb-3 text-center neon-text">Data Integration</h3>
                <p className="text-gray-300 text-center">
                  Connect to 100+ data sources including CRM, ERP, social media, 
                  and web analytics platforms.
                </p>
              </div>

              <div className="quantum-hologram p-6 energy-pulse">
                <div className="text-4xl mb-4 text-center cyber-scan-line">⚡</div>
                <h3 className="text-xl font-bold text-white mb-3 text-center neon-text">Instant Alerts</h3>
                <p className="text-gray-300 text-center">
                  Smart alerts and notifications when key metrics change or 
                  anomalies are detected in your data.
                </p>
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
              Analytics Pricing
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="quantum-hologram p-8 energy-pulse">
                <h3 className="text-2xl font-bold text-white mb-4 text-center neon-text">Basic</h3>
                <div className="text-4xl font-bold text-purple-400 mb-6 text-center neon-text">$199/month</div>
                <ul className="text-gray-300 space-y-3 mb-8">
                  <li>✓ Up to 5 data sources</li>
                  <li>✓ 3 custom dashboards</li>
                  <li>✓ Basic AI insights</li>
                  <li>✓ Email reports</li>
                  <li>✓ Email support</li>
                </ul>
                <a href="/contact" className="cyber-button w-full text-center block">
                  Get Started
                </a>
              </div>

              <div className="quantum-hologram p-8 energy-pulse pulse-glow">
                <div className="text-center mb-4">
                  <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 text-center neon-text">Professional</h3>
                <div className="text-4xl font-bold text-cyan-400 mb-6 text-center neon-text">$399/month</div>
                <ul className="text-gray-300 space-y-3 mb-8">
                  <li>✓ Up to 20 data sources</li>
                  <li>✓ Unlimited dashboards</li>
                  <li>✓ Advanced AI analytics</li>
                  <li>✓ Predictive modeling</li>
                  <li>✓ API access</li>
                  <li>✓ Priority support</li>
                </ul>
                <a href="/contact" className="cyber-button w-full text-center block">
                  Get Started
                </a>
              </div>

              <div className="quantum-hologram p-8 energy-pulse">
                <h3 className="text-2xl font-bold text-white mb-4 text-center neon-text">Enterprise</h3>
                <div className="text-4xl font-bold text-orange-400 mb-6 text-center neon-text">$799/month</div>
                <ul className="text-gray-300 space-y-3 mb-8">
                  <li>✓ Unlimited data sources</li>
                  <li>✓ Custom AI models</li>
                  <li>✓ White-label solution</li>
                  <li>✓ Advanced security</li>
                  <li>✓ 24/7 support</li>
                  <li>✓ Custom training</li>
                </ul>
                <a href="/contact" className="cyber-button w-full text-center block">
                  Contact Sales
                </a>
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
              Proven Results
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="quantum-hologram p-6 energy-pulse">
                <h3 className="text-xl font-bold text-white mb-4 neon-text">📊 85% Faster Decision Making</h3>
                <p className="text-gray-300">
                  Our clients make data-driven decisions 85% faster with real-time insights 
                  and automated reporting.
                </p>
              </div>

              <div className="quantum-hologram p-6 energy-pulse">
                <h3 className="text-xl font-bold text-white mb-4 neon-text">💰 250% ROI Increase</h3>
                <p className="text-gray-300">
                  Businesses using our AI analytics see an average 250% increase in ROI 
                  within the first year.
                </p>
              </div>

              <div className="quantum-hologram p-6 energy-pulse">
                <h3 className="text-xl font-bold text-white mb-4 neon-text">🎯 90% Accuracy in Predictions</h3>
                <p className="text-gray-300">
                  Our AI models achieve 90% accuracy in predicting market trends, 
                  customer behavior, and business outcomes.
                </p>
              </div>

              <div className="quantum-hologram p-6 energy-pulse">
                <h3 className="text-xl font-bold text-white mb-4 neon-text">⚡ 60% Time Savings</h3>
                <p className="text-gray-300">
                  Automate data analysis and reporting to save 60% of your time 
                  on manual analytics tasks.
                </p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6 neon-text">
              Ready to Unlock Your Data's Potential?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Join 500+ companies using our AI analytics platform to make smarter decisions, 
              identify new opportunities, and drive business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:+13024640950"
                className="cyber-button w-full sm:w-auto text-center"
              >
                📞 Call: (302) 464-0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="cyber-button w-full sm:w-auto text-center"
                style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
              >
                📧 Email Us
              </a>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AIAnalyticsPage;