import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Users, 
  Brain, 
  Clock, 
  CheckCircle, 
  ArrowRight,
  Zap,
  Globe,
  BarChart3,
  Award,
  Star,
  Activity,
  Settings,
  TrendingUp,
  DollarSign,
  Target,
  Shield,
  Smartphone,
  Monitor,
  FileText,
  Calendar,
  MessageSquare,
  UserCheck,
  GraduationCap
} from 'lucide-react';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

const ZionAiHrAssistantPro = () => {
  const features = [
    {
      title: "AI-Powered Resume Screening",
      description: "Advanced AI algorithms screen resumes in seconds, identifying the best candidates with 90% accuracy",
      icon: <Brain className="w-6 h-6" />,
      stats: "90% accuracy"
    },
    {
      title: "Intelligent Interview Scheduling",
      description: "Automated interview scheduling with calendar integration and candidate preference matching",
      icon: <Calendar className="w-6 h-6" />,
      stats: "Auto-scheduling"
    },
    {
      title: "Performance Analytics",
      description: "Comprehensive employee performance tracking with AI-driven insights and recommendations",
      icon: <BarChart3 className="w-6 h-6" />,
      stats: "Real-time insights"
    },
    {
      title: "Employee Engagement",
      description: "AI-powered engagement tracking and personalized recommendations to improve workplace satisfaction",
      icon: <Users className="w-6 h-6" />,
      stats: "25% higher engagement"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$149",
      period: "/month",
      description: "Perfect for small businesses with basic HR needs",
      features: [
        "Up to 50 employees",
        "AI resume screening",
        "Basic interview scheduling",
        "Performance tracking",
        "Email support",
        "Basic analytics",
        "1 HR admin",
        "30-day data retention"
      ],
      popular: false,
      cta: "Start Free Trial"
    },
    {
      name: "Professional",
      price: "$399",
      period: "/month",
      description: "Advanced features for growing companies with complex HR requirements",
      features: [
        "Up to 200 employees",
        "Advanced AI screening",
        "Smart interview scheduling",
        "Comprehensive analytics",
        "Priority support",
        "Employee engagement tools",
        "5 HR admins",
        "90-day data retention",
        "API access",
        "Custom workflows"
      ],
      popular: true,
      cta: "Start Free Trial"
    },
    {
      name: "Enterprise",
      price: "$999",
      period: "/month",
      description: "Complete HR solution for large organizations with advanced needs",
      features: [
        "Unlimited employees",
        "AI-powered optimization",
        "Advanced automation",
        "Real-time analytics",
        "24/7 phone support",
        "Custom reporting",
        "Unlimited admins",
        "Unlimited data retention",
        "White-label solution",
        "Dedicated account manager",
        "Custom AI models"
      ],
      popular: false,
      cta: "Contact Sales"
    }
  ];

  const capabilities = [
    {
      title: "Smart Recruitment",
      description: "AI-powered candidate sourcing, screening, and matching for optimal hiring decisions",
      icon: <UserCheck className="w-8 h-8" />,
      benefits: ["90% faster screening", "Better candidate matches", "Reduced bias", "Improved quality of hire"]
    },
    {
      title: "Performance Management",
      description: "Comprehensive performance tracking with AI-driven insights and goal setting",
      icon: <TrendingUp className="w-8 h-8" />,
      benefits: ["Real-time feedback", "Goal tracking", "Performance insights", "Career development"]
    },
    {
      title: "Employee Onboarding",
      description: "Automated onboarding workflows with personalized experiences for new hires",
      icon: <GraduationCap className="w-8 h-8" />,
      benefits: ["Faster onboarding", "Consistent experience", "Reduced paperwork", "Higher retention"]
    },
    {
      title: "Engagement Analytics",
      description: "AI-powered employee engagement tracking with actionable insights and recommendations",
      icon: <Activity className="w-8 h-8" />,
      benefits: ["Engagement insights", "Retention prediction", "Satisfaction tracking", "Improvement recommendations"]
    },
    {
      title: "Compliance Management",
      description: "Automated compliance tracking and reporting for labor laws and regulations",
      icon: <Shield className="w-8 h-8" />,
      benefits: ["Automated compliance", "Risk reduction", "Audit preparation", "Legal updates"]
    },
    {
      title: "Learning & Development",
      description: "Personalized learning paths and skill development recommendations for employees",
      icon: <GraduationCap className="w-8 h-8" />,
      benefits: ["Personalized learning", "Skill tracking", "Career paths", "Progress monitoring"]
    }
  ];

  const testimonials = [
    {
      name: "Jennifer Martinez",
      company: "Tech Innovations Inc",
      role: "HR Director",
      content: "Zion AI HR Assistant Pro has transformed our recruitment process. We've reduced time-to-hire by 60% and improved candidate quality significantly.",
      rating: 5,
      avatar: "JM"
    },
    {
      name: "David Thompson",
      company: "Global Solutions Corp",
      role: "People Operations Manager",
      content: "The AI-powered performance analytics give us insights we never had before. Our employee engagement scores have improved by 40%.",
      rating: 5,
      avatar: "DT"
    },
    {
      name: "Lisa Chen",
      company: "Startup Ventures",
      role: "Head of People",
      content: "This platform has made HR management so much easier. The automated workflows save us hours every week, and the insights are incredibly valuable.",
      rating: 5,
      avatar: "LC"
    }
  ];

  const stats = [
    { number: "2,500+", label: "Companies Using", icon: <Users className="w-6 h-6" /> },
    { number: "90%", label: "Screening Accuracy", icon: <Award className="w-6 h-6" /> },
    { number: "60%", label: "Faster Time-to-Hire", icon: <Clock className="w-6 h-6" /> },
    { number: "40%", label: "Higher Engagement", icon: <TrendingUp className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Zion AI HR Assistant Pro - AI-Powered Human Resources Platform | Zion Tech Group</title>
        <meta name="description" content="Transform your HR operations with Zion AI HR Assistant Pro. AI-powered recruitment, performance management, and employee engagement. Streamline HR processes with intelligent automation." />
        <meta name="keywords" content="HR software, AI recruitment, performance management, employee engagement, HR automation, talent management, human resources" />
        <link rel="canonical" href="https://ziontechgroup.com/zion-ai-hr-assistant-pro" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <ResponsiveContainer className="text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-6">
            <Users className="w-4 h-4 text-purple-400 mr-2" />
            <span className="text-purple-400 text-sm font-medium">AI-Powered HR Management</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">
              Zion AI HR Assistant Pro
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Transform your human resources operations with AI-powered recruitment, performance management, 
            and employee engagement. Streamline HR processes and improve workplace satisfaction.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <FuturisticButton
              href="#pricing"
              variant="primary"
              size="lg"
              icon={<Users className="w-5 h-5" />}
            >
              Start Free Trial
            </FuturisticButton>
            <FuturisticButton
              href="#demo"
              variant="outline"
              size="lg"
              icon={<Monitor className="w-5 h-5" />}
            >
              View Demo
            </FuturisticButton>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-xs md:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Intelligent HR Management Features
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Our AI-powered platform provides comprehensive HR solutions that adapt to your organization's needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FuturisticCard
                key={index}
                className="group hover:scale-105 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 text-center group-hover:text-purple-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-center mb-4 leading-relaxed">
                  {feature.description}
                </p>
                <div className="text-center">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-400">
                    {feature.stats}
                  </span>
                </div>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive HR Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to manage your workforce effectively and efficiently
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <FuturisticCard
                key={index}
                className="group hover:scale-105 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  {capability.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 text-center group-hover:text-purple-400 transition-colors">
                  {capability.title}
                </h3>
                <p className="text-gray-300 text-center mb-6 leading-relaxed">
                  {capability.description}
                </p>
                <div className="space-y-2">
                  {capability.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </div>
                  ))}
                </div>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Flexible HR Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that matches your organization size and HR complexity
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <FuturisticCard
                key={index}
                className={`relative group hover:scale-105 transition-all duration-300 ${
                  plan.popular ? 'ring-2 ring-purple-500 scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <FuturisticButton
                  href={plan.cta === "Contact Sales" ? "/contact" : "#signup"}
                  variant={plan.popular ? "primary" : "outline"}
                  size="lg"
                  className="w-full"
                >
                  {plan.cta}
                </FuturisticButton>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by HR Professionals
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how organizations are using Zion AI HR Assistant Pro to transform their HR operations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <FuturisticCard
                key={index}
                className="group hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/30 to-pink-900/30">
        <ResponsiveContainer>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Transform Your HR Operations Today
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Join thousands of organizations using AI to revolutionize their human resources management. 
              Start your free trial and experience the future of HR.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <FuturisticButton
                href="#signup"
                variant="primary"
                size="lg"
                icon={<Users className="w-5 h-5" />}
              >
                Start Free Trial
              </FuturisticButton>
              <FuturisticButton
                href="/contact"
                variant="outline"
                size="lg"
                icon={<ArrowRight className="w-5 h-5" />}
              >
                Contact Sales
              </FuturisticButton>
            </div>
            
            <div className="mt-8 text-sm text-gray-400">
              <p>14-day free trial • No credit card required • Cancel anytime</p>
            </div>
          </div>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default ZionAiHrAssistantPro;