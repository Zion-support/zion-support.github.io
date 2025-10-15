import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { GraduationCap, Zap, Shield, Globe, Brain, CheckCircle, ArrowRight, Star, Phone, Mail, MapPin, Download, Play, Pause, RefreshCw, Settings, Eye, Filter, Target, Users, Award, TrendingUp, Cpu, Database, BarChart3, Activity, Clock, FileText, Send, ThumbsUp, ThumbsDown, AlertCircle, CheckSquare, XCircle, PieChart, LineChart, TrendingDown, Calculator, CreditCard, Banknote, Wallet, Receipt, ChartBar, Percent, Coins, Building2, Briefcase, PiggyBank, HandCoins, BookOpen, PenTool, Video, Headphones, Monitor, Smartphone, Tablet, Laptop, Wifi, Lock, User, Users as UsersIcon, Award as AwardIcon, Trophy, Target as TargetIcon, Lightbulb, Book, Clipboard, Calendar, MessageSquare, Share2, Download as DownloadIcon, Upload, Edit, Trash2, Plus, Minus, Check, X } from 'lucide-react';

const AiEducationSolutionsProPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI-Powered Learning",
      description: "Personalized learning experiences with AI that adapts to each student's pace, learning style, and knowledge gaps for optimal educational outcomes.",
      benefits: ["Adaptive learning", "Personalized content", "Learning analytics", "Progress tracking"]
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Virtual Classrooms",
      description: "Immersive virtual learning environments with AI-powered features like automated attendance, real-time translation, and intelligent Q&A.",
      benefits: ["Virtual classrooms", "Real-time translation", "Auto-attendance", "Interactive tools"]
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Content Generation",
      description: "AI-generated educational content including quizzes, assignments, study materials, and interactive lessons tailored to curriculum requirements.",
      benefits: ["Auto-generated content", "Curriculum alignment", "Interactive materials", "Assessment tools"]
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Learning Analytics",
      description: "Comprehensive analytics dashboard that tracks student performance, identifies learning patterns, and provides insights for educators.",
      benefits: ["Performance tracking", "Learning insights", "Predictive analytics", "Intervention alerts"]
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Student Privacy & Security",
      description: "COPPA and FERPA compliant platform with advanced security measures to protect student data and ensure safe learning environments.",
      benefits: ["COPPA compliance", "FERPA compliance", "Data encryption", "Privacy protection"]
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Automated Assessment",
      description: "AI-powered grading and assessment system that provides instant feedback, reduces teacher workload, and ensures consistent evaluation.",
      benefits: ["Auto-grading", "Instant feedback", "Consistent evaluation", "Bias detection"]
    }
  ];

  const pricingPlans = [
    {
      name: "School",
      price: "$199",
      period: "month",
      description: "Perfect for individual schools and small districts",
      features: [
        "Up to 500 students",
        "Basic AI features",
        "Virtual classrooms",
        "Basic analytics",
        "Email support",
        "Standard security"
      ],
      popular: false
    },
    {
      name: "District",
      price: "$599",
      period: "month",
      description: "Comprehensive solution for school districts",
      features: [
        "Up to 5,000 students",
        "Advanced AI features",
        "Full analytics suite",
        "Custom content",
        "Priority support",
        "COPPA/FERPA compliance",
        "API access",
        "Multi-school management"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$1,199",
      period: "month",
      description: "Complete solution for large educational organizations",
      features: [
        "Unlimited students",
        "Full AI suite",
        "Custom development",
        "Dedicated support",
        "White-label options",
        "Advanced security",
        "On-premise deployment",
        "24/7 support"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Williams",
      company: "Metro School District",
      role: "Superintendent",
      content: "AI Education Solutions Pro has transformed our teaching methods. Student engagement has increased by 50% and test scores have improved by 35% across all grade levels.",
      rating: 5
    },
    {
      name: "Michael Johnson",
      company: "Tech University",
      role: "Dean of Education",
      content: "The personalized learning and automated assessment features have revolutionized our online programs. Students are learning more effectively and teachers can focus on mentoring.",
      rating: 5
    },
    {
      name: "Lisa Chen",
      company: "Elementary School",
      role: "Principal",
      content: "The AI-powered content generation and learning analytics have helped us identify struggling students early and provide targeted interventions. Highly recommended!",
      rating: 5
    }
  ];

  const useCases = [
    {
      title: "K-12 Education",
      description: "Comprehensive AI solutions for primary and secondary education with age-appropriate content and safety features",
      icon: <Book className="w-8 h-8" />,
      benefits: ["Age-appropriate content", "Parental controls", "Progress reports", "Safety features"]
    },
    {
      title: "Higher Education",
      description: "Advanced AI tools for universities and colleges with research capabilities and academic integrity features",
      icon: <GraduationCap className="w-8 h-8" />,
      benefits: ["Research tools", "Academic integrity", "Advanced analytics", "Collaboration features"]
    },
    {
      title: "Corporate Training",
      description: "Professional development and corporate training solutions with skill assessment and certification tracking",
      icon: <Briefcase className="w-8 h-8" />,
      benefits: ["Skill assessment", "Certification tracking", "Compliance training", "Performance metrics"]
    },
    {
      title: "Online Learning",
      description: "Full-featured online learning platform with virtual classrooms and interactive content delivery",
      icon: <Monitor className="w-8 h-8" />,
      benefits: ["Virtual classrooms", "Interactive content", "Live streaming", "Mobile learning"]
    }
  ];

  const subjects = [
    { name: "Mathematics", icon: "🔢", description: "AI-powered math tutoring" },
    { name: "Science", icon: "🔬", description: "Interactive science labs" },
    { name: "Language Arts", icon: "📚", description: "Reading and writing support" },
    { name: "History", icon: "🏛️", description: "Immersive historical content" },
    { name: "Computer Science", icon: "💻", description: "Coding and programming" },
    { name: "Art & Design", icon: "🎨", description: "Creative expression tools" },
    { name: "Music", icon: "🎵", description: "Music theory and practice" },
    { name: "Physical Education", icon: "🏃", description: "Health and fitness tracking" }
  ];

  return (
    <>
      <Helmet>
        <title>AI Education Solutions Pro - Intelligent Learning Platform | Zion Tech Group</title>
        <meta name="description" content="Transform education with AI-powered learning, virtual classrooms, and personalized content. Increase student engagement by 50% and improve test scores by 35%." />
        <meta name="keywords" content="AI education, e-learning, virtual classrooms, personalized learning, educational technology, student analytics, COPPA compliance" />
        <meta property="og:title" content="AI Education Solutions Pro - Zion Tech Group" />
        <meta property="og:description" content="Intelligent education platform with AI-powered learning and virtual classroom capabilities" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-education-solutions-pro" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="h-full w-full" style={{
            backgroundImage: `
              linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <main className="relative z-10">
          {/* Hero Section */}
          <section className="relative py-20 overflow-hidden">
            <div className="container mx-auto px-4">
              <div className={`text-center max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="inline-flex items-center px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-8">
                  <Star className="w-4 h-4 mr-2" />
                  #1 AI Education Platform
                </div>
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                  <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    AI Education Solutions Pro
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto">
                  Revolutionize education with AI-powered learning, virtual classrooms, and personalized content. 
                  Increase student engagement by 50% and improve test scores by 35%.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                  <a
                    href="tel:+13024640950"
                    className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Start Free Trial
                  </a>
                  <a
                    href="#demo"
                    className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
                  >
                    <Play className="w-5 h-5 mr-2" />
                    Watch Demo
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900 relative">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Intelligent Education Features
                  </span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Everything you need to create engaging, personalized learning experiences with AI-powered automation and insights.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <div 
                    key={index} 
                    className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-400/40 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 neon-card"
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <div className="text-white">{feature.icon}</div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {feature.description}
                    </p>
                    <div className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Subjects Section */}
          <section className="py-20 bg-slate-900">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    All Subjects Covered
                  </span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Our AI education platform supports all major subjects with specialized content and interactive learning tools.
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
                {subjects.map((subject, index) => (
                  <div 
                    key={index} 
                    className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 text-center hover:border-cyan-400/40 transition-all duration-300 hover:transform hover:scale-105"
                  >
                    <div className="text-4xl mb-3">{subject.icon}</div>
                    <div className="text-white font-semibold mb-1 text-sm">{subject.name}</div>
                    <div className="text-cyan-400 text-xs">{subject.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Use Cases Section */}
          <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Educational Solutions
                  </span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Our AI education platform is designed for various educational settings and learning environments.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {useCases.map((useCase, index) => (
                  <div 
                    key={index} 
                    className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-400/40 transition-all duration-300 hover:transform hover:scale-105"
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                      <div className="text-white">{useCase.icon}</div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{useCase.title}</h3>
                    <p className="text-gray-300 mb-6">{useCase.description}</p>
                    <div className="space-y-2">
                      {useCase.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section className="py-20 bg-slate-900">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Flexible Pricing
                  </span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Choose the plan that fits your educational institution's needs and budget.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {pricingPlans.map((plan, index) => (
                  <div 
                    key={index} 
                    className={`relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border rounded-2xl p-8 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl ${
                      plan.popular 
                        ? 'border-cyan-400/40 shadow-cyan-500/10' 
                        : 'border-cyan-500/20 hover:border-cyan-400/40'
                    }`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                          Most Popular
                        </div>
                      </div>
                    )}
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                      <p className="text-gray-300 mb-4">{plan.description}</p>
                      <div className="flex items-baseline justify-center">
                        <span className="text-5xl font-bold text-cyan-400">{plan.price}</span>
                        <span className="text-gray-400 ml-2">/{plan.period}</span>
                      </div>
                    </div>
                    <div className="space-y-4 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    <a
                      href="tel:+13024640950"
                      className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                        plan.popular
                          ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                          : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                      }`}
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Education Success Stories
                  </span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  See how educational institutions are improving learning outcomes with AI Education Solutions Pro.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <div 
                    key={index} 
                    className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-400/40 transition-all duration-300"
                  >
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      &ldquo;{testimonial.content}&rdquo;
                    </p>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-cyan-400">{testimonial.role}</div>
                      <div className="text-gray-400 text-sm">{testimonial.company}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-slate-900">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Ready to Transform Education?
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Join leading educational institutions that are revolutionizing learning with AI-powered solutions and intelligent automation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:+13024640950"
                    className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call +1 302 464 0950
                  </a>
                  <a
                    href="mailto:kleber@ziontechgroup.com"
                    className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Get Free Trial
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default AiEducationSolutionsProPage;