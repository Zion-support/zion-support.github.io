import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import FuturisticBackground from '../components/FuturisticBackground';

const MicroSAASPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid relative">
      <FuturisticBackground />
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 relative z-10">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
            Micro SAAS Solutions
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium">
            Powerful, Affordable Software Solutions for Every Business
          </p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Discover our collection of specialized micro SAAS applications designed to solve specific business problems 
            with elegant, cost-effective solutions. From productivity tools to specialized business applications.
          </p>
        </section>

        {/* Micro SAAS Categories */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
            Micro SAAS Categories
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Productivity Tools */}
            <div className="cyber-card hologram-card">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-white mb-4">Productivity Tools</h3>
              <p className="text-gray-300 mb-4">
                Streamline your workflow with intelligent productivity applications.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Task Management AI</li>
                <li>• Time Tracking Pro</li>
                <li>• Meeting Scheduler</li>
                <li>• Document Automation</li>
              </ul>
              <div className="mt-4">
                <div className="text-lg font-bold text-cyan-400">Starting at $9/month</div>
              </div>
            </div>

            {/* Marketing Tools */}
            <div className="cyber-card hologram-card">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-bold text-white mb-4">Marketing Tools</h3>
              <p className="text-gray-300 mb-4">
                Boost your marketing efforts with specialized AI-powered tools.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Social Media Scheduler</li>
                <li>• Email Campaign Manager</li>
                <li>• Content Calendar AI</li>
                <li>• Analytics Dashboard</li>
              </ul>
              <div className="mt-4">
                <div className="text-lg font-bold text-pink-400">Starting at $19/month</div>
              </div>
            </div>

            {/* E-commerce Tools */}
            <div className="cyber-card hologram-card">
              <div className="text-4xl mb-4">🛍️</div>
              <h3 className="text-xl font-bold text-white mb-4">E-commerce Tools</h3>
              <p className="text-gray-300 mb-4">
                Optimize your online store with intelligent e-commerce solutions.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Inventory Manager</li>
                <li>• Price Optimization</li>
                <li>• Customer Analytics</li>
                <li>• Order Automation</li>
              </ul>
              <div className="mt-4">
                <div className="text-lg font-bold text-green-400">Starting at $29/month</div>
              </div>
            </div>

            {/* HR & Team Management */}
            <div className="cyber-card hologram-card">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-xl font-bold text-white mb-4">HR & Team Management</h3>
              <p className="text-gray-300 mb-4">
                Manage your team effectively with smart HR applications.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Employee Onboarding</li>
                <li>• Performance Tracker</li>
                <li>• Leave Management</li>
                <li>• Team Collaboration</li>
              </ul>
              <div className="mt-4">
                <div className="text-lg font-bold text-blue-400">Starting at $39/month</div>
              </div>
            </div>

            {/* Financial Tools */}
            <div className="cyber-card hologram-card">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-white mb-4">Financial Tools</h3>
              <p className="text-gray-300 mb-4">
                Take control of your finances with intelligent financial applications.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Expense Tracker</li>
                <li>• Invoice Generator</li>
                <li>• Budget Planner</li>
                <li>• Tax Calculator</li>
              </ul>
              <div className="mt-4">
                <div className="text-lg font-bold text-yellow-400">Starting at $24/month</div>
              </div>
            </div>

            {/* Analytics & Reporting */}
            <div className="cyber-card hologram-card">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-white mb-4">Analytics & Reporting</h3>
              <p className="text-gray-300 mb-4">
                Make data-driven decisions with powerful analytics tools.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Business Intelligence</li>
                <li>• Custom Dashboards</li>
                <li>• Automated Reports</li>
                <li>• Data Visualization</li>
              </ul>
              <div className="mt-4">
                <div className="text-lg font-bold text-purple-400">Starting at $49/month</div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Micro SAAS Products */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
            Featured Micro SAAS Products
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="cyber-card hologram-card">
              <h3 className="text-2xl font-bold text-white mb-4">AI Task Manager Pro</h3>
              <p className="text-gray-300 mb-6">
                Intelligent task management with AI-powered prioritization, deadline prediction, and automated scheduling.
              </p>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-300">Features:</span>
                  <span className="text-cyan-400">AI Prioritization, Auto-scheduling</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Price:</span>
                  <span className="text-green-400 font-bold">$19/month</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Free Trial:</span>
                  <span className="text-blue-400">14 days</span>
                </div>
              </div>
              <a href="/contact" className="cyber-button w-full text-center block mt-6">
                Get Started
              </a>
            </div>

            <div className="cyber-card hologram-card">
              <h3 className="text-2xl font-bold text-white mb-4">Social Media AI Scheduler</h3>
              <p className="text-gray-300 mb-6">
                Automate your social media presence with AI-generated content, optimal posting times, and engagement analytics.
              </p>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-300">Features:</span>
                  <span className="text-cyan-400">AI Content, Auto-posting</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Price:</span>
                  <span className="text-green-400 font-bold">$29/month</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Free Trial:</span>
                  <span className="text-blue-400">7 days</span>
                </div>
              </div>
              <a href="/contact" className="cyber-button w-full text-center block mt-6">
                Get Started
              </a>
            </div>

            <div className="cyber-card hologram-card">
              <h3 className="text-2xl font-bold text-white mb-4">E-commerce Analytics Pro</h3>
              <p className="text-gray-300 mb-6">
                Advanced analytics for e-commerce with customer behavior insights, sales forecasting, and inventory optimization.
              </p>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-300">Features:</span>
                  <span className="text-cyan-400">Sales Forecasting, Inventory AI</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Price:</span>
                  <span className="text-green-400 font-bold">$49/month</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Free Trial:</span>
                  <span className="text-blue-400">14 days</span>
                </div>
              </div>
              <a href="/contact" className="cyber-button w-full text-center block mt-6">
                Get Started
              </a>
            </div>

            <div className="cyber-card hologram-card">
              <h3 className="text-2xl font-bold text-white mb-4">Invoice AI Generator</h3>
              <p className="text-gray-300 mb-6">
                Automatically generate professional invoices with AI-powered pricing suggestions and payment tracking.
              </p>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-300">Features:</span>
                  <span className="text-cyan-400">Auto-pricing, Payment Tracking</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Price:</span>
                  <span className="text-green-400 font-bold">$14/month</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Free Trial:</span>
                  <span className="text-blue-400">30 days</span>
                </div>
              </div>
              <a href="/contact" className="cyber-button w-full text-center block mt-6">
                Get Started
              </a>
            </div>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
            Micro SAAS Pricing Plans
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="cyber-card hologram-card">
              <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$9/month</div>
              <ul className="text-gray-300 space-y-3 mb-8">
                <li>✓ 1 Micro SAAS app</li>
                <li>✓ Basic features</li>
                <li>✓ Email support</li>
                <li>✓ Standard integrations</li>
                <li>✓ 1GB storage</li>
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
              <div className="text-4xl font-bold text-cyan-400 mb-6">$29/month</div>
              <ul className="text-gray-300 space-y-3 mb-8">
                <li>✓ Up to 5 Micro SAAS apps</li>
                <li>✓ Advanced features</li>
                <li>✓ Priority support</li>
                <li>✓ Custom integrations</li>
                <li>✓ 10GB storage</li>
                <li>✓ API access</li>
                <li>✓ Analytics dashboard</li>
              </ul>
              <a href="/contact" className="cyber-button w-full text-center block">
                Get Started
              </a>
            </div>

            <div className="cyber-card hologram-card">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$99/month</div>
              <ul className="text-gray-300 space-y-3 mb-8">
                <li>✓ Unlimited Micro SAAS apps</li>
                <li>✓ All features</li>
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

        {/* Benefits Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
            Why Choose Our Micro SAAS Solutions?
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Key Benefits</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3">✓</span>
                  <span>Affordable pricing for small businesses</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3">✓</span>
                  <span>No long-term contracts required</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3">✓</span>
                  <span>Easy setup and integration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3">✓</span>
                  <span>Regular updates and new features</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3">✓</span>
                  <span>24/7 customer support</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Perfect For</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3">✓</span>
                  <span>Small to medium businesses</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3">✓</span>
                  <span>Startups and entrepreneurs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3">✓</span>
                  <span>Freelancers and consultants</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3">✓</span>
                  <span>Remote teams</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3">✓</span>
                  <span>E-commerce businesses</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-slate-800 to-purple-900 rounded-2xl p-12 cyber-card">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Join 1,000+ businesses using our micro SAAS solutions to streamline operations and boost productivity.
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

export default MicroSAASPage;