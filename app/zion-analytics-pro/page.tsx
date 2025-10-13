import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  BarChart3, 
  TrendingUp, 
  Users, 
  DollarSign, 
  Clock, 
  CheckCircle, 
  Star, 
  Zap, 
  Shield, 
  Brain, 
  Database, 
  Globe, 
  Smartphone, 
  Download, 
  Upload, 
  Settings, 
  Eye, 
  Filter, 
  Search, 
  RefreshCw, 
  Play, 
  Pause, 
  Stop, 
  Volume2, 
  VolumeX, 
  Wifi, 
  Battery, 
  Cpu, 
  HardDrive, 
  Monitor, 
  Mouse, 
  Keyboard, 
  Camera, 
  Mic, 
  MicOff, 
  Phone, 
  PhoneCall, 
  PhoneIncoming, 
  PhoneOutgoing, 
  PhoneMissed, 
  PhoneOff, 
  PhoneForwarded, 
  MessageSquare, 
  Mail, 
  Share2, 
  Edit3, 
  Trash2, 
  Plus, 
  Minus, 
  Target, 
  Award, 
  Headphones, 
  FileText, 
  Image, 
  Video, 
  Music, 
  Calendar, 
  Sparkles, 
  Rocket, 
  Lock, 
  Unlock, 
  Key, 
  Fingerprint, 
  Scan, 
  QrCode, 
  Barcode, 
  Tag, 
  Tags, 
  Bookmark, 
  BookmarkCheck, 
  BookmarkX, 
  BookmarkPlus, 
  BookmarkMinus, 
  BookmarkHeart, 
  BookmarkStar, 
  BookmarkUser, 
  BookmarkEdit, 
  BookmarkTrash, 
  BookmarkLock, 
  BookmarkUnlock, 
  BookmarkKey, 
  BookmarkFingerprint, 
  BookmarkScan, 
  BookmarkQrCode, 
  BookmarkBarcode, 
  BookmarkTag, 
  BookmarkTags
} from "lucide-react";

export default function ZionAnalyticsPro() {
  const features = [
    {
      title: "Real-Time Dashboards",
      description: "Monitor your business metrics in real-time with customizable, interactive dashboards that update automatically.",
      icon: <BarChart3 className="w-8 h-8" />,
      benefits: [
        "Instant data visualization",
        "Customizable widgets",
        "Auto-refresh capabilities",
        "Mobile-responsive design"
      ]
    },
    {
      title: "Predictive Analytics",
      description: "Leverage AI-powered predictive models to forecast trends, identify opportunities, and make data-driven decisions.",
      icon: <Brain className="w-8 h-8" />,
      benefits: [
        "AI trend prediction",
        "Anomaly detection",
        "Risk assessment",
        "Opportunity identification"
      ]
    },
    {
      title: "Automated Reporting",
      description: "Generate comprehensive reports automatically with scheduled delivery and customizable templates.",
      icon: <FileText className="w-8 h-8" />,
      benefits: [
        "Scheduled reports",
        "Custom templates",
        "Multi-format export",
        "Email distribution"
      ]
    },
    {
      title: "Data Integration",
      description: "Connect seamlessly with 100+ data sources including CRM, ERP, social media, and cloud platforms.",
      icon: <Database className="w-8 h-8" />,
      benefits: [
        "100+ integrations",
        "Real-time sync",
        "Data transformation",
        "API connectivity"
      ]
    },
    {
      title: "Advanced Visualizations",
      description: "Create stunning charts, graphs, and interactive visualizations to present your data effectively.",
      icon: <TrendingUp className="w-8 h-8" />,
      benefits: [
        "50+ chart types",
        "Interactive elements",
        "Custom styling",
        "Export capabilities"
      ]
    },
    {
      title: "Mobile Analytics",
      description: "Access your analytics anywhere with our mobile app featuring offline capabilities and push notifications.",
      icon: <Smartphone className="w-8 h-8" />,
      benefits: [
        "Native mobile app",
        "Offline access",
        "Push notifications",
        "Touch-optimized UI"
      ]
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$29",
      period: "per month",
      description: "Perfect for small businesses getting started with analytics",
      features: [
        "Up to 5 data sources",
        "10 dashboard widgets",
        "Basic reporting",
        "Email support",
        "1 user account",
        "5GB data storage"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$79",
      period: "per month",
      description: "Ideal for growing businesses with advanced analytics needs",
      features: [
        "Up to 25 data sources",
        "Unlimited dashboard widgets",
        "Advanced reporting",
        "Priority support",
        "5 user accounts",
        "50GB data storage",
        "Predictive analytics",
        "Custom integrations"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$199",
      period: "per month",
      description: "For large organizations with complex analytics requirements",
      features: [
        "Unlimited data sources",
        "Unlimited dashboard widgets",
        "Enterprise reporting",
        "24/7 phone support",
        "Unlimited user accounts",
        "Unlimited data storage",
        "Advanced AI features",
        "Custom development",
        "Dedicated account manager"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      role: "CEO",
      content: "Zion Analytics Pro transformed our decision-making process. We can now see trends before they happen and make data-driven decisions that increased our revenue by 40%.",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      company: "E-commerce Solutions",
      role: "CTO",
      content: "The predictive analytics feature is incredible. It helped us optimize our inventory and reduce costs by 25% while improving customer satisfaction.",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez",
      company: "Digital Marketing Agency",
      role: "Operations Director",
      content: "The real-time dashboards give us instant visibility into our campaigns. We can now adjust strategies on the fly and improve ROI by 60%.",
      rating: 5,
      avatar: "ER"
    }
  ];

  const stats = [
    { number: "40%", label: "Faster Decision Making", icon: <Clock className="w-6 h-6" /> },
    { number: "80%", label: "Reduced Reporting Time", icon: <FileText className="w-6 h-6" /> },
    { number: "95%", label: "Data Accuracy", icon: <Shield className="w-6 h-6" /> },
    { number: "24/7", label: "Real-Time Monitoring", icon: <Eye className="w-6 h-6" /> }
  ];

  return (
    <>
      <Helmet>
        <title>Zion Analytics Pro - AI-Powered Business Intelligence | Zion Tech Group</title>
        <meta
          name="description"
          content="Transform your business with Zion Analytics Pro - the ultimate AI-powered business intelligence platform. Real-time dashboards, predictive analytics, and automated reporting."
        />
        <meta
          name="keywords"
          content="business intelligence, analytics, AI, dashboards, reporting, data visualization, predictive analytics"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl">
                  <BarChart3 className="w-12 h-12 text-white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Zion Analytics Pro
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                The ultimate AI-powered business intelligence platform. Transform your data into actionable insights with real-time dashboards, predictive analytics, and automated reporting.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <div className="flex items-center text-white">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                  <span>Real-time dashboards</span>
                </div>
                <div className="flex items-center text-white">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                  <span>AI predictions</span>
                </div>
                <div className="flex items-center text-white">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                  <span>Automated reporting</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center"
                >
                  Start Free Trial
                  <Rocket className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  to="/demo"
                  className="border border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
                >
                  Watch Demo
                  <Play className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="py-16 bg-black/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Powerful Features</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Everything you need to transform your data into actionable business insights.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300"
                >
                  <div className="flex items-center justify-center mb-4">
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="text-sm text-gray-300 flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="py-16 bg-black/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Simple, Transparent Pricing</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Choose the plan that fits your business needs. All plans include our core features.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-lg rounded-2xl p-6 border ${
                    plan.popular 
                      ? 'border-blue-500 ring-2 ring-blue-500/50' 
                      : 'border-white/20'
                  } hover:border-white/40 transition-all duration-300`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="text-4xl font-bold text-white mb-1">{plan.price}</div>
                    <div className="text-gray-400">{plan.period}</div>
                    <p className="text-gray-300 text-sm mt-2">{plan.description}</p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-gray-300 flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    className={`w-full py-3 rounded-lg font-semibold text-center transition-all duration-300 flex items-center justify-center ${
                      plan.popular
                        ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600'
                        : 'border border-white/30 text-white hover:bg-white/10'
                    }`}
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">What Our Customers Say</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Join thousands of businesses that trust Zion Analytics Pro for their data needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="text-white font-semibold">{testimonial.name}</div>
                      <div className="text-gray-400 text-sm">{testimonial.role}</div>
                      <div className="text-gray-500 text-sm">{testimonial.company}</div>
                    </div>
                  </div>
                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 text-sm">"{testimonial.content}"</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-16 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Data?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start your free trial today and see how Zion Analytics Pro can revolutionize your business intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center"
              >
                Start Free Trial
                <Rocket className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/demo"
                className="border border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
              >
                Schedule Demo
                <Play className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="py-12 bg-black/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Need Help Getting Started?</h3>
            <p className="text-gray-300 mb-6">
              Our analytics experts are here to help you set up and optimize your Zion Analytics Pro experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm text-gray-300">
              <div className="flex items-center justify-center">
                <Phone className="w-4 h-4 mr-2" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center justify-center">
                <Mail className="w-4 h-4 mr-2" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center">
                <Globe className="w-4 h-4 mr-2" />
                <span>https://ziontechgroup.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}