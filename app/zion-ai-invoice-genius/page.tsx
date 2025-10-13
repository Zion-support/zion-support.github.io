import React from "react";
import { ArrowRight, CheckCircle, Star, FileText, DollarSign, Clock, Shield, Zap, Users, BarChart3, CreditCard, Globe, Smartphone, Mail, Phone, MapPin, Award, TrendingUp, Target, Settings, Monitor, Database, Cloud, Lock, Eye, Download, Upload, Share, Bell, Calendar, Calculator, PieChart, LineChart, Activity, Layers, Grid, List, Map, Compass, Navigation, Globe2, WifiOff, Signal, Bluetooth, Usb, HardDrive, MemoryStick, Printer, Scanner, Fax, Phone as PhoneIcon, Voicemail, Headset, Speaker, Volume2, VolumeX, Play, Pause, Stop, SkipBack, SkipForward, RotateCcw, RotateCw, Shuffle, Repeat, Repeat1, Shuffle2, Maximize, Minimize, Square, Circle, Triangle, Hexagon, Octagon, Diamond, Star as StarIcon, Moon, Sun, Sunrise, Sunset, CloudRain, CloudSnow, CloudLightning, Wind, Droplets, Thermometer, Gauge, Timer, Stopwatch, Hourglass } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import SEOOptimizer from "../components/SEOOptimizer";

