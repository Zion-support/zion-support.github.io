import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Cpu, 
  Brain, 
  Zap, 
  Sparkles, 
  Clock, 
  Users, 
  Award, 
  Globe, 
  Smartphone, 
  Monitor, 
  Mail, 
  Phone, 
  MapPin,
  Atom,
  Layers,
  Target,
  TrendingUp,
  BarChart3,
  Shield,
  Lock,
  Cloud,
  Database,
  Code,
  FileText,
  Image,
  Headphones,
  Volume2,
  Maximize,
  Minimize,
  RotateCcw,
  RotateCw,
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

export default function AIQuantumComputing() {
  const features = [
    "Quantum machine learning algorithms",
    "Quantum optimization for complex problems",
    "Quantum cryptography and security",
    "Quantum simulation and modeling",
    "Hybrid quantum-classical computing",
    "Quantum error correction",
    "Quantum algorithm development",
    "Quantum cloud computing access",
    "Real-time quantum processing",
    "Quantum data analysis",
    "Quantum neural networks",
    "Quantum AI model training"
  ];

  const benefits = [
    "Solve problems 1000x faster than classical computers",
    "Breakthrough optimization for complex systems",
    "Unbreakable quantum encryption",
    "Revolutionary AI model training capabilities"
  ];

  const pricingPlans = [
    {
      name: "Quantum Starter",
      price: "$2,999",
      period: "/month",
      originalPrice: "$4,999",
      discount: "40% OFF",
      features: [
        "Basic quantum computing access",
        "10 quantum algorithm executions",
        "Standard quantum simulators",
        "Email support",
        "Basic quantum tutorials",
        "Cloud quantum processing"
      ],
      popular: false
    },
    {
      name: "Quantum Professional",
      price: "$7,999",
      period: "/month",
      originalPrice: "$12,999",
      discount: "38% OFF",
      features: [
        "Advanced quantum computing",
        "100 quantum algorithm executions",
        "Premium quantum simulators",
        "Priority support",
        "Custom quantum algorithms",
        "Quantum AI model training",
        "API access",
        "Dedicated quantum resources"
      ],
      popular: true
    },
    {
      name: "Quantum Enterprise",
      price: "$19,999",
      period: "/month",
      originalPrice: "$29,999",
      discount: "33% OFF",
      features: [
        "Unlimited quantum computing",
        "Custom quantum hardware access",
        "Advanced quantum simulators",
        "24/7 dedicated support",
        "Custom quantum development",
        "On-premise quantum deployment",
        "Quantum security consulting",
        "SLA guarantees"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      company: "Quantum Research Labs",
      role: "Chief Quantum Scientist",
      content: "Zion's AI Quantum Computing platform has revolutionized our research. We've achieved breakthrough results in optimization problems that would take years on classical computers.",
      rating: 5,
      avatar: "SC"
    },
    {
      name: "Michael Rodriguez",
      company: "Advanced Analytics Corp",
      role: "CTO",
      content: "The quantum machine learning capabilities are extraordinary. We're solving complex optimization problems in minutes that previously took days or weeks.",
      rating: 5,
      avatar: "MR"
    },
    {
      name: "Dr. Emily Watson",
      company: "Financial Modeling Inc",
      role: "Head of Research",
      content: "Quantum computing has transformed our financial modeling. The speed and accuracy of quantum algorithms are unmatched in the industry.",
      rating: 5,
      avatar: "EW"
    }
  ];

  const applications = [
    {
      title: "Financial Optimization",
      description: "Quantum algorithms for portfolio optimization, risk analysis, and high-frequency trading",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Drug Discovery",
      description: "Quantum simulation for molecular modeling and pharmaceutical research",
      icon: <Atom className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Cryptography",
      description: "Quantum-resistant encryption and secure communication protocols",
      icon: <Shield className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Machine Learning",
      description: "Quantum neural networks and advanced AI model training",
      icon: <Brain className="w-8 h-8" />,
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Quantum Computing - Revolutionary Quantum AI Solutions | Zion Tech Group</title>
        <meta
          name="description"
          content="Harness the power of quantum computing with AI. Zion's quantum AI platform provides quantum machine learning, optimization, cryptography, and simulation capabilities. Transform your business with quantum technology."
        />
        <meta
          name="keywords"
          content="quantum computing, quantum AI, quantum machine learning, quantum optimization, quantum cryptography, quantum simulation, quantum algorithms, quantum cloud computing"
        />
        <link rel="canonical" href="https://ziontechgroup.com/ai-quantum-computing" />
      </Helmet>
      <SEOOptimizer
        title="AI Quantum Computing - Revolutionary Quantum AI Solutions | Zion Tech Group"
        description="Harness the power of quantum computing with AI. Zion's quantum AI platform provides quantum machine learning, optimization, cryptography, and simulation capabilities. Transform your business with quantum technology."
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
              <span className="text-cyan-400 text-sm font-medium">Next-Generation Quantum AI</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              AI
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
                {" "}Quantum Computing
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Revolutionize your business with the power of quantum computing and AI. 
              Solve complex problems 1000x faster with quantum algorithms, machine learning, and optimization.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Get Quantum Consultation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                See Quantum Demo
                <Monitor className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Cpu className="w-8 h-8 text-cyan-400" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">1000x</div>
                <div className="text-gray-300 text-sm">Faster Processing</div>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Atom className="w-8 h-8 text-cyan-400" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">50+</div>
                <div className="text-gray-300 text-sm">Quantum Algorithms</div>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-8 h-8 text-cyan-400" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">100%</div>
                <div className="text-gray-300 text-sm">Quantum Security</div>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-8 h-8 text-cyan-400" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">99.9%</div>
                <div className="text-gray-300 text-sm">Accuracy Rate</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Revolutionary Quantum AI Capabilities
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Harness the power of quantum mechanics combined with artificial intelligence 
                to solve the most complex problems in seconds.
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

        {/* Applications */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Quantum Computing Applications
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Transform industries with quantum computing power. From finance to healthcare, 
                quantum AI is revolutionizing how we solve complex problems.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {applications.map((application, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div
                    className={`w-16 h-16 rounded-lg bg-gradient-to-r ${application.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
                  >
                    {application.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 text-center group-hover:text-cyan-300 transition-colors">
                    {application.title}
                  </h3>
                  <p className="text-gray-300 text-center leading-relaxed">
                    {application.description}
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
                Quantum Computing Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Access the power of quantum computing with our flexible pricing plans. 
                Choose the level that matches your quantum computing needs.
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
                Quantum Computing Success Stories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See how leading organizations are leveraging quantum computing for breakthrough results
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
              Ready to Harness Quantum Power?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join the quantum revolution and transform your business with AI-powered quantum computing. 
              Get a free consultation and discover the possibilities.
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
                Get Quantum Consultation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/ai-services"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                View All AI Services
                <Sparkles className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}