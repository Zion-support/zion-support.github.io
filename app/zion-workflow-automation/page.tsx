import { ArrowRight, Workflow, Zap, Target, BarChart3, CheckCircle, Clock, DollarSign, Users, Settings, Globe, FileText, Shield } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function ZionWorkflowAutomation() {
  const features = [
    {
      title: "Visual Workflow Builder",
      description: "Create complex workflows with our drag-and-drop visual builder and pre-built templates",
      icon: <Workflow className="w-6 h-6" />,
      included: true
    },
    {
      title: "AI-Powered Automation",
      description: "Intelligent automation that learns from your patterns and suggests optimizations",
      icon: <Zap className="w-6 h-6" />,
      included: true
    },
    {
      title: "Multi-Platform Integration",
      description: "Connect and automate workflows across 200+ platforms and services",
      icon: <Globe className="w-6 h-6" />,
      included: true
    },
    {
      title: "Conditional Logic",
      description: "Advanced conditional logic with if/then/else statements and complex decision trees",
      icon: <Target className="w-6 h-6" />,
      included: true
    },
    {
      title: "Team Collaboration",
      description: "Collaborate on workflow design with team members and role-based permissions",
      icon: <Users className="w-6 h-6" />,
      included: true
    },
    {
      title: "Analytics & Monitoring",
      description: "Comprehensive workflow analytics with performance metrics and error tracking",
      icon: <BarChart3 className="w-6 h-6" />,
      included: true
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: 39,
      period: "month",
      description: "Perfect for small businesses",
      features: [
        "Up to 5 workflows",
        "Up to 1,000 executions/month",
        "Basic integrations",
        "Email support",
        "Standard templates",
        "Basic analytics"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: 99,
      period: "month",
      description: "Ideal for growing businesses",
      features: [
        "Up to 25 workflows",
        "Up to 10,000 executions/month",
        "Advanced integrations",
        "Priority support",
        "Premium templates",
        "Advanced analytics",
        "Team collaboration",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: 249,
      period: "month",
      description: "For large organizations",
      features: [
        "Unlimited workflows",
        "Unlimited executions",
        "Custom integrations",
        "Dedicated support",
        "Custom templates",
        "Custom analytics",
        "White-label solution",
        "SSO integration"
      ],
      popular: false
    }
  ];

  const workflowStats = [
    { number: "90%", label: "Time Saved", icon: <Zap className="w-6 h-6" /> },
    { number: "200+", label: "Platform Integrations", icon: <Globe className="w-6 h-6" /> },
    { number: "99.9%", label: "Workflow Success Rate", icon: <Shield className="w-6 h-6" /> },
    { number: "24/7", label: "Automated Execution", icon: <Clock className="w-6 h-6" /> }
  ];

  const testimonials = [
    {
      name: "Alex Thompson",
      company: "E-commerce Platform",
      role: "Operations Manager",
      content: "Zion Workflow Automation has transformed our operations. We've automated 90% of our repetitive tasks and saved hundreds of hours every month.",
      rating: 5,
      avatar: "AT"
    },
    {
      name: "Sarah Johnson",
      company: "SaaS Company",
      role: "Process Manager",
      content: "The visual workflow builder is incredible. Even non-technical team members can create complex automations without any coding knowledge.",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Mike Chen",
      company: "Marketing Agency",
      role: "Automation Specialist",
      content: "The AI-powered suggestions have helped us optimize our workflows continuously. We've improved our efficiency by 90% in just 6 months.",
      rating: 5,
      avatar: "MC"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Zion Workflow Automation - AI-Powered Business Process Automation | Zion Tech Group</title>
        <meta
          name="description"
          content="Automate your business processes with Zion Workflow Automation - the ultimate AI-powered workflow platform. Visual builder, 200+ integrations, and advanced analytics. Starting at $39/month."
        />
        <meta
          name="keywords"
          content="workflow automation, business process automation, workflow builder, process optimization, task automation, workflow analytics, Zion Workflow Automation"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-violet-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 via-purple-500/10 to-fuchsia-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-violet-500/20 to-purple-500/20 border border-violet-500/30 mb-6">
              <Workflow className="w-4 h-4 text-violet-400 mr-2" />
              <span className="text-violet-400 text-sm font-medium">#1 Workflow Automation Platform 2024</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 animate-pulse">
                Zion Workflow Automation
              </span>
              <div className="absolute -inset-1 bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 rounded-lg blur opacity-30 animate-pulse"></div>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              The ultimate AI-powered workflow automation platform that helps you automate business processes, 
              eliminate repetitive tasks, and boost productivity. Visual builder with 200+ integrations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-violet-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-violet-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-violet-500/25 hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-violet-400 text-violet-400 px-8 py-4 rounded-lg font-semibold hover:bg-violet-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
              >
                Watch Demo
              </Link>
            </div>

            {/* Workflow Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {workflowStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-violet-500/20 to-purple-500/20 flex items-center justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-violet-400 mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-400">
                  Advanced Workflow Features
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to automate your business processes
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-violet-500/10 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-violet-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-violet-500 to-purple-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-violet-300 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {feature.description}
                    </p>
                    <div className="flex items-center mt-4">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                      <span className="text-green-400 text-sm font-medium">Included in all plans</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-slate-800/50 to-violet-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-400">
                  Workflow Automation Pricing
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your automation needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`group bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2xl relative overflow-hidden ${
                    plan.popular 
                      ? 'border-violet-500/50 bg-gradient-to-br from-violet-500/10 to-purple-500/10' 
                      : 'border-white/20 hover:border-violet-500/30'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-violet-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-violet-400">${plan.price}</span>
                      <span className="text-gray-300 ml-2">/{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 text-center block ${
                      plan.popular
                        ? 'bg-gradient-to-r from-violet-500 to-purple-600 text-white hover:from-violet-600 hover:to-purple-700 shadow-lg hover:shadow-violet-500/25'
                        : 'border border-violet-400 text-violet-400 hover:bg-violet-400 hover:text-slate-900'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Trusted by Process Managers
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what our users say about Zion Workflow Automation
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-violet-500/10 relative overflow-hidden"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Workflow key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-violet-500 to-purple-500 flex items-center justify-center text-white font-semibold mr-3">
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
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-violet-900/30 to-purple-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Start Automating Your Workflows
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join thousands of businesses who use Zion Workflow Automation to streamline their processes. 
              Start your free trial today - no credit card required.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-violet-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-violet-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-violet-500/25 hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-violet-400 text-violet-400 px-8 py-4 rounded-lg font-semibold hover:bg-violet-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
              >
                Watch Demo
              </Link>
            </div>
            
            <div className="mt-8 text-sm text-gray-400">
              <p>✓ 14-day free trial • ✓ No setup fees • ✓ Cancel anytime • ✓ 24/7 support</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}