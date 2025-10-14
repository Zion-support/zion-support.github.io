import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  BookOpen, 
  Zap, 
  Shield, 
  Globe, 
  Brain, 
  CheckCircle, 
  ArrowRight, 
  Star,
  Phone,
  Mail,
  MapPin,
  Download,
  Play,
  Pause,
  RefreshCw,
  Settings,
  Eye,
  Filter,
  Calendar,
  Target,
  Users,
  Award,
  TrendingUp,
  Clock,
  Smartphone,
  Search,
  FileText,
  BarChart3,
  Activity,
  Lock,
  Cpu,
  Database,
  PieChart,
  LineChart,
  GraduationCap,
  Video,
  Headphones,
  MessageSquare,
  Clipboard,
  PenTool,
  Lightbulb,
  Trophy,
  UserCheck,
  Monitor,
  Camera,
  Mic
} from 'lucide-react';

const AiEducationPlatformPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI-Powered Learning",
      description: "Personalized learning paths with adaptive content delivery and intelligent assessment based on individual learning styles.",
      benefits: ["Adaptive learning", "Personalized content", "Learning analytics", "Progress tracking"]
    },
    {
      icon: <Video className="w-6 h-6" />,
      title: "Interactive Video Learning",
      description: "Engaging video content with AI-generated transcripts, automatic subtitles, and interactive learning elements.",
      benefits: ["Auto-transcripts", "Multi-language subtitles", "Interactive elements", "Video analytics"]
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Virtual Classrooms",
      description: "Real-time virtual classrooms with AI-powered moderation, breakout rooms, and collaborative learning tools.",
      benefits: ["Live streaming", "Breakout rooms", "AI moderation", "Collaborative tools"]
    },
    {
      icon: <Clipboard className="w-6 h-6" />,
      title: "Smart Assessment",
      description: "AI-powered assessment tools with automated grading, plagiarism detection, and personalized feedback.",
      benefits: ["Auto-grading", "Plagiarism detection", "Instant feedback", "Performance analytics"]
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Secure Platform",
      description: "Enterprise-grade security with FERPA compliance, data encryption, and privacy protection for educational institutions.",
      benefits: ["FERPA compliance", "Data encryption", "Privacy protection", "Secure access"]
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Learning Analytics",
      description: "Comprehensive analytics dashboard with student progress tracking, engagement metrics, and learning outcome analysis.",
      benefits: ["Progress tracking", "Engagement metrics", "Outcome analysis", "Custom reports"]
    }
  ];

  const aiCapabilities = [
    {
      title: "Content Generation",
      description: "AI-generated educational content, quizzes, and learning materials",
      icon: <PenTool className="w-8 h-8" />,
      accuracy: "95.8%"
    },
    {
      title: "Student Support",
      description: "24/7 AI-powered tutoring and student assistance",
      icon: <MessageSquare className="w-8 h-8" />,
      accuracy: "92.3%"
    },
    {
      title: "Learning Path Optimization",
      description: "AI-driven curriculum optimization and learning path recommendations",
      icon: <Target className="w-8 h-8" />,
      accuracy: "89.7%"
    },
    {
      title: "Predictive Analytics",
      description: "Early warning systems for at-risk students and intervention recommendations",
      icon: <Lightbulb className="w-8 h-8" />,
      accuracy: "91.5%"
    }
  ];

  const pricingPlans = [
    {
      name: "School",
      price: "$199",
      period: "month",
      description: "Perfect for K-12 schools and small educational institutions",
      features: [
        "Up to 500 students",
        "Basic AI features",
        "Virtual classrooms",
        "Assessment tools",
        "Email support",
        "Basic analytics",
        "FERPA compliance"
      ],
      popular: false
    },
    {
      name: "University",
      price: "$499",
      period: "month",
      description: "Ideal for universities and large educational institutions",
      features: [
        "Up to 5,000 students",
        "Advanced AI features",
        "Full virtual campus",
        "Advanced assessment",
        "Priority support",
        "Advanced analytics",
        "Custom integrations",
        "Multi-campus support"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$999",
      period: "month",
      description: "Complete solution for educational systems and corporate training",
      features: [
        "Unlimited students",
        "Full AI capabilities",
        "Custom learning platform",
        "Enterprise features",
        "24/7 dedicated support",
        "Custom development",
        "On-premise deployment",
        "White-label options"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Williams",
      company: "Metro University",
      role: "Dean of Education",
      content: "The AI education platform has transformed our teaching methods. Student engagement has increased by 40% and learning outcomes have improved significantly.",
      rating: 5
    },
    {
      name: "Michael Chen",
      company: "Tech Academy",
      role: "Principal",
      content: "The personalized learning paths have helped our students achieve better results. The AI tutoring system is like having a personal tutor for every student.",
      rating: 5
    },
    {
      name: "Lisa Rodriguez",
      company: "Corporate Training Inc",
      role: "Training Director",
      content: "The platform has revolutionized our corporate training programs. We've reduced training time by 50% while improving knowledge retention.",
      rating: 5
    }
  ];

  const subjects = [
    { name: "Mathematics", icon: "🔢" },
    { name: "Science", icon: "🔬" },
    { name: "Language Arts", icon: "📚" },
    { name: "History", icon: "🏛️" },
    { name: "Computer Science", icon: "💻" },
    { name: "Art", icon: "🎨" },
    { name: "Music", icon: "🎵" },
    { name: "Physical Education", icon: "⚽" },
    { name: "Foreign Languages", icon: "🌍" },
    { name: "Business", icon: "💼" },
    { name: "Engineering", icon: "⚙️" },
    { name: "Medicine", icon: "🏥" }
  ];

  return (
    <>
      <Helmet>
        <title>AI Education Platform - Intelligent Learning Solutions | Zion Tech Group</title>
        <meta name="description" content="Transform education with our AI-powered platform. Personalized learning, virtual classrooms, and smart assessment for modern educational institutions." />
        <meta name="keywords" content="AI education platform, e-learning, virtual classrooms, personalized learning, educational technology, FERPA compliance" />
        <meta property="og:title" content="AI Education Platform - Zion Tech Group" />
        <meta property="og:description" content="Intelligent education platform with AI-powered personalized learning and virtual classrooms" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-education-platform" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="h-full w-full" style={{
            backgroundImage: `
              linear-gradient(rgba(147, 51, 234, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(147, 51, 234, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <main className="relative z-10">
          {/* Hero Section */}
          <section className="relative py-20 overflow-hidden">
            <div className="container mx-auto px-4">
              <div className={`text-center max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="inline-flex items-center px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm font-medium mb-8">
                  <GraduationCap className="w-4 h-4 mr-2" />
                  #1 AI Education Platform
                </div>
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                  <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
                    AI Education Platform
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto">
                  Revolutionize education with our AI-powered platform. 
                  Personalized learning, virtual classrooms, and intelligent assessment for modern educational institutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                  <a
                    href="tel:+13024640950"
                    className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25 flex items-center justify-center"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Schedule Demo
                  </a>
                  <a
                    href="#demo"
                    className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
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
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Advanced Education Features
                  </span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Comprehensive educational solutions powered by artificial intelligence and modern technology.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <div 
                    key={index} 
                    className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 hover:border-purple-400/40 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10 neon-card"
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <div className="text-white">{feature.icon}</div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors duration-300">
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

          {/* AI Capabilities Section */}
          <section className="py-20 bg-slate-900">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    AI-Powered Learning
                  </span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Leverage cutting-edge AI technology to enhance learning outcomes and student engagement.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {aiCapabilities.map((capability, index) => (
                  <div 
                    key={index} 
                    className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 hover:border-purple-400/40 transition-all duration-300 hover:transform hover:scale-105"
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-6">
                      <div className="text-white">{capability.icon}</div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{capability.title}</h3>
                    <p className="text-gray-300 mb-6">{capability.description}</p>
                    <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-3">
                      <div className="text-purple-400 font-semibold text-sm">Effectiveness: {capability.accuracy}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Subjects Section */}
          <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    All Subjects Covered
                  </span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Our AI platform supports a comprehensive range of subjects and educational disciplines.
                </p>
              </div>
              
              <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {subjects.map((subject, index) => (
                  <div 
                    key={index} 
                    className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 text-center hover:border-purple-400/40 transition-all duration-300 hover:transform hover:scale-105"
                  >
                    <div className="text-4xl mb-3">{subject.icon}</div>
                    <div className="text-white font-semibold text-sm">{subject.name}</div>
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
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Education Pricing Plans
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
                        ? 'border-purple-400/40 shadow-purple-500/10' 
                        : 'border-purple-500/20 hover:border-purple-400/40'
                    }`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <div className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                          Most Popular
                        </div>
                      </div>
                    )}
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                      <p className="text-gray-300 mb-4">{plan.description}</p>
                      <div className="flex items-baseline justify-center">
                        <span className="text-5xl font-bold text-purple-400">{plan.price}</span>
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
                          ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white hover:from-purple-600 hover:to-pink-700'
                          : 'border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-slate-900'
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
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Education Success Stories
                  </span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  See how educational institutions are transforming learning with our AI platform.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <div 
                    key={index} 
                    className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 hover:border-purple-400/40 transition-all duration-300"
                  >
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      "{testimonial.content}"
                    </p>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-purple-400">{testimonial.role}</div>
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
                  Transform Education with AI
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Join the education revolution and provide better learning experiences with our AI-powered platform.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:+13024640950"
                    className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25 flex items-center justify-center"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call +1 302 464 0950
                  </a>
                  <a
                    href="mailto:kleber@ziontechgroup.com"
                    className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Schedule Demo
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

export default AiEducationPlatformPage;