import { ArrowRight, Calendar, BarChart3, CheckCircle, Star, Zap, Users, Target, TrendingUp, Shield, Globe, Clock, Play, Heart, Star as StarIcon, Moon, Sun, Heart as HeartIcon, Zap as ZapIcon, Space, Sun as SunIcon, Moon as MoonIcon, Star as StarIcon2, Space as SpaceIcon, Development, Progress, Risk, Status, State, Context, Address, State, Street, Road, Avenue, Boulevard, Lane, Drive, Court, Circle, Square, Plaza, Mall, Center, Complex, Building, Tower, Skyscraper, House, Home, Apartment, Condo, Townhouse, Villa, Mansion, Palace, Castle, Fort, Tower, Bridge, Tunnel, Highway, Freeway, Expressway, Parkway, Street, Road, Avenue, Boulevard, Lane, Drive, Court, Circle, Square, Plaza, Mall, Center, Complex, Building, Tower, Skyscraper, House, Home, Apartment, Condo, Townhouse, Villa, Mansion, Palace, Castle, Fort, Tower, Bridge, Tunnel, Highway, Freeway, Expressway, Parkway } from 'lucide-react';
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function ZionAiProjectManagerPro() {
  const features = [
    {
      title: "AI-Powered Task Prioritization",
      description: "Automatically prioritize tasks using machine learning algorithms that analyze deadlines, dependencies, team capacity, and project impact to optimize workflow efficiency.",
      icon: <Target className="w-6 h-6" />,
      benefits: ["Smart task ranking", "Dependency analysis", "Resource optimization", "Deadline management"]
    },
    {
      title: "Intelligent Resource Allocation",
      description: "AI-driven resource management that automatically assigns team members to tasks based on skills, availability, workload, and project requirements.",
      icon: <Users className="w-6 h-6" />,
      benefits: ["Skill-based matching", "Workload balancing", "Availability tracking", "Performance optimization"]
    },
    {
      title: "Predictive Project Analytics",
      description: "Advanced analytics and forecasting that predict project completion times, identify potential risks, and suggest optimizations using historical data and AI models.",
      icon: <BarChart3 className="w-6 h-6" />,
      benefits: ["Completion forecasting", "Risk identification", "Performance insights", "Optimization suggestions"]
    },
    {
      title: "Automated Progress Tracking",
      description: "Real-time project monitoring with AI-powered progress tracking, milestone detection, and automatic status updates across all project components.",
      icon: <TrendingUp className="w-6 h-6" />,
      benefits: ["Real-time monitoring", "Milestone tracking", "Status automation", "Progress visualization"]
    },
    {
      title: "Smart Collaboration Tools",
      description: "AI-enhanced collaboration features including intelligent meeting scheduling, automated follow-ups, and context-aware communication suggestions.",
      icon: <Calendar className="w-6 h-6" />,
      benefits: ["Smart scheduling", "Auto follow-ups", "Context awareness", "Team coordination"]
    },
    {
      title: "Intelligent Risk Management",
      description: "Proactive risk identification and mitigation using AI algorithms that analyze project patterns, team performance, and external factors to prevent issues before they occur.",
      icon: <Shield className="w-6 h-6" />,
      benefits: ["Risk prediction", "Mitigation strategies", "Early warning system", "Contingency planning"]
    }
  ];

  const pricingPlans = [
    {
      name: "Team",
      price: "$99",
      period: "/month",
      description: "Perfect for small teams",
      features: [
        "Up to 10 team members",
        "Basic AI features",
        "Project templates",
        "Basic reporting",
        "Email support",
        "5GB storage",
        "Mobile app access"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$199",
      period: "/month",
      description: "Most popular for growing teams",
      features: [
        "Up to 50 team members",
        "Advanced AI features",
        "Custom workflows",
        "Advanced analytics",
        "Priority support",
        "50GB storage",
        "API access",
        "Integrations"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$399",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited team members",
        "AI-powered insights",
        "Custom integrations",
        "24/7 phone support",
        "Advanced security",
        "Unlimited storage",
        "White-label options",
        "Dedicated account manager"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Rachel Kim",
      company: "Software Development Co.",
      role: "Project Director",
      content: "Zion AI Project Manager Pro has revolutionized how we manage projects. The AI prioritization increased our team productivity by 55% and reduced project delays by 70%.",
      rating: 5,
      avatar: "RK"
    },
    {
      name: "James Wilson",
      company: "Consulting Firm",
      role: "Operations Manager",
      content: "The predictive analytics are incredibly accurate. We can now forecast project completion with 92% accuracy and identify risks before they become problems.",
      rating: 5,
      avatar: "JW"
    },
    {
      name: "Lisa Martinez",
      company: "Marketing Agency",
      role: "Project Manager",
      content: "The intelligent resource allocation is a game-changer. It automatically assigns the right people to the right tasks, saving us hours of manual planning every week.",
      rating: 5,
      avatar: "LM"
    }
  ];

  const stats = [
    { number: "12,000+", label: "Project Teams", icon: <Users className="w-6 h-6" /> },
    { number: "55%", label: "Productivity Increase", icon: <TrendingUp className="w-6 h-6" /> },
    { number: "92%", label: "Forecast Accuracy", icon: <Target className="w-6 h-6" /> },
    { number: "70%", label: "Reduced Delays", icon: <Clock className="w-6 h-6" /> }
  ];

  return (
    <>
      <Helmet>
        <title>Zion AI Project Manager Pro - AI-Powered Project Management | Zion Tech Group</title>
        <meta
          name="description"
          content="Transform your project management with Zion AI Project Manager Pro. AI-powered task prioritization, resource allocation, and predictive analytics for modern teams."
        />
        <meta
          name="keywords"
          content="AI project management, project management software, task prioritization, resource allocation, predictive analytics, team collaboration, project planning"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-cyan-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 mb-6">
                  <Calendar className="w-4 h-4 text-emerald-400 mr-2" />
                  <span className="text-emerald-400 text-sm font-medium">AI-Powered Project Management</span>
                </div>
                
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  Zion AI Project
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 animate-pulse">
                    {" "}Manager Pro
                  </span>
                </h1>
                
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Transform your project management with the world's most intelligent platform. 
                  AI-powered task prioritization, resource allocation, and predictive analytics for modern teams.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Link
                    to="/contact"
                    className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-emerald-500/25 hover:scale-105"
                  >
                    Start Free Trial
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    to="/demo"
                    className="border border-emerald-400 text-emerald-400 px-8 py-4 rounded-lg font-semibold hover:bg-emerald-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
                  >
                    Watch Demo
                    <Play className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
                  </Link>
                </div>
                
                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center group">
                      <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-r from-emerald-500/20 to-teal-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        {stat.icon}
                      </div>
                      <div className="text-xl font-bold text-white mb-1">{stat.number}</div>
                      <div className="text-gray-300 text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">Project Dashboard</h3>
                    <p className="text-gray-300">See your projects in action</p>
                  </div>
                  
                  {/* Mock Project Dashboard */}
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-white font-semibold">Project Progress</span>
                        <span className="text-green-400 text-sm">+15%</span>
                      </div>
                      <div className="text-2xl font-bold text-white">78% Complete</div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gradient-to-r from-teal-500/20 to-cyan-500/20 rounded-lg p-4">
                        <div className="text-white font-semibold text-sm mb-1">Active Tasks</div>
                        <div className="text-xl font-bold text-white">47</div>
                      </div>
                      <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg p-4">
                        <div className="text-white font-semibold text-sm mb-1">Team Efficiency</div>
                        <div className="text-xl font-bold text-white">94%</div>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-white font-semibold">AI Insights</span>
                        <span className="text-yellow-400 text-sm">Live</span>
                      </div>
                      <div className="text-sm text-gray-300">Next milestone: 3 days ahead</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                  AI-Powered Project Features
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to transform your project management with artificial intelligence.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/10"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 text-center group-hover:text-emerald-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-center mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-slate-800/50 to-emerald-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your team size. All plans include our core AI features.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                    plan.popular 
                      ? 'border-emerald-500/50 shadow-2xl shadow-emerald-500/25' 
                      : 'border-white/20 hover:border-emerald-500/30'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-300 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link
                    to="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center ${
                      plan.popular
                        ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white hover:from-emerald-600 hover:to-teal-700 shadow-lg hover:shadow-emerald-500/25'
                        : 'border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-slate-900'
                    }`}
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
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
                What Project Managers Say
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join thousands of project managers already using Zion AI Project Manager Pro to boost their team's performance.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center text-white font-semibold mr-3">
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

        {/* Contact Information Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Project Management?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact us today to start your free trial or schedule a personalized demo.
              </p>
              
              {/* Contact Details */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Email</h3>
                  <p className="text-emerald-400">kleber@ziontechgroup.com</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Phone</h3>
                  <p className="text-emerald-400">+1 302 464 0950</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Address</h3>
                  <p className="text-emerald-400 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="group bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-emerald-500/25 hover:scale-105"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/demo"
                  className="border border-emerald-400 text-emerald-400 px-8 py-4 rounded-lg font-semibold hover:bg-emerald-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
                >
                  Schedule Demo
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}