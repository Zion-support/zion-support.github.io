import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import {
  ArrowRight, 
  BarChart3, 
  TrendingUp, 
  Zap, 
  Shield, 
  Target, 
  Brain, 
  Users, 
  Globe, 
  Mail, 
  Phone, 
  Database,
  Settings,
  Sparkles,
  Lightbulb,
  CheckCircle,
  TrendingDown,
  Monitor
} from "lucide-react";
=======
import { ArrowRight } from 'lucide-react';
import { Star } from 'lucide-react';
import { Database } from 'lucide-react';
import { CheckCircle } from 'lucide-react';
import { Zap } from 'lucide-react';
import { Brain } from 'lucide-react';
import { Settings } from 'lucide-react';
import { Sparkles } from 'lucide-react';
import { Globe } from 'lucide-react';
import { Monitor } from 'lucide-react';
import { BarChart3 } from 'lucide-react';
import { Mail } from 'lucide-react';
import { Phone } from 'lucide-react';
>>>>>>> 2fda46b8c81d66ef34322b3dc826b41bdfbc86e8

export default function AIAnalytics() {
  const benefits = [
    "Real-time data processing and analysis",
    "Predictive analytics and forecasting",
    "Custom dashboard creation",
    "Automated reporting and insights",
    "Machine learning model integration",
    "Advanced data visualization"
  ];
  
  const analyticsStats = [
    {
      label: "Data Points Processed", value: "2.5M+", icon: <BarChart3 className="w-6 h-6" />
    },
    { label: "Real-time Updates", value: "99.9%", icon: <Zap className="w-6 h-6" /> },
    { label: "Accuracy Rate", value: "98.5%", icon: <CheckCircle className="w-6 h-6" /> },
    { label: "Processing Speed", value: "50ms", icon: <TrendingUp className="w-6 h-6" /> }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Data Scientist",
      company: "TechCorp",
      content: "Zion's AI analytics platform has revolutionized how we process and understand our data. The insights are incredible!",
      rating: 5,
      avatar: "/api/placeholder/64/64"
    },
    {
      name: "Michael Chen",
      role: "CTO",
      company: "DataFlow Inc",
      content: "The predictive analytics capabilities have helped us make better business decisions and reduce costs significantly.",
      rating: 5,
      avatar: "/api/placeholder/64/64"
    }
  ];

  const features = [
    {
      title: "Real-time Analytics",
      description: "Process and analyze data in real-time with our advanced AI algorithms and machine learning models.",
      icon: <BarChart3 className="w-8 h-8" />,
      benefits: ["Live data processing", "Instant insights", "Real-time dashboards", "Automated alerts"]
    },
    {
      title: "Predictive Modeling",
      description: "Build sophisticated predictive models to forecast trends, behaviors, and outcomes with high accuracy.",
      icon: <Brain className="w-8 h-8" />,
      benefits: ["Trend forecasting", "Risk assessment", "Demand prediction", "Performance optimization"]
    },
    {
      title: "Custom Dashboards",
      description: "Create personalized dashboards with interactive visualizations tailored to your specific business needs.",
      icon: <Settings className="w-8 h-8" />,
      benefits: ["Drag-and-drop builder", "Custom widgets", "Interactive charts", "Mobile responsive"]
    },
    {
      title: "Automated Reporting",
      description: "Generate comprehensive reports automatically with scheduled delivery and customizable formats.",
      icon: <Zap className="w-8 h-8" />,
      benefits: ["Scheduled reports", "Custom templates", "Multi-format export", "Email delivery"]
    },
    {
      title: "Data Integration",
      description: "Seamlessly connect and integrate data from multiple sources including databases, APIs, and cloud services.",
      icon: <Database className="w-8 h-8" />,
      benefits: ["Multi-source integration", "API connectivity", "Cloud synchronization", "Data transformation"]
    },
    {
      title: "Custom AI Models",
      description: "Build and deploy custom machine learning models tailored to your specific business needs and data patterns.",
      icon: <Settings className="w-8 h-8" />,
      benefits: ["Custom model training", "Model deployment", "Performance monitoring", "Continuous learning"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Analytics - Zion Tech Group</title>
        <meta name="description" content="Advanced AI analytics platform with real-time insights and predictive modeling capabilities." />
        <meta name="keywords" content="AI analytics, data analysis, business intelligence, machine learning" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-analytics" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">AI-Powered Analytics</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Advanced AI
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"> Analytics</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform your data into actionable insights with our cutting-edge AI analytics platform. 
            Get real-time analysis, predictive modeling, and intelligent automation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              to="/demo" 
              className="inline-flex items-center px-8 py-4 border border-cyan-500/30 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-300"
            >
              View Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {analyticsStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Powerful Analytics Features</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to transform your data into actionable business insights
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="text-cyan-400 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-300">Trusted by leading companies worldwide</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <div className="text-white font-semibold">{testimonial.name}</div>
                    <div className="text-gray-400 text-sm">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">"{testimonial.content}"</p>
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 rounded-2xl p-12">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Data?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Start your AI analytics journey today and unlock the full potential of your data.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
              >
                Get Started Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                to="/pricing" 
                className="inline-flex items-center px-8 py-4 border border-cyan-500/30 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-300"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}