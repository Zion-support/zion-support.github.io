import { ArrowRight, Workflow, Zap, BarChart3, CheckCircle, Star, Brain, Clock, Target, Users } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function ZionAIWorkflowAutomationPro() {
  const features = [
    {
      icon: <Workflow className="w-6 h-6" />,
      title: "AI Workflow Designer",
      description: "Visual workflow designer with AI-powered suggestions and intelligent automation recommendations"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Smart Automation",
      description: "AI-powered automation that learns from your processes and optimizes workflows automatically"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Performance Analytics",
      description: "Comprehensive workflow analytics with efficiency metrics and optimization insights"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Time Tracking",
      description: "Automatic time tracking for all workflow steps with detailed performance reports"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Goal Management",
      description: "Set and track workflow goals with AI-powered progress monitoring and alerts"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Intelligent Routing",
      description: "AI-powered task routing based on skills, availability, and workload optimization"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$49",
      period: "/month",
      description: "Perfect for small teams",
      features: [
        "Up to 5 workflows",
        "Basic automation",
        "Simple analytics",
        "Email support",
        "1 user account",
        "Standard templates"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$129",
      period: "/month",
      description: "Most popular for growing teams",
      features: [
        "Up to 25 workflows",
        "AI-powered automation",
        "Advanced analytics",
        "Priority support",
        "Up to 10 user accounts",
        "API access",
        "Custom integrations"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$299",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited workflows",
        "Advanced AI features",
        "Custom integrations",
        "White-label reporting",
        "24/7 dedicated support",
        "Unlimited users",
        "Advanced compliance",
        "Custom training"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Michael Rodriguez",
      company: "Tech Startup",
      role: "Operations Director",
      content: "Zion AI Workflow Automation Pro reduced our process time by 70% and eliminated manual errors completely.",
      rating: 5
    },
    {
      name: "Sarah Chen",
      company: "Consulting Firm",
      role: "Process Manager",
      content: "The AI workflow designer is incredible. We can create complex automations in minutes instead of hours.",
      rating: 5
    },
    {
      name: "David Kim",
      company: "Manufacturing Corp",
      role: "Operations Manager",
      content: "Intelligent routing and automation have transformed our operations. We're 3x more efficient now.",
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>Zion AI Workflow Automation Pro - Advanced Process Automation Platform | Zion Tech Group</title>
        <meta
          name="description"
          content="Automate your business processes with Zion AI Workflow Automation Pro. AI-powered workflow design, smart automation, and comprehensive analytics for modern businesses."
        />
        <meta
          name="keywords"
          content="workflow automation, process automation, business process management, workflow design, automation platform, process optimization, workflow analytics"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-amber-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30 mb-6">
              <Workflow className="w-4 h-4 text-amber-400 mr-2" />
              <span className="text-amber-400 text-sm font-medium">AI-Powered Process Automation</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
                Zion AI Workflow Automation Pro
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Automate your business processes with AI-powered workflow design and intelligent automation. 
              Reduce manual work by 70% and eliminate errors with smart process optimization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-amber-600 hover:to-orange-700 transition-all duration-300 flex items-center justify-center group"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-amber-400 text-amber-400 px-8 py-4 rounded-lg font-semibold hover:bg-amber-400 hover:text-slate-900 transition-all duration-300"
              >
                Watch Demo
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-400 mb-2">70%</div>
                <div className="text-gray-300">Process Time Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400 mb-2">100%</div>
                <div className="text-gray-300">Error Elimination</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">3x</div>
                <div className="text-gray-300">Efficiency Increase</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Advanced Workflow Automation Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to automate and optimize your business processes with AI.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-amber-500 to-orange-600 flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform">
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

        {/* Pricing Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Flexible Pricing Plans
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
                      ? 'border-amber-400 bg-gradient-to-br from-amber-500/10 to-orange-500/10'
                      : 'border-white/20 hover:border-amber-400'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
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
                        ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-white hover:from-amber-600 hover:to-orange-700'
                        : 'border border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-slate-900'
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
                See what operations professionals say about our automation platform
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
              Join thousands of businesses streamlining operations with AI-powered workflow automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-amber-600 hover:to-orange-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Your Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/demo"
                className="border border-amber-400 text-amber-400 px-8 py-4 rounded-lg font-semibold hover:bg-amber-400 hover:text-slate-900 transition-all duration-300"
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