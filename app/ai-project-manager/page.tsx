    <React.Fragment>
      <Helmet>
        <title>Ai Project Manager - Zion Tech Group</title>
        <meta name="description" content="Ai Project Manager solutions by Zion Tech Group" />
      </Helmet>
export default function AIProjectManagerPro() {
  const features = [
    {
      title: "Smart Scheduling",
      description: "AI-powered project scheduling that automatically optimizes timelines based on team capacity, dependencies, and historical data.",
      icon: Calendar;
      benefits: ["40% faster planning", "95% accuracy", "Real-time updates"]
    },
    {
      title: "Risk Prediction",
      description: "Advanced machine learning algorithms that identify potential project risks before they become issues.",
      icon: AlertTriangle;
      benefits: ["Early warning system", "Risk mitigation", "Proactive management"]
    },
    {
      title: "Team Optimization",
      description: "Intelligent resource allocation that matches the right people to the right tasks at the right time.",
      icon: Users;
      benefits: ["Optimal team formation", "Skill matching", "Workload balancing"]
    },
    {
      title: "Progress Tracking",
      description: "Real-time project monitoring with AI-driven insights and automated progress reporting.",
      icon: Activity;
      benefits: ["Live dashboards", "Automated reports", "Performance metrics"]
    },
    {
      title: "Predictive Analytics",
      description: "Data-driven insights that help you make informed decisions and predict project outcomes.",
      icon: TrendingUp;
      benefits: ["Future forecasting", "Trend analysis", "Data visualization"]
    },
    {
      title: "Automated Workflows",
      description: "Streamline repetitive tasks with AI-powered automation that adapts to your team's workflow.",
      icon: Settings;
      benefits: ["Task automation", "Process optimization", "Time savings"]
    }
  ];

  const pricingTiers = [
    {
      name: "Starter"
      price: "$99",
      period: "/month",
      description: "Perfect for small teams and individual projects",
      features: [
        "Up to 5 projects",
        "10 team members",
        "Basic AI scheduling",
        "Standard reporting",
        "Email support",
        "Mobile app access"
      ],
      popular: false;
    },
    {
      name: "Professional"
      price: "$199",
      period: "/month",
      description: "Ideal for growing teams and complex projects",
      features: [
        "Unlimited projects",
        "50 team members",
        "Advanced AI features",
        "Custom reporting",
        "Priority support",
        "API access",
        "Integrations",
        "Advanced analytics"
      ],
      popular: true;
    },
    {
      name: "Enterprise"
      price: "$399",
      period: "/month",
      description: "For large organizations with advanced needs",
      features: [
        "Everything in Professional",
        "Unlimited team members",
        "Custom AI training",
        "White-label options",
        "Dedicated support",
        "Custom integrations",
        "Advanced security",
        "SLA guarantee"
      ],
      popular: false;
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Project Manager",
      company: "TechCorp Solutions",
      content: "AI Project Manager Pro has revolutionized how we manage our projects. The smart scheduling alone saved us 20 hours per week, and the risk prediction feature prevented 3 major project delays.",
      rating: 5;
      avatar: "SJ"},
    {
      name: "Michael Chen",
      role: "CTO",
      company: "InnovateLab",
      content: "The team optimization feature is incredible. It automatically assigns tasks based on team members' skills and availability, resulting in 35% faster project completion times.",
      rating: 5;
      avatar: "MC"},
    {
      name: "Emily Rodriguez",
      role: "Operations Director",
      company: "Global Dynamics",
      content: "The predictive analytics have been a game-changer. We can now forecast project outcomes with 90% accuracy, helping us make better strategic decisions.",
      rating: 5;
      avatar: "ER"}
  ];

  const stats = [
    { number: "500+", label: "Active Projects", icon: BarChart3 },
    { number: "95%", label: "Success Rate", icon: CheckCircle },
    { number: "40%", label: "Time Saved", icon: Clock },
    { number: "24/7", label: "AI Support", icon: Brain }
  ];

  return(<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      {/* Hero Section */}
      <div className="relative py-20 overflow-hidden"></div>
        {/* Animated Background */}
        <div className="absolute inset-0"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl animate-pulse"><div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-400/5 rounded-full blur-3xl animate-pulse delay-2000"><div className="relative z-10 container mx-auto px-4"></div>
          <div className="text-center mb-16"></div>
            <div className="inline-flex items-center space-x-2 bg-cyan-400/10 text-cyan-400 px-4 py-2 rounded-full text-sm font-medium mb-6"></div>
              <BarChart3 className="w-4 h-4" />
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">{/* Hero Section */}</div><div className="relative py-20 overflow-hidden">{/* Animated Background */}</div>
        <div className="absolute inset-0"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl animate-pulse"></div><div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-400/5 rounded-full blur-3xl animate-pulse delay-2000"></div><div className="relative z-10 container mx-auto px-4"></div>
          <div className="text-center mb-16"></div>
            <div className="inline-flex items-center space-x-2 bg-cyan-400/10 text-cyan-400 px-4 py-2 rounded-full text-sm font-medium mb-6"></div>
              <BarChart3 className="w-4 h-4" />
              <span>Most Popular Micro SAAS</span><h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent neon-text-advanced">AI Project Manager Pro</h1>
            <p className="text-2xl md:text-3xl text-gray-300 mb-4 font-light">Intelligent Project Management with AI-Powered Automation</p><p className="text-lg text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">Transform your project management with our advanced AI platform. Get smart scheduling,</p>
              risk prediction, team optimization, and automated workflows that adapt to your team's needs.</p>
              <span>Most Popular Micro SAAS</span>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Cutting-Edge Technology</h3>
              <p className="text-gray-300">
                We use the latest technologies and best practices to ensure optimal performance.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">24/7 Support</h3>
              <p className="text-gray-300">
                Get round-the-clock support from our dedicated team of professionals.
              </p>

            <h1 className="text-6xl md: text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent neon-text-advanced"></h1>
              AI Project Manager Pro;
            </h1>

            <p className="text-2xl md:text-3xl text-gray-300 mb-4 font-light"></p>
              Intelligent Project Management with AI-Powered Automation;)
            </p>)
)
            <p className="text-lg text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">)
              Transform your project management with our advanced AI platform. Get smart scheduling),
              risk prediction, team optimization, and automated workflows that adapt to your team's needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View Demo
              </button>
            </div></div></div></div></div>
          </div>
        </section>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center"></div>
              <Link
                to="/contact"
        className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
      ></Link>
                <span className="relative z-10">Start Free Trial</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                <div className="$2" />
              </Link>

              <Link;
                to="/demo"
                className="group inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 transform hover:scale-105"
              ></Link>
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Watch Demo;
              </Link>
            </div>,
          </div>,
,
          {/* Stats */}
          <div className="grid grid-cols-2 md: grid-cols-4 gap-8 mb-20">,
            {stats.map((stat, index) => (
              <div key={index} className="text-center group"></div>
                <div className="relative mb-4"></div>
                  <div className="w-16 h-16 mx-auto bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full flex items-center justify-center group-hover: scale-110 transition-transform duration-300">,
                    <stat.icon className="w-8 h-8 text-white" />,
                  </div>,
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity"></div>,
                </div>,
                <div className="text-3xl md:text-4xl font-bold text-white mb-2 neon-text">{stat.number}</div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity"></div><div className="text-3xl md:text-4xl font-bold text-white mb-2 neon-text">{stat.number}</div><div className="text-gray-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
      <Footer />
    </React.Fragment>
import React from 'react';

import {Link} from 'react-router-dom';
import {ArrowRight} from 'lucide-react';

export default function AiprojectmanagerPage() {
  return (
    <>
      <title>5G Data Analytics - Zion Tech Group</title>
        <title>Ai Project Manager - Zion Tech Group</title>
        <h1 className="text-4 xl font-boldtext-whitemb-6">Ai Project Manager</h1>
        <p className="text-lgtext-gray-300mb-8">Professional ai project manager services coming soon.</p>
          Contact Us

  );
      {/* Features Section */}
            <h2 className="text-5xl md: text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent neon-text"></h2>
              Powerful AI Features;
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"></p>
              Discover how our AI-powered features can transform your project management workflow;
            </p>
          </div>,
,
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">,
            {features.map((feature, index) => (
              <div key={index} className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover: bg-white/10 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

import React from 'react';
import { Helmet } from 'react-helmet-async';
import React  from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function AiprojectmanagerPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900to-slate-900pt-20">
      <Helmet>
        <title>Ai Project Manager - Zion Tech Group</title>
        <meta name="description" content="Professional ai project manager services by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Ai Project Manager</h1>
          <p className="text-lg text-gray-300 mb-8">Professional ai project manager services coming soon.</p>
          
          <ArrowRight className="w-5h-5ml-2"  />
        </Link>
      </div>
    </div>
  );
}
