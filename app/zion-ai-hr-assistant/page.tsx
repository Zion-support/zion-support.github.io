import { ArrowRight, Users, FileText, Clock, BarChart3, CheckCircle, Star, Brain, Briefcase, Zap } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function ZionAIHRAssistant() {
  const features = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "AI-Powered Recruitment",
      description: "Intelligent candidate screening, resume analysis, and interview scheduling with bias-free algorithms"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Automated Onboarding",
      description: "Streamlined employee onboarding with digital forms, document collection, and task automation"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Smart Time Tracking",
      description: "AI-powered time tracking with productivity insights and automated timesheet generation"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "HR Analytics Dashboard",
      description: "Comprehensive HR metrics, employee satisfaction tracking, and predictive analytics"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Performance Management",
      description: "Automated performance reviews, goal tracking, and 360-degree feedback collection"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Employee Insights",
      description: "AI-driven employee sentiment analysis, retention predictions, and engagement recommendations"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$49",
      period: "/month",
      description: "Perfect for small teams",
      features: [
        "Up to 25 employees",
        "Basic recruitment tools",
        "Simple time tracking",
        "Standard reports",
        "Email support",
        "1 HR admin account"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$129",
      period: "/month",
      description: "Most popular for growing companies",
      features: [
        "Up to 100 employees",
        "AI recruitment features",
        "Advanced analytics",
        "Performance management",
        "Priority support",
        "Up to 5 HR accounts",
        "API access",
        "Custom workflows"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$299",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited employees",
        "Advanced AI features",
        "Custom integrations",
        "White-label reporting",
        "24/7 dedicated support",
        "Unlimited HR accounts",
        "Advanced compliance",
        "Custom training"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Jennifer Martinez",
      company: "Tech Startup",
      role: "Head of People",
      content: "Zion AI HR Assistant reduced our hiring time by 60% and improved candidate quality significantly.",
      rating: 5
    },
    {
      name: "David Chen",
      company: "Manufacturing Corp",
      role: "HR Director",
      content: "The AI insights helped us reduce turnover by 40% and improve employee satisfaction scores.",
      rating: 5
    },
    {
      name: "Sarah Thompson",
      company: "Consulting Firm",
      role: "People Operations Manager",
      content: "Automated onboarding saved us 15 hours per new hire. The system is incredibly intuitive.",
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>Zion AI HR Assistant - Intelligent Human Resources Management Platform | Zion Tech Group</title>
        <meta
          name="description"
          content="Transform your HR operations with Zion AI HR Assistant. AI-powered recruitment, automated onboarding, performance management, and comprehensive HR analytics for modern businesses."
        />
        <meta
          name="keywords"
          content="HR management, AI recruitment, employee onboarding, performance management, HR analytics, time tracking, employee engagement, human resources automation"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 mb-6">
              <Users className="w-4 h-4 text-indigo-400 mr-2" />
              <span className="text-indigo-400 text-sm font-medium">AI-Powered HR Management</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                Zion AI HR Assistant
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Revolutionize your HR operations with AI-powered recruitment, automated onboarding, 
              and intelligent performance management. Streamline processes and improve employee experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-indigo-400 text-indigo-400 px-8 py-4 rounded-lg font-semibold hover:bg-indigo-400 hover:text-slate-900 transition-all duration-300"
              >
                Watch Demo
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-400 mb-2">60%</div>
                <div className="text-gray-300">Faster Hiring</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">40%</div>
                <div className="text-gray-300">Reduced Turnover</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">1,200+</div>
                <div className="text-gray-300">HR Teams</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Comprehensive HR Management Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to modernize your HR operations and improve employee experience.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform">
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
                Choose the plan that fits your organization size. All plans include 14-day free trial.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                    plan.popular
                      ? 'border-indigo-400 bg-gradient-to-br from-indigo-500/10 to-purple-500/10'
                      : 'border-white/20 hover:border-indigo-400'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
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
                        ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:from-indigo-600 hover:to-purple-700'
                        : 'border border-indigo-400 text-indigo-400 hover:bg-indigo-400 hover:text-slate-900'
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
                Trusted by HR Professionals
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what HR leaders say about our AI-powered management platform
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
              Ready to Transform Your HR Operations?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of HR teams improving efficiency and employee experience with AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Your Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/demo"
                className="border border-indigo-400 text-indigo-400 px-8 py-4 rounded-lg font-semibold hover:bg-indigo-400 hover:text-slate-900 transition-all duration-300"
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