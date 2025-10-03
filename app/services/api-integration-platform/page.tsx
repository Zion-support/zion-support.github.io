import React from 'react';
import { Link } from 'react-router-dom';


export default function APIIntegrationPlatformPage() {
  const services = [
    {
      name: "API Gateway Pro",
      description: "Enterprise-grade API gateway with advanced routing, security, and monitoring capabilities",
      features: [
        "Advanced routing and load balancing",
        "Rate limiting and throttling",
        "API versioning and documentation",
        "Real-time monitoring and analytics",
        "Security policies and authentication",
        "Custom middleware support"
      ],
      pricing: "$299/month",
      useCases: ["Microservices architecture", "Third-party integrations", "API monetization", "Legacy system modernization"]
    },
    {
      name: "Data Sync Engine",
      description: "Intelligent data synchronization platform for real-time and batch data processing",
      features: [
        "Real-time data streaming",
        "Batch processing capabilities",
        "Data transformation and mapping",
        "Conflict resolution algorithms",
        "Incremental sync optimization",
        "Data quality monitoring"
      ],
      pricing: "$199/month",
      useCases: ["CRM synchronization", "E-commerce data sync", "Analytics pipeline", "Multi-system integration"]
    },
    {
      name: "Webhook Automation Hub",
      description: "Advanced webhook management platform with intelligent routing and error handling",
      features: [
        "Smart webhook routing",
        "Automatic retry mechanisms",
        "Payload transformation",
        "Event filtering and routing",
        "Webhook testing and debugging",
        "Comprehensive logging and monitoring"
      ],
      pricing: "$149/month",
      useCases: ["Event-driven architecture", "Third-party notifications", "Workflow automation", "Real-time updates"]
    },
    {
      name: "Legacy System Connector",
      description: "Specialized connectors for legacy systems with modern API interfaces",
      features: [
        "Pre-built legacy connectors",
        "Custom connector development",
        "Data format transformation",
        "Protocol translation",
        "Performance optimization",
        "Maintenance and support"
      ],
      pricing: "$399/month",
      useCases: ["Mainframe integration", "Database connectivity", "File system integration", "ERP system connections"]
    }
  ];

  const features = [
    {
      category: "API Management",
      items: [
        "Centralized API gateway with load balancing",
        "Advanced authentication and authorization",
        "Rate limiting and quota management",
        "API versioning and lifecycle management",
        "Comprehensive API documentation",
        "Developer portal and SDK generation"
      ]
    },
    {
      category: "Data Integration",
      items: [
        "Real-time data streaming and processing",
        "Batch data synchronization",
        "Data transformation and mapping",
        "Schema evolution and migration",
        "Data quality validation and monitoring",
        "Conflict resolution and data merging"
      ]
    },
    {
      category: "Security & Compliance",
      items: [
        "OAuth 2.0 and JWT authentication",
        "API key management and rotation",
        "End-to-end encryption",
        "SOC 2 Type II compliance",
        "GDPR and HIPAA compliance options",
        "Audit logging and compliance reporting"
      ]
    },
    {
      category: "Monitoring & Analytics",
      items: [
        "Real-time API performance monitoring",
        "Custom dashboards and reporting",
        "Alert management and notifications",
        "Usage analytics and insights",
        "Error tracking and debugging",
        "Performance optimization recommendations"
      ]
    }
  ];

  const pricingPlans = [
    {
      name: "Developer",
      price: "$99/month",
      description: "Perfect for startups and small development teams",
      features: [
        "Up to 10 API endpoints",
        "Basic authentication",
        "1M API calls/month",
        "Email support",
        "Basic monitoring",
        "Standard connectors"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$499/month",
      description: "Ideal for growing businesses with integration needs",
      features: [
        "Up to 100 API endpoints",
        "Advanced authentication",
        "10M API calls/month",
        "Priority support",
        "Advanced monitoring",
        "Custom connectors",
        "Webhook automation"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom pricing",
      description: "For large organizations with complex integration requirements",
      features: [
        "Unlimited API endpoints",
        "Enterprise security features",
        "Unlimited API calls",
        "Dedicated support team",
        "Custom monitoring and alerts",
        "White-label solutions",
        "On-premise deployment"
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      title: "Reduced Integration Time",
      description: "Cut integration development time by up to 70% with our pre-built connectors",
      icon: "⚡"
    },
    {
      title: "Improved System Reliability",
      description: "99.9% uptime guarantee with advanced monitoring and failover capabilities",
      icon: "🛡️"
    },
    {
      title: "Cost Savings",
      description: "Reduce integration costs by up to 60% compared to custom development",
      icon: "💰"
    },
    {
      title: "Scalable Architecture",
      description: "Handle millions of API calls with automatic scaling and load balancing",
      icon: "📈"
    }
  ];

  const integrations = [
    { name: "Salesforce", category: "CRM" },
    { name: "HubSpot", category: "Marketing" },
    { name: "Shopify", category: "E-commerce" },
    { name: "Stripe", category: "Payments" },
    { name: "Slack", category: "Communication" },
    { name: "Microsoft 365", category: "Productivity" },
    { name: "AWS", category: "Cloud" },
    { name: "Google Workspace", category: "Productivity" },
    { name: "Zendesk", category: "Support" },
    { name: "QuickBooks", category: "Accounting" },
    { name: "Mailchimp", category: "Email Marketing" },
    { name: "GitHub", category: "Development" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            API Integration Platform
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Comprehensive API integration platform for seamless software system connectivity. 
            Connect, manage, and monitor all your APIs from a single, powerful platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-indigo-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
            >
              Start Free Trial
            </Link>
            <Link 
              href="/pricing" 
              className="border border-indigo-600 text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-indigo-50 transition-colors"
            >
              View Pricing
            </Link>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.name}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                </div>
                <div className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-semibold">
                  {service.pricing}
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <span className="text-green-500 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Use Cases:</h4>
                <div className="flex flex-wrap gap-2">
                  {service.useCases.map((useCase, idx) => (
                    <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                      {useCase}
                    </span>
                  ))}
                </div>
              </div>
              
              <Link 
                href="/contact"
                className="inline-block w-full text-center bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
              >
                Start Free Trial
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
                    <span className="text-indigo-500 mr-3 mt-1">✓</span>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Popular Integrations */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Popular Integrations
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {integrations.map((integration, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4 text-center hover:bg-gray-100 transition-colors">
                <div className="font-semibold text-gray-900">{integration.name}</div>
                <div className="text-sm text-gray-500">{integration.category}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose Our API Integration Platform?
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
                  plan.popular ? 'ring-2 ring-indigo-500 scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-indigo-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-indigo-600 mb-2">{plan.price}</div>
                  <p className="text-gray-600">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <span className="text-indigo-500 mr-3">✓</span>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link 
                  href="/contact"
                  className={`block w-full text-center py-3 rounded-lg font-semibold transition-colors ${
                    plan.popular
                      ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                      : 'border border-indigo-600 text-indigo-600 hover:bg-indigo-50'
                  }`}
                >
                  {plan.name === 'Enterprise' ? 'Contact Sales' : 'Start Free Trial'}
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">
            Enterprise-Grade Performance
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">99.9%</div>
              <p className="text-indigo-100">Uptime SLA guarantee</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">&lt;50ms</div>
              <p className="text-indigo-100">Average API response time</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">70%</div>
              <p className="text-indigo-100">Reduction in integration time</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">24/7</div>
              <p className="text-indigo-100">Expert support availability</p>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Streamline Your Integrations?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses already using our API integration platform to connect systems, 
            automate workflows, and accelerate digital transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a 
              href="tel:+13024640950" 
              className="flex items-center justify-center bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
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