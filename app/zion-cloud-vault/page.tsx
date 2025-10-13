import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { 
  Cloud, 
  Lock, 
  Share, 
  Download, 
  Upload, 
  Search, 
  Filter, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Play, 
  Settings, 
  Eye, 
  Target, 
  Activity, 
  Layers, 
  Globe, 
  Smartphone, 
  Monitor, 
  Database, 
  Shield, 
  Award, 
  Rocket, 
  Brain, 
  Cpu, 
  Wifi, 
  Battery, 
  Camera, 
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
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  FileText, 
  MessageSquare, 
  Bell, 
  Heart, 
  ThumbsUp, 
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
  Calendar as CalendarIcon, 
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
import SEOOptimizer from "../components/SEOOptimizer";

export default function ZionCloudVault() {
  const features = [
    {
      title: "End-to-End Encryption",
      description: "Military-grade AES-256 encryption protects your files at rest and in transit",
      icon: <Lock className="w-6 h-6" />,
      benefits: ["AES-256 encryption", "Zero-knowledge architecture", "Secure key management"]
    },
    {
      title: "Unlimited File Sharing",
      description: "Share files securely with anyone, anywhere, with customizable permissions",
      icon: <Share className="w-6 h-6" />,
      benefits: ["Secure sharing links", "Custom permissions", "Password protection"]
    },
    {
      title: "Real-time Collaboration",
      description: "Work together on documents with real-time editing and commenting",
      icon: <Users className="w-6 h-6" />,
      benefits: ["Live editing", "Version control", "Comment system"]
    },
    {
      title: "Version Control & History",
      description: "Never lose a file with automatic versioning and complete file history",
      icon: <Clock className="w-6 h-6" />,
      benefits: ["Automatic versioning", "File history", "Easy recovery"]
    },
    {
      title: "Advanced Search & Filtering",
      description: "Find any file instantly with powerful search and filtering capabilities",
      icon: <Search className="w-6 h-6" />,
      benefits: ["Full-text search", "Smart filters", "Tag system"]
    },
    {
      title: "Mobile & Desktop Sync",
      description: "Access your files anywhere with seamless sync across all devices",
      icon: <Smartphone className="w-6 h-6" />,
      benefits: ["Cross-platform sync", "Offline access", "Mobile apps"]
    }
  ];

  const pricingPlans = [
    {
      name: "Personal",
      price: "$9",
      period: "/month",
      description: "Perfect for individuals",
      features: [
        "100GB storage",
        "Basic encryption",
        "File sharing",
        "Mobile apps",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$19",
      period: "/month",
      description: "Ideal for small teams",
      features: [
        "1TB storage",
        "Advanced encryption",
        "Team collaboration",
        "Version control",
        "Priority support",
        "Admin controls",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$49",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited storage",
        "Enterprise encryption",
        "Advanced security",
        "Dedicated support",
        "Custom integrations",
        "SLA guarantee",
        "On-premise option"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Maria Garcia",
      company: "Creative Agency",
      role: "Creative Director",
      content: "Zion Cloud Vault has revolutionized how we collaborate. The real-time editing features are incredible!",
      rating: 5,
      avatar: "MG"
    },
    {
      name: "Robert Kim",
      company: "Law Firm",
      role: "Managing Partner",
      content: "The security features give us confidence that our sensitive documents are protected. Highly recommended!",
      rating: 5,
      avatar: "RK"
    },
    {
      name: "Jennifer Lee",
      company: "Consulting Firm",
      role: "Project Manager",
      content: "The version control and collaboration features have streamlined our workflow significantly.",
      rating: 5,
      avatar: "JL"
    }
  ];

  const stats = [
    { number: "60%", label: "Cost Reduction", icon: <Calculator className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime Guarantee", icon: <Shield className="w-6 h-6" /> },
    { number: "256-bit", label: "AES Encryption", icon: <Lock className="w-6 h-6" /> },
    { number: "24/7", label: "Support Available", icon: <Headphones className="w-6 h-6" /> }
  ];

  return (
    <>
      <Helmet>
        <title>Zion Cloud Vault - Secure Cloud Storage Solution | Zion Tech Group</title>
        <meta
          name="description"
          content="Store and share files securely with Zion Cloud Vault - the ultimate secure cloud storage solution with end-to-end encryption, real-time collaboration, and advanced security features. Start your free trial today!"
        />
        <meta
          name="keywords"
          content="cloud storage, secure file sharing, file collaboration, data encryption, cloud backup, file sync, document management, secure storage"
        />
      </Helmet>
      <SEOOptimizer
        title="Zion Cloud Vault - Secure Cloud Storage Solution | Zion Tech Group"
        description="Store and share files securely with Zion Cloud Vault - the ultimate secure cloud storage solution with end-to-end encryption, real-time collaboration, and advanced security features. Start your free trial today!"
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-emerald-500/10 to-cyan-500/10 animate-pulse"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.1),transparent_50%)]"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 mb-6">
                <Cloud className="w-4 h-4 text-green-400 mr-2" />
                <span className="text-green-400 text-sm font-medium">#1 Secure Cloud Storage</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-400 to-cyan-400">
                  Zion Cloud Vault
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Secure cloud storage solution with advanced encryption, file sharing, and collaboration tools. 
                Keep your files safe while enabling seamless teamwork and productivity.
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
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-lg hover:from-green-400 hover:to-emerald-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/demo"
                  className="inline-flex items-center px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                >
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="py-16 bg-black/20 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full mb-4">
                    <div className="text-green-400">{stat.icon}</div>
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                  Secure Storage Features
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Everything you need to store, share, and collaborate on your files securely
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-3 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500">
                      <div className="text-white">{feature.icon}</div>
                    </div>
                    <h3 className="text-xl font-bold text-white ml-4">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="py-20 bg-black/10 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                  Storage Plans
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Choose the storage plan that fits your needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 hover:transform hover:scale-105 ${
                    plan.popular
                      ? "border-green-500/50 shadow-2xl shadow-green-500/10"
                      : "border-white/10 hover:border-white/20"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white text-sm font-bold px-4 py-2 rounded-full">
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-2">{plan.period}</span>
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
                    className={`w-full inline-flex items-center justify-center px-6 py-3 font-semibold rounded-lg transition-all duration-300 ${
                      plan.popular
                        ? "bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:from-green-400 hover:to-emerald-400 transform hover:scale-105"
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

        {/* Testimonials */}
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                  What Our Customers Say
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Join thousands of satisfied customers who trust Zion Cloud Vault
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold">
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
        <div className="py-20 bg-gradient-to-r from-green-500/10 via-emerald-500/10 to-cyan-500/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-4">
              Start Storing Files Securely Today
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses who trust Zion Cloud Vault for their file storage needs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-lg hover:from-green-400 hover:to-emerald-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
              >
                <Cloud className="mr-2 h-5 w-5" />
                View Pricing
              </Link>
            </div>

            <div className="mt-8 text-sm text-gray-400">
              <p>Questions? Contact us at <a href="mailto:kleber@ziontechgroup.com" className="text-green-400 hover:text-green-300">kleber@ziontechgroup.com</a> or call <a href="tel:+13024640950" className="text-green-400 hover:text-green-300">+1 302 464 0950</a></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}