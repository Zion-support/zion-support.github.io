import React from 'react';
import SEOHead from '../components/SEOHead';

const TaskManagerProPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Task Manager Pro - Zion Tech Group"
        description="AI-powered task management and team collaboration platform. Streamline your workflow with intelligent task automation."
        keywords="task manager, project management, team collaboration, AI automation, productivity tools"
        canonicalUrl="https://ziontechgroup.com/task-manager-pro"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative py-20">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
          <div className="cyber-grid absolute inset-0 opacity-20"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="holographic">Task Manager Pro</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              AI-powered <span className="text-purple-400 font-semibold">task management and team collaboration</span> 
              platform for modern teams
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="cyber-button text-lg px-8 py-4">
                Start Free Trial
              </button>
              <button className="cyber-button text-lg px-8 py-4 border-purple-400 text-purple-400 hover:border-purple-300 hover:text-purple-300">
                View Pricing
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Powerful <span className="gradient-text">Features</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to manage tasks, collaborate with your team, and boost productivity
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "AI Task Automation",
                  description: "Intelligent task creation, prioritization, and scheduling based on your work patterns",
                  icon: "🤖",
                  features: ["Smart task creation", "Auto-prioritization", "Deadline prediction", "Workload balancing"]
                },
                {
                  title: "Team Collaboration",
                  description: "Seamless collaboration tools for teams of any size",
                  icon: "👥",
                  features: ["Real-time updates", "Team chat", "File sharing", "Comment system"]
                },
                {
                  title: "Project Management",
                  description: "Complete project lifecycle management with Gantt charts and milestones",
                  icon: "📊",
                  features: ["Gantt charts", "Milestone tracking", "Resource planning", "Progress monitoring"]
                },
                {
                  title: "Time Tracking",
                  description: "Advanced time tracking and productivity analytics",
                  icon: "⏱️",
                  features: ["Automatic tracking", "Time reports", "Productivity insights", "Billable hours"]
                },
                {
                  title: "Custom Workflows",
                  description: "Create custom workflows and automation rules for your team",
                  icon: "⚙️",
                  features: ["Workflow builder", "Automation rules", "Custom fields", "Template library"]
                },
                {
                  title: "Integration Hub",
                  description: "Connect with your favorite tools and services",
                  icon: "🔗",
                  features: ["Slack integration", "Google Workspace", "Microsoft 365", "API access"]
                }
              ].map((feature, index) => (
                <div key={index} className="card-cyber hover-lift group">
                  <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{feature.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-purple-400 mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {feature.features.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-gray-300 text-sm flex items-center">
                          <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
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

        {/* Pricing Section */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Simple <span className="gradient-text">Pricing</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan for your team size and needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Starter",
                  price: "$29",
                  period: "/month",
                  description: "Perfect for small teams getting started",
                  features: [
                    "Up to 5 team members",
                    "Unlimited tasks",
                    "Basic AI features",
                    "Email support",
                    "5GB storage"
                  ],
                  popular: false
                },
                {
                  name: "Professional",
                  price: "$79",
                  period: "/month",
                  description: "Ideal for growing teams with advanced needs",
                  features: [
                    "Up to 25 team members",
                    "Advanced AI automation",
                    "Custom workflows",
                    "Priority support",
                    "50GB storage",
                    "API access"
                  ],
                  popular: true
                },
                {
                  name: "Enterprise",
                  price: "Custom",
                  period: "",
                  description: "Tailored solutions for large organizations",
                  features: [
                    "Unlimited team members",
                    "Full AI suite",
                    "White-label options",
                    "24/7 support",
                    "Unlimited storage",
                    "Custom integrations"
                  ],
                  popular: false
                }
              ].map((plan, index) => (
                <div key={index} className={`glass-dark rounded-2xl p-8 relative ${plan.popular ? 'ring-2 ring-purple-400' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-purple-400 text-white px-6 py-2 rounded-full text-sm font-semibold">Most Popular</span>
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
                        <span className="w-5 h-5 bg-purple-400 rounded-full mr-3 flex items-center justify-center">
                          <span className="text-white text-xs">✓</span>
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 px-4 rounded-lg font-semibold transition-colors ${
                    plan.popular 
                      ? 'bg-purple-400 text-white hover:bg-purple-500' 
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
                Ready to Boost Your Productivity?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Start your free trial today and see how Task Manager Pro can transform your workflow
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

export default TaskManagerProPage;