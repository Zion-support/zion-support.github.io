import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Cpu, 
  Zap, 
  Brain, 
  BarChart3, 
  Shield, 
  Globe, 
  Users, 
  Award, 
  Clock, 
  ArrowRight, 
  CheckCircle, 
  Star, 
  TrendingUp, 
  Target, 
  Settings, 
  Monitor, 
  Play, 
  Pause, 
  Stop, 
  Download, 
  Upload, 
  Share, 
  Bell, 
  Eye, 
  Heart, 
  ThumbsUp, 
  MessageSquare, 
  Calendar, 
  Search, 
  Filter, 
  Home, 
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
  Clock3, 
  Clock4, 
  Clock5, 
  Clock6, 
  Clock7, 
  Clock8, 
  Clock9, 
  Clock10, 
  Clock11, 
  Clock12, 
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
  CalendarOganesson, 
  Package, 
  Receipt, 
  ClipboardList, 
  Workflow, 
  Lock, 
  Key, 
  Fingerprint, 
  Scan, 
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
  VolumeX, 
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
  LineChart
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticBackground from '../components/FuturisticBackground';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';
import ResponsiveGrid from '../components/ResponsiveGrid';

const ZionAIQuantumOptimizerPro = () => {
  const features = [
    {
      title: "Quantum Algorithm Optimization",
      description: "Leverage quantum computing principles to solve complex optimization problems exponentially faster than classical methods",
      icon: <Cpu className="w-6 h-6" />,
      benefits: ["Exponential speedup", "Complex problem solving", "Quantum annealing", "Hybrid algorithms"]
    },
    {
      title: "AI-Powered Problem Analysis",
      description: "Advanced AI algorithms analyze your optimization challenges and recommend the best quantum approaches",
      icon: <Brain className="w-6 h-6" />,
      benefits: ["Problem classification", "Algorithm selection", "Parameter tuning", "Performance prediction"]
    },
    {
      title: "Real-Time Optimization",
      description: "Process optimization requests in real-time with quantum-inspired algorithms and classical fallbacks",
      icon: <Zap className="w-6 h-6" />,
      benefits: ["Real-time processing", "Dynamic optimization", "Adaptive algorithms", "Instant results"]
    },
    {
      title: "Multi-Objective Optimization",
      description: "Optimize multiple conflicting objectives simultaneously using quantum-enhanced Pareto optimization",
      icon: <Target className="w-6 h-6" />,
      benefits: ["Pareto optimization", "Trade-off analysis", "Multi-criteria decisions", "Solution diversity"]
    },
    {
      title: "Quantum Simulation",
      description: "Simulate quantum systems and processes to test optimization strategies before implementation",
      icon: <Monitor className="w-6 h-6" />,
      benefits: ["Quantum simulation", "Virtual testing", "Risk assessment", "Performance validation"]
    },
    {
      title: "Enterprise Integration",
      description: "Seamlessly integrate with existing enterprise systems and workflows through robust APIs",
      icon: <Settings className="w-6 h-6" />,
      benefits: ["API integration", "Workflow automation", "Custom connectors", "Enterprise security"]
    }
  ];

  const useCases = [
    {
      title: "Supply Chain Optimization",
      description: "Optimize complex supply chain networks with quantum algorithms for maximum efficiency and cost reduction",
      icon: <Package className="w-8 h-8" />,
      benefits: ["Route optimization", "Inventory management", "Demand forecasting", "Cost minimization"]
    },
    {
      title: "Financial Portfolio Optimization",
      description: "Optimize investment portfolios using quantum algorithms for risk-return optimization",
      icon: <TrendingUp className="w-8 h-8" />,
      benefits: ["Risk optimization", "Return maximization", "Diversification", "Market analysis"]
    },
    {
      title: "Resource Allocation",
      description: "Optimize resource allocation across projects and teams for maximum productivity",
      icon: <Users className="w-8 h-8" />,
      benefits: ["Resource optimization", "Capacity planning", "Load balancing", "Efficiency maximization"]
    },
    {
      title: "Logistics & Transportation",
      description: "Solve complex logistics problems including vehicle routing and scheduling optimization",
      icon: <Globe className="w-8 h-8" />,
      benefits: ["Route planning", "Scheduling optimization", "Fleet management", "Cost reduction"]
    }
  ];

  const pricingPlans = [
    {
      name: "Quantum Starter",
      price: "$199",
      period: "per month",
      description: "Perfect for small optimization problems and learning",
      features: [
        "Up to 100 optimization runs/month",
        "Basic quantum algorithms",
        "Classical fallback",
        "Email support",
        "Standard documentation",
        "Basic analytics"
      ],
      popular: false
    },
    {
      name: "Quantum Professional",
      price: "$599",
      period: "per month",
      description: "Ideal for medium-scale optimization challenges",
      features: [
        "Up to 1000 optimization runs/month",
        "Advanced quantum algorithms",
        "Hybrid optimization",
        "Priority support",
        "Advanced documentation",
        "Detailed analytics",
        "API access",
        "Custom algorithms"
      ],
      popular: true
    },
    {
      name: "Quantum Enterprise",
      price: "$1,999",
      period: "per month",
      description: "For large-scale enterprise optimization",
      features: [
        "Unlimited optimization runs",
        "Premium quantum algorithms",
        "Quantum simulation",
        "24/7 dedicated support",
        "Custom documentation",
        "Advanced analytics",
        "Full API access",
        "White-label options",
        "Custom integrations",
        "Dedicated resources"
      ],
      popular: false
    }
  ];

  const stats = [
    { number: "1000x", label: "Faster Optimization", icon: <Zap className="w-6 h-6" /> },
    { number: "99.9%", label: "Accuracy Rate", icon: <Target className="w-6 h-6" /> },
    { number: "50+", label: "Optimization Algorithms", icon: <Cpu className="w-6 h-6" /> },
    { number: "24/7", label: "Quantum Processing", icon: <Clock className="w-6 h-6" /> }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Kim",
      company: "Quantum Computing Labs",
      role: "Chief Scientist",
      content: "Zion AI Quantum Optimizer Pro has revolutionized our research. We're solving problems that were previously impossible with classical methods.",
      rating: 5,
      avatar: "SK"
    },
    {
      name: "Michael Rodriguez",
      company: "Global Logistics Corp",
      role: "Operations Director",
      content: "The supply chain optimization results are incredible. We've reduced costs by 35% while improving delivery times by 50%.",
      rating: 5,
      avatar: "MR"
    },
    {
      name: "Dr. Lisa Chen",
      company: "Financial Analytics Inc",
      role: "Quantitative Analyst",
      content: "Portfolio optimization has never been this efficient. The quantum algorithms provide superior risk-return profiles.",
      rating: 5,
      avatar: "LC"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <EnhancedSEO
        title="Zion AI Quantum Optimizer Pro - Quantum Computing Optimization Platform | Zion Tech Group"
        description="Revolutionize optimization with Zion AI Quantum Optimizer Pro. Leverage quantum computing principles for exponential speedup in complex problem solving and optimization."
        keywords="quantum optimization, quantum computing, AI optimization, quantum algorithms, optimization platform, quantum simulation"
        canonical="https://ziontechgroup.com/zion-ai-quantum-optimizer-pro"
      />
      <FuturisticBackground />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <ResponsiveContainer className="text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Cpu className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">Quantum Computing</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Zion AI Quantum Optimizer Pro
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            The world's first quantum-powered optimization platform. Solve complex problems exponentially faster 
            with quantum computing principles and AI-driven optimization algorithms.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Start Free Trial
            </FuturisticButton>
            <FuturisticButton
              href="/demo"
              variant="outline"
              size="lg"
              icon={<Play className="w-5 h-5" />}
            >
              Watch Demo
            </FuturisticButton>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
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
              Quantum-Powered Features
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Harness the power of quantum computing for unprecedented optimization capabilities
            </p>
          </div>
          
          <ResponsiveGrid className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FuturisticCard key={index} className="p-6 hover:scale-105 transition-transform duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center text-white mr-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </FuturisticCard>
            ))}
          </ResponsiveGrid>
        </ResponsiveContainer>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Real-World Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how quantum optimization transforms industries and solves complex problems
            </p>
          </div>
          
          <ResponsiveGrid className="grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <FuturisticCard key={index} className="p-8 hover:scale-105 transition-transform duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center text-white mr-6">
                    {useCase.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-2">{useCase.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{useCase.description}</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {useCase.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </FuturisticCard>
            ))}
          </ResponsiveGrid>
        </ResponsiveContainer>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Quantum Computing Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect plan for your optimization needs
            </p>
          </div>
          
          <ResponsiveGrid className="grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <FuturisticCard 
                key={index} 
                className={`p-8 relative hover:scale-105 transition-transform duration-300 ${
                  plan.popular ? 'ring-2 ring-cyan-500/50 bg-gradient-to-br from-cyan-500/10 to-purple-500/10' : ''
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
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300 ml-2">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <FuturisticButton
                  href="/contact"
                  variant={plan.popular ? "primary" : "outline"}
                  className="w-full justify-center"
                >
                  {plan.popular ? "Get Started" : "Choose Plan"}
                </FuturisticButton>
              </FuturisticCard>
            ))}
          </ResponsiveGrid>
        </ResponsiveContainer>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by Quantum Researchers
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what leading researchers and organizations say about our quantum optimization platform
            </p>
          </div>
          
          <ResponsiveGrid className="grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <FuturisticCard key={index} className="p-6 hover:scale-105 transition-transform duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
                
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-300 italic leading-relaxed">"{testimonial.content}"</p>
              </FuturisticCard>
            ))}
          </ResponsiveGrid>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <ResponsiveContainer className="text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Experience Quantum Optimization?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Join the quantum computing revolution and solve optimization problems that were previously impossible. 
            Experience exponential speedup and superior results.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Start Free Trial
            </FuturisticButton>
            <FuturisticButton
              href="/demo"
              variant="outline"
              size="lg"
              icon={<Play className="w-5 h-5" />}
            >
              Schedule Demo
            </FuturisticButton>
          </div>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default ZionAIQuantumOptimizerPro;