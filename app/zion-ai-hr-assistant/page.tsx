import { ArrowRight, Users, Brain, FileText, Clock, CheckCircle, Star, Zap, Target, MessageSquare } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function ZionAIHRAssistant() {
  const features = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "AI-Powered Recruitment",
      description: "Streamline hiring with intelligent candidate screening, resume analysis, and interview scheduling automation"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Employee Performance Analytics",
      description: "Track and analyze employee performance with AI-driven insights and personalized development recommendations"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Automated HR Documentation",
      description: "Generate contracts, policies, and HR documents automatically with compliance and legal accuracy"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Smart Attendance Management",
      description: "Track attendance, manage schedules, and handle time-off requests with intelligent automation"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Goal Setting & Tracking",
      description: "Set, monitor, and track employee goals with AI-powered progress analysis and performance insights"
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Employee Engagement Platform",
      description: "Measure and improve employee satisfaction with surveys, feedback collection, and engagement analytics"
    }
  ];

  const capabilities = [
    "Resume Screening & Analysis",
    "Interview Scheduling & Management",
    "Employee Onboarding Automation",
    "Performance Review Management",
    "Goal Setting & Tracking",
    "Attendance & Time Tracking",
    "Payroll Integration",
    "Benefits Administration",
    "Employee Self-Service Portal",
    "Compliance Management",
    "Training & Development Tracking",
    "Exit Interview Automation"
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$89",
      period: "/month",
      description: "Perfect for small teams",
      features: [
        "Up to 25 employees",
        "Basic recruitment tools",
        "Attendance tracking",
        "Simple performance reviews",
        "Email support",
        "Basic reporting"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$249",
      period: "/month",
      description: "Most popular for growing companies",
      features: [
        "Up to 100 employees",
        "Advanced AI recruitment",
        "Performance analytics",
        "Goal tracking",
        "Priority support",
        "Advanced reporting",
        "API access",
        "Custom workflows"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$599",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited employees",
        "Custom AI models",
        "White-label platform",
        "24/7 dedicated support",
        "Advanced integrations",
        "Custom reporting",
        "HR consulting",
        "Compliance management"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Lisa Rodriguez",
      company: "Tech Innovations Inc",
      role: "HR Director",
      content: "Zion AI HR Assistant has transformed our recruitment process. We've reduced time-to-hire by 60% and improved candidate quality significantly.",
      rating: 5
    },
    {
      name: "James Wilson",
      company: "Global Solutions Corp",
      role: "People Operations Manager",
      content: "The performance analytics feature is incredible. We can now identify top performers and provide targeted development opportunities.",
      rating: 5
    },
    {
      name: "Maria Santos",
      company: "Startup Ventures",
      role: "Head of People",
      content: "The automated documentation feature has saved us countless hours. Everything is compliant and professional, and our team loves the self-service portal.",
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>Zion AI HR Assistant - Intelligent Human Resources Platform | Zion Tech Group</title>
        <meta
          name="description"
          content="Transform your HR operations with Zion AI HR Assistant. AI-powered recruitment, performance analytics, automated documentation, and employee engagement tools for modern businesses."
        />
        <meta
          name="keywords"
          content="HR management, AI recruitment, performance analytics, employee engagement, attendance tracking, HR automation, talent management, workforce analytics"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 mb-6">
              <Users className="w-4 h-4 text-blue-400 mr-2" />
              <span className="text-blue-400 text-sm font-medium">AI-Powered HR Intelligence</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Zion AI HR Assistant
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Revolutionize your human resources with AI-powered recruitment, performance analytics, 
              automated documentation, and comprehensive employee engagement tools.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center group"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-slate-900 transition-all duration-300"
              >
                Watch Demo
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">60%</div>
                <div className="text-gray-300">Faster Hiring Process</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">85%</div>
                <div className="text-gray-300">Employee Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">1,200+</div>
                <div className="text-gray-300">Companies Using</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Comprehensive HR Management
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to manage, engage, and develop your workforce with AI intelligence.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-600 flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform">
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

        {/* Capabilities List */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Complete HR Suite
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                All the HR tools you need in one intelligent platform.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {capabilities.map((capability, index) => (
                <div
                  key={index}
                  className="flex items-center bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  <CheckCircle className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">{capability}</span>
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
                Flexible HR Plans
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your team size and HR needs. All plans include 14-day free trial.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                    plan.popular
                      ? 'border-blue-400 bg-gradient-to-br from-blue-500/10 to-cyan-500/10'
                      : 'border-white/20 hover:border-blue-400'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
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
                        <CheckCircle className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-blue-500 to-cyan-600 text-white hover:from-blue-600 hover:to-cyan-700'
                        : 'border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900'
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
                See what HR professionals say about Zion AI HR Assistant
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
              Join thousands of companies using Zion AI HR Assistant to build better teams and workplaces.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Your Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/demo"
                className="border border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-slate-900 transition-all duration-300"
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