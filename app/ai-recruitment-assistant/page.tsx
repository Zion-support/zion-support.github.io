import React from 'react';
import { Link } from 'react-router-dom';
import { Users, CheckCircle, Star, Clock, DollarSign, Zap, Brain, Target, BarChart3, FileText, Search, Filter, Award, ArrowRight, Sparkles, TrendingUp, Shield, Globe, Smartphone, Monitor, Headphones, Mic, Calendar, Video, Code } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';

const AIRecruitmentAssistantPage = () => {
  const features = [
    {
      title: "AI-Powered Resume Screening",
      description: "Advanced AI analyzes resumes and applications, scoring candidates based on job requirements with 95% accuracy",
      icon: <FileText className="w-6 h-6" />,
      stats: "95% accuracy rate"
    },
    {
      title: "Intelligent Candidate Matching",
      description: "Machine learning algorithms match candidates to job positions based on skills, experience, and cultural fit",
      icon: <Target className="w-6 h-6" />,
      stats: "10x faster matching"
    },
    {
      title: "Automated Interview Scheduling",
      description: "AI coordinates interview schedules across multiple time zones and automatically sends calendar invites",
      icon: <Calendar className="w-6 h-6" />,
      stats: "Zero scheduling conflicts"
    },
    {
      title: "Video Interview Analysis",
      description: "AI analyzes video interviews for communication skills, emotional intelligence, and cultural fit",
      icon: <Video className="w-6 h-6" />,
      stats: "Real-time analysis"
    },
    {
      title: "Bias Detection & Mitigation",
      description: "Advanced algorithms detect and reduce unconscious bias in recruitment processes for fair hiring",
      icon: <Shield className="w-6 h-6" />,
      stats: "40% bias reduction"
    },
    {
      title: "Predictive Analytics",
      description: "Predict candidate success, retention rates, and performance based on historical data and patterns",
      icon: <BarChart3 className="w-6 h-6" />,
      stats: "85% prediction accuracy"
    }
  ];

  const pricingPlans = [
    {
      name: "Startup",
      price: "$199",
      period: "/month",
      description: "Perfect for small teams and startups",
      features: [
        "Up to 50 job postings/month",
        "AI resume screening",
        "Basic candidate matching",
        "Email support",
        "Standard analytics",
        "1 user account",
        "Basic integrations",
        "30-day data retention"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$499",
      period: "/month",
      description: "Ideal for growing companies and HR teams",
      features: [
        "Up to 200 job postings/month",
        "Advanced AI screening",
        "Intelligent matching",
        "Video interview analysis",
        "Priority support",
        "Advanced analytics",
        "5 user accounts",
        "Full integrations",
        "Bias detection",
        "90-day data retention",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$999",
      period: "/month",
      description: "Complete solution for large organizations",
      features: [
        "Unlimited job postings",
        "Custom AI models",
        "Predictive analytics",
        "24/7 dedicated support",
        "White-label solution",
        "Custom analytics",
        "Unlimited user accounts",
        "Custom integrations",
        "Advanced bias mitigation",
        "Unlimited data retention",
        "Full API access",
        "Dedicated account manager"
      ],
      popular: false
    }
  ];

  const stats = [
    { number: "100K+", label: "Candidates Processed", icon: <Users className="w-6 h-6" /> },
    { number: "95%", label: "Screening Accuracy", icon: <Target className="w-6 h-6" /> },
    { number: "10x", label: "Faster Hiring", icon: <Zap className="w-6 h-6" /> },
    { number: "40%", label: "Bias Reduction", icon: <Shield className="w-6 h-6" /> }
  ];

  const testimonials = [
    {
      name: "Jennifer Martinez",
      company: "Tech Startup",
      role: "HR Director",
      content: "This AI recruitment assistant has revolutionized our hiring process. We've reduced time-to-hire by 60% and improved candidate quality significantly.",
      rating: 5,
      avatar: "JM"
    },
    {
      name: "David Chen",
      company: "Fortune 500 Company",
      role: "Talent Acquisition Manager",
      content: "The bias detection feature has helped us create a more diverse and inclusive hiring process. The AI insights are incredibly valuable for making data-driven decisions.",
      rating: 5,
      avatar: "DC"
    },
    {
      name: "Sarah Thompson",
      company: "Healthcare Organization",
      role: "Recruitment Specialist",
      content: "The video interview analysis is amazing. It helps us identify the best candidates even in remote interviews, and the scheduling automation saves hours every week.",
      rating: 5,
      avatar: "ST"
    }
  ];

  const useCases = [
    {
      title: "High-Volume Hiring",
      description: "Process thousands of applications efficiently for seasonal hiring, retail, or customer service roles",
      icon: <Users className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Technical Recruitment",
      description: "Identify top technical talent with AI-powered skill assessment and coding challenge analysis",
      icon: <Code className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Executive Search",
      description: "Find and evaluate senior leadership candidates with advanced personality and leadership assessments",
      icon: <Award className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Diversity & Inclusion",
      description: "Ensure fair and unbiased hiring practices with AI-powered bias detection and mitigation",
      icon: <Shield className="w-8 h-8" />,
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="AI Recruitment Assistant - Zion Tech Group | Intelligent Hiring Solutions"
        description="Advanced AI-powered recruitment platform with resume screening, candidate matching, video analysis, and bias detection. Streamline your hiring process with 95% accuracy."
        keywords="AI recruitment, automated hiring, resume screening, candidate matching, video interview analysis, bias detection, talent acquisition"
        canonical="https://ziontechgroup.com/ai-recruitment-assistant"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">#1 AI Recruitment Platform</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              AI Recruitment Assistant
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Transform your hiring process with AI-powered recruitment solutions. Screen resumes, match candidates, 
            analyze interviews, and reduce bias with 95% accuracy and 10x faster processing.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
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
              View Live Demo
              <Users className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
            </Link>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-xs md:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Advanced Recruitment Features
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Powerful AI-driven tools to streamline every aspect of your hiring process
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {feature.description}
                </p>
                <div className="text-center">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400">
                    {feature.stats}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Perfect for Every Hiring Need
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From high-volume hiring to executive search, our AI adapts to your recruitment challenges
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 text-center"
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-lg bg-gradient-to-r ${useCase.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  {useCase.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {useCase.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Choose Your Recruitment Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Start hiring smarter with our flexible pricing plans
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                  plan.popular
                    ? 'border-cyan-500/50 shadow-cyan-500/20 scale-105'
                    : 'border-white/20 hover:border-cyan-500/30'
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
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300 text-sm">{plan.description}</p>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`w-full block text-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-400 hover:to-purple-400'
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by HR Teams Worldwide
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what HR professionals say about our AI recruitment assistant
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Hiring Process?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join thousands of companies already using our AI recruitment assistant to find better candidates faster. 
            Start your free trial today and experience the future of hiring.
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
              to="/pricing"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              View Pricing
              <DollarSign className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIRecruitmentAssistantPage;