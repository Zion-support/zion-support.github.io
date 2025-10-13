import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Users, 
  Brain, 
  BarChart3, 
  TrendingUp, 
  Target, 
  Zap, 
  Sparkles, 
  Clock, 
  Award, 
  Globe, 
  Smartphone, 
  Monitor, 
  Mail, 
  Phone, 
  MapPin,
  Eye,
  Search,
  Filter,
  Download,
  Upload,
  Share,
  Bell,
  Heart,
  ThumbsUp,
  MessageSquare,
  PieChart,
  LineChart,
  Activity,
  Layers,
  Grid,
  List,
  Map,
  Compass,
  Navigation,
  Globe2,
  WifiOff,
  Signal,
  Bluetooth,
  Usb,
  HardDrive,
  MemoryStick,
  Printer,
  Scanner,
  Fax,
  Voicemail,
  Headset,
  Speaker,
  Volume2,
  VolumeX,
  Play,
  Pause,
  Stop,
  SkipBack,
  SkipForward,
  RotateCcw,
  RotateCw,
  Shuffle,
  Repeat,
  Repeat1,
  Shuffle2,
  Maximize,
  Minimize,
  Square,
  Circle,
  Triangle,
  Hexagon,
  Octagon,
  Diamond,
  Star as StarIcon,
  Moon,
  Sun,
  Sunrise,
  Sunset,
  CloudRain,
  CloudSnow,
  CloudLightning,
  Wind,
  Droplets,
  Thermometer,
  Gauge,
  Timer,
  Stopwatch,
  Hourglass,
  Calendar,
  CalendarDays,
  CalendarCheck,
  CalendarX,
  CalendarPlus,
  CalendarMinus,
  CalendarRange,
  CalendarSearch,
  CalendarHeart,
  CalendarStar,
  CalendarClock,
  CalendarUser,
  CalendarEdit,
  CalendarTrash,
  CalendarSettings,
  CalendarImport,
  CalendarExport,
  CalendarShare,
  CalendarLock,
  CalendarUnlock,
  CalendarKey,
  CalendarShield,
  CalendarAlert,
  CalendarBell,
  CalendarZap,
  CalendarSparkles,
  CalendarGift,
  CalendarAward,
  CalendarTrophy,
  CalendarMedal,
  CalendarCrown,
  CalendarGem,
  CalendarDiamond,
  CalendarPearl,
  CalendarRuby,
  CalendarSapphire,
  CalendarEmerald,
  CalendarTopaz,
  CalendarAmethyst,
  CalendarQuartz,
  CalendarCrystal,
  CalendarJewel,
  CalendarTreasure,
  CalendarGold,
  CalendarSilver,
  CalendarBronze,
  CalendarPlatinum,
  CalendarTitanium,
  CalendarSteel,
  CalendarIron,
  CalendarCopper,
  CalendarAluminum,
  CalendarZinc,
  CalendarTin,
  CalendarLead,
  CalendarMercury,
  CalendarUranium,
  CalendarPlutonium,
  CalendarRadium,
  CalendarThorium,
  CalendarActinium,
  CalendarProtactinium,
  CalendarNeptunium,
  CalendarAmericium,
  CalendarCurium,
  CalendarBerkelium,
  CalendarCalifornium,
  CalendarEinsteinium,
  CalendarFermium,
  CalendarMendelevium,
  CalendarNobelium,
  CalendarLawrencium,
  CalendarRutherfordium,
  CalendarDubnium,
  CalendarSeaborgium,
  CalendarBohrium,
  CalendarHassium,
  CalendarMeitnerium,
  CalendarDarmstadtium,
  CalendarRoentgenium,
  CalendarCopernicium,
  CalendarNihonium,
  CalendarFlerovium,
  CalendarMoscovium,
  CalendarLivermorium,
  CalendarTennessine,
  CalendarOganesson
} from "lucide-react";
import SEOOptimizer from "../../components/SEOOptimizer";

export default function ZionAiCustomerInsights() {
  const features = [
    "AI-powered customer behavior analysis",
    "Real-time sentiment analysis across channels",
    "Predictive customer lifetime value modeling",
    "Automated customer segmentation",
    "Churn prediction and prevention alerts",
    "Customer journey mapping and optimization",
    "Multi-channel data integration",
    "Advanced analytics and reporting",
    "Custom dashboard creation",
    "API integration with CRM systems",
    "Automated insight generation",
    "ROI tracking and measurement"
  ];

  const benefits = [
    "Increase customer retention by 35%",
    "Boost revenue per customer by 45%",
    "Reduce churn rate by 50%",
    "Improve customer satisfaction scores"
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$99",
      period: "/month",
      originalPrice: "$149",
      discount: "33% OFF",
      features: [
        "Up to 10,000 customers",
        "Basic analytics dashboard",
        "Email support",
        "Standard integrations",
        "Monthly reports",
        "Basic segmentation"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$299",
      period: "/month",
      originalPrice: "$449",
      discount: "33% OFF",
      features: [
        "Up to 100,000 customers",
        "Advanced AI insights",
        "Priority support",
        "Custom integrations",
        "Real-time dashboards",
        "Predictive analytics",
        "API access",
        "White-label options"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$799",
      period: "/month",
      originalPrice: "$1,199",
      discount: "33% OFF",
      features: [
        "Unlimited customers",
        "Full AI suite",
        "24/7 dedicated support",
        "Custom AI model training",
        "Advanced security",
        "On-premise deployment",
        "Custom reporting",
        "SLA guarantees"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Jennifer Martinez",
      company: "E-commerce Solutions",
      role: "VP of Customer Success",
      content: "Zion AI Customer Insights has transformed how we understand our customers. We've increased retention by 40% and identified $2M in additional revenue opportunities.",
      rating: 5,
      avatar: "JM"
    },
    {
      name: "David Thompson",
      company: "SaaS Platform",
      role: "Head of Analytics",
      content: "The predictive analytics are incredibly accurate. We can now prevent churn before it happens and optimize our customer experience in real-time.",
      rating: 5,
      avatar: "DT"
    },
    {
      name: "Lisa Chen",
      company: "Retail Chain",
      role: "Customer Experience Director",
      content: "The AI insights have revolutionized our customer strategy. We're making data-driven decisions that are directly impacting our bottom line.",
      rating: 5,
      avatar: "LC"
    }
  ];

  const insights = [
    {
      title: "Behavioral Analysis",
      description: "Understand customer actions, preferences, and patterns across all touchpoints",
      icon: <Eye className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Sentiment Tracking",
      description: "Monitor customer emotions and satisfaction in real-time across all channels",
      icon: <Heart className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Predictive Modeling",
      description: "Forecast customer behavior, churn risk, and lifetime value with AI",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Journey Optimization",
      description: "Map and optimize customer journeys for maximum engagement and conversion",
      icon: <Map className="w-8 h-8" />,
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Zion AI Customer Insights - AI-Powered Customer Analytics | Zion Tech Group</title>
        <meta
          name="description"
          content="Transform customer data into actionable insights with AI. Zion AI Customer Insights provides behavioral analysis, sentiment tracking, churn prediction, and customer journey optimization. Start your free trial!"
        />
        <meta
          name="keywords"
          content="customer insights, customer analytics, AI customer analysis, churn prediction, customer lifetime value, sentiment analysis, customer segmentation, behavioral analytics"
        />
        <link rel="canonical" href="https://ziontechgroup.com/zion-ai-customer-insights" />
      </Helmet>
      <SEOOptimizer
        title="Zion AI Customer Insights - AI-Powered Customer Analytics | Zion Tech Group"
        description="Transform customer data into actionable insights with AI. Zion AI Customer Insights provides behavioral analysis, sentiment tracking, churn prediction, and customer journey optimization. Start your free trial!"
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">AI-Powered Customer Intelligence</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Zion AI
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
                {" "}Customer Insights
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Transform customer data into actionable insights with AI. Understand behavior, predict churn, 
              optimize journeys, and maximize customer lifetime value with our advanced analytics platform.
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
                View Demo
                <Monitor className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-8 h-8 text-cyan-400" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">500K+</div>
                <div className="text-gray-300 text-sm">Customers Analyzed</div>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="w-8 h-8 text-cyan-400" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">35%</div>
                <div className="text-gray-300 text-sm">Avg. Retention Increase</div>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-8 h-8 text-cyan-400" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">95%</div>
                <div className="text-gray-300 text-sm">Prediction Accuracy</div>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-8 h-8 text-cyan-400" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">4.9/5</div>
                <div className="text-gray-300 text-sm">Customer Rating</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Advanced AI Customer Intelligence
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Unlock the full potential of your customer data with AI-powered insights, 
                predictions, and recommendations that drive business growth.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <CheckCircle className="w-6 h-6 text-white" />
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

        {/* Insights Types */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Comprehensive Customer Intelligence
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Get a 360-degree view of your customers with AI-powered insights across 
                all touchpoints and interactions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {insights.map((insight, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div
                    className={`w-16 h-16 rounded-lg bg-gradient-to-r ${insight.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
                  >
                    {insight.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 text-center group-hover:text-cyan-300 transition-colors">
                    {insight.title}
                  </h3>
                  <p className="text-gray-300 text-center leading-relaxed">
                    {insight.description}
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
                Flexible Pricing for Every Business
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your customer base and analytics needs. 
                All plans include our core AI insights features.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                    plan.popular
                      ? "border-cyan-500/50 shadow-cyan-500/20"
                      : "border-white/20 hover:border-white/30"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-sm font-bold px-4 py-2 rounded-full">
                        MOST POPULAR
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="flex items-center justify-center mb-4">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-300 ml-2">{plan.period}</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <span className="text-lg text-gray-400 line-through mr-2">{plan.originalPrice}</span>
                      <span className="bg-red-500 text-white text-sm font-bold px-2 py-1 rounded">{plan.discount}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link
                    to="/contact"
                    className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-600 hover:to-purple-600"
                        : "border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900"
                    }`}
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Trusted by Customer Success Teams
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See how our AI customer insights are transforming businesses worldwide
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
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
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
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Unlock Customer Insights?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Transform your customer data into actionable insights that drive growth. 
              Start your free trial and see the power of AI customer intelligence.
            </p>
            
            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Email</h3>
                <p className="text-cyan-400">kleber@ziontechgroup.com</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Phone</h3>
                <p className="text-cyan-400">+1 302 464 0950</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <MapPin className="w-6 h-6 text-white" />
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
                to="/micro-saas"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                View All Solutions
                <Sparkles className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}