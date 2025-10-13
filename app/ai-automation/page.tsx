import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, Zap, Workflow, Bot, Settings, CheckCircle, Users, Clock, Target, Shield, Brain, TrendingUp } from "lucide-react";

export default function AiAutomation() {
  const features = [
    {
      title: "Process Automation",
      description: "Automate repetitive tasks and workflows with intelligent AI agents that learn and adapt to your business processes.",
      icon: <Workflow className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Smart Workflows",
      description: "Create intelligent workflows that automatically route tasks, make decisions, and optimize processes based on real-time data.",
      icon: <Bot className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "ROI Optimization",
      description: "Maximize your return on investment with AI-powered optimization that continuously improves efficiency and reduces costs.",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Custom Integrations",
      description: "Seamlessly integrate with your existing systems and tools through our flexible API and custom integration solutions.",
      icon: <Settings className="w-8 h-8" />,
      color: "from-orange-500 to-red-500"
    }
  ];

  const benefits = [
    {
      title: "80% Time Savings",
      description: "Reduce manual work by up to 80% with intelligent automation",
      icon: <Clock className="w-6 h-6" />
    },
    {
      title: "300% ROI",
      description: "Average return on investment within 6 months",
      icon: <Target className="w-6 h-6" />
    },
    {
      title: "24/7 Operations",
      description: "Keep your business running around the clock",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "Enterprise Security",
      description: "Bank-level security with SOC 2 compliance",
      icon: <Shield className="w-6 h-6" />
    }
  ];

  const useCases = [
    {
      title: "Customer Service Automation",
      description: "Automate customer inquiries, ticket routing, and response generation with AI-powered chatbots and virtual assistants.",
      icon: <Users className="w-8 h-8" />,
      savings: "60% reduction in response time"
    },
    {
      title: "Data Processing",
      description: "Automate data entry, validation, and processing tasks with intelligent document recognition and data extraction.",
      icon: <Brain className="w-8 h-8" />,
      savings: "90% reduction in manual data entry"
    },
    {
      title: "Marketing Automation",
      description: "Automate email campaigns, social media posting, and lead nurturing with AI-powered content generation and scheduling.",
      icon: <Zap className="w-8 h-8" />,
      savings: "75% increase in marketing efficiency"
    },
    {
      title: "Financial Automation",
      description: "Automate invoice processing, expense management, and financial reporting with intelligent document analysis.",
      icon: <Settings className="w-8 h-8" />,
      savings: "85% reduction in processing time"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$1,999",
      period: "per month",
      description: "Perfect for small businesses",
      features: [
        "Up to 5 automated workflows",
        "Basic AI agents",
        "Email support",
        "Standard integrations",
        "Monthly reporting"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$3,999",
      period: "per month",
      description: "Ideal for growing companies",
      features: [
        "Up to 20 automated workflows",
        "Advanced AI agents",
        "Priority support",
        "Custom integrations",
        "Real-time monitoring",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "pricing",
      description: "Tailored for large organizations",
      features: [
        "Unlimited workflows",
        "Custom AI development",
        "Dedicated support",
        "On-premise deployment",
        "Custom training",
        "SLA guarantees"
      ],
      popular: false
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Automation & Workflow Solutions - Zion Tech Group</title>
        <meta
          name="description"
          content="Streamline your business processes with intelligent AI automation. Reduce manual work by 80% with our AI-powered workflow solutions and process automation."
        />
        <meta
          name="keywords"
          content="AI automation, workflow automation, process automation, business automation, AI agents, intelligent automation, RPA"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Automation &
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                {" "}Workflow Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Streamline your business processes with intelligent automation. Reduce manual work by up to 80% 
              with our AI-powered workflow solutions that learn, adapt, and optimize your operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/consultation"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Free Assessment
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                View Automation Demo
              </Link>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our AI Automation?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We combine advanced AI technology with deep process expertise to deliver automation that actually works.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center mb-4 mx-auto">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300">
                    {benefit.description}
                  </p>
                </div>
              ))}
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
                Everything you need to automate and optimize your business processes.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <div
                    className={`w-16 h-16 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6`}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-lg">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Real-World Automation Use Cases
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See how our AI automation solutions are transforming businesses across industries.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center mb-6">
                    {useCase.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-300 text-lg mb-4">
                    {useCase.description}
                  </p>
                  <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-3">
                    <p className="text-green-400 font-semibold">
                      {useCase.savings}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Choose Your Automation Plan
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Flexible pricing options designed to scale with your automation needs.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border ${
                    plan.popular ? 'border-cyan-400 ring-2 ring-cyan-400/20' : 'border-white/20'
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
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-300 ml-2">{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`w-full px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                        : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                    }`}
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
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
              Join 300+ companies already using our AI automation to streamline operations and boost productivity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Automating Today
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
