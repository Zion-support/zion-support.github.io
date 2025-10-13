import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  BarChart3, 
  Brain, 
  TrendingUp, 
  Database, 
  Zap, 
  Shield, 
  CheckCircle,
  Star,
  Users,
  Clock,
  Award,
  Settings,
  MessageSquare,
  Target,
  PieChart,
  FileText,
  Bell,
  Download,
  Play,
  Pause,
  RefreshCw,
  Heart,
  ThumbsUp,
  AlertTriangle,
  Workflow,
  Cpu,
  Bot,
  GitBranch
} from "lucide-react";

export default function AiWorkflowAutomationPro() {
  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Intelligent Process Discovery",
      description: "AI automatically discovers and maps your business processes, identifying optimization opportunities and automation potential.",
      benefits: ["90% process discovery accuracy", "Automated mapping", "Optimization suggestions"]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Smart Workflow Builder",
      description: "Visual workflow designer with AI assistance that suggests optimal process flows and automatically handles complex logic.",
      benefits: ["Drag-and-drop interface", "AI suggestions", "No-code automation"]
    },
    {
      icon: <Bot className="w-8 h-8" />,
      title: "Intelligent Task Automation",
      description: "Automate repetitive tasks with AI that learns from your patterns and adapts to changing requirements automatically.",
      benefits: ["Self-learning automation", "Pattern recognition", "Adaptive workflows"]
    },
    {
      icon: <Workflow className="w-8 h-8" />,
      title: "Cross-Platform Integration",
      description: "Seamlessly connect and automate workflows across 500+ applications and services with intelligent data mapping.",
      benefits: ["500+ integrations", "Smart data mapping", "Real-time sync"]
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Predictive Process Optimization",
      description: "AI continuously monitors and optimizes workflows, predicting bottlenecks and suggesting improvements in real-time.",
      benefits: ["Real-time optimization", "Bottleneck prediction", "Performance insights"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Enterprise Security & Compliance",
      description: "Bank-level security with automated compliance monitoring for GDPR, HIPAA, SOX, and industry-specific regulations.",
      benefits: ["Enterprise security", "Compliance automation", "Audit trails"]
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$39",
      period: "per month",
      description: "Perfect for small teams",
      features: [
        "Up to 10 workflows",
        "Basic integrations",
        "Standard automation",
        "Email support",
        "Mobile app access"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Professional",
      price: "$99",
      period: "per month",
      description: "Ideal for growing businesses",
      features: [
        "Unlimited workflows",
        "Advanced integrations",
        "AI-powered automation",
        "Priority support",
        "Custom triggers",
        "Analytics dashboard"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$299",
      period: "per month",
      description: "For large organizations",
      features: [
        "Everything in Professional",
        "Custom AI models",
        "24/7 dedicated support",
        "White-label solution",
        "On-premise deployment",
        "Advanced security"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Robert Johnson",
      role: "Operations Director",
      company: "ManufacturingCorp",
      content: "AI Workflow Automation Pro reduced our manual processes by 80%. We now process orders 5x faster with zero errors.",
      rating: 5
    },
    {
      name: "Maria Garcia",
      role: "VP Operations",
      company: "ServicePro",
      content: "The intelligent process discovery found optimization opportunities we never knew existed. Our efficiency increased by 60%.",
      rating: 5
    },
    {
      name: "James Wilson",
      role: "CTO",
      company: "TechInnovate",
      content: "The cross-platform integration capabilities are incredible. We automated our entire customer onboarding process across 15 different systems.",
      rating: 5
    }
  ];

  const useCases = [
    {
      title: "Customer Onboarding",
      description: "Automate the entire customer onboarding process from signup to first value delivery.",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Invoice Processing",
      description: "Automatically process invoices, validate data, and route for approval with AI-powered accuracy.",
      icon: <FileText className="w-6 h-6" />
    },
    {
      title: "Lead Management",
      description: "Automate lead scoring, qualification, and routing to the right sales representative.",
      icon: <Target className="w-6 h-6" />
    },
    {
      title: "IT Operations",
      description: "Automate incident response, system monitoring, and maintenance tasks with intelligent triggers.",
      icon: <Settings className="w-6 h-6" />
    }
  ];

  const metrics = [
    {
      title: "Process Efficiency",
      improvement: "+75%",
      description: "Average increase in process efficiency"
    },
    {
      title: "Error Reduction",
      improvement: "-90%",
      description: "Decrease in manual errors"
    },
    {
      title: "Time Savings",
      improvement: "+60%",
      description: "Time saved on repetitive tasks"
    },
    {
      title: "ROI",
      improvement: "+300%",
      description: "Average return on investment"
    }
  ];

  const automationExamples = [
    {
      title: "Email Marketing Automation",
      description: "Automatically segment customers, create personalized campaigns, and track engagement metrics.",
      timeSaved: "20 hours/week"
    },
    {
      title: "Document Processing",
      description: "Extract data from documents, validate information, and route for approval automatically.",
      timeSaved: "15 hours/week"
    },
    {
      title: "Customer Support",
      description: "Automatically categorize tickets, route to appropriate agents, and provide instant responses.",
      timeSaved: "25 hours/week"
    },
    {
      title: "Financial Reporting",
      description: "Collect data from multiple sources, generate reports, and distribute to stakeholders automatically.",
      timeSaved: "12 hours/week"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
      <Helmet>
        <title>AI Workflow Automation Pro - Intelligent Process Automation | Zion Tech Group</title>
        <meta name="description" content="Transform your business with AI-powered workflow automation. Automate processes, reduce errors by 90%, and increase efficiency by 75% with intelligent automation." />
        <meta name="keywords" content="AI workflow automation, process automation, business automation, workflow management, intelligent automation, process optimization" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-workflow-automation-pro" />
        
        {/* Open Graph */}
        <meta property="og:title" content="AI Workflow Automation Pro - Intelligent Process Automation" />
        <meta property="og:description" content="Transform your business with AI-powered workflow automation. Automate processes, reduce errors by 90%, and increase efficiency by 75%." />
        <meta property="og:url" content="https://ziontechgroup.com/ai-workflow-automation-pro" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Workflow Automation Pro - Intelligent Process Automation" />
        <meta name="twitter:description" content="Transform your business with AI-powered workflow automation. Automate processes, reduce errors by 90%, and increase efficiency by 75%." />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "AI Workflow Automation Pro",
            "description": "Intelligent workflow automation platform with AI-powered process optimization",
            "url": "https://ziontechgroup.com/ai-workflow-automation-pro",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web, iOS, Android",
            "offers": {
              "@type": "Offer",
              "price": "39",
              "priceCurrency": "USD",
              "priceValidUntil": "2025-12-31"
            },
            "provider": {
              "@type": "Organization",
              "name": "Zion Tech Group",
              "url": "https://ziontechgroup.com"
            }
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/20 border border-green-500/30 mb-6">
            <Zap className="w-5 h-5 mr-2 text-green-400" />
            <span className="text-green-300 font-medium">AI-Powered Workflow Automation</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            AI Workflow Automation
            <span className="block bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              Pro
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your business with AI-powered workflow automation. Automate processes, reduce errors by 90%, 
            and increase efficiency by 75% with intelligent automation that learns and adapts.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105"
            >
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/demo"
              className="inline-flex items-center px-8 py-4 border border-green-500 text-green-300 font-semibold rounded-lg hover:bg-green-500/10 transition-all duration-300"
            >
              <Play className="mr-2 w-5 h-5" />
              Watch Demo
            </Link>
          </div>
          
          {/* Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">{metric.improvement}</div>
                <div className="text-gray-300 mb-1">{metric.title}</div>
                <div className="text-sm text-gray-400">{metric.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Powerful AI Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Leverage cutting-edge AI technology to automate and optimize your business processes
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-green-500/50 transition-all duration-300">
                <div className="text-green-400 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-300 mb-4">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Automation Examples Section */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Real-World Automation Examples
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how our customers are saving time and increasing efficiency with AI automation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {automationExamples.map((example, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold text-white">{example.title}</h3>
                  <div className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm font-medium">
                    {example.timeSaved}
                  </div>
                </div>
                <p className="text-gray-300">{example.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Perfect for Every Business Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI workflow automation platform adapts to your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="text-center group">
                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 group-hover:border-green-500/50 transition-all duration-300">
                  <div className="text-green-400 mb-4 flex justify-center">
                    {useCase.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {useCase.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your business size and automation needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative bg-slate-800/50 backdrop-blur-sm border rounded-xl p-8 ${
                plan.popular 
                  ? 'border-green-500 ring-2 ring-green-500/20' 
                  : 'border-slate-700'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-2">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:from-green-600 hover:to-emerald-600'
                      : 'border border-green-500 text-green-300 hover:bg-green-500/10'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what our customers say about AI Workflow Automation Pro
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Automate Your Business Processes?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of businesses already using AI Workflow Automation Pro to streamline operations and boost productivity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105"
            >
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/demo"
              className="inline-flex items-center px-8 py-4 border border-green-500 text-green-300 font-semibold rounded-lg hover:bg-green-500/10 transition-all duration-300"
            >
              <Play className="mr-2 w-5 h-5" />
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}