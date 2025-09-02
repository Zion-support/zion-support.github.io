import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Workflow, 
  Zap, 
  Bot, 
  Database, 
  Shield, 
  Globe, 
  ArrowRight, 
  CheckCircle, 
  Star,
  DollarSign,
  ExternalLink,
  Play,
  Target,
  PieChart,
  Activity,
  Eye,
  Headphones,
  Mail,
  Phone,
  Settings,
  Clock,
  Users,
  BarChart3,
  Cpu,
  Network
} from 'lucide-react';

export default function AIWorkflowAutomationStudio() {
  const features = [
    {
      icon: Workflow,
      title: "Visual Workflow Builder",
      description: "Drag-and-drop interface to create complex workflows without coding. Intuitive design with pre-built templates."
    },
    {
      icon: Bot,
      title: "AI-Powered Automation",
      description: "Intelligent automation that learns from your processes and suggests optimizations using machine learning."
    },
    {
      icon: Database,
      title: "500+ Integrations",
      description: "Connect with popular tools like Salesforce, Slack, Google Workspace, Microsoft 365, and custom APIs."
    },
    {
      icon: Zap,
      title: "Real-Time Triggers",
      description: "Instant workflow execution based on events, schedules, or conditions with sub-second response times."
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "SOC 2 Type II compliant with end-to-end encryption, audit logs, and role-based access control."
    },
    {
      icon: Globe,
      title: "Multi-Cloud Deployment",
      description: "Deploy workflows across AWS, Azure, GCP, or on-premises with automatic scaling and failover."
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$199",
      period: "/month",
      description: "Perfect for small teams",
      features: [
        "Up to 1,000 workflow executions/month",
        "Basic integrations (50+ apps)",
        "Visual workflow builder",
        "Email support",
        "Standard templates",
        "Basic analytics"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$599",
      period: "/month",
      description: "Ideal for growing businesses",
      features: [
        "Up to 10,000 workflow executions/month",
        "All integrations (500+ apps)",
        "AI-powered automation",
        "Priority support",
        "Custom templates",
        "Advanced analytics & reporting",
        "API access",
        "Team collaboration"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$1,999",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited workflow executions",
        "Custom integrations & APIs",
        "Advanced AI automation",
        "24/7 dedicated support",
        "White-label solution",
        "Custom analytics & dashboards",
        "Advanced API & webhooks",
        "Multi-tenant architecture",
        "SLA guarantee (99.9% uptime)"
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Save 20+ Hours Weekly",
      description: "Automate repetitive tasks and focus on high-value work that drives business growth."
    },
    {
      icon: Target,
      title: "99.9% Accuracy",
      description: "Eliminate human errors with intelligent automation that follows exact business rules."
    },
    {
      icon: DollarSign,
      title: "ROI in 30 Days",
      description: "See immediate cost savings and productivity gains with measurable ROI within the first month."
    },
    {
      icon: Activity,
      title: "Scale Effortlessly",
      description: "Handle increased workload without additional staff through intelligent process automation."
    }
  ];

  const useCases = [
    {
      industry: "Sales & Marketing",
      challenge: "Manual lead qualification and follow-up processes",
      solution: "Automated lead scoring, email sequences, and CRM updates based on prospect behavior",
      result: "40% increase in qualified leads"
    },
    {
      industry: "HR & Operations",
      challenge: "Time-consuming employee onboarding and document processing",
      solution: "Automated onboarding workflows, document generation, and system provisioning",
      result: "60% reduction in onboarding time"
    },
    {
      industry: "Customer Support",
      challenge: "High volume of repetitive support tickets",
      solution: "Intelligent ticket routing, automated responses, and escalation workflows",
      result: "50% faster ticket resolution"
    },
    {
      industry: "Finance & Accounting",
      challenge: "Manual invoice processing and approval workflows",
      solution: "Automated invoice capture, approval routing, and payment processing",
      result: "70% reduction in processing time"
    }
  ];

  const integrations = [
    { name: "Salesforce", category: "CRM" },
    { name: "HubSpot", category: "Marketing" },
    { name: "Slack", category: "Communication" },
    { name: "Microsoft Teams", category: "Communication" },
    { name: "Google Workspace", category: "Productivity" },
    { name: "Microsoft 365", category: "Productivity" },
    { name: "Zapier", category: "Automation" },
    { name: "QuickBooks", category: "Accounting" },
    { name: "Stripe", category: "Payments" },
    { name: "Shopify", category: "E-commerce" },
    { name: "Mailchimp", category: "Email Marketing" },
    { name: "Jira", category: "Project Management" }
  ];

  return (
    <>
      <Helmet>
        <title>AI Workflow Automation Studio - Zion Tech Group</title>
        <meta name="description" content="Automate business processes with our AI-powered workflow studio. Visual builder, 500+ integrations, and intelligent automation. Starting at $199/month." />
        <meta name="keywords" content="workflow automation, business process automation, AI automation, workflow builder, process optimization, business automation" />
        <link rel="canonical" href="https://ziontechgroup.com/services/ai-workflow-automation-studio" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-600/10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-indigo-400 text-sm font-medium mb-8">
                <Workflow className="w-4 h-4 mr-2" />
                AI Workflow Automation Studio
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Workflow
                <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent"> Automation Studio</span>
              </h1>
              <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
                Automate complex business processes with our AI-powered workflow studio. 
                Visual builder, 500+ integrations, and intelligent automation to transform your operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-lg hover:from-indigo-600 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Start Automating
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <button className="inline-flex items-center px-8 py-4 border border-indigo-500/30 text-indigo-400 font-semibold rounded-lg hover:bg-indigo-500/10 transition-all duration-200">
                  <Play className="mr-2 w-5 h-5" />
                  Watch Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Powerful Automation Features
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Build sophisticated workflows with our intuitive visual builder and AI-powered automation engine.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-slate-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Integrations Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                500+ Integrations Available
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Connect with all your favorite tools and services seamlessly
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {integrations.map((integration, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-4 text-center hover:bg-slate-800/70 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Network className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-sm font-semibold text-white mb-1">{integration.name}</h3>
                  <p className="text-xs text-slate-400">{integration.category}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Measurable Business Impact
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                See real results with our AI-powered workflow automation platform
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-slate-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Industry Use Cases
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                See how different industries leverage our workflow automation platform
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mr-3">
                      <Target className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{useCase.industry}</h3>
                  </div>
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-purple-400 mb-2">Challenge:</h4>
                    <p className="text-slate-300 text-sm">{useCase.challenge}</p>
                  </div>
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-blue-400 mb-2">Solution:</h4>
                    <p className="text-slate-300 text-sm">{useCase.solution}</p>
                  </div>
                  <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-3">
                    <h4 className="text-sm font-medium text-green-400 mb-1">Result:</h4>
                    <p className="text-green-300 text-sm font-semibold">{useCase.result}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Transparent Pricing
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Choose the plan that fits your automation needs. All plans include our core features.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative bg-slate-800/50 backdrop-blur-sm border rounded-xl p-8 ${plan.popular ? 'border-purple-500/50 ring-2 ring-purple-500/20' : 'border-slate-700'}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-slate-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-slate-400 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-slate-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white hover:from-purple-600 hover:to-pink-700'
                        : 'bg-slate-700 text-white hover:bg-slate-600'
                    }`}
                  >
                    Get Started
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Automate Your Workflows?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Join thousands of companies already using our platform to streamline their operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-lg hover:from-indigo-600 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 border border-indigo-500/30 text-indigo-400 font-semibold rounded-lg hover:bg-indigo-500/10 transition-all duration-200"
              >
                <Phone className="mr-2 w-5 h-5" />
                Call +1 302 464 0950
              </a>
            </div>
            <div className="mt-8 text-slate-400">
              <p>Questions? Email us at <a href="mailto:kleber@ziontechgroup.com" className="text-indigo-400 hover:text-indigo-300">kleber@ziontechgroup.com</a></p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}