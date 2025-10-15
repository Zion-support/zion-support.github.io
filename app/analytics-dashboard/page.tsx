import React from 'react';
import SEOHead from '../components/SEOHead';

const AnalyticsDashboardPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Analytics Dashboard - Zion Tech Group"
        description="Comprehensive business analytics dashboard with real-time insights and AI-powered data visualization."
        keywords="analytics dashboard, business intelligence, data visualization, real-time analytics, reporting"
        canonicalUrl="https://ziontechgroup.com/analytics-dashboard"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative py-20">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900"></div>
          <div className="cyber-grid absolute inset-0 opacity-20"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="holographic">Analytics Dashboard</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your data into <span className="text-blue-400 font-semibold">actionable insights</span> 
              with our AI-powered analytics platform
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="cyber-button text-lg px-8 py-4">
                Start Free Trial
              </button>
              <button className="cyber-button text-lg px-8 py-4 border-blue-400 text-blue-400 hover:border-blue-300 hover:text-blue-300">
                View Demo
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Powerful <span className="gradient-text">Analytics Features</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to understand your business data and make informed decisions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Real-Time Dashboards",
                  description: "Live dashboards that update in real-time with your latest data",
                  icon: "📊",
                  features: ["Live data updates", "Custom dashboards", "Drag & drop builder", "Mobile responsive"]
                },
                {
                  title: "AI-Powered Insights",
                  description: "Get intelligent insights and recommendations from your data",
                  icon: "🧠",
                  features: ["Pattern recognition", "Anomaly detection", "Predictive analytics", "Smart alerts"]
                },
                {
                  title: "Advanced Visualizations",
                  description: "50+ chart types and visualization options for every data type",
                  icon: "📈",
                  features: ["Interactive charts", "Heat maps", "Geographic maps", "Custom visualizations"]
                },
                {
                  title: "Data Integration",
                  description: "Connect to 100+ data sources and APIs seamlessly",
                  icon: "🔗",
                  features: ["Database connections", "API integrations", "File uploads", "Real-time sync"]
                },
                {
                  title: "Custom Reports",
                  description: "Create and schedule custom reports for stakeholders",
                  icon: "📋",
                  features: ["Report builder", "Scheduled reports", "Email delivery", "PDF export"]
                },
                {
                  title: "Collaboration Tools",
                  description: "Share insights and collaborate with your team",
                  icon: "👥",
                  features: ["Team sharing", "Comments & annotations", "Version control", "Access management"]
                }
              ].map((feature, index) => (
                <div key={index} className="card-cyber hover-lift group">
                  <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{feature.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-blue-400 mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {feature.features.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-gray-300 text-sm flex items-center">
                          <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className="w-full cyber-button">
                    Learn More
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Use <span className="gradient-text">Cases</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See how different industries use our analytics dashboard
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "Sales Analytics", description: "Track sales performance and pipeline metrics", icon: "💰" },
                { title: "Marketing ROI", description: "Measure marketing campaign effectiveness", icon: "📢" },
                { title: "Customer Insights", description: "Understand customer behavior and preferences", icon: "👥" },
                { title: "Operations", description: "Monitor operational efficiency and KPIs", icon: "⚙️" }
              ].map((useCase, index) => (
                <div key={index} className="glass-dark rounded-lg p-6 text-center hover-lift">
                  <div className="text-4xl mb-4">{useCase.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                  <p className="text-gray-300">{useCase.description}</p>
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
                Simple <span className="gradient-text">Pricing</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan for your analytics needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Starter",
                  price: "$79",
                  period: "/month",
                  description: "Perfect for small teams",
                  features: [
                    "Up to 5 dashboards",
                    "10 data sources",
                    "Basic visualizations",
                    "Email support",
                    "1GB storage"
                  ],
                  popular: false
                },
                {
                  name: "Professional",
                  price: "$199",
                  period: "/month",
                  description: "Ideal for growing businesses",
                  features: [
                    "Unlimited dashboards",
                    "50 data sources",
                    "Advanced AI insights",
                    "Priority support",
                    "10GB storage",
                    "Custom reports"
                  ],
                  popular: true
                },
                {
                  name: "Enterprise",
                  price: "Custom",
                  period: "",
                  description: "Tailored for large organizations",
                  features: [
                    "Unlimited everything",
                    "Custom integrations",
                    "White-label options",
                    "24/7 support",
                    "Unlimited storage",
                    "Dedicated support"
                  ],
                  popular: false
                }
              ].map((plan, index) => (
                <div key={index} className={`glass-dark rounded-2xl p-8 relative ${plan.popular ? 'ring-2 ring-blue-400' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-blue-400 text-white px-6 py-2 rounded-full text-sm font-semibold">Most Popular</span>
                    </div>
                  )}
                  
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-6">{plan.description}</p>
                  
                  <div className="mb-8">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <span className="w-5 h-5 bg-blue-400 rounded-full mr-3 flex items-center justify-center">
                          <span className="text-white text-xs">✓</span>
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 px-4 rounded-lg font-semibold transition-colors ${
                    plan.popular 
                      ? 'bg-blue-400 text-white hover:bg-blue-500' 
                      : 'bg-gray-700 text-white hover:bg-gray-600'
                  }`}>
                    {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                  </button>
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
                Ready to Transform Your Data?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Start your free trial today and see the power of AI-driven analytics
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="cyber-button text-lg px-8 py-4">
                  Start Free Trial
                </button>
                <button className="cyber-button text-lg px-8 py-4 border-green-400 text-green-400 hover:border-green-300 hover:text-green-300">
                  Schedule Demo
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AnalyticsDashboardPage;