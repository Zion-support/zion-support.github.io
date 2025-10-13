import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Users, 
  Sparkles, 
  CheckCircle, 
  Star, 
  Clock, 
  Zap, 
  Target, 
  BarChart3, 
  Shield, 
  Globe, 
  Smartphone, 
  Monitor, 
  Headphones, 
  Award, 
  Rocket, 
  TrendingUp,
  Brain,
  FileText,
  Calendar,
  MessageCircle,
  UserCheck,
  UserPlus,
  UserMinus,
  Briefcase,
  GraduationCap,
  DollarSign,
  PieChart,
  Settings,
  Bell,
  Search,
  Filter,
  Download,
  Upload,
  Share,
  Lock,
  Unlock,
  RefreshCw,
  Eye,
  EyeOff,
  Heart,
  Bookmark,
  Flag,
  ThumbsUp,
  ThumbsDown,
  Share2,
  Copy,
  ExternalLink,
  Mail,
  Phone,
  MapPin,
  Building,
  User,
  UserCog,
  UserX,
  UserCheck2,
  CalendarDays,
  Clock3,
  Timer,
  CheckSquare,
  Square,
  AlertCircle,
  Info,
  HelpCircle,
  XCircle,
  Plus,
  Minus,
  Edit,
  Trash2,
  Save,
  Send,
  Reply,
  Forward,
  Archive,
  Inbox,
  Outbox,
  Send2,
  Mail as EmailIcon,
  Phone as PhoneIcon,
  MapPin as LocationIcon
} from "lucide-react";

