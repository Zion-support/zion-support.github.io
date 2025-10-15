import React from "react";
import { Helmet } from "react-helmet-async";
import { ArrowRight, CheckCircle, Star, Brain, Zap, Award, DollarSign, Globe, TrendingUp, Monitor, MessageSquare, Eye, Rocket } from "lucide-react";
import { Link } from "react-router-dom";

const AiPoweredDevopsPage: React.FC = () => {
  const features = [
    "AI-powered automated testing and quality assurance",
    "Intelligent deployment orchestration and rollback",
    "Predictive infrastructure scaling and optimization",
    "Automated security vulnerability detection and patching",
    "AI-driven performance monitoring and alerting",
    "Intelligent log analysis and anomaly detection",
    "Automated code review and optimization suggestions",
    "Smart resource allocation and cost optimization",
    "AI-powered incident response and resolution",
    "Automated compliance checking and reporting",
    "Intelligent capacity planning and forecasting",
    "AI-driven continuous integration and deployment"
  ];

  const pricingPlans = [
    {
      name: "Startup",
      price: "$499",
      period: "/month",
      description: "Perfect for small development teams and startups",
      features: [
        "Up to 10 applications",
        "Basic AI automation",
        "Standard monitoring",
        "Email support",
        "Basic reporting",
        "5 team members",
        "Cloud deployment only"
      ],
      popular: false
    },
    {
      name: "Enterprise",
      price: "$1,999",
      period: "/month",
      description: "Ideal for growing companies and development teams",
      features: [
        "Up to 100 applications",
        "Advanced AI automation",
        "Comprehensive monitoring",
        "Priority support",
        "Advanced analytics",
        "25 team members",
        "Multi-cloud deployment",
        "API access",
        "Custom integrations",
        "24/7 monitoring"
      ],
      popular: true
    },
    {
      name: "Enterprise Plus",
      price: "$4,999",
      period: "/month",
      description: "For large organizations with complex DevOps needs",
      features: [
        "Unlimited applications",
        "Full AI automation suite",
        "Enterprise monitoring",
        "24/7 dedicated support",
        "Custom analytics",
        "Unlimited team members",
        "Hybrid cloud deployment",
        "Advanced API access",
        "Custom AI model training",
        "Dedicated DevOps engineers",
        "White-label solution",
        "On-premise deployment"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Jennifer Martinez",
      company: "Tech Startup",
      role: "CTO",
      content: "AI-powered DevOps has transformed our development process. We've reduced deployment time by 85% and our system uptime is now 99.9%. The AI predictions are incredibly accurate.",
      rating: 5,
      avatar: "JM"
    },
    {
      name: "David Kim",
      company: "E-commerce Platform",
      role: "Head of Engineering",
      content: "The automated testing and deployment features are game-changing. We can now deploy multiple times per day with confidence, and our bug rate has dropped by 90%.",
      rating: 5,
      avatar: "DK"
    },
    {
      name: "Lisa Thompson",
      company: "Financial Services",
      role: "DevOps Director",
      content: "The AI-driven security monitoring and compliance checking have been invaluable. We've achieved 100% compliance and our security incidents have dropped to zero.",
      rating: 5,
      avatar: "LT"
    }
  ];

  const capabilities = [
    {
      title: "Automated Testing",
      description: "AI generates and executes comprehensive test suites automatically",
      icon: <CheckCircle className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Smart Deployment",
      description: "Intelligent deployment strategies with automatic rollback capabilities",
      icon: <Rocket className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Predictive Scaling",
      description: "AI predicts traffic patterns and scales infrastructure proactively",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Intelligent Monitoring",
      description: "AI-powered monitoring with anomaly detection and alerting",
      icon: <Eye className="w-8 h-8" />,
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI-Powered DevOps - Intelligent Automation Platform | Zion Tech Group</title>
        <meta name="description" content="Revolutionize your DevOps with AI-powered automation. Reduce deployment time by 80%, eliminate manual tasks, and achieve 99.9% system reliability with our intelligent DevOps platform." />
        <meta name="keywords" content="AI DevOps, automated testing, intelligent deployment, predictive scaling, AI monitoring, DevOps automation, CI/CD, infrastructure optimization" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                AI-Powered DevOps
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your development operations with intelligent automation. Our AI platform reduces deployment time by 80%, 
                eliminates manual tasks, and delivers 99.9% system reliability.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300 flex items-center justify-center">
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center">
                  <Rocket className="mr-2 w-5 h-5" />
                  Watch Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">AI DevOps Capabilities</h2>
              <p className="text-xl text-gray-300">Comprehensive automation for modern development teams</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {capabilities.map((capability, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300">
                  <div className={`w-12 h-12 bg-gradient-to-r ${capability.color} rounded-lg flex items-center justify-center mb-4`}>
                    {capability.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{capability.title}</h3>
                  <p className="text-gray-300">{capability.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features List Section */}
        <section className="py-20 px-4 bg-slate-800/30">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Complete Feature Set</h2>
              <p className="text-xl text-gray-300">Everything you need for intelligent DevOps automation</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Flexible Pricing Plans</h2>
              <p className="text-xl text-gray-300">Choose the plan that fits your team size and needs</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 ${
                  plan.popular 
                    ? 'border-cyan-400/60 ring-2 ring-cyan-400/20' 
                    : 'border-cyan-500/20 hover:border-cyan-400/40'
                }`}>
                  {plan.popular && (
                    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{plan.price}<span className="text-lg text-gray-400">{plan.period}</span></div>
                  <p className="text-gray-300 mb-6">{plan.description}</p>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-600 hover:to-blue-600'
                      : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                  }`}>
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 bg-slate-800/30">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">What Our Customers Say</h2>
              <p className="text-xl text-gray-300">Real results from real teams</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="text-white font-semibold">{testimonial.name}</div>
                      <div className="text-gray-400 text-sm">{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your DevOps?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of development teams already using our AI-powered DevOps platform to streamline operations and boost productivity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300">
                Start Free Trial
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AiPoweredDevopsPage;
