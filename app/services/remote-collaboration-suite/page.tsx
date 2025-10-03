// import React from 'react';
// Metadata interface for React Helmet
interface Metadata {
  title?: string;
  description?: string;
  keywords?: string;
}
import { Link } from 'react-router-dom';

export const metadata: Metadata = {
  title: 'Remote Collaboration Suite | Zion Tech Group - Enterprise Remote Work Solutions',
  description: 'Comprehensive remote work platform integrating video conferencing, messaging, project management, and team collaboration tools for distributed teams.',
  keywords: 'remote collaboration, video conferencing, project management, team collaboration, distributed teams, remote work tools',
};

export default function RemoteCollaborationSuitePage() {
  const tools = [
    {
      name: "Video Conferencing Pro",
      description: "Enterprise-grade video conferencing with advanced features for large teams",
      features: [
        "HD video up to 4K resolution",
        "Screen sharing and whiteboarding",
        "Recording and transcription",
        "Breakout rooms",
        "Virtual backgrounds",
        "Meeting analytics"
      ],
      pricing: "$15/user/month"
    },
    {
      name: "Team Messaging Hub",
      description: "Secure team communication platform with file sharing and integrations",
      features: [
        "Real-time messaging",
        "File and document sharing",
        "Voice and video calls",
        "Bot integrations",
        "Message search and archiving",
        "Custom emojis and reactions"
      ],
      pricing: "$8/user/month"
    },
    {
      name: "Project Management Suite",
      description: "Comprehensive project management with agile methodologies and team collaboration",
      features: [
        "Kanban and Scrum boards",
        "Task assignment and tracking",
        "Time tracking and reporting",
        "Gantt charts",
        "Resource management",
        "Client collaboration"
      ],
      pricing: "$12/user/month"
    },
    {
      name: "Document Collaboration",
      description: "Real-time document editing and collaboration with version control",
      features: [
        "Real-time collaborative editing",
        "Version history and tracking",
        "Comments and suggestions",
        "Template library",
        "Advanced permissions",
        "Integration with cloud storage"
      ],
      pricing: "$10/user/month"
    }
  ];

  const features = [
    {
      category: "Communication",
      items: [
        "HD video conferencing for up to 1000 participants",
        "Crystal-clear audio with noise cancellation",
        "Instant messaging with file sharing",
        "Screen sharing and remote control",
        "Virtual whiteboarding and annotation",
        "Meeting recordings with AI transcription"
      ]
    },
    {
      category: "Project Management",
      items: [
        "Agile and waterfall project methodologies",
        "Task dependencies and critical path analysis",
        "Resource allocation and workload management",
        "Time tracking and productivity analytics",
        "Client portal and stakeholder reporting",
        "Integration with popular development tools"
      ]
    },
    {
      category: "Security & Compliance",
      items: [
        "End-to-end encryption for all communications",
        "SOC 2 Type II compliance",
        "GDPR and HIPAA compliance options",
        "Single sign-on (SSO) integration",
        "Advanced admin controls and permissions",
        "Audit logs and compliance reporting"
      ]
    },
    {
      category: "Integrations",
      items: [
        "Slack, Microsoft Teams, and Discord integration",
        "Google Workspace and Microsoft 365 sync",
        "Jira, Asana, and Trello connectivity",
        "Salesforce and HubSpot integration",
        "Custom API and webhook support",
        "Zapier automation workflows"
      ]
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$25/user/month",
      description: "Perfect for small teams getting started with remote work",
      features: [
        "Up to 25 video participants",
        "Basic messaging and file sharing",
        "Simple project management",
        "5GB storage per user",
        "Email support",
        "Basic integrations"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$45/user/month",
      description: "Ideal for growing teams that need advanced collaboration features",
      features: [
        "Up to 100 video participants",
        "Advanced messaging and collaboration",
        "Full project management suite",
        "100GB storage per user",
        "Priority support",
        "Advanced integrations",
        "Analytics and reporting"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$75/user/month",
      description: "For large organizations with complex collaboration needs",
      features: [
        "Unlimited video participants",
        "Advanced security and compliance",
        "Custom integrations and APIs",
        "Unlimited storage",
        "Dedicated account manager",
        "Custom training and onboarding",
        "Advanced analytics and insights"
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      title: "Increased Productivity",
      description: "Teams report 30% productivity increase with our collaboration tools",
      icon: "📈"
    },
    {
      title: "Cost Savings",
      description: "Reduce travel and office costs by up to 50%",
      icon: "💰"
    },
    {
      title: "Better Work-Life Balance",
      description: "Flexible work arrangements improve employee satisfaction",
      icon: "⚖️"
    },
    {
      title: "Global Talent Access",
      description: "Hire the best talent regardless of location",
      icon: "🌍"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Remote Collaboration Suite
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Complete remote work platform integrating video conferencing, messaging, project management, 
            and team collaboration tools. Empower your distributed teams to work together seamlessly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" 
              className="bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
            >
              Start Free Trial
            </Link>
            <Link to="/pricing" 
              className="border border-purple-600 text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
            >
              View Pricing
            </Link>
          </div>
        </div>

        {/* Tools Overview */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {tools.map((tool, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{tool.name}</h3>
                  <p className="text-gray-600 mb-4">{tool.description}</p>
                </div>
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold">
                  {tool.pricing}
                </div>
              </div>
              
              <ul className="space-y-2 mb-6">
                {tool.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-600">
                    <span className="text-green-500 mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Link to="/contact"
                className="inline-block w-full text-center bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
              >
                Try Free Trial
              </Link>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{feature.category}</h3>
              <ul className="space-y-4">
                {feature.items.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-purple-500 mr-3 mt-1">✓</span>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Transform Your Remote Work Experience
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Plans */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Flexible Pricing Plans
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-xl shadow-lg p-8 relative ${
                  plan.popular ? 'ring-2 ring-purple-500 scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-purple-600 mb-2">{plan.price}</div>
                  <p className="text-gray-600">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <span className="text-purple-500 mr-3">✓</span>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact"
                  className={`block w-full text-center py-3 rounded-lg font-semibold transition-colors ${
                    plan.popular
                      ? 'bg-purple-600 text-white hover:bg-purple-700'
                      : 'border border-purple-600 text-purple-600 hover:bg-purple-50'
                  }`}
                >
                  Start Free Trial
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Success Metrics */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">
            Proven Results for Remote Teams
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">30%</div>
              <p className="text-purple-100">Increase in team productivity</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">50%</div>
              <p className="text-purple-100">Reduction in operational costs</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">95%</div>
              <p className="text-purple-100">User satisfaction rate</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">24/7</div>
              <p className="text-purple-100">Customer support availability</p>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Empower Your Remote Teams?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of organizations already using our remote collaboration suite to 
            boost productivity, reduce costs, and improve team satisfaction.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a 
              href="tel:+13024640950" 
              className="flex items-center justify-center bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
            >
              📞 Call: +1 302 464 0950
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com" 
              className="flex items-center justify-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              ✉️ Email: kleber@ziontechgroup.com
            </a>
          </div>
          <p className="text-gray-500">
            📍 364 E Main St STE 1008, Middletown, DE 19709
          </p>
        </div>
      </div>
    </div>
  );
}