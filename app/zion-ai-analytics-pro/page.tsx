import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle, 
  Star, 
  BarChart3, 
  Brain, 
  Zap, 
  Shield, 
  Cloud, 
  Users, 
  Award, 
  Clock, 
  DollarSign, 
  TrendingUp, 
  Target, 
  Database, 
  Globe, 
  Smartphone, 
  Monitor, 
  Download, 
  Upload, 
  Share, 
  Settings, 
  Bell, 
  Eye, 
  Heart, 
  ThumbsUp, 
  Rocket, 
  Headphones, 
  Mic, 
  Video, 
  Image, 
  Music, 
  BookOpen, 
  Lightbulb, 
  Puzzle, 
  Gamepad2, 
  ShoppingCart, 
  CreditCard, 
  Wallet, 
  Banknote, 
  Coins, 
  Gift, 
  Tag, 
  Percent, 
  Calculator, 
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
  Phone, 
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
  Mail,
  MapPin
} from 'lucide-react';

export default function ZionAIAnalyticsPro() {
  const features = [
    {
      title: "Real-time Predictive Analytics",
      description: "Get instant insights with AI-powered predictive models that analyze your data in real-time and forecast future trends.",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Machine Learning Insights",
      description: "Advanced ML algorithms automatically identify patterns, anomalies, and opportunities in your data without manual configuration.",
      icon: <Brain className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Automated Report Generation",
      description: "Generate comprehensive reports automatically with AI-powered insights, charts, and recommendations tailored to your business needs.",
      icon: <FileText className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Custom Data Visualization",
      description: "Create stunning, interactive dashboards with drag-and-drop functionality and customizable charts for any data type.",
      icon: <PieChart className="w-8 h-8" />,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Multi-platform Integration",
      description: "Connect seamlessly with 100+ popular business tools including CRM, ERP, marketing platforms, and cloud services.",
      icon: <Globe className="w-8 h-8" />,
      color: "from-indigo-500 to-blue-500"
    },
    {
      title: "Advanced Filtering & Segmentation",
      description: "Slice and dice your data with powerful filtering options and create custom segments for targeted analysis.",
      icon: <Filter className="w-8 h-8" />,
      color: "from-teal-500 to-cyan-500"
    },
    {
      title: "Export to PDF/Excel/CSV",
      description: "Export your insights and reports in multiple formats for sharing, presentation, or further analysis in other tools.",
      icon: <Download className="w-8 h-8" />,
      color: "from-amber-500 to-yellow-500"
    },
    {
      title: "White-label Options",
      description: "Customize the platform with your branding, colors, and logo for a seamless integration with your business identity.",
      icon: <Settings className="w-8 h-8" />,
      color: "from-rose-500 to-pink-500"
    }
  ];

  const benefits = [
    {
      title: "Increase Revenue by 35%",
      description: "Our AI-powered insights help you identify new opportunities and optimize your business strategies for maximum revenue growth.",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "text-green-400"
    },
    {
      title: "Reduce Reporting Time by 85%",
      description: "Automate your reporting process and spend more time on strategic decisions instead of manual data compilation.",
      icon: <Clock className="w-6 h-6" />,
      color: "text-blue-400"
    },
    {
      title: "Make Data-driven Decisions",
      description: "Access real-time insights and predictions to make informed decisions that drive your business forward.",
      icon: <Target className="w-6 h-6" />,
      color: "text-purple-400"
    },
    {
      title: "Scale with Your Business",
      description: "Our platform grows with you, handling everything from small datasets to enterprise-level big data analytics.",
      icon: <Rocket className="w-6 h-6" />,
      color: "text-cyan-400"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$299",
      period: "month",
      description: "Perfect for small businesses getting started with analytics",
      features: [
        "Up to 5 data sources",
        "Basic AI insights",
        "Standard dashboards",
        "Email support",
        "5GB data storage",
        "Monthly reports"
      ],
      popular: false,
      color: "from-gray-500 to-gray-600"
    },
    {
      name: "Professional",
      price: "$599",
      period: "month",
      description: "Ideal for growing businesses with advanced analytics needs",
      features: [
        "Up to 25 data sources",
        "Advanced AI insights",
        "Custom dashboards",
        "Priority support",
        "50GB data storage",
        "Real-time reports",
        "API access",
        "Team collaboration"
      ],
      popular: true,
      color: "from-cyan-500 to-purple-500"
    },
    {
      name: "Enterprise",
      price: "$999",
      period: "month",
      description: "Complete solution for large organizations",
      features: [
        "Unlimited data sources",
        "Premium AI insights",
        "White-label options",
        "24/7 dedicated support",
        "Unlimited data storage",
        "Custom integrations",
        "Advanced security",
        "Dedicated account manager"
      ],
      popular: false,
      color: "from-purple-500 to-pink-500"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      role: "CEO",
      content: "Zion AI Analytics Pro has revolutionized our data insights. We've increased revenue by 40% and reduced analysis time by 80% in just 6 months.",
      rating: 5,
      avatar: "SJ",
      results: "40% revenue increase"
    },
    {
      name: "Michael Chen",
      company: "E-commerce Solutions",
      role: "CTO",
      content: "The predictive analytics capabilities are incredible. We can now forecast sales trends with 95% accuracy and optimize our inventory accordingly.",
      rating: 5,
      avatar: "MC",
      results: "95% forecast accuracy"
    },
    {
      name: "Emily Rodriguez",
      company: "Digital Marketing Agency",
      role: "Operations Director",
      content: "The automated reporting feature saves us 20+ hours per week. The insights are actionable and have significantly improved our client campaigns.",
      rating: 5,
      avatar: "ER",
      results: "20+ hours saved weekly"
    }
  ];

  const useCases = [
    {
      title: "Sales Performance Analysis",
      description: "Track sales metrics, identify top performers, and predict future sales trends with AI-powered insights.",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Customer Behavior Insights",
      description: "Understand customer patterns, preferences, and lifetime value to optimize your marketing strategies.",
      icon: <Users className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Financial Forecasting",
      description: "Predict cash flow, revenue trends, and financial performance with advanced machine learning models.",
      icon: <DollarSign className="w-6 h-6" />,
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "Marketing ROI Analysis",
      description: "Measure and optimize your marketing campaigns with detailed attribution and ROI analysis.",
      icon: <Target className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Operational Efficiency",
      description: "Identify bottlenecks, optimize processes, and improve operational efficiency across your organization.",
      icon: <Settings className="w-6 h-6" />,
      color: "from-indigo-500 to-blue-500"
    },
    {
      title: "Risk Assessment",
      description: "Monitor and predict potential risks in your business operations and financial performance.",
      icon: <Shield className="w-6 h-6" />,
      color: "from-red-500 to-pink-500"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Zion AI Analytics Pro - Advanced Business Intelligence Platform | Zion Tech Group</title>
        <meta
          name="description"
          content="Transform your business with Zion AI Analytics Pro - the most advanced AI-powered business intelligence platform. Real-time analytics, predictive insights, and automated reporting for data-driven decisions."
        />
        <meta
          name="keywords"
          content="AI analytics, business intelligence, predictive analytics, data visualization, automated reporting, machine learning insights, business analytics platform"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
                <Star className="w-4 h-4 text-cyan-400 mr-2" />
                <span className="text-cyan-400 text-sm font-medium">#1 AI Analytics Platform 2024</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                  Zion AI Analytics Pro
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                The most advanced AI-powered business intelligence platform. Transform your data into actionable insights 
                with real-time analytics, predictive modeling, and automated reporting.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <div className="flex items-center text-green-400">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span className="text-sm">35% revenue increase</span>
                </div>
                <div className="flex items-center text-green-400">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span className="text-sm">85% time savings</span>
                </div>
                <div className="flex items-center text-green-400">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span className="text-sm">99.9% accuracy</span>
                </div>
                <div className="flex items-center text-green-400">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span className="text-sm">24/7 support</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/demo"
                  className="inline-flex items-center px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                >
                  <Monitor className="mr-2 h-5 w-5" />
                  Watch Demo
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Powerful Features
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Everything you need to transform your data into actionable business insights
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl mb-6`}>
                    <div className="text-white">{feature.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="py-16 bg-black/20 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Proven Results
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                See the measurable impact our platform has on businesses like yours
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="text-center group"
                >
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <div className={benefit.color}>{benefit.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Use Cases Section */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Use Cases
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Discover how different industries leverage our platform for maximum impact
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${useCase.color} rounded-lg mb-4`}>
                    <div className="text-white">{useCase.icon}</div>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{useCase.title}</h3>
                  <p className="text-gray-300 text-sm">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="py-16 bg-black/20 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Simple, Transparent Pricing
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Choose the plan that fits your business needs. All plans include our core AI analytics features.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 hover:transform hover:scale-105 ${
                    plan.popular 
                      ? 'border-cyan-500/50 shadow-2xl shadow-cyan-500/10' 
                      : 'border-white/10 hover:border-white/20'
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
                      <span className="text-4xl font-bold text-white">${plan.price}</span>
                      <span className="text-gray-400 ml-2">/{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-400 hover:to-purple-400'
                        : 'border border-white/20 text-white hover:bg-white/10'
                    }`}
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  What Our Customers Say
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Join thousands of businesses already using Zion AI Analytics Pro
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                      {testimonial.avatar}
                    </div>
                    <div className="ml-4">
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-gray-300 italic mb-4">"{testimonial.content}"</p>
                  
                  <div className="text-cyan-400 font-semibold text-sm">
                    {testimonial.results}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-16 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Transform Your Data into Insights?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start your free trial today and experience the power of AI-driven analytics. 
              No credit card required, cancel anytime.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
              >
                <Monitor className="mr-2 h-5 w-5" />
                Schedule Demo
              </Link>
            </div>

            <div className="mt-8 text-sm text-gray-400">
              <p>Questions? Contact us at <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">kleber@ziontechgroup.com</a> or call <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300">+1 302 464 0950</a></p>
              <p className="mt-2">Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}