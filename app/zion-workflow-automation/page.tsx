import { ArrowRight, Workflow, Zap, BarChart3, Users, Target, Globe, Star, CheckCircle, Mail, Smartphone, MapPin, TrendingUp, Settings } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function ZionWorkflowAutomation() {
  const features = [
    {
      title: "Visual Workflow Builder",
      description: "Drag-and-drop interface to create complex workflows without coding. Connect apps, set conditions, and automate processes visually",
      icon: <Workflow className="w-6 h-6" />,
      benefit: "No coding required"
    },
    {
      title: "500+ App Integrations",
      description: "Connect to popular business apps including CRM, email, project management, and productivity tools with pre-built connectors",
      icon: <Zap className="w-6 h-6" />,
      benefit: "Connect everything"
    },
    {
      title: "AI-Powered Automation",
      description: "Intelligent automation that learns from your patterns and suggests optimizations to improve workflow efficiency",
      icon: <Target className="w-6 h-6" />,
      benefit: "Smart optimization"
    },
    {
      title: "Advanced Analytics",
      description: "Comprehensive workflow analytics with performance metrics, bottleneck identification, and efficiency insights",
      icon: <BarChart3 className="w-6 h-6" />,
      benefit: "Data-driven improvements"
    },
    {
      title: "Team Collaboration",
      description: "Multi-user workflows with approval processes, role-based access, and collaborative workflow design",
      icon: <Users className="w-6 h-6" />,
      benefit: "Seamless teamwork"
    },
    {
      title: "Global Scalability",
      description: "Scale your automation across teams, departments, and locations with enterprise-grade infrastructure",
      icon: <Globe className="w-6 h-6" />,
      benefit: "Enterprise ready"
    }
  ];

  const automationTypes = [
    {
      name: "Sales Automation",
      description: "Lead scoring, follow-ups, and CRM updates",
      icon: <Target className="w-8 h-8" />,
      efficiency: "60%"
    },
    {
      name: "Marketing Automation",
      description: "Campaign management, lead nurturing, and analytics",
      icon: <Zap className="w-8 h-8" />,
      efficiency: "45%"
    },
    {
      name: "HR Automation",
      description: "Onboarding, approvals, and employee management",
      icon: <Users className="w-8 h-8" />,
      efficiency: "50%"
    },
    {
      name: "Finance Automation",
      description: "Invoice processing, expense management, and reporting",
      icon: <BarChart3 className="w-8 h-8" />,
      efficiency: "70%"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$49",
      period: "per month",
      description: "Perfect for small teams",
      features: [
        "Up to 100 workflows",
        "Basic integrations",
        "Email support",
        "5 team members",
        "Basic analytics",
        "Mobile app"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$149",
      period: "per month",
      description: "Ideal for growing companies",
      features: [
        "Up to 1,000 workflows",
        "Advanced integrations",
        "Priority support",
        "25 team members",
        "Advanced analytics",
        "API access",
        "Custom triggers"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$399",
      period: "per month",
      description: "For large organizations",
      features: [
        "Unlimited workflows",
        "Custom integrations",
        "Dedicated support",
        "Unlimited team members",
        "Advanced reporting",
        "24/7 phone support",
        "White-label options"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Daniel Chen",
      company: "SaaS Company",
      role: "Operations Manager",
      content: "Zion Workflow Automation has saved us 20 hours per week. The visual builder makes it so easy to create complex workflows.",
      rating: 5,
      avatar: "DC"
    },
    {
      name: "Rachel Williams",
      company: "E-commerce Platform",
      role: "Process Manager",
      content: "The AI suggestions are incredible. It identified bottlenecks we never knew existed and optimized our processes automatically.",
      rating: 5,
      avatar: "RW"
    },
    {
      name: "Alex Thompson",
      company: "Consulting Firm",
      role: "Business Analyst",
      content: "The integration capabilities are outstanding. We connected all our tools in minutes and automated our entire client onboarding process.",
      rating: 5,
      avatar: "AT"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Zion Workflow Automation - AI-Powered Business Process Automation | Zion Tech Group</title>
        <meta
          name="description"
          content="Automate your business processes with Zion Workflow Automation. Visual workflow builder, 500+ integrations, and AI-powered optimization for maximum efficiency."
        />
        <meta
          name="keywords"
          content="workflow automation, business process automation, workflow builder, app integrations, process optimization, business automation"
        />
        <link rel="canonical" href="https://ziontechgroup.com/zion-workflow-automation" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-purple-500/10 to-cyan-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/20 to-purple-500/20 border border-emerald-500/30 mb-6">
              <Workflow className="w-4 h-4 text-emerald-400 mr-2" />
              <span className="text-emerald-400 text-sm font-medium">Process Automation Platform</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-purple-400 to-cyan-400">
                Zion Workflow Automation
              </span>
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 via-purple-400 to-cyan-400 rounded-lg blur opacity-30 animate-pulse"></div>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              The most powerful workflow automation platform powered by AI. Automate complex business processes 
              with visual workflows, intelligent optimization, and seamless integrations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-emerald-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-emerald-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-emerald-500/25 hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-emerald-400 text-emerald-400 px-8 py-4 rounded-lg font-semibold hover:bg-emerald-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Watch Demo
                <Workflow className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-400 mb-2">500+</div>
                <div className="text-gray-300 text-sm">App Integrations</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">60%</div>
                <div className="text-gray-300 text-sm">Efficiency Increase</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">20+</div>
                <div className="text-gray-300 text-sm">Hours Saved/Week</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-400 mb-2">24/7</div>
                <div className="text-gray-300 text-sm">Automated Processes</div>
              </div>
            </div>
          </div>
        </section>

        {/* Automation Types Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Automate Any Business Process
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From sales to HR, automate every aspect of your business operations.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {automationTypes.map((type, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/10 text-center"
                >
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-emerald-500 to-purple-600 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                    {type.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-emerald-300 transition-colors">
                    {type.name}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {type.description}
                  </p>
                  <div className="flex items-center justify-center text-emerald-400 text-sm font-medium">
                    <TrendingUp className="w-4 h-4 mr-2" />
                    {type.efficiency} Efficiency
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
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
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/10"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-emerald-500 to-purple-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-emerald-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="flex items-center text-emerald-400 text-sm font-medium">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    {feature.benefit}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Scale Your Automation
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that matches your automation needs and grow your efficiency.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                    plan.popular 
                      ? 'border-emerald-500/50 shadow-2xl shadow-emerald-500/20' 
                      : 'border-white/20 hover:border-emerald-500/30'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-emerald-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-emerald-400">{plan.price}</span>
                      <span className="text-gray-300 ml-2">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-emerald-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group ${
                      plan.popular
                        ? 'bg-gradient-to-r from-emerald-500 to-purple-600 text-white hover:from-emerald-600 hover:to-purple-700 shadow-lg hover:shadow-emerald-500/25'
                        : 'border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-slate-900'
                    }`}
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Trusted by Operations Teams
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what operations professionals say about Zion Workflow Automation
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/10"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-emerald-900/30 to-purple-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Automate Your Business Today
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join thousands of businesses using Zion Workflow Automation to streamline operations and increase efficiency. 
              Start your free trial today.
            </p>
            
            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Email</h3>
                <p className="text-emerald-400">kleber@ziontechgroup.com</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Smartphone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Phone</h3>
                <p className="text-emerald-400">+1 302 464 0950</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Address</h3>
                <p className="text-emerald-400 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-emerald-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-emerald-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-emerald-500/25 hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-emerald-400 text-emerald-400 px-8 py-4 rounded-lg font-semibold hover:bg-emerald-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Watch Demo
                <Workflow className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}