import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Workflow, 
  Zap, 
  Bot, 
  Clock, 
  CheckCircle, 
  ArrowRight, 
  Phone, 
  Mail, 
  Star,
  Award,
  DollarSign,
  Globe,
  Smartphone,
  Database,
  BarChart3,
  Users,
  Settings,
  Shield,
  Activity,
  TrendingUp,
  Target,
  FileText,
  MessageSquare,
  Calendar,
  Bell,
  AlertCircle,
  Search,
  Filter,
  Download,
  Share2,
  HelpCircle,
  ExternalLink,
  Cpu,
  Network,
  Lock,
  Eye,
  Play,
  Pause,
  RotateCcw,
  RefreshCw
} from 'lucide-react';

export default function AIWorkflowAutomationSuite() {
  const features = [
    {
      icon: Bot,
      title: "Intelligent Process Automation",
      description: "AI-powered bots that learn and adapt to your business processes, handling complex workflows with minimal human intervention.",
      benefits: ["Reduce manual work by 80%", "Eliminate human errors", "Process 10x more tasks", "24/7 operation"]
    },
    {
      icon: Workflow,
      title: "Visual Workflow Designer",
      description: "Drag-and-drop interface to create, modify, and optimize business workflows without coding knowledge.",
      benefits: ["No-code workflow creation", "Real-time process monitoring", "Easy modifications", "Team collaboration"]
    },
    {
      icon: Zap,
      title: "Smart Trigger System",
      description: "Advanced trigger mechanisms that automatically initiate workflows based on events, schedules, or conditions.",
      benefits: ["Instant response to events", "Scheduled automation", "Conditional logic", "Multi-step triggers"]
    },
    {
      icon: BarChart3,
      title: "Performance Analytics",
      description: "Comprehensive analytics and reporting to track workflow performance, bottlenecks, and optimization opportunities.",
      benefits: ["Real-time performance metrics", "Bottleneck identification", "ROI tracking", "Optimization insights"]
    }
  ];

  const automationTypes = [
    {
      category: "Sales & Marketing",
      icon: Target,
      automations: [
        "Lead qualification and scoring",
        "Email campaign automation",
        "Social media posting",
        "Customer onboarding",
        "Follow-up sequences"
      ]
    },
    {
      category: "Customer Service",
      icon: MessageSquare,
      automations: [
        "Ticket routing and prioritization",
        "Response generation",
        "Escalation management",
        "Customer feedback collection",
        "Knowledge base updates"
      ]
    },
    {
      category: "HR & Operations",
      icon: Users,
      automations: [
        "Employee onboarding",
        "Timesheet processing",
        "Expense approval workflows",
        "Performance review scheduling",
        "Document management"
      ]
    },
    {
      category: "Finance & Accounting",
      icon: DollarSign,
      automations: [
        "Invoice processing",
        "Payment reminders",
        "Expense categorization",
        "Financial reporting",
        "Budget monitoring"
      ]
    }
  ];

  const pricingTiers = [
    {
      name: "Starter",
      price: "$199/month",
      description: "Perfect for small teams",
      features: [
        "Up to 100 workflow executions/month",
        "5 active workflows",
        "Basic integrations (10)",
        "Email support",
        "Standard templates"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$499/month",
      description: "Ideal for growing businesses",
      features: [
        "Up to 1,000 workflow executions/month",
        "25 active workflows",
        "Advanced integrations (50)",
        "Priority support",
        "Custom workflows",
        "API access",
        "Team collaboration"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$1,299/month",
      description: "For large organizations",
      features: [
        "Unlimited workflow executions",
        "Unlimited workflows",
        "All integrations",
        "24/7 dedicated support",
        "Custom development",
        "Advanced security",
        "White-label options",
        "On-premise deployment"
      ],
      popular: false
    }
  ];

  const successMetrics = [
    {
      metric: "80%",
      description: "Reduction in manual tasks",
      icon: TrendingUp
    },
    {
      metric: "95%",
      description: "Faster process completion",
      icon: Clock
    },
    {
      metric: "60%",
      description: "Cost savings on operations",
      icon: DollarSign
    },
    {
      metric: "99.9%",
      description: "Process accuracy rate",
      icon: CheckCircle
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>AI Workflow Automation Suite - Zion Tech Group</title>
        <meta name="description" content="Automate your business processes with our AI-powered workflow automation suite. Reduce manual work by 80% and increase efficiency with intelligent automation." />
        <meta name="keywords" content="workflow automation, business process automation, AI automation, RPA, intelligent automation, process optimization" />
        <link rel="canonical" href="https://ziontechgroup.com/services/ai-workflow-automation-suite" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 py-20 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white mb-6">
              <Workflow className="w-5 h-5 mr-2" />
              <span className="text-sm font-medium">AI-Powered Automation</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              AI Workflow Automation Suite
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
              Transform your business operations with intelligent automation. 
              Reduce manual work by 80% and boost productivity with AI-powered workflows.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Start Automating Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                to="#demo" 
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
              >
                Watch Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            {successMetrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <metric.icon className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{metric.metric}</div>
                <p className="text-gray-600">{metric.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Powerful Automation Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to automate and optimize your business processes
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {features.map((feature, index) => (
              <div key={index} className="flex">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Automation Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Automate Any Business Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From sales to customer service, automate workflows across all departments
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {automationTypes.map((type, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <type.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{type.category}</h3>
                <ul className="space-y-2">
                  {type.automations.map((automation, automationIndex) => (
                    <li key={automationIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {automation}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the plan that fits your automation needs. Start free, scale as you grow.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`relative bg-white rounded-2xl shadow-lg p-8 ${tier.popular ? 'ring-2 ring-blue-500' : ''}`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                  <p className="text-gray-600 mb-4">{tier.description}</p>
                  <div className="text-4xl font-bold text-blue-600 mb-2">{tier.price}</div>
                </div>
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link 
                  to="/contact" 
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
                    tier.popular 
                      ? 'bg-blue-600 text-white hover:bg-blue-700' 
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Seamless Integrations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connect with your favorite tools and platforms
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              "Salesforce", "HubSpot", "Slack", "Microsoft Teams", "Google Workspace", "Zapier",
              "Mailchimp", "Shopify", "WooCommerce", "QuickBooks", "Xero", "Stripe",
              "AWS", "Azure", "Google Cloud", "Dropbox", "OneDrive", "Notion"
            ].map((integration, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-gray-100 rounded-lg mx-auto mb-3"></div>
                <p className="text-sm font-medium text-gray-700">{integration}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Automate Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of companies already saving time and money with intelligent automation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <a 
              href="tel:+13024640950" 
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call +1 302 464 0950
            </a>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Get in Touch</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 text-blue-600 mb-4" />
              <h4 className="font-semibold text-gray-900 mb-2">Phone</h4>
              <a href="tel:+13024640950" className="text-gray-600 hover:text-blue-600">
                +1 302 464 0950
              </a>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 text-blue-600 mb-4" />
              <h4 className="font-semibold text-gray-900 mb-2">Email</h4>
              <a href="mailto:kleber@ziontechgroup.com" className="text-gray-600 hover:text-blue-600">
                kleber@ziontechgroup.com
              </a>
            </div>
            <div className="flex flex-col items-center">
              <Globe className="w-8 h-8 text-blue-600 mb-4" />
              <h4 className="font-semibold text-gray-900 mb-2">Address</h4>
              <p className="text-gray-600 text-center">
                364 E Main St STE 1008<br />
                Middletown, DE 19709
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}