export default function ZionAIHRAssistantPro() {
  const features = [
    {
      title: "AI-Powered Recruitment",
      description: "Automate candidate screening and matching with advanced AI algorithms",
      icon: <UserPlus className="w-6 h-6" />,
      details: "Screen resumes, conduct initial interviews, and match candidates to job requirements automatically"
    },
    {
      title: "Employee Onboarding",
      description: "Streamline new hire processes with automated workflows and checklists",
      icon: <UserCheck className="w-6 h-6" />,
      details: "Create personalized onboarding experiences with automated task assignments and progress tracking"
    },
    {
      title: "Performance Management",
      description: "Track and analyze employee performance with AI-driven insights",
      icon: <BarChart3 className="w-6 h-6" />,
      details: "Set goals, conduct reviews, and provide feedback with data-driven performance analytics"
    },
    {
      title: "Time & Attendance",
      description: "Automated time tracking and attendance management system",
      icon: <Clock className="w-6 h-6" />,
      details: "Track work hours, manage schedules, and handle time-off requests with intelligent automation"
    },
    {
      title: "Payroll Processing",
      description: "Automated payroll calculations and tax compliance",
      icon: <DollarSign className="w-6 h-6" />,
      details: "Process payroll automatically with tax calculations, deductions, and compliance reporting"
    },
    {
      title: "Learning & Development",
      description: "Personalized training programs and skill development tracking",
      icon: <GraduationCap className="w-6 h-6" />,
      details: "Create custom learning paths, track progress, and recommend training based on career goals"
    },
    {
      title: "Employee Engagement",
      description: "Measure and improve employee satisfaction and engagement",
      icon: <Heart className="w-6 h-6" />,
      details: "Conduct surveys, analyze feedback, and implement engagement strategies with AI insights"
    },
    {
      title: "Compliance Management",
      description: "Ensure HR compliance with automated reporting and alerts",
      icon: <Shield className="w-6 h-6" />,
      details: "Stay compliant with labor laws, track certifications, and generate required reports automatically"
    }
  ];

  const pricingPlans = [
    {
      name: "Small Business",
      price: "$79",
      period: "/month",
      description: "Perfect for teams up to 25 employees",
      features: [
        "Up to 25 employees",
        "Basic recruitment tools",
        "Time & attendance tracking",
        "Payroll processing",
        "Employee self-service portal",
        "Email support",
        "Basic reporting"
      ],
      popular: false,
      cta: "Start Free Trial"
    },
    {
      name: "Professional",
      price: "$199",
      period: "/month",
      description: "Ideal for growing companies (26-100 employees)",
      features: [
        "Up to 100 employees",
        "Advanced AI recruitment",
        "Performance management",
        "Learning management system",
        "Advanced analytics",
        "Priority support",
        "API integrations",
        "Custom workflows"
      ],
      popular: true,
      cta: "Start Free Trial"
    },
    {
      name: "Enterprise",
      price: "$499",
      period: "/month",
      description: "For large organizations (100+ employees)",
      features: [
        "Unlimited employees",
        "Full AI suite",
        "Advanced compliance tools",
        "Custom integrations",
        "Dedicated account manager",
        "24/7 phone support",
        "White-label solution",
        "Advanced security",
        "Custom reporting",
        "Multi-location support"
      ],
      popular: false,
      cta: "Contact Sales"
    }
  ];

  const testimonials = [
    {
      name: "Jennifer Martinez",
      company: "Tech Startup",
      role: "HR Director",
      content: "Zion AI HR Assistant Pro has transformed our HR operations. We've reduced recruitment time by 60% and improved employee satisfaction significantly.",
      rating: 5,
      avatar: "JM"
    },
    {
      name: "David Thompson",
      company: "Manufacturing Corp",
      role: "VP of Human Resources",
      content: "The AI-powered recruitment features are incredible. We're finding better candidates faster and the automated onboarding process is flawless.",
      rating: 5,
      avatar: "DT"
    },
    {
      name: "Lisa Chen",
      company: "Healthcare Group",
      role: "Chief People Officer",
      content: "Compliance management has never been easier. The automated reporting and alerts help us stay ahead of regulations and avoid costly mistakes.",
      rating: 5,
      avatar: "LC"
    }
  ];

  const useCases = [
    {
      title: "Recruitment Automation",
      description: "Streamline hiring processes with AI-powered candidate screening and matching",
      icon: <UserPlus className="w-8 h-8" />,
      examples: ["Resume screening", "Interview scheduling", "Candidate scoring", "Background checks"]
    },
    {
      title: "Employee Lifecycle Management",
      description: "Manage employees from hire to retirement with automated workflows",
      icon: <Users className="w-8 h-8" />,
      examples: ["Onboarding", "Performance reviews", "Promotions", "Offboarding"]
    },
    {
      title: "Compliance & Reporting",
      description: "Ensure HR compliance with automated reporting and audit trails",
      icon: <Shield className="w-8 h-8" />,
      examples: ["Labor law compliance", "Tax reporting", "Audit preparation", "Policy management"]
    },
    {
      title: "Employee Development",
      description: "Foster growth with personalized learning and development programs",
      icon: <GraduationCap className="w-8 h-8" />,
      examples: ["Skill assessments", "Training programs", "Career planning", "Mentorship matching"]
    }
  ];

  const benefits = [
    {
      title: "60% Faster Recruitment",
      description: "Reduce time-to-hire with AI-powered candidate screening and matching",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "50% Less Admin Work",
      description: "Automate routine HR tasks and focus on strategic initiatives",
      icon: <Clock className="w-6 h-6" />
    },
    {
      title: "95% Compliance Rate",
      description: "Stay compliant with automated reporting and regulatory updates",
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "40% Higher Engagement",
      description: "Improve employee satisfaction with better HR processes",
      icon: <Heart className="w-6 h-6" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>Zion AI HR Assistant Pro - AI-Powered Human Resources Management | Zion Tech Group</title>
        <meta
          name="description"
          content="Transform your HR operations with Zion AI HR Assistant Pro. Automated recruitment, performance management, payroll processing, and compliance management. Start your free trial today."
        />
        <meta
          name="keywords"
          content="AI HR assistant, human resources management, recruitment automation, payroll processing, performance management, employee onboarding, HR compliance, workforce analytics"
        />
        <link rel="canonical" href="https://ziontechgroup.com/zion-ai-hr-assistant-pro" />
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
                <span className="text-cyan-400 text-sm font-medium">#1 AI HR Solution 2024</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                  Zion AI HR Assistant Pro
                </span>
              </h1>
              
              <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed text-center">
                Transform your HR operations with AI-powered automation. 
                Streamline recruitment, manage performance, and ensure compliance with intelligent HR solutions.
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
                  <Users className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="text-center group"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-300 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Comprehensive HR Management
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to manage your workforce with AI-powered intelligence
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-3">
                    {feature.description}
                  </p>
                  <p className="text-gray-400 text-xs">
                    {feature.details}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Perfect for Every HR Need
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From recruitment to retirement, manage every aspect of the employee lifecycle
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                    {useCase.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4">
                    {useCase.description}
                  </p>
                  <div className="space-y-2">
                    {useCase.examples.map((example, idx) => (
                      <div key={idx} className="flex items-center text-xs text-gray-400">
                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2"></div>
                        <span>{example}</span>
                      </div>
                    ))}
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
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Flexible Pricing Plans
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your organization size and needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`group bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2xl relative ${
                    plan.popular 
                      ? 'border-cyan-500/50 hover:shadow-cyan-500/25' 
                      : 'border-white/20 hover:shadow-purple-500/25'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 text-sm mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link
                    to={plan.cta === "Contact Sales" ? "/contact" : "/contact"}
                    className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 hover:scale-105'
                        : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                    }`}
                  >
                    {plan.cta}
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
                Trusted by HR Professionals
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what HR leaders say about Zion AI HR Assistant Pro
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
                  <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold mr-3">
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
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your HR Operations?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join hundreds of companies using Zion AI HR Assistant Pro to streamline their HR processes. 
              Start your free trial today and experience the future of human resources management.
            </p>
            
            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <EmailIcon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Email</h3>
                <p className="text-cyan-400">kleber@ziontechgroup.com</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <PhoneIcon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Phone</h3>
                <p className="text-cyan-400">+1 302 464 0950</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <LocationIcon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Address</h3>
                <p className="text-cyan-400 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
            
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
                <Users className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}