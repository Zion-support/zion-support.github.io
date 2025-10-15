import React from 'react';
import { Helmet } from 'react-helmet-async';
import { servicesData } from '../data/servicesData';

const MicroSAASSolutionsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive micro SaaS solutions including task management, CRM, analytics, expense tracking, and business automation tools with AI-powered features." />
        <meta name="keywords" content="micro saas, business software, task management, crm, analytics, inventory management, expense tracking, workflow automation, ai-powered tools" />
        <link rel="canonical" href="https://ziontechgroup.com/micro-saas-solutions" />
      </Helmet>
      
      <div className="min-h-screen relative overflow-hidden">
        {/* Hero Section */}
        <section className="relative py-20">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900"></div>
          <div className="cyber-grid absolute inset-0 opacity-20"></div>
          <div className="particles absolute inset-0"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="holographic">Micro SaaS Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Powerful <span className="text-cyan-400 font-semibold">micro SaaS applications</span> 
              designed to solve specific business challenges with AI-powered intelligence
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="cyber-button text-lg px-8 py-4">
                Explore Solutions
              </button>
              <button className="cyber-button text-lg px-8 py-4 border-cyan-400 text-cyan-400 hover:border-cyan-300 hover:text-cyan-300">
                View Pricing
              </button>
            </div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our <span className="gradient-text">Micro SaaS Suite</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive business applications that integrate seamlessly with your workflow
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicesData.microSaas.map((service) => (
                <div key={service.id} className="card-cyber hover-lift group">
                  <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-cyan-400 mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 4).map((feature, index) => (
                        <li key={index} className="text-gray-300 text-sm flex items-center">
                          <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-blue-400 mb-3">Benefits</h4>
                    <ul className="space-y-2">
                      {service.benefits.slice(0, 3).map((benefit, index) => (
                        <li key={index} className="text-gray-300 text-sm flex items-center">
                          <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex justify-between items-center mb-6">
                    <div>
                      <span className="text-2xl font-bold text-cyan-400">${service.pricing.basic}</span>
                      <span className="text-gray-400 text-sm ml-1">/month</span>
                    </div>
                    <a 
                      href={service.contactInfo.website} 
                      className="text-cyan-400 hover:text-cyan-300 text-sm font-semibold"
                    >
                      Learn More →
                    </a>
                  </div>

                  <button className="w-full cyber-button">
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Solution <span className="gradient-text">Categories</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Organized by business function for easy discovery
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { 
                  title: "Productivity & Management", 
                  description: "Task management, project tracking, and team collaboration tools",
                  icon: "⚡",
                  count: "8 Solutions"
                },
                { 
                  title: "Financial & Accounting", 
                  description: "Expense tracking, invoicing, and financial management tools",
                  icon: "💰",
                  count: "5 Solutions"
                },
                { 
                  title: "Marketing & Sales", 
                  description: "Lead generation, CRM, email marketing, and analytics tools",
                  icon: "📈",
                  count: "7 Solutions"
                },
                { 
                  title: "Security & Infrastructure", 
                  description: "Password management, backup, monitoring, and security tools",
                  icon: "🛡️",
                  count: "6 Solutions"
                }
              ].map((category, index) => (
                <div key={index} className="glass-dark rounded-lg p-8 text-center hover-lift">
                  <div className="text-6xl mb-4">{category.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-4">{category.title}</h3>
                  <p className="text-gray-300 mb-4">{category.description}</p>
                  <div className="text-cyan-400 font-semibold">{category.count}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Flexible <span className="gradient-text">Pricing</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your business needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Starter",
                  price: "$29",
                  period: "/month",
                  description: "Perfect for small teams and individual users",
                  features: [
                    "Up to 5 users",
                    "Basic features",
                    "Email support",
                    "5GB storage",
                    "Mobile app access"
                  ],
                  buttonText: "Start Free Trial",
                  popular: false
                },
                {
                  name: "Professional",
                  price: "$99",
                  period: "/month",
                  description: "Ideal for growing businesses",
                  features: [
                    "Up to 25 users",
                    "Advanced features",
                    "Priority support",
                    "50GB storage",
                    "API access",
                    "Custom integrations"
                  ],
                  buttonText: "Start Free Trial",
                  popular: true
                },
                {
                  name: "Enterprise",
                  price: "$299",
                  period: "/month",
                  description: "For large organizations",
                  features: [
                    "Unlimited users",
                    "All features",
                    "24/7 support",
                    "Unlimited storage",
                    "Custom development",
                    "Dedicated account manager"
                  ],
                  buttonText: "Contact Sales",
                  popular: false
                }
              ].map((plan, index) => (
                <div key={index} className={`glass-dark rounded-lg p-8 text-center hover-lift ${plan.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                  {plan.popular && (
                    <div className="bg-cyan-400 text-slate-900 text-sm font-bold py-1 px-3 rounded-full mb-4 inline-block">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-6">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-5xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-400 text-lg">{plan.period}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-gray-300 flex items-center">
                        <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                    plan.popular 
                      ? 'bg-cyan-400 text-slate-900 hover:bg-cyan-300' 
                      : 'bg-slate-700 text-white hover:bg-slate-600'
                  }`}>
                    {plan.buttonText}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Integration Section */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Seamless <span className="gradient-text">Integrations</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Connect with your favorite tools and services
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
              {[
                { name: "Slack", icon: "💬" },
                { name: "Microsoft Teams", icon: "👥" },
                { name: "Google Workspace", icon: "📧" },
                { name: "Salesforce", icon: "☁️" },
                { name: "HubSpot", icon: "🎯" },
                { name: "Zapier", icon: "⚡" },
                { name: "Stripe", icon: "💳" },
                { name: "PayPal", icon: "💰" },
                { name: "QuickBooks", icon: "📊" },
                { name: "Xero", icon: "📈" },
                { name: "Shopify", icon: "🛒" },
                { name: "WooCommerce", icon: "🛍️" }
              ].map((integration, index) => (
                <div key={index} className="glass-dark rounded-lg p-6 text-center hover-lift">
                  <div className="text-4xl mb-3">{integration.icon}</div>
                  <h3 className="text-white font-semibold">{integration.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="glass-dark rounded-2xl p-12">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Start your free trial today and experience the power of our micro SaaS solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="cyber-button text-lg px-8 py-4">
                  Start Free Trial
                </button>
                <button className="cyber-button text-lg px-8 py-4 border-green-400 text-green-400 hover:border-green-300 hover:text-green-300">
                  Schedule Demo
                </button>
              </div>
              <div className="mt-8 text-sm text-gray-400">
                <p>📞 <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300">+1 (302) 464-0950</a></p>
                <p>✉️ <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">kleber@ziontechgroup.com</a></p>
                <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MicroSAASSolutionsPage;