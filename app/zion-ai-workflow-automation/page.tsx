import { ArrowRight, Workflow, Zap, Bot, CheckCircle, Star, Brain, Clock, Target, BarChart3 } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function ZionAIWorkflowAutomation() {
  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI-Powered Process Discovery",
      description: "Automatically discover and map business processes using AI to identify automation opportunities"
    },
    {
      icon: <Workflow className="w-6 h-6" />,
      title: "Visual Workflow Builder",
      description: "Create complex workflows with drag-and-drop interface and AI-assisted process design"
    },
    {
      icon: <Bot className="w-6 h-6" />,
      title: "Intelligent Automation",
      description: "Deploy AI bots that can handle complex tasks, make decisions, and learn from experience"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Real-time Process Monitoring",
      description: "Monitor workflow performance in real-time with AI-powered insights and optimization suggestions"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Smart Task Routing",
      description: "Intelligently route tasks to the right people or systems based on workload, skills, and availability"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Performance Analytics",
      description: "Comprehensive analytics and reporting on workflow efficiency, bottlenecks, and ROI"
    }
  ];

  const automationTypes = [
    "Document Processing",
    "Email Automation",
    "Data Entry & Validation",
    "Approval Workflows",
    "Customer Onboarding",
    "Invoice Processing",
    "Lead Qualification",
    "Content Moderation",
    "Report Generation",
    "Task Assignment",
    "Compliance Monitoring",
    "Integration Management"
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$79",
      period: "/month",
      description: "Perfect for small teams",
      features: [
        "Up to 5 workflows",
        "Basic automation",
        "Standard templates",
        "Email support",
        "Basic analytics",
        "1 integration"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$199",
      period: "/month",
      description: "Most popular for growing businesses",
      features: [
        "Up to 25 workflows",
        "Advanced AI features",
        "Custom workflows",
        "Priority support",
        "Advanced analytics",
        "10 integrations",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$599",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited workflows",
        "Custom AI models",
        "White-label solution",
        "Dedicated support",
        "Custom integrations",
        "Advanced reporting",
        "On-premise deployment"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Robert Johnson",
      company: "Financial Services",
      role: "Operations Director",
      content: "Zion AI Workflow Automation reduced our manual processing time by 80%. The AI-powered process discovery identified opportunities we never knew existed.",
      rating: 5
    },
    {
      name: "Lisa Wang",
      company: "Healthcare Provider",
      role: "Process Improvement Manager",
      content: "The intelligent task routing has been a game-changer. Tasks are now automatically assigned to the right people, improving efficiency by 60%.",
      rating: 5
    },
    {
      name: "Michael Brown",
      company: "Manufacturing Co.",
      role: "IT Director",
      content: "This platform transformed our operations. We've automated 50+ processes and saved thousands of hours. The ROI was achieved in just 3 months.",
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>Zion AI Workflow Automation - AI-Powered Process Automation Platform | Zion Tech Group</title>
        <meta
          name="description"
          content="Automate your business processes with Zion AI Workflow Automation - the ultimate AI-powered workflow automation platform. Intelligent automation, process optimization, and smart task routing."
        />
        <meta
          name="keywords"
          content="workflow automation, process automation, AI automation, business process management, task automation, workflow optimization, intelligent automation"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-teal-500/20 to-cyan-500/20 border border-teal-500/30 mb-6">
              <Workflow className="w-4 h-4 text-teal-400 mr-2" />
              <span className="text-teal-400 text-sm font-medium">AI-Powered Process Automation</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
                Zion AI Workflow Automation
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Automate your business processes with AI-powered intelligence. Smart workflows, 
              intelligent automation, and process optimization for modern businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-teal-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center group"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-teal-400 text-teal-400 px-8 py-4 rounded-lg font-semibold hover:bg-teal-400 hover:text-slate-900 transition-all duration-300"
              >
                Watch Demo
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-400 mb-2">80%</div>
                <div className="text-gray-300">Time Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">60%</div>
                <div className="text-gray-300">Efficiency Improvement</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">3x</div>
                <div className="text-gray-300">ROI in 3 Months</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Intelligent Workflow Automation
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to automate and optimize your business processes with artificial intelligence.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-teal-500 to-cyan-600 flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform">
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
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Automate Any Business Process
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From simple tasks to complex workflows, automate everything with AI-powered intelligence.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {automationTypes.map((automationType, index) => (
                <div
                  key={index}
                  className="flex items-center bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">{automationType}</span>
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
                Flexible Automation Plans
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your automation needs. All plans include 14-day free trial.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                    plan.popular
                      ? 'border-teal-400 bg-gradient-to-br from-teal-500/10 to-cyan-500/10'
                      : 'border-white/20 hover:border-teal-400'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
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
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-teal-500 to-cyan-600 text-white hover:from-teal-600 hover:to-cyan-700'
                        : 'border border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-slate-900'
                    }`}
                  >
                    Start Free Trial
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Trusted by Operations Teams
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what operations professionals say about Zion AI Workflow Automation
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
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
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Automate Your Processes?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses using AI to automate and optimize their workflows.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-teal-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Your Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/demo"
                className="border border-teal-400 text-teal-400 px-8 py-4 rounded-lg font-semibold hover:bg-teal-400 hover:text-slate-900 transition-all duration-300"
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