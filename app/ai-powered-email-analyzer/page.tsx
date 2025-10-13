import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Mail, 
  Brain, 
  BarChart3, 
  Users, 
  CheckCircle, 
  Star, 
  Award, 
  Zap, 
  Shield, 
  Clock, 
  Globe, 
  Smartphone, 
  Monitor,
  TrendingUp,
  MessageSquare,
  Target,
  PieChart,
  Settings,
  Download,
  Upload,
  Share,
  Bell,
  Eye,
  Edit,
  Plus,
  RefreshCw,
  Play,
  Pause,
  Volume2,
  Maximize,
  Minimize,
  Copy,
  Palette,
  Type,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Bold,
  Italic,
  Underline,
  List,
  Quote,
  Code,
  Link as LinkIcon,
  ExternalLink,
  Info,
  HelpCircle,
  AlertCircle,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Lightbulb,
  Rocket,
  Crown,
  Gem,
  Diamond,
  Zap as Lightning,
  Flame,
  Sun,
  Moon,
  Droplets,
  Wind,
  Snowflake,
  CloudRain,
  CloudSnow,
  CloudLightning,
  CloudDrizzle,
  CloudHail,
  CloudFog,
  CloudSun,
  CloudMoon,
  Sunrise,
  Sunset,
  Thermometer,
  Gauge,
  Activity,
  Pulse,
  Heart as HeartIcon,
  ThumbsUp,
  ThumbsDown,
  Smile,
  Frown,
  Meh,
  Laugh,
  Angry,
  Surprised,
  Confused,
  Kiss,
  Wink,
  Tongue,
  Sad,
  Happy,
  Neutral,
  Excited,
  Proud,
  Shy,
  Cool,
  Hot,
  Cold,
  Warm,
  Fresh,
  Stale,
  New,
  Old,
  Young,
  Mature,
  Beginner,
  Expert,
  Pro,
  Amateur,
  Rookie,
  Veteran,
  Master,
  Legend,
  Hero,
  Champion,
  Winner,
  Loser,
  Success,
  Failure,
  Victory,
  Defeat,
  Win,
  Lose,
  Draw,
  Tie,
  Equal,
  Different,
  Same,
  Similar,
  Unique,
  Common,
  Rare,
  Frequent,
  Occasional,
  Regular,
  Irregular,
  Normal,
  Abnormal,
  Standard,
  Custom,
  Default,
  Special,
  General,
  Specific,
  Broad,
  Narrow,
  Wide,
  Thin,
  Thick,
  Large,
  Small,
  Big,
  Tiny,
  Huge,
  Massive,
  Mini,
  Micro,
  Macro,
  Mega,
  Giga,
  Tera,
  Peta,
  Exa,
  Zetta,
  Yotta,
  Kilo,
  Hecto,
  Deca,
  Deci,
  Centi,
  Milli,
  Micro as MicroIcon,
  Nano,
  Pico,
  Femto,
  Atto,
  Zepto,
  Yocto
} from "lucide-react";

const AIPoweredEmailAnalyzerPage = () => {
  const features = [
    {
      title: "AI Sentiment Analysis",
      description: "Advanced natural language processing to detect emotional tone, urgency, and intent in every email",
      icon: <Brain className="w-8 h-8" />,
      benefits: [
        "Detect customer satisfaction levels",
        "Identify urgent requests automatically",
        "Understand communication patterns",
        "Improve response strategies"
      ]
    },
    {
      title: "Priority Scoring",
      description: "Intelligent algorithm that ranks emails by importance, urgency, and business impact",
      icon: <Target className="w-8 h-8" />,
      benefits: [
        "Never miss critical emails",
        "Focus on high-priority communications",
        "Reduce response time for urgent matters",
        "Improve customer satisfaction"
      ]
    },
    {
      title: "Auto Response Suggestions",
      description: "AI-generated response templates tailored to email content, tone, and context",
      icon: <MessageSquare className="w-8 h-8" />,
      benefits: [
        "Save time on email composition",
        "Maintain consistent communication tone",
        "Improve response quality",
        "Reduce typing errors"
      ]
    },
    {
      title: "Email Templates",
      description: "Pre-built templates for common scenarios with AI-powered customization",
      icon: <Type className="w-8 h-8" />,
      benefits: [
        "Standardize communication",
        "Ensure brand consistency",
        "Speed up email composition",
        "Reduce training time"
      ]
    },
    {
      title: "Team Collaboration",
      description: "Shared inbox management with team assignments and collaboration tools",
      icon: <Users className="w-8 h-8" />,
      benefits: [
        "Improve team coordination",
        "Prevent duplicate responses",
        "Share knowledge and insights",
        "Streamline workflow"
      ]
    },
    {
      title: "Analytics Dashboard",
      description: "Comprehensive insights into email performance, response times, and team productivity",
      icon: <BarChart3 className="w-8 h-8" />,
      benefits: [
        "Track team performance",
        "Identify improvement areas",
        "Measure customer satisfaction",
        "Optimize response strategies"
      ]
    },
    {
      title: "CRM Integration",
      description: "Seamless integration with popular CRM systems for unified customer management",
      icon: <Settings className="w-8 h-8" />,
      benefits: [
        "Unified customer view",
        "Automated data sync",
        "Improved lead management",
        "Enhanced customer experience"
      ]
    },
    {
      title: "Multi-language Support",
      description: "Support for 50+ languages with accurate sentiment analysis and response generation",
      icon: <Globe className="w-8 h-8" />,
      benefits: [
        "Global team support",
        "Accurate translation",
        "Cultural context awareness",
        "Expanded market reach"
      ]
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$29",
      period: "per month",
      description: "Perfect for small teams and individuals",
      features: [
        "Up to 1,000 emails/month",
        "Basic sentiment analysis",
        "Priority scoring",
        "5 response templates",
        "Email support",
        "Basic analytics"
      ],
      popular: false,
      cta: "Start Free Trial"
    },
    {
      name: "Professional",
      price: "$59",
      period: "per month",
      description: "Ideal for growing businesses",
      features: [
        "Up to 10,000 emails/month",
        "Advanced AI analysis",
        "Unlimited templates",
        "Team collaboration (5 users)",
        "CRM integration",
        "Advanced analytics",
        "Priority support",
        "Custom workflows"
      ],
      popular: true,
      cta: "Start Free Trial"
    },
    {
      name: "Enterprise",
      price: "$99",
      period: "per month",
      description: "For large organizations",
      features: [
        "Unlimited emails",
        "Premium AI features",
        "Custom AI training",
        "Unlimited team members",
        "Advanced integrations",
        "Custom analytics",
        "Dedicated support",
        "SLA guarantee",
        "Custom deployment"
      ],
      popular: false,
      cta: "Contact Sales"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      role: "Customer Success Manager",
      content: "AI Email Analyzer has revolutionized our customer support. We've reduced response time by 60% and improved customer satisfaction scores significantly.",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      company: "E-commerce Solutions",
      role: "Sales Director",
      content: "The priority scoring feature is incredible. We never miss important leads anymore, and our conversion rates have increased by 40%.",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez",
      company: "Digital Marketing Agency",
      role: "Operations Manager",
      content: "The AI response suggestions save us hours every day. The quality of our communications has improved dramatically while reducing workload.",
      rating: 5,
      avatar: "ER"
    }
  ];

  const useCases = [
    {
      title: "Sales Teams",
      description: "Qualify leads, prioritize follow-ups, and maintain consistent communication with prospects",
      icon: <Target className="w-6 h-6" />,
      benefits: [
        "40% increase in lead response rate",
        "Automated lead scoring",
        "Consistent follow-up process",
        "Improved conversion rates"
      ]
    },
    {
      title: "Customer Service",
      description: "Handle customer inquiries efficiently with AI-powered sentiment analysis and response suggestions",
      icon: <Users className="w-6 h-6" />,
      benefits: [
        "60% reduction in response time",
        "Improved customer satisfaction",
        "Consistent service quality",
        "Reduced training time"
      ]
    },
    {
      title: "Marketing Teams",
      description: "Analyze campaign responses, optimize email content, and improve engagement rates",
      icon: <TrendingUp className="w-6 h-6" />,
      benefits: [
        "35% improvement in email engagement",
        "Data-driven content optimization",
        "Automated campaign analysis",
        "Better audience insights"
      ]
    },
    {
      title: "Internal Communications",
      description: "Streamline internal email management and improve team collaboration",
      icon: <MessageSquare className="w-6 h-6" />,
      benefits: [
        "Improved team coordination",
        "Reduced email overload",
        "Better project communication",
        "Enhanced productivity"
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Email Analyzer Pro - Zion Tech Group | Intelligent Email Management</title>
        <meta
          name="description"
          content="Transform your email management with AI Email Analyzer Pro. Advanced sentiment analysis, priority scoring, auto response suggestions, and team collaboration tools. Increase productivity by 60%."
        />
        <meta
          name="keywords"
          content="AI email analyzer, email management, sentiment analysis, priority scoring, auto response, email templates, team collaboration, CRM integration, email analytics"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
                  <Brain className="w-4 h-4 text-cyan-400 mr-2" />
                  <span className="text-cyan-400 text-sm font-medium">AI-Powered Email Intelligence</span>
                </div>
                
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                    AI Email Analyzer Pro
                  </span>
                </h1>
                
                <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
                  Transform your email management with intelligent AI-powered analysis. Detect sentiment, 
                  prioritize messages, and generate perfect responses automatically. Increase productivity by 60% 
                  while improving communication quality.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
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
                
                {/* Key Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-400 mb-1">60%</div>
                    <div className="text-sm text-gray-300">Productivity Increase</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-400 mb-1">40%</div>
                    <div className="text-sm text-gray-300">Response Rate Boost</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-400 mb-1">50+</div>
                    <div className="text-sm text-gray-300">Languages Supported</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-400 mb-1">99.9%</div>
                    <div className="text-sm text-gray-300">Accuracy Rate</div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Mail className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">AI Email Analyzer Pro</h3>
                    <p className="text-gray-300 text-sm">Starting at $29/month</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                      <span className="text-sm text-gray-300">Sentiment Analysis</span>
                      <CheckCircle className="w-5 h-5 text-green-400" />
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                      <span className="text-sm text-gray-300">Priority Scoring</span>
                      <CheckCircle className="w-5 h-5 text-green-400" />
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                      <span className="text-sm text-gray-300">Auto Responses</span>
                      <CheckCircle className="w-5 h-5 text-green-400" />
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                      <span className="text-sm text-gray-300">Team Collaboration</span>
                      <CheckCircle className="w-5 h-5 text-green-400" />
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <Link
                      to="/contact"
                      className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 rounded-lg font-semibold text-center block hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
                    >
                      Get Started Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Powerful AI Features
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover the advanced AI capabilities that make email management effortless and intelligent.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="space-y-2">
                    {feature.benefits.slice(0, 2).map((benefit, idx) => (
                      <div key={idx} className="flex items-center text-xs text-gray-300">
                        <CheckCircle className="w-3 h-3 text-cyan-400 mr-2 flex-shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Perfect for Every Team
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See how different teams use AI Email Analyzer Pro to transform their communication workflows.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {useCase.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {useCase.description}
                  </p>
                  <div className="space-y-2">
                    {useCase.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center text-xs text-gray-300">
                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2 flex-shrink-0"></div>
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
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your team size and email volume. All plans include a 14-day free trial.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`group bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative ${
                    plan.popular 
                      ? 'border-cyan-500/50 bg-gradient-to-b from-cyan-500/10 to-purple-500/10' 
                      : 'border-white/20 hover:bg-white/20'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-semibold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 text-sm mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-cyan-400">${plan.price}</span>
                      <span className="text-gray-300 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link
                    to="/contact"
                    className={`w-full py-3 rounded-lg font-semibold text-center block transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
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
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Trusted by Industry Leaders
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what our customers say about AI Email Analyzer Pro
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
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Email Management?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join thousands of teams already using AI Email Analyzer Pro to streamline their communication 
              and boost productivity. Start your free trial today.
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
                <Calendar className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIPoweredEmailAnalyzerPage;