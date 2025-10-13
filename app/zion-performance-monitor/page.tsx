import { ArrowRight, Activity, Zap, BarChart3, Users, Target, Globe, Star, CheckCircle, Mail, Smartphone, MapPin, TrendingUp, Monitor } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function ZionPerformanceMonitor() {
  const features = [
    {
      title: "Real-Time Performance Monitoring",
      description: "Monitor application performance, server health, and user experience with real-time dashboards and alerts",
      icon: <Activity className="w-6 h-6" />,
      benefit: "99.9% uptime guarantee"
    },
    {
      title: "AI-Powered Anomaly Detection",
      description: "Intelligent anomaly detection that identifies performance issues before they impact users",
      icon: <Target className="w-6 h-6" />,
      benefit: "Proactive issue resolution"
    },
    {
      title: "Advanced Analytics",
      description: "Comprehensive performance analytics with trends, patterns, and predictive insights",
      icon: <BarChart3 className="w-6 h-6" />,
      benefit: "Data-driven optimization"
    },
    {
      title: "Automated Alerting",
      description: "Smart alerting system with customizable thresholds and escalation procedures",
      icon: <Zap className="w-6 h-6" />,
      benefit: "Instant notifications"
    },
    {
      title: "Multi-Platform Support",
      description: "Monitor web applications, mobile apps, APIs, and infrastructure across all platforms",
      icon: <Globe className="w-6 h-6" />,
      benefit: "Complete visibility"
    },
    {
      title: "Team Collaboration",
      description: "Multi-user dashboards with role-based access and collaborative incident management",
      icon: <Users className="w-6 h-6" />,
      benefit: "Seamless teamwork"
    }
  ];

  const monitoringTypes = [
    {
      name: "Application Performance",
      description: "Monitor response times, throughput, and error rates for web and mobile apps",
      icon: <Monitor className="w-8 h-8" />,
      accuracy: "99.9%"
    },
    {
      name: "Infrastructure Monitoring",
      description: "Track server health, CPU, memory, disk usage, and network performance",
      icon: <Activity className="w-8 h-8" />,
      accuracy: "99.9%"
    },
    {
      name: "User Experience",
      description: "Monitor real user sessions, page load times, and user journey analytics",
      icon: <Users className="w-8 h-8" />,
      accuracy: "99.8%"
    },
    {
      name: "API Monitoring",
      description: "Track API endpoints, response times, and availability across all services",
      icon: <Zap className="w-8 h-8" />,
      accuracy: "99.9%"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$49",
      period: "per month",
      description: "Perfect for small applications",
      features: [
        "Up to 10 monitors",
        "Basic analytics",
        "Email alerts",
        "Email support",
        "Mobile app",
        "1 team member"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$149",
      period: "per month",
      description: "Ideal for growing teams",
      features: [
        "Up to 100 monitors",
        "Advanced analytics",
        "Priority support",
        "25 team members",
        "API access",
        "Custom dashboards",
        "AI anomaly detection"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$399",
      period: "per month",
      description: "For large organizations",
      features: [
        "Unlimited monitors",
        "AI-powered insights",
        "Dedicated support",
        "24/7 phone support",
        "Unlimited team members",
        "Custom integrations",
        "White-label options"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Alex Rodriguez",
      company: "SaaS Platform",
      role: "DevOps Engineer",
      content: "Zion Performance Monitor has reduced our downtime by 95%. The AI anomaly detection catches issues before they become problems.",
      rating: 5,
      avatar: "AR"
    },
    {
      name: "Maria Santos",
      company: "E-commerce Platform",
      role: "CTO",
      content: "The real-time monitoring is incredible. We can see exactly what's happening with our applications and fix issues instantly.",
      rating: 5,
      avatar: "MS"
    },
    {
      name: "James Wilson",
      company: "Mobile App Company",
      role: "Performance Engineer",
      content: "The user experience monitoring has helped us improve our app performance by 60%. Our users are much happier now.",
      rating: 5,
      avatar: "JW"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Zion Performance Monitor - AI-Powered Application Monitoring Platform | Zion Tech Group</title>
        <meta
          name="description"
          content="Monitor your applications with Zion Performance Monitor. Real-time monitoring, AI anomaly detection, and advanced analytics for maximum uptime and performance."
        />
        <meta
          name="keywords"
          content="application monitoring, performance monitoring, uptime monitoring, infrastructure monitoring, APM, real-time monitoring, performance analytics"
        />
        <link rel="canonical" href="https://ziontechgroup.com/zion-performance-monitor" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-rose-500/10 via-purple-500/10 to-cyan-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(244,63,94,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-rose-500/20 to-purple-500/20 border border-rose-500/30 mb-6">
              <Activity className="w-4 h-4 text-rose-400 mr-2" />
              <span className="text-rose-400 text-sm font-medium">Performance Monitoring Platform</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-purple-400 to-cyan-400">
                Zion Performance Monitor
              </span>
              <div className="absolute -inset-1 bg-gradient-to-r from-rose-400 via-purple-400 to-cyan-400 rounded-lg blur opacity-30 animate-pulse"></div>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              The most intelligent performance monitoring platform powered by AI. Monitor applications, 
              infrastructure, and user experience with real-time insights and proactive alerting.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-rose-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-rose-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-rose-500/25 hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-rose-400 text-rose-400 px-8 py-4 rounded-lg font-semibold hover:bg-rose-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Watch Demo
                <Activity className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-rose-400 mb-2">99.9%</div>
                <div className="text-gray-300 text-sm">Uptime Guarantee</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">95%</div>
                <div className="text-gray-300 text-sm">Downtime Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">60%</div>
                <div className="text-gray-300 text-sm">Performance Improvement</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-rose-400 mb-2">24/7</div>
                <div className="text-gray-300 text-sm">Continuous Monitoring</div>
              </div>
            </div>
          </div>
        </section>

        {/* Monitoring Types Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Comprehensive Monitoring Coverage
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Monitor every aspect of your application and infrastructure.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {monitoringTypes.map((type, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-rose-500/10 text-center"
                >
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-rose-500 to-purple-600 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                    {type.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-rose-300 transition-colors">
                    {type.name}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {type.description}
                  </p>
                  <div className="flex items-center justify-center text-rose-400 text-sm font-medium">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    {type.accuracy} Accuracy
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
                Powerful Monitoring Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to ensure optimal performance and reliability.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-rose-500/10"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-rose-500 to-purple-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-rose-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="flex items-center text-rose-400 text-sm font-medium">
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
                Scale Your Monitoring
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that matches your monitoring needs and grow your reliability.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                    plan.popular 
                      ? 'border-rose-500/50 shadow-2xl shadow-rose-500/20' 
                      : 'border-white/20 hover:border-rose-500/30'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-rose-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-rose-400">{plan.price}</span>
                      <span className="text-gray-300 ml-2">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-rose-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group ${
                      plan.popular
                        ? 'bg-gradient-to-r from-rose-500 to-purple-600 text-white hover:from-rose-600 hover:to-purple-700 shadow-lg hover:shadow-rose-500/25'
                        : 'border border-rose-400 text-rose-400 hover:bg-rose-400 hover:text-slate-900'
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
                Trusted by DevOps Teams
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what DevOps professionals say about Zion Performance Monitor
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-rose-500/10"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-rose-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold mr-3">
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
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-rose-900/30 to-purple-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Monitor Your Performance Today
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join thousands of teams using Zion Performance Monitor to ensure optimal performance and reliability. 
              Start your free trial today.
            </p>
            
            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-rose-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Email</h3>
                <p className="text-rose-400">kleber@ziontechgroup.com</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-rose-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Smartphone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Phone</h3>
                <p className="text-rose-400">+1 302 464 0950</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-rose-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Address</h3>
                <p className="text-rose-400 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-rose-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-rose-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-rose-500/25 hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-rose-400 text-rose-400 px-8 py-4 rounded-lg font-semibold hover:bg-rose-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Watch Demo
                <Activity className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}