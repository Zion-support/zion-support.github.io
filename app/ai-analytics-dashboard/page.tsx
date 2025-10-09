'use client',
import React from 'react',
import Navigation from '../components/Navigation',
import Footer from '../components/Footer',

// Focus management utility;
const focusElement = (element: HTMLElement | null) => {
  if (element) {
    element.focus()
    element.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }
}

// Skip to main content functionality"
const skipToMain = () => {
  const main = document.querySelector('main')
  if (main) {
    focusElement(main)
  }
}


export default function AIAnalyticsDashboardPage() {
  return (<article >
      <Navigation />
      
      <main role="main" role="main" className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 holographic-text cyber-text">
            AI Analytics Dashboard"
          </h1>
          <p className="text-xl md:text-2xl text-green-600 mb-8 font-medium neon-glow">
            Real-Time Business Intelligence with Predictive Insights"
          </p>
          <p className="text-lg text-gray-500 max-w-4xl mx-auto mb-8">
            Transform your data into actionable insights with our AI-powered analytics platform. 
            Get real-time dashboards; predictive analytics, and automated reporting that drives business growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a;
              href="tel:+13024640950"
              className="cyber-button w-full sm:w-auto text-center"
            >
              📞 Call: (302) 464-0950;
            </a>
            <a;
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
            >
              Get Free Demo;
            </a>
          </div>
        </section>
        {/* Features Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            Powerful Features;
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="cyber-card hologram-card p-6">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-white mb-4">Real-Time Dashboards</h3>
              <p className="text-gray-500">
                Live data visualization with customizable dashboards that update in real-time;
                giving you instant insights into your business performance.
              </p>
            </div>
            
            <div className="cyber-card hologram-card p-6">
              <div className="text-4xl mb-4">🔮</div>
              <h3 className="text-xl font-bold text-white mb-4">Predictive Analytics</h3>
              <p className="text-gray-500">
                AI-powered forecasting and trend analysis to predict future outcomes;
                helping you make data-driven decisions with confidence.
              </p>
            </div>
            
            <div className="cyber-card hologram-card p-6">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-bold text-white mb-4">Automated Reports</h3>
              <p className="text-gray-500">
                Generate comprehensive reports automatically with AI insights;
                scheduled delivery, and customizable formats for different stakeholders.
              </p>
            </div>
            
            <div className="cyber-card hologram-card p-6">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-bold text-white mb-4">Performance Tracking</h3>
              <p className="text-gray-500">
                Monitor KPIs, track progress towards goals, and identify areas for"
                improvement with intelligent performance metrics and alerts.
              </p>
            </div>
            
            <div className="cyber-card hologram-card p-6">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-white mb-4">Data Integration</h3>
              <p className="text-gray-500">
                Connect multiple data sources seamlessly with our powerful integration"
                platform that works with 100+ popular business tools and databases.
              </p>
            </div>
            
            <div className="cyber-card hologram-card p-6">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-white mb-4">Custom Insights</h3>
              <p className="text-gray-500">
                Get personalized insights tailored to your industry and business model, 
                with AI that learns from your data patterns and preferences.
              </p>
            </div>
          </div>
        </section>
        {/* Use Cases Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            Perfect For"
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="cyber-card hologram-card p-6">
              <h3 className="text-xl font-bold text-white mb-4">E-commerce Businesses</h3>
              <p className="text-gray-500 mb-4">
                Track sales performance, customer behavior, inventory levels, and marketing ROI"
                with specialized e-commerce analytics and insights.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Sales trend analysis</li>
                <li>• Customer lifetime value tracking</li>
                <li>• Inventory optimization</li>
                <li>• Marketing attribution</li>
              </ul>
            </div>
            
            <div className="cyber-card hologram-card p-6">
              <h3 className="text-xl font-bold text-white mb-4">SaaS Companies</h3>
              <p className="text-gray-500 mb-4">
                Monitor user engagement, subscription metrics, churn rates, and feature adoption"
                to optimize your product and grow your business.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• User engagement metrics</li>
                <li>• Churn prediction models</li>
                <li>• Feature usage analytics</li>
                <li>• Revenue forecasting</li>
              </ul>
            </div>
            
            <div className="cyber-card hologram-card p-6">
              <h3 className="text-xl font-bold text-white mb-4">Marketing Agencies</h3>
              <p className="text-gray-500 mb-4">
                Track campaign performance across multiple channels, measure ROI, and optimize"
                marketing spend with comprehensive analytics and reporting.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Multi-channel attribution</li>
                <li>• Campaign performance tracking</li>
                <li>• ROI optimization</li>
                <li>• Client reporting automation</li>
              </ul>
            </div>
            
            <div className="cyber-card hologram-card p-6">
              <h3 className="text-xl font-bold text-white mb-4">Financial Services</h3>
              <p className="text-gray-500 mb-4">
                Monitor financial performance, risk metrics, compliance tracking, and customer"
                insights with specialized financial analytics and reporting.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Risk assessment models</li>
                <li>• Compliance monitoring</li>
                <li>• Portfolio performance</li>
                <li>• Regulatory reporting</li>
              </ul>
            </div>
          </div>
        </section>
        {/* Pricing Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            Pricing Plans"
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="cyber-card hologram-card p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
              <div className="text-4xl font-bold text-green-600 mb-6">$79<span className="text-lg text-gray-600">/month</span></div>
              <ul className="text-gray-500 space-y-3 mb-8">
                <li>✓ Up to 5 data sources</li>
                <li>✓ Basic dashboards</li>
                <li>✓ Standard reports</li>
                <li>✓ Email support</li>
                <li>✓ 1 user account</li>
              </ul>
              <a href="/contact" className="cyber-button w-full text-center">
                Get Started"
              </a>
            </div>
            
            <div className="cyber-card hologram-card p-8 text-center border-2 border-green-400">
              <div className="text-sm font-bold text-green-600 mb-2">MOST POPULAR</div>
              <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
              <div className="text-4xl font-bold text-green-600 mb-6">$199<span className="text-lg text-gray-600">/month</span></div>
              <ul className="text-gray-500 space-y-3 mb-8">
                <li>✓ Up to 20 data sources</li>
                <li>✓ Advanced dashboards</li>
                <li>✓ Predictive analytics</li>
                <li>✓ Custom reports</li>
                <li>✓ Priority support</li>
                <li>✓ Up to 5 users</li>
              </ul>
              <a href="/contact" className="cyber-button w-full text-center">
                Get Started"
              </a>
            </div>
            
            <div className="cyber-card hologram-card p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-green-600 mb-6">$499<span className="text-lg text-gray-600">/month</span></div>
              <ul className="text-gray-500 space-y-3 mb-8">
                <li>✓ Unlimited data sources</li>
                <li>✓ Custom dashboards</li>
                <li>✓ AI-powered insights</li>
                <li>✓ White-label options</li>
                <li>✓ Dedicated support</li>
                <li>✓ Unlimited users</li>
              </ul>
              <a href="/contact" className="cyber-button w-full text-center">
                Contact Sales"
              </a>
            </div>
          </div>
        </section>
        {/* Contact Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-white mb-8 neon-text">
            Ready to Unlock Your Data's Potential?
          </h2>
          <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto">
            Schedule a free demo to see how our AI Analytics Dashboard can transform"
            your business intelligence and drive data-driven decisions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a;
              href="tel:+13024640950"
              className="cyber-button w-full sm:w-auto text-center"
            >
              📞 Call: (302) 464-0950;
            </a>
            <a;
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-green-400 text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-400 hover:text-black transition-all duration-300"
            >
              📧 Email Us;
            </a>
          </div>
        </section>
      </main>
      
      <Footer />
    </article>
  )
}