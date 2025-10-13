<<<<<<< HEAD
import { Link } from 'react-router-dom';
import { Users, Brain, Clock, Shield, ArrowRight, CheckCircle, Star, FileText, TrendingUp, Calendar, Heart } from 'lucide-react';
=======
import React from 'react';
>>>>>>> 2fda46b8c81d66ef34322b3dc826b41bdfbc86e8
import EnhancedSEO from '../components/EnhancedSEO';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Clock } from 'lucide-react';
import { Users } from 'lucide-react';
import { Star } from 'lucide-react';
import { Shield } from 'lucide-react';
import { CheckCircle } from 'lucide-react';
import { TrendingUp } from 'lucide-react';
import { Brain } from 'lucide-react';
import { Calendar } from 'lucide-react';
import { Monitor } from 'lucide-react';
import { FileText } from 'lucide-react';
import { Heart } from 'lucide-react';

const ZionHRAssistantPro = () => {
  const features = [
    {
      title: "AI-Powered Resume Screening",
      description: "Automatically screen and rank candidates with 95% accuracy using advanced NLP and machine learning",
      icon: <FileText className="w-6 h-6" />,
      benefit: "Save 80% screening time"
    },
    {
      title: "Intelligent Interview Scheduling",
      description: "Automatically coordinate interview times across multiple time zones and calendars",
      icon: <Clock className="w-6 h-6" />,
      benefit: "Zero scheduling conflicts"
    },
    {
      title: "Employee Performance Analytics",
      description: "Track and analyze employee performance with AI-driven insights and recommendations",
      icon: <TrendingUp className="w-6 h-6" />,
      benefit: "Data-driven HR decisions"
    },
    {
      title: "Automated Onboarding",
      description: "Streamline new employee onboarding with personalized workflows and task automation",
      icon: <Users className="w-6 h-6" />,
      benefit: "50% faster onboarding"
    },
    {
      title: "Smart Leave Management",
      description: "Intelligent leave balance tracking, approval workflows, and conflict resolution",
      icon: <Calendar className="w-6 h-6" />,
      benefit: "Automated compliance"
    },
    {
      title: "Employee Sentiment Analysis",
      description: "Monitor employee satisfaction and engagement through AI-powered sentiment analysis",
      icon: <Brain className="w-6 h-6" />,
      benefit: "Proactive engagement"
    }
  ];

  const pricingPlans = [
    {
      name: "Startup",
      price: "$149",
      period: "/month",
      description: "Perfect for small teams",
      features: [
        "Up to 25 employees",
        "Basic AI screening",
        "Interview scheduling",
        "Leave management",
        "Email support",
        "Mobile app access",
        "Basic analytics"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$399",
      period: "/month",
      description: "Ideal for growing companies",
      features: [
        "Up to 100 employees",
        "Advanced AI screening",
        "Performance analytics",
        "Automated onboarding",
        "Priority support",
        "Custom workflows",
        "API integration",
        "Advanced reporting"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$799",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited employees",
        "Premium AI features",
        "Custom AI training",
        "White-label options",
        "24/7 phone support",
        "Dedicated account manager",
        "Custom integrations",
        "Advanced security"
      ],
      popular: false
    }
  ];

  const hrProcesses = [
    {
      title: "Recruitment & Hiring",
      description: "AI-powered candidate screening, interview scheduling, and talent pipeline management",
      icon: <Users className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Performance Management",
      description: "Continuous performance tracking, goal setting, and 360-degree feedback systems",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Employee Engagement",
      description: "Sentiment analysis, engagement surveys, and culture monitoring tools",
      icon: <Heart className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Compliance & Analytics",
      description: "Automated compliance tracking, reporting, and predictive analytics",
      icon: <Shield className="w-8 h-8" />,
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="Zion HR Assistant Pro - AI-Powered Human Resources Management | Zion Tech Group"
        description="Revolutionary AI-powered HR management system with intelligent recruitment, performance analytics, and automated workflows. Transform your HR operations with cutting-edge technology."
        keywords="AI HR management, recruitment automation, performance analytics, employee engagement, HR software, talent management, human resources AI"
        canonical="https://ziontechgroup.com/zion-hr-assistant-pro"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <Brain className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">AI-Powered HR Management</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                Zion HR Assistant Pro
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Revolutionize your human resources with AI-powered recruitment, performance analytics, 
              and automated workflows. Transform HR from administrative burden to strategic advantage.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Watch Demo
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HR Processes Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Complete HR Management Suite
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From recruitment to retirement, manage every aspect of your human resources 
              with intelligent automation and AI-powered insights.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {hrProcesses.map((process, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 text-center"
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-lg bg-gradient-to-r ${process.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform`}>
                  {process.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {process.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              AI-Powered HR Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Leverage cutting-edge artificial intelligence to automate HR processes, 
              improve decision-making, and enhance employee experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {feature.description}
                </p>
                <div className="flex items-center text-cyan-400 text-sm font-medium">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  {feature.benefit}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Flexible Pricing for Every Organization
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your team size and HR needs. All plans include our core AI features 
              and come with a 30-day free trial.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                  plan.popular 
                    ? 'border-cyan-400 shadow-2xl shadow-cyan-500/25' 
                    : 'border-white/20 hover:border-cyan-400/50'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300 ml-2">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      {feature.title}
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 shadow-lg hover:shadow-cyan-500/25'
                      : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Trusted by HR Leaders Worldwide
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how HR professionals are transforming their departments with our AI-powered solution.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                  </div>
                  <div className="text-cyan-400 text-sm font-medium bg-cyan-400/10 px-3 py-1 rounded-full">
                    {testimonial.savings}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your HR Operations?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join thousands of HR professionals already using Zion HR Assistant Pro to streamline their operations. 
            Start your free trial today and experience the future of HR management.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/demo"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ZionHRAssistantPro;