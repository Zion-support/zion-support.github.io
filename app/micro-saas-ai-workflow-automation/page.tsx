import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CpuChipIcon,
  ShieldCheckIcon,
  CloudIcon,
  ChartBarIcon,
  GlobeAltIcon,
  RocketLaunchIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  PhoneIcon,
  EnvelopeIcon,
  CurrencyDollarIcon,
  ClockIcon,
  UserGroupIcon,
  CogIcon,
  EyeIcon,
  ChatBubbleLeftRightIcon,
  DocumentTextIcon,
  LightBulbIcon,
  WrenchScrewdriverIcon,
  CommandLineIcon,
  ClipboardDocumentListIcon
} from '@heroicons/react/24/outline';

export default function MicroSaaSAIWorkflowAutomationPage() {
  const features = [
    {
      title: "AI Process Discovery",
      description: "Automatically discover and map your business processes using AI analysis of user interactions and data flows.",
      icon: EyeIcon,
      features: [
        "Process mining",
        "Workflow discovery",
        "Bottleneck identification",
        "Efficiency analysis",
        "Process visualization",
        "ROI calculation"
      ],
      color: "from-purple-500 to-pink-500",
      price: "$49/month",
      benefits: ["90% time savings", "Complete process visibility", "Data-driven insights"],
      useCases: ["Process optimization", "Compliance auditing", "Efficiency analysis"]
    },
    {
      title: "Smart Workflow Builder",
      description: "Create complex workflows with our drag-and-drop AI-powered workflow builder that suggests optimal paths.",
      icon: WrenchScrewdriverIcon,
      features: [
        "Visual workflow designer",
        "AI-powered suggestions",
        "Conditional logic",
        "Parallel processing",
        "Error handling",
        "Testing environment"
      ],
      color: "from-cyan-500 to-blue-500",
      price: "$79/month",
      benefits: ["No coding required", "Intelligent suggestions", "Rapid deployment"],
      useCases: ["Business process automation", "Approval workflows", "Data processing"]
    },
    {
      title: "AI Task Automation",
      description: "Automate repetitive tasks using AI that learns from your actions and improves over time.",
      icon: CommandLineIcon,
      features: [
        "RPA integration",
        "AI learning algorithms",
        "Task scheduling",
        "Error recovery",
        "Performance monitoring",
        "Custom triggers"
      ],
      color: "from-green-500 to-emerald-500",
      price: "$99/month",
      benefits: ["95% accuracy", "Self-improving", "24/7 operation"],
      useCases: ["Data entry", "Email processing", "Report generation"]
    },
    {
      title: "Intelligent Document Processing",
      description: "Extract, classify, and process documents automatically using advanced AI and machine learning.",
      icon: DocumentTextIcon,
      features: [
        "Document classification",
        "Data extraction",
        "OCR processing",
        "Format conversion",
        "Validation rules",
        "Batch processing"
      ],
      color: "from-orange-500 to-red-500",
      price: "$69/month",
      benefits: ["99% accuracy", "Multi-format support", "Real-time processing"],
      useCases: ["Invoice processing", "Contract analysis", "Form processing"]
    },
    {
      title: "AI Decision Engine",
      description: "Make intelligent business decisions automatically using AI-powered decision trees and machine learning.",
      icon: LightBulbIcon,
      features: [
        "Decision tree builder",
        "Machine learning models",
        "Risk assessment",
        "Scenario analysis",
        "Approval workflows",
        "Audit trails"
      ],
      color: "from-pink-500 to-rose-500",
      price: "$89/month",
      benefits: ["Consistent decisions", "Risk mitigation", "Audit compliance"],
      useCases: ["Loan approvals", "Risk assessment", "Quality control"]
    },
    {
      title: "Workflow Analytics",
      description: "Gain deep insights into your automated workflows with comprehensive analytics and reporting.",
      icon: ChartBarIcon,
      features: [
        "Performance metrics",
        "Bottleneck analysis",
        "Cost tracking",
        "ROI measurement",
        "Custom dashboards",
        "Predictive analytics"
      ],
      color: "from-teal-500 to-cyan-500",
      price: "$59/month",
      benefits: ["Real-time insights", "Performance optimization", "Cost savings"],
      useCases: ["Process monitoring", "Performance optimization", "Cost analysis"]
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$99",
      period: "per month",
      description: "Perfect for small businesses getting started with automation",
      features: [
        "Up to 5 workflows",
        "1,000 task executions/month",
        "Basic AI features",
        "Email support",
        "Standard templates",
        "Basic analytics"
      ],
      color: "from-slate-600 to-slate-700",
      popular: false
    },
    {
      name: "Professional",
      price: "$299",
      period: "per month",
      description: "Ideal for growing businesses with complex automation needs",
      features: [
        "Unlimited workflows",
        "10,000 task executions/month",
        "Advanced AI features",
        "Priority support",
        "Custom integrations",
        "Advanced analytics",
        "API access",
        "Team collaboration"
      ],
      color: "from-purple-600 to-cyan-600",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$799",
      period: "per month",
      description: "For large organizations with enterprise-scale automation requirements",
      features: [
        "Unlimited everything",
        "Custom AI models",
        "White-label solution",
        "Dedicated support",
        "Custom development",
        "SLA guarantee",
        "Training sessions",
        "On-premise deployment"
      ],
      color: "from-slate-600 to-slate-700",
      popular: false
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Workflow Automation - Micro SaaS | Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI workflow automation micro SaaS platform that automates business processes, tasks, and workflows using artificial intelligence. Boost productivity and efficiency today!" />
        <meta name="keywords" content="AI workflow automation, micro SaaS, business process automation, RPA, task automation, workflow management, AI automation platform" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden matrix-bg hologram-scan">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500 rounded-full quantum-float neural-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-cyan-500 rounded-full quantum-float neural-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-pink-500 rounded-full quantum-float neural-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-indigo-500 rounded-full quantum-float neural-pulse" style={{animationDelay: '3s'}}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 text-hologram neon-text">
              AI Workflow Automation
            </h1>
            <p className="text-xl text-cyber mb-8 leading-relaxed">
              The Future of Business Process Automation
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Transform your business with intelligent workflow automation powered by artificial intelligence. 
              Automate complex processes, eliminate manual tasks, and boost productivity with our cutting-edge 
              AI-powered automation platform.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
              <Link 
                to="/contact" 
                className="group bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 flex items-center gap-2 cyber-pulse"
              >
                Start Automating Now
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/demo" 
                className="group border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300 flex items-center gap-2"
              >
                Try Free Demo
                <RocketLaunchIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-900 hologram-effect">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-hologram">
              AI-Powered Automation Features
            </h2>
            <p className="text-xl text-cyber max-w-3xl mx-auto">
              Everything you need to automate your business processes with artificial intelligence
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={feature.title}
                  className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border-cyber hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 cyber-pulse"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform quantum-float`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  {/* Pricing */}
                  <div className="mb-4">
                    <span className="text-2xl font-bold text-green-400 neon-text">{feature.price}</span>
                  </div>
                  
                  {/* Benefits */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">Key Benefits:</h4>
                    <div className="flex flex-wrap gap-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <span key={benefitIndex} className="text-xs bg-green-900/30 text-green-300 px-2 py-1 rounded-full">
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Use Cases */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">Perfect for:</h4>
                    <div className="flex flex-wrap gap-2">
                      {feature.useCases.map((useCase, useCaseIndex) => (
                        <span key={useCaseIndex} className="text-xs bg-blue-900/30 text-blue-300 px-2 py-1 rounded-full">
                          {useCase}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {feature.features.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-gray-300">
                        <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link 
                    to="/contact"
                    className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-4 py-2 rounded-lg font-semibold text-center hover:from-purple-700 hover:to-cyan-700 transition-all block"
                  >
                    Get Started
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 gradient-neon">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-hologram">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-cyber max-w-3xl mx-auto">
              Choose the plan that fits your automation needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div 
                key={plan.name}
                className={`relative bg-gradient-to-br ${plan.color} p-8 rounded-xl border-2 ${
                  plan.popular ? 'border-purple-500 shadow-2xl shadow-purple-500/20' : 'border-cyber'
                } transition-all duration-300 hover:transform hover:scale-105 quantum-float`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-semibold neon-text">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-white neon-text">{plan.price}</span>
                    <span className="text-gray-300 ml-2">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link 
                  to="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all ${
                    plan.popular
                      ? 'bg-white text-slate-900 hover:bg-gray-100'
                      : 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white hover:from-purple-700 hover:to-cyan-700'
                  }`}
                >
                  {plan.popular ? 'Get Started' : 'Choose Plan'}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose AI Workflow Automation */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-hologram">
              Why Choose AI Workflow Automation?
            </h2>
            <p className="text-xl text-cyber max-w-3xl mx-auto">
              The most advanced AI automation platform on the market
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center group quantum-float">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform neural-pulse">
                <RocketLaunchIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">10x Productivity Boost</h3>
              <p className="text-gray-300">
                Automate repetitive tasks and focus on high-value work that drives business growth.
              </p>
            </div>

            <div className="text-center group quantum-float" style={{animationDelay: '1s'}}>
              <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform neural-pulse">
                <ShieldCheckIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise Security</h3>
              <p className="text-gray-300">
                Bank-level security with encryption, compliance, and audit trails built-in.
              </p>
            </div>

            <div className="text-center group quantum-float" style={{animationDelay: '2s'}}>
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform neural-pulse">
                <CogIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">No Coding Required</h3>
              <p className="text-gray-300">
                Create complex automations using our visual drag-and-drop interface.
              </p>
            </div>

            <div className="text-center group quantum-float" style={{animationDelay: '3s'}}>
              <div className="w-20 h-20 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform neural-pulse">
                <ChartBarIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Real-time Analytics</h3>
              <p className="text-gray-300">
                Monitor performance, identify bottlenecks, and optimize your automations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-slate-900 hologram-effect">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 text-hologram">
              Ready to Automate Your Business?
            </h2>
            <p className="text-xl text-cyber mb-12">
              Start your AI automation journey today
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="flex items-center justify-center gap-4 text-cyber quantum-float">
                <PhoneIcon className="w-6 h-6 text-purple-400 neural-pulse" />
                <span className="neon-text">+1-302-464-0950</span>
              </div>
              <div className="flex items-center justify-center gap-4 text-cyber quantum-float" style={{animationDelay: '1s'}}>
                <EnvelopeIcon className="w-6 h-6 text-purple-400 neural-pulse" />
                <span className="neon-text">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center gap-4 text-cyber quantum-float" style={{animationDelay: '2s'}}>
                <GlobeAltIcon className="w-6 h-6 text-purple-400 neural-pulse" />
                <span className="neon-text">ziontechgroup.com</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 cyber-pulse"
              >
                Start Free Trial
              </Link>
              <Link 
                to="/demo" 
                className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300"
              >
                Watch Demo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}