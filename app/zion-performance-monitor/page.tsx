import { ArrowRight, Activity, BarChart3, Target, Zap, CheckCircle, Clock, DollarSign, Users, Settings, Globe, FileText, AlertTriangle } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function ZionPerformanceMonitor() {
  const features = [
    {
      title: "Real-time Monitoring",
      description: "Monitor your applications, servers, and infrastructure in real-time with instant alerts and notifications",
      icon: <Activity className="w-6 h-6" />,
      included: true
    },
    {
      title: "AI-Powered Analytics",
      description: "Advanced AI analytics that predict issues before they occur and provide actionable insights",
      icon: <BarChart3 className="w-6 h-6" />,
      included: true
    },
    {
      title: "Custom Dashboards",
      description: "Create custom dashboards with widgets, charts, and metrics tailored to your specific needs",
      icon: <Target className="w-6 h-6" />,
      included: true
    },
    {
      title: "Multi-Platform Support",
      description: "Monitor applications across cloud platforms, on-premises, and hybrid environments",
      icon: <Globe className="w-6 h-6" />,
      included: true
    },
    {
      title: "Team Collaboration",
      description: "Share insights with your team, set up alerts, and collaborate on incident response",
      icon: <Users className="w-6 h-6" />,
      included: true
    },
    {
      title: "Automated Reporting",
      description: "Generate comprehensive performance reports with automated scheduling and distribution",
      icon: <FileText className="w-6 h-6" />,
      included: true
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: 39,
      period: "month",
      description: "Perfect for small applications",
      features: [
        "Up to 10 monitors",
        "Basic alerts",
        "Email support",
        "1 user account",
        "Standard dashboards",
        "Basic reporting"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: 99,
      period: "month",
      description: "Ideal for growing businesses",
      features: [
        "Up to 100 monitors",
        "Advanced alerts",
        "Priority support",
        "Up to 10 user accounts",
        "Custom dashboards",
        "Advanced reporting",
        "AI analytics",
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
        "Unlimited monitors",
        "Custom alerts",
        "Dedicated support",
        "Unlimited users",
        "White-label dashboards",
        "Custom reporting",
        "White-label solution",
        "SSO integration"
      ],
      popular: false
    }
  ];

  const performanceStats = [
    { number: "99.9%", label: "Uptime Monitoring", icon: <Activity className="w-6 h-6" /> },
    { number: "50+", label: "Platform Integrations", icon: <Globe className="w-6 h-6" /> },
    { number: "90%", label: "Faster Issue Resolution", icon: <Zap className="w-6 h-6" /> },
    { number: "24/7", label: "Monitoring Coverage", icon: <Clock className="w-6 h-6" /> }
  ];

  const testimonials = [
    {
      name: "Alex Thompson",
      company: "SaaS Platform",
      role: "DevOps Engineer",
      content: "Zion Performance Monitor has revolutionized our monitoring strategy. We've reduced our mean time to resolution by 90% and improved our uptime to 99.9%.",
      rating: 5,
      avatar: "AT"
    },
    {
      name: "Maria Garcia",
      company: "E-commerce Platform",
      role: "Site Reliability Engineer",
      content: "The AI-powered analytics are incredible. We can now predict and prevent issues before they impact our users, which has significantly improved our customer satisfaction.",
      rating: 5,
      avatar: "MG"
    },
    {
      name: "David Kim",
      company: "Financial Services",
      role: "Infrastructure Manager",
      content: "The custom dashboards and team collaboration features have made our incident response so much more efficient. Our team can now respond to issues in real-time.",
      rating: 5,
      avatar: "DK"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Zion Performance Monitor - AI-Powered Application Performance Monitoring | Zion Tech Group</title>
        <meta
          name="description"
          content="Monitor your applications with Zion Performance Monitor - the ultimate AI-powered APM platform. Real-time monitoring, AI analytics, and custom dashboards. Starting at $39/month."
        />
        <meta
          name="keywords"
          content="application performance monitoring, APM, real-time monitoring, performance analytics, uptime monitoring, infrastructure monitoring, Zion Performance Monitor"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-indigo-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 mb-6">
              <Activity className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">#1 Performance Monitoring Platform 2024</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 animate-pulse">
                Zion Performance Monitor
              </span>
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 rounded-lg blur opacity-30 animate-pulse"></div>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              The ultimate AI-powered application performance monitoring platform that helps you track, analyze, 
              and optimize your applications. Real-time monitoring, AI analytics, and custom dashboards.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
              >
                Watch Demo
              </Link>
            </div>

            {/* Performance Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {performanceStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 flex items-center justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.number}</div>
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
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                  Advanced Monitoring Features
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to monitor and optimize your applications
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
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
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-slate-800/50 to-cyan-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                  Performance Monitoring Pricing
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your monitoring needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`group bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2xl relative overflow-hidden ${
                    plan.popular 
                      ? 'border-cyan-500/50 bg-gradient-to-br from-cyan-500/10 to-blue-500/10' 
                      : 'border-white/20 hover:border-cyan-500/30'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-cyan-400">${plan.price}</span>
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
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700 shadow-lg hover:shadow-cyan-500/25'
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

        {/* Testimonials Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Trusted by DevOps Teams
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what our users say about Zion Performance Monitor
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Activity key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-white font-semibold mr-3">
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
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-cyan-900/30 to-blue-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Start Monitoring Your Performance
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join thousands of teams who use Zion Performance Monitor to optimize their applications. 
              Start your free trial today - no credit card required.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
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