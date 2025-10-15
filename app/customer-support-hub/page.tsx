import React from 'react';
import SEOHead from '../components/SEOHead';

const CustomerSupportHubPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Customer Support Hub - Zion Tech Group"
        description="AI-powered customer support platform with intelligent ticketing, chatbot integration, and comprehensive support analytics."
        keywords="customer support, help desk, ticketing system, AI chatbot, support analytics, customer service"
        canonicalUrl="https://ziontechgroup.com/customer-support-hub"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative py-20">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-green-900 to-slate-900"></div>
          <div className="cyber-grid absolute inset-0 opacity-20"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="holographic">Customer Support Hub</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              AI-powered <span className="text-green-400 font-semibold">customer support platform</span> 
              that delivers exceptional customer experiences
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="cyber-button text-lg px-8 py-4">
                Start Free Trial
              </button>
              <button className="cyber-button text-lg px-8 py-4 border-green-400 text-green-400 hover:border-green-300 hover:text-green-300">
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
                Powerful <span className="gradient-text">Support Features</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to provide world-class customer support
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "AI-Powered Ticketing",
                  description: "Intelligent ticket routing and automated responses powered by AI",
                  icon: "🎫",
                  features: ["Smart routing", "Auto-categorization", "Priority detection", "SLA management"]
                },
                {
                  title: "Live Chat & Chatbot",
                  description: "Multi-channel support with AI chatbot and live agent handoff",
                  icon: "💬",
                  features: ["AI chatbot", "Live chat", "Proactive messaging", "Chat history"]
                },
                {
                  title: "Knowledge Base",
                  description: "Comprehensive knowledge base with AI-powered search and suggestions",
                  icon: "📚",
                  features: ["Smart search", "Article suggestions", "Version control", "Analytics"]
                },
                {
                  title: "Multi-Channel Support",
                  description: "Support customers across email, chat, phone, and social media",
                  icon: "📱",
                  features: ["Email integration", "Social media", "Phone support", "Unified inbox"]
                },
                {
                  title: "Analytics & Reporting",
                  description: "Comprehensive analytics to measure and improve support performance",
                  icon: "📊",
                  features: ["Performance metrics", "Customer satisfaction", "Agent productivity", "Custom reports"]
                },
                {
                  title: "Team Management",
                  description: "Advanced team management and collaboration tools",
                  icon: "👥",
                  features: ["Agent roles", "Workload balancing", "Shift management", "Training tools"]
                }
              ].map((feature, index) => (
                <div key={index} className="card-cyber hover-lift group">
                  <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{feature.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-green-400 mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {feature.features.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-gray-300 text-sm flex items-center">
                          <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
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

        {/* Benefits Section */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Why Choose <span className="gradient-text">Our Platform</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See the measurable impact on your customer support operations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { metric: "50%", description: "Faster response times", icon: "⚡" },
                { metric: "85%", description: "Customer satisfaction", icon: "😊" },
                { metric: "40%", description: "Reduced support costs", icon: "💰" },
                { metric: "24/7", description: "Always available", icon: "🕐" }
              ].map((benefit, index) => (
                <div key={index} className="glass-dark rounded-lg p-6 text-center hover-lift">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <div className="text-3xl font-bold text-green-400 mb-2">{benefit.metric}</div>
                  <p className="text-gray-300">{benefit.description}</p>
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
                Choose the perfect plan for your support team
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Starter",
                  price: "$49",
                  period: "/month",
                  description: "Perfect for small teams",
                  features: [
                    "Up to 5 agents",
                    "Unlimited tickets",
                    "Basic AI features",
                    "Email support",
                    "Knowledge base"
                  ],
                  popular: false
                },
                {
                  name: "Professional",
                  price: "$149",
                  period: "/month",
                  description: "Ideal for growing teams",
                  features: [
                    "Up to 25 agents",
                    "Advanced AI features",
                    "Multi-channel support",
                    "Priority support",
                    "Custom integrations",
                    "Analytics dashboard"
                  ],
                  popular: true
                },
                {
                  name: "Enterprise",
                  price: "Custom",
                  period: "",
                  description: "Tailored for large organizations",
                  features: [
                    "Unlimited agents",
                    "Full AI suite",
                    "White-label options",
                    "24/7 support",
                    "Custom development",
                    "Dedicated support"
                  ],
                  popular: false
                }
              ].map((plan, index) => (
                <div key={index} className={`glass-dark rounded-2xl p-8 relative ${plan.popular ? 'ring-2 ring-green-400' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-green-400 text-white px-6 py-2 rounded-full text-sm font-semibold">Most Popular</span>
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
                        <span className="w-5 h-5 bg-green-400 rounded-full mr-3 flex items-center justify-center">
                          <span className="text-white text-xs">✓</span>
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 px-4 rounded-lg font-semibold transition-colors ${
                    plan.popular 
                      ? 'bg-green-400 text-white hover:bg-green-500' 
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
                Ready to Transform Your Support?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Start your free trial today and see how AI can revolutionize your customer support
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="cyber-button text-lg px-8 py-4">
                  Start Free Trial
                </button>
                <button className="cyber-button text-lg px-8 py-4 border-blue-400 text-blue-400 hover:border-blue-300 hover:text-blue-300">
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

export default CustomerSupportHubPage;