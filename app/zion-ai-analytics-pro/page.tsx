import React from 'react';
import { Helmet } from 'react-helmet-async';

const ZionAIAnalyticsProPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Zion AI Analytics Pro - Advanced Business Intelligence & Data Analytics Platform | Zion Tech Group</title>
        <meta name="description" content="Transform your business data into actionable insights with Zion AI Analytics Pro. Advanced AI-powered analytics, real-time dashboards, predictive modeling, and comprehensive business intelligence solutions." />
        <meta name="keywords" content="AI analytics, business intelligence, data analytics, predictive modeling, real-time dashboards, data visualization, machine learning, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/zion-ai-analytics-pro" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 quantum-field-bg">
        <div className="holographic-grid">
          <div className="container mx-auto px-4 py-16">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <h1 className="text-6xl font-bold mb-6 text-cyberpunk">
                Zion AI Analytics Pro
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Advanced AI-powered business intelligence platform that transforms your data into actionable insights, 
                predictive analytics, and real-time decision-making capabilities.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="btn-quantum">
                  Start Free Trial
                </button>
                <button className="btn-holographic">
                  View Demo
                </button>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <div className="holographic-card hover-quantum p-6">
                <div className="text-4xl mb-4 neon-glow-advanced">📊</div>
                <h3 className="text-xl font-bold mb-3 text-cyberpunk">Real-Time Dashboards</h3>
                <p className="text-gray-300">
                  Interactive dashboards with live data updates, customizable widgets, and advanced filtering options.
                </p>
              </div>

              <div className="holographic-card hover-quantum p-6">
                <div className="text-4xl mb-4 neon-glow-advanced">🤖</div>
                <h3 className="text-xl font-bold mb-3 text-cyberpunk">AI-Powered Insights</h3>
                <p className="text-gray-300">
                  Machine learning algorithms that automatically detect patterns, anomalies, and trends in your data.
                </p>
              </div>

              <div className="holographic-card hover-quantum p-6">
                <div className="text-4xl mb-4 neon-glow-advanced">📈</div>
                <h3 className="text-xl font-bold mb-3 text-cyberpunk">Predictive Analytics</h3>
                <p className="text-gray-300">
                  Forecast future trends, customer behavior, and business outcomes with advanced predictive models.
                </p>
              </div>

              <div className="holographic-card hover-quantum p-6">
                <div className="text-4xl mb-4 neon-glow-advanced">🔗</div>
                <h3 className="text-xl font-bold mb-3 text-cyberpunk">Data Integration</h3>
                <p className="text-gray-300">
                  Connect to 100+ data sources including databases, APIs, cloud services, and third-party platforms.
                </p>
              </div>

              <div className="holographic-card hover-quantum p-6">
                <div className="text-4xl mb-4 neon-glow-advanced">⚡</div>
                <h3 className="text-xl font-bold mb-3 text-cyberpunk">Real-Time Processing</h3>
                <p className="text-gray-300">
                  Process millions of data points in real-time with sub-second response times and 99.9% uptime.
                </p>
              </div>

              <div className="holographic-card hover-quantum p-6">
                <div className="text-4xl mb-4 neon-glow-advanced">🔒</div>
                <h3 className="text-xl font-bold mb-3 text-cyberpunk">Enterprise Security</h3>
                <p className="text-gray-300">
                  Bank-level encryption, role-based access control, and compliance with GDPR, CCPA, and SOC 2.
                </p>
              </div>
            </div>

            {/* Pricing Section */}
            <div className="mb-16">
              <h2 className="text-4xl font-bold text-center mb-12 text-cyberpunk">
                Choose Your Plan
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {/* Starter Plan */}
                <div className="holographic-card p-8 text-center">
                  <h3 className="text-2xl font-bold mb-4 text-cyberpunk">Starter</h3>
                  <div className="text-4xl font-bold mb-4 neon-glow-advanced">$29<span className="text-lg">/month</span></div>
                  <ul className="text-left space-y-3 mb-8">
                    <li>✓ Up to 5 data sources</li>
                    <li>✓ 10,000 data points/month</li>
                    <li>✓ 3 dashboard templates</li>
                    <li>✓ Basic AI insights</li>
                    <li>✓ Email support</li>
                  </ul>
                  <button className="btn-quantum w-full">Get Started</button>
                </div>

                {/* Professional Plan */}
                <div className="holographic-card p-8 text-center border-2 border-blue-400 relative">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                    Most Popular
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-cyberpunk">Professional</h3>
                  <div className="text-4xl font-bold mb-4 neon-glow-advanced">$99<span className="text-lg">/month</span></div>
                  <ul className="text-left space-y-3 mb-8">
                    <li>✓ Up to 25 data sources</li>
                    <li>✓ 100,000 data points/month</li>
                    <li>✓ Unlimited dashboards</li>
                    <li>✓ Advanced AI insights</li>
                    <li>✓ Predictive analytics</li>
                    <li>✓ Custom integrations</li>
                    <li>✓ Priority support</li>
                  </ul>
                  <button className="btn-holographic w-full">Get Started</button>
                </div>

                {/* Enterprise Plan */}
                <div className="holographic-card p-8 text-center">
                  <h3 className="text-2xl font-bold mb-4 text-cyberpunk">Enterprise</h3>
                  <div className="text-4xl font-bold mb-4 neon-glow-advanced">$299<span className="text-lg">/month</span></div>
                  <ul className="text-left space-y-3 mb-8">
                    <li>✓ Unlimited data sources</li>
                    <li>✓ Unlimited data points</li>
                    <li>✓ Custom AI models</li>
                    <li>✓ White-label solution</li>
                    <li>✓ Dedicated support</li>
                    <li>✓ On-premise deployment</li>
                    <li>✓ Custom SLA</li>
                  </ul>
                  <button className="btn-quantum w-full">Contact Sales</button>
                </div>
              </div>
            </div>

            {/* Use Cases */}
            <div className="mb-16">
              <h2 className="text-4xl font-bold text-center mb-12 text-cyberpunk">
                Perfect For
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="holographic-card p-6 text-center">
                  <div className="text-3xl mb-3">🏢</div>
                  <h3 className="font-bold mb-2">E-commerce</h3>
                  <p className="text-sm text-gray-300">Track sales, customer behavior, and inventory in real-time</p>
                </div>
                <div className="holographic-card p-6 text-center">
                  <div className="text-3xl mb-3">🏦</div>
                  <h3 className="font-bold mb-2">Finance</h3>
                  <p className="text-sm text-gray-300">Monitor transactions, detect fraud, and predict market trends</p>
                </div>
                <div className="holographic-card p-6 text-center">
                  <div className="text-3xl mb-3">🏥</div>
                  <h3 className="font-bold mb-2">Healthcare</h3>
                  <p className="text-sm text-gray-300">Analyze patient data, optimize operations, and improve outcomes</p>
                </div>
                <div className="holographic-card p-6 text-center">
                  <div className="text-3xl mb-3">🏭</div>
                  <h3 className="font-bold mb-2">Manufacturing</h3>
                  <p className="text-sm text-gray-300">Optimize production, predict maintenance, and reduce costs</p>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center holographic-card p-12">
              <h2 className="text-4xl font-bold mb-6 text-cyberpunk">
                Ready to Transform Your Data?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join thousands of businesses already using Zion AI Analytics Pro to make data-driven decisions and drive growth.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="btn-holographic text-lg px-8 py-4">
                  Start Free Trial
                </button>
                <button className="btn-quantum text-lg px-8 py-4">
                  Schedule Demo
                </button>
              </div>
              <p className="text-sm text-gray-400 mt-4">
                No credit card required • 14-day free trial • Cancel anytime
              </p>
            </div>

            {/* Contact Information */}
            <div className="text-center mt-16 text-gray-400">
              <p>Questions? Contact us at <a href="mailto:kleber@ziontechgroup.com" className="text-blue-400 hover:text-blue-300">kleber@ziontechgroup.com</a></p>
              <p>Phone: <a href="tel:+13024640950" className="text-blue-400 hover:text-blue-300">+1 302 464 0950</a></p>
              <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ZionAIAnalyticsProPage;
