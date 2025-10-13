import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, Zap, Bot, Workflow, Clock, Target, CheckCircle, Star, Users, BarChart3, Shield, Cpu } from "lucide-react";

export default function AiAutomation() {
  const features = [
    {
      icon: <Bot className="w-6 h-6" />,
      title: "Intelligent Process Automation",
      description: "Automate complex business processes with AI that learns and adapts to your workflows."
    },
    {
      icon: <Workflow className="w-6 h-6" />,
      title: "Workflow Optimization",
      description: "Streamline operations by identifying bottlenecks and automatically optimizing workflows."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Real-time Decision Making",
      description: "Make instant decisions based on AI analysis of real-time data and business rules."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "24/7 Operations",
      description: "Keep your business running around the clock with AI-powered automation that never sleeps."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Predictive Automation",
      description: "Anticipate needs and automatically trigger actions before issues arise."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Secure Automation",
      description: "Enterprise-grade security with role-based access control and audit trails."
    }
  ];

  const automationTypes = [
    {
      title: "Customer Service Automation",
      description: "AI-powered chatbots, ticket routing, and customer support workflows",
      icon: <Users className="w-8 h-8" />,
      benefits: ["Reduce response time by 80%", "24/7 customer support", "Consistent service quality"]
    },
    {
      title: "Data Processing Automation",
      description: "Automated data collection, validation, and analysis workflows",
      icon: <BarChart3 className="w-8 h-8" />,
      benefits: ["Process 10x more data", "Eliminate human errors", "Real-time insights"]
    },
    {
      title: "Business Process Automation",
      description: "End-to-end automation of complex business processes and workflows",
      icon: <Workflow className="w-8 h-8" />,
      benefits: ["Reduce processing time by 70%", "Improve accuracy", "Scale operations"]
    },
    {
      title: "IT Operations Automation",
      description: "Automated monitoring, deployment, and maintenance of IT infrastructure",
      icon: <Cpu className="w-8 h-8" />,
      benefits: ["Reduce downtime by 90%", "Automated scaling", "Proactive maintenance"]
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$1,999",
      period: "per month",
      description: "Perfect for small businesses",
      features: [
        "Up to 5 automation workflows",
        "Basic AI capabilities",
        "Email support",
        "Standard integrations",
        "Basic reporting",
        "Up to 10 users"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$3,999",
      period: "per month",
      description: "Ideal for growing companies",
      features: [
        "Up to 25 automation workflows",
        "Advanced AI capabilities",
        "Priority support",
        "Advanced integrations",
        "Custom reporting",
        "Up to 50 users",
        "API access",
        "Custom workflows"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "pricing",
      description: "For large organizations",
      features: [
        "Unlimited workflows",
        "Custom AI models",
        "Dedicated support",
        "Full API access",
        "Custom integrations",
        "Unlimited users",
        "On-premise deployment",
        "SLA guarantees"
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Save 40+ Hours Weekly",
      description: "Automate repetitive tasks and free up your team for strategic work."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "99.9% Accuracy",
      description: "Eliminate human errors with AI-powered automation that never makes mistakes."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "10x Faster Processing",
      description: "Process tasks and workflows 10 times faster than manual operations."
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Automation Solutions - Zion Tech Group | Intelligent Process Automation</title>
        <meta
          name="description"
          content="Transform your business with AI-powered automation. Automate workflows, processes, and operations with intelligent automation solutions that scale with your business."
        />
        <meta
          name="keywords"
          content="AI automation, process automation, workflow automation, business automation, intelligent automation, robotic process automation, RPA"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI-Powered
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                {" "}Automation
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business operations with intelligent automation that learns, adapts, and scales. 
              Automate complex workflows, reduce errors, and boost productivity with our AI automation platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Automation
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
                Everything you need to automate and optimize your business processes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
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
                Automate every aspect of your business with our comprehensive automation solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {automationTypes.map((type, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                      {type.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-white mb-2">
                        {type.title}
                      </h3>
                      <p className="text-gray-300">
                        {type.description}
                      </p>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {type.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{benefit}</span>
                      </li>
                    ))}
                  </ul>
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
                Proven Results
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join hundreds of businesses already using our AI automation platform.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-6">
                    {benefit.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300 text-lg">
                    {benefit.description}
                  </p>
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
                  className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border-2 transition-all duration-300 ${
                    plan.popular 
                      ? 'border-cyan-400 bg-white/20' 
                      : 'border-white/20 hover:border-white/40'
                  }`}
                >
                  {plan.popular && (
                    <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold text-center mb-6">
                      Most Popular
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-300 ml-2">{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
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
              Start your automation journey today and see the power of AI-driven efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Automation
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
