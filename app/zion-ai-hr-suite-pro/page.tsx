import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { 
  Users, 
  UserCheck, 
  Calendar, 
  FileText, 
  BarChart3, 
  Shield, 
  Clock, 
  Award, 
  ArrowRight, 
  Sparkles,
  CheckCircle,
  Star,
  Brain,
  Target,
  Globe,
  Smartphone,
  Monitor,
  Headphones,
  Settings,
  Cloud,
  Zap,
  TrendingUp,
  Heart,
  Receipt,
  Package,
  Code,
  Bot,
  Wifi,
  Cpu,
  Network,
  HardDrive,
  Phone,
  Laptop,
  Rocket,
  Mail,
  Database,
  Lock,
  Play
} from "lucide-react";

export default function ZionAIHRSuitePro() {
  const features = [
    "AI-Powered Resume Screening & Matching",
    "Intelligent Candidate Ranking & Scoring",
    "Automated Interview Scheduling & Coordination",
    "Smart Onboarding Workflow Automation",
    "Performance Analytics & Predictive Insights",
    "Employee Sentiment Analysis & Engagement Tracking",
    "Compliance Monitoring & Risk Assessment",
    "Payroll Integration & Benefits Management",
    "Learning & Development Recommendations",
    "Exit Interview Analysis & Retention Insights",
    "Multi-language Support (25+ languages)",
    "Advanced Reporting & Custom Dashboards"
  ];

  const benefits = [
    "75% reduction in hiring time",
    "60% improvement in candidate quality",
    "90% automation of HR processes",
    "Complete compliance management"
  ];

  const modules = [
    {
      name: "Recruitment AI",
      description: "AI-powered candidate screening, matching, and ranking",
      icon: <Users className="w-8 h-8" />,
      features: [
        "Resume parsing and analysis",
        "Skills matching algorithms",
        "Cultural fit assessment",
        "Interview scheduling automation"
      ]
    },
    {
      name: "Performance Management",
      description: "Intelligent performance tracking and analytics",
      icon: <BarChart3 className="w-8 h-8" />,
      features: [
        "Goal setting and tracking",
        "360-degree feedback analysis",
        "Performance prediction models",
        "Career development recommendations"
      ]
    },
    {
      name: "Employee Engagement",
      description: "Sentiment analysis and engagement optimization",
      icon: <Heart className="w-8 h-8" />,
      features: [
        "Real-time sentiment monitoring",
        "Engagement trend analysis",
        "Retention risk prediction",
        "Wellness program recommendations"
      ]
    },
    {
      name: "Compliance & Risk",
      description: "Automated compliance monitoring and risk assessment",
      icon: <Shield className="w-8 h-8" />,
      features: [
        "Policy compliance tracking",
        "Risk assessment automation",
        "Audit trail management",
        "Legal requirement monitoring"
      ]
    }
  ];

  const pricingPlans = [
    {
      name: "Startup",
      price: "$149",
      period: "/month",
      description: "Perfect for small teams and startups",
      features: [
        "Up to 25 employees",
        "Basic AI recruitment tools",
        "Standard performance tracking",
        "Email support",
        "Basic reporting",
        "1 HR admin account"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$299",
      period: "/month",
      description: "Ideal for growing companies",
      features: [
        "Up to 100 employees",
        "Advanced AI features",
        "Comprehensive analytics",
        "Priority support",
        "Advanced reporting",
        "5 HR admin accounts",
        "Integration with 50+ tools",
        "Custom workflows"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$599",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited employees",
        "Full AI suite",
        "Enterprise analytics",
        "24/7 dedicated support",
        "Custom reporting",
        "Unlimited admin accounts",
        "API access",
        "White-label solution",
        "Custom integrations",
        "Dedicated success manager"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Jennifer Martinez",
      company: "TechStart Inc.",
      role: "Head of People",
      content: "Zion AI HR Suite Pro has transformed our hiring process. We've reduced time-to-hire by 70% while improving candidate quality significantly.",
      rating: 5
    },
    {
      name: "David Thompson",
      company: "Global Corp",
      role: "CHRO",
      content: "The AI-powered insights have helped us understand our workforce better than ever. Employee engagement has increased by 40% since implementation.",
      rating: 5
    },
    {
      name: "Lisa Chen",
      company: "Growth Agency",
      role: "HR Director",
      content: "The compliance monitoring and risk assessment features have saved us countless hours and helped us stay ahead of regulatory changes.",
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>Zion AI HR Suite Pro - AI-Powered Human Resources Management | Zion Tech Group</title>
        <meta
          name="description"
          content="Transform your HR operations with AI-powered recruitment, performance management, employee engagement, and compliance monitoring. Streamline your human resources with Zion AI HR Suite Pro."
        />
        <meta
          name="keywords"
          content="AI HR management, recruitment automation, performance management, employee engagement, HR analytics, compliance monitoring, human resources software, talent management"
        />
        <link rel="canonical" href="https://ziontechgroup.com/zion-ai-hr-suite-pro" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
                <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
                <span className="text-cyan-400 text-sm font-medium">#1 AI HR Platform 2024</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                  Zion AI HR Suite Pro
                </span>
              </h1>
              
              <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed text-center">
                Transform your human resources with AI-powered recruitment, performance management, 
                employee engagement, and compliance monitoring. Streamline your HR operations like never before.
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
                  Watch Demo
                  <Play className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto mb-16">
              <div className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">75%</div>
                <div className="text-gray-300 text-xs md:text-sm">Faster Hiring</div>
              </div>
              <div className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <BarChart3 className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">90%</div>
                <div className="text-gray-300 text-xs md:text-sm">Process Automation</div>
              </div>
              <div className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Heart className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">40%</div>
                <div className="text-gray-300 text-xs md:text-sm">Higher Engagement</div>
              </div>
              <div className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">100%</div>
                <div className="text-gray-300 text-xs md:text-sm">Compliance</div>
              </div>
            </div>
          </div>
        </section>

        {/* Modules Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Comprehensive HR Modules
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Complete HR management suite with AI-powered insights and automation across all key areas.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {modules.map((module, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center text-white mr-6 group-hover:scale-110 transition-transform">
                      {module.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                        {module.name}
                      </h3>
                      <p className="text-gray-300">{module.description}</p>
                    </div>
                  </div>
                  
                  <ul className="space-y-3">
                    {module.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
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
                Advanced AI-Powered Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Leverage cutting-edge AI technology to optimize every aspect of your HR operations.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform">
                      <Brain className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors">
                      {feature}
                    </h3>
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
                Choose Your Plan
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Flexible pricing plans designed to scale with your organization's needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`group bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative ${
                    plan.popular 
                      ? 'border-cyan-500/50 bg-gradient-to-br from-cyan-500/10 to-purple-500/10' 
                      : 'border-white/20 hover:bg-white/20'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/contact"
                    className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
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
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Trusted by HR Leaders Worldwide
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what HR professionals say about Zion AI HR Suite Pro
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
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your HR Operations?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join thousands of organizations using Zion AI HR Suite Pro to streamline their human resources 
              and make data-driven decisions. Start your free trial today.
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
                Watch Demo
                <Play className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}