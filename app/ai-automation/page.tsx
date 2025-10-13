import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Zap, Brain, Cog, Shield, Clock, DollarSign, Users, BarChart3, Workflow } from "lucide-react";

export default function AiAutomation() {
  const features = [
    {
      title: "Process Automation",
      description: "Automate repetitive tasks and workflows with intelligent AI agents",
      icon: <Workflow className="w-6 h-6" />
    },
    {
      title: "Smart Decision Making",
      description: "AI-powered decision engines that learn and adapt to your business rules",
      icon: <Brain className="w-6 h-6" />
    },
    {
      title: "Document Processing",
      description: "Automatically extract, process, and route documents with 99% accuracy",
      icon: <Cog className="w-6 h-6" />
    },
    {
      title: "Customer Service Bots",
      description: "Intelligent chatbots that handle customer inquiries 24/7",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Data Integration",
      description: "Seamlessly connect and sync data across all your business systems",
      icon: <BarChart3 className="w-6 h-6" />
    },
    {
      title: "Security & Compliance",
      description: "Enterprise-grade security with built-in compliance monitoring",
      icon: <Shield className="w-6 h-6" />
    }
  ];

  const automationTypes = [
    {
      title: "Business Process Automation",
      description: "Streamline workflows, reduce manual errors, and increase efficiency",
      examples: ["Invoice processing", "Employee onboarding", "Customer support tickets", "Inventory management"],
      savings: "Save 40-60% on operational costs"
    },
    {
      title: "Marketing Automation",
      description: "Automate campaigns, lead nurturing, and customer engagement",
      examples: ["Email campaigns", "Social media posting", "Lead scoring", "A/B testing"],
      savings: "Increase conversion rates by 35%"
    },
    {
      title: "Sales Automation",
      description: "Automate sales processes from lead generation to closing",
      examples: ["Lead qualification", "Follow-up sequences", "Proposal generation", "Contract management"],
      savings: "Boost sales productivity by 50%"
    },
    {
      title: "IT Operations Automation",
      description: "Automate system monitoring, maintenance, and incident response",
      examples: ["System monitoring", "Backup management", "Security scanning", "Performance optimization"],
      savings: "Reduce IT downtime by 70%"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$199",
      period: "/month",
      description: "Perfect for small businesses starting their automation journey",
      features: [
        "Up to 5 automated workflows",
        "Basic AI chatbots",
        "Email support",
        "Standard integrations",
        "10GB data processing"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$599",
      period: "/month",
      description: "Ideal for growing businesses with complex automation needs",
      features: [
        "Up to 25 automated workflows",
        "Advanced AI chatbots",
        "Priority support",
        "Custom integrations",
        "100GB data processing",
        "API access",
        "Analytics dashboard"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$1,499",
      period: "/month",
      description: "Complete automation solution for large enterprises",
      features: [
        "Unlimited workflows",
        "Custom AI models",
        "24/7 dedicated support",
        "Full API access",
        "Unlimited data processing",
        "Custom integrations",
        "On-premise deployment",
        "Advanced analytics",
        "White-label options"
      ],
      popular: false
    }
  ];

  const benefits = [
    "Reduce operational costs by up to 60%",
    "Increase productivity by 40-50%",
    "Eliminate human errors in repetitive tasks",
    "Scale operations without proportional staff increases",
    "Improve customer response times by 80%",
    "Free up your team for strategic work"
  ];

  return (
    <>
      <Helmet>
        <title>AI Automation - Intelligent Business Process Automation | Zion Tech Group</title>
        <meta
          name="description"
          content="Transform your business with intelligent AI automation. Automate workflows, reduce costs, and increase productivity with our advanced automation platform."
        />
        <meta
          name="keywords"
          content="AI automation, business process automation, workflow automation, intelligent automation, RPA, process optimization"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Automation
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                {" "}Platform
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with intelligent AI automation. Automate workflows, reduce costs, 
              and increase productivity with our advanced automation platform designed for modern enterprises.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Watch Demo
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Powerful Automation Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to automate your business processes intelligently
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Automation Types Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Types of Automation
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Automate every aspect of your business with our comprehensive solutions
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {automationTypes.map((type, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <h3 className="text-2xl font-bold text-white mb-4">{type.title}</h3>
                  <p className="text-gray-300 mb-6">{type.description}</p>
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Examples:</h4>
                    <ul className="space-y-2">
                      {type.examples.map((example, exampleIndex) => (
                        <li key={exampleIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span className="text-gray-300">{example}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg p-4">
                    <p className="text-green-400 font-semibold">{type.savings}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Proven Business Results
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join thousands of businesses already seeing results with our AI automation
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <p className="text-gray-300">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your automation needs. All plans include our core AI automation features.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border ${
                    plan.popular ? 'border-cyan-400 bg-cyan-500/10' : 'border-white/20'
                  } hover:bg-white/20 transition-all duration-300 relative`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-300 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                        : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Automate Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start your free trial today and see the power of AI automation in action.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