export default function ZionAiInvoiceGenius() {
  const features = [
    {
      title: "AI-Powered Invoice Generation",
      description: "Automatically generate professional invoices with AI-powered content suggestions and formatting",
      icon: <FileText className="w-8 h-8" />,
      color: "from-emerald-500 to-teal-500"
    },
    {
      title: "Automated Payment Reminders",
      description: "Smart reminder system that sends personalized payment notifications based on client behavior",
      icon: <Bell className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Multi-Currency Support",
      description: "Handle international clients with automatic currency conversion and localized formatting",
      icon: <Globe className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Payment Tracking & Analytics",
      description: "Real-time payment tracking with detailed analytics and financial insights",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Client Portal Access",
      description: "Secure client portal for invoice viewing, payment processing, and communication",
      icon: <Shield className="w-8 h-8" />,
      color: "from-indigo-500 to-blue-500"
    },
    {
      title: "Tax Calculation & Reporting",
      description: "Automated tax calculations and comprehensive reporting for compliance",
      icon: <Calculator className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Recurring Billing Automation",
      description: "Set up automated recurring billing for subscription services and regular clients",
      icon: <Zap className="w-8 h-8" />,
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "Accounting Software Integration",
      description: "Seamless integration with QuickBooks, Xero, and other popular accounting platforms",
      icon: <Database className="w-8 h-8" />,
      color: "from-cyan-500 to-blue-500"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$16",
      period: "month",
      originalPrice: "$28",
      discount: "43% OFF",
      description: "Perfect for freelancers and small businesses",
      features: [
        "Up to 50 invoices/month",
        "Basic AI invoice generation",
        "Payment tracking",
        "Client portal",
        "Email support",
        "Basic reporting"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$32",
      period: "month",
      originalPrice: "$55",
      discount: "42% OFF",
      description: "Ideal for growing businesses and agencies",
      features: [
        "Up to 200 invoices/month",
        "Advanced AI features",
        "Multi-currency support",
        "Automated reminders",
        "Advanced analytics",
        "Priority support",
        "Custom branding",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$64",
      period: "month",
      originalPrice: "$110",
      discount: "42% OFF",
      description: "For large organizations with complex needs",
      features: [
        "Unlimited invoices",
        "Full AI capabilities",
        "Advanced integrations",
        "Custom workflows",
        "White-label options",
        "Dedicated support",
        "Custom reporting",
        "SLA guarantee"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Sarah Mitchell",
      company: "Creative Agency",
      role: "Owner",
      content: "Zion AI Invoice Genius has revolutionized our billing process. We've reduced invoice creation time by 85% and improved payment collection by 60%.",
      rating: 5,
      avatar: "SM"
    },
    {
      name: "David Chen",
      company: "Tech Consulting",
      role: "CEO",
      content: "The AI-powered features are incredible. It automatically suggests the right content and formatting for each client. Highly recommended!",
      rating: 5,
      avatar: "DC"
    },
    {
      name: "Maria Rodriguez",
      company: "Freelance Designer",
      role: "Designer",
      content: "As a freelancer, this tool has been a game-changer. The automated reminders and payment tracking have significantly improved my cash flow.",
      rating: 5,
      avatar: "MR"
    }
  ];

  const benefits = [
    {
      title: "Reduce Invoicing Time by 85%",
      description: "AI-powered automation eliminates manual data entry and formatting",
      icon: <Clock className="w-6 h-6" />
    },
    {
      title: "Improve Payment Collection by 60%",
      description: "Smart reminders and payment tracking increase collection rates",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: "Eliminate Billing Errors",
      description: "Automated calculations and validation prevent costly mistakes",
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "Streamline Financial Workflows",
      description: "Seamless integration with accounting software and payment processors",
      icon: <Settings className="w-6 h-6" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>Zion AI Invoice Genius - AI-Powered Invoice Management | Zion Tech Group</title>
        <meta
          name="description"
          content="Transform your invoicing with Zion AI Invoice Genius. AI-powered invoice generation, automated payment reminders, multi-currency support, and financial insights. Start free trial today!"
        />
        <meta
          name="keywords"
          content="AI invoice generation, automated billing, payment tracking, invoice management, financial software, accounting integration, multi-currency invoicing"
        />
      </Helmet>
      <SEOOptimizer
        title="Zion AI Invoice Genius - AI-Powered Invoice Management | Zion Tech Group"
        description="Transform your invoicing with Zion AI Invoice Genius. AI-powered invoice generation, automated payment reminders, multi-currency support, and financial insights. Start free trial today!"
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-cyan-500/10 animate-pulse"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1),transparent_50%)]"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 mb-6">
                <Star className="w-4 h-4 text-emerald-400 mr-2" />
                <span className="text-emerald-400 text-sm font-medium">Featured Micro SAAS Solution</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400">
                  Zion AI Invoice Genius
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your invoicing process with AI-powered invoice generation, automated payment reminders, 
                and comprehensive financial insights. Streamline billing and improve cash flow.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <div className="flex items-center text-green-400">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span className="text-sm">Free 14-day trial</span>
                </div>
                <div className="flex items-center text-green-400">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span className="text-sm">No setup fees</span>
                </div>
                <div className="flex items-center text-green-400">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span className="text-sm">Cancel anytime</span>
                </div>
                <div className="flex items-center text-green-400">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span className="text-sm">24/7 support</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-lg hover:from-emerald-400 hover:to-teal-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
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
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                  Powerful Features
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Everything you need to streamline your invoicing process and improve financial management
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105"
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
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                  Why Choose Zion AI Invoice Genius?
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Transform your invoicing process and improve your business financial health
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="text-center group"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-emerald-500/20 to-teal-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <div className="text-emerald-400">{benefit.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                  Simple, Transparent Pricing
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Choose the plan that fits your business needs. All plans include our core AI features.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 hover:transform hover:scale-105 ${
                    plan.popular
                      ? "border-emerald-500/50 shadow-2xl shadow-emerald-500/10"
                      : "border-white/10 hover:border-white/20"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-sm font-bold px-4 py-2 rounded-full">
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-center justify-center mb-2">
                      <span className="text-4xl font-bold text-white">${plan.price}</span>
                      <span className="text-gray-400 ml-2">/{plan.period}</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <span className="text-sm text-gray-400 line-through mr-2">${plan.originalPrice}</span>
                      <span className="text-sm text-emerald-400 font-semibold">{plan.discount}</span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-emerald-400 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    className={`w-full inline-flex items-center justify-center px-6 py-3 font-semibold rounded-lg transition-all duration-300 ${
                      plan.popular
                        ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white hover:from-emerald-400 hover:to-teal-400 transform hover:scale-105"
                        : "border border-white/20 text-white hover:bg-white/10"
                    }`}
                  >
                    {plan.popular ? "Start Free Trial" : "Get Started"}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="py-16 bg-black/20 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                  What Our Customers Say
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Join thousands of satisfied customers who trust Zion AI Invoice Genius
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold">
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
                  
                  <p className="text-gray-300 italic">"{testimonial.content}"</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-16 bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-cyan-500/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Transform Your Invoicing?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start your free 14-day trial today. No credit card required. Cancel anytime.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-lg hover:from-emerald-400 hover:to-teal-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
              >
                <DollarSign className="mr-2 h-5 w-5" />
                View All Pricing
              </Link>
            </div>

            <div className="mt-8 text-sm text-gray-400">
              <p>Questions? Contact us at <a href="mailto:kleber@ziontechgroup.com" className="text-emerald-400 hover:text-emerald-300">kleber@ziontechgroup.com</a> or call <a href="tel:+13024640950" className="text-emerald-400 hover:text-emerald-300">+1 302 464 0950</a></p>
              <p className="mt-2">Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}