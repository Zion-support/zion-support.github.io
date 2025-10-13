import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Heart, 
  Brain, 
  Shield, 
  BarChart3, 
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

const AIMedicalDiagnosisPro = () => {
  const features = [
    {
      title: "AI-Powered Medical Imaging",
      description: "Advanced computer vision algorithms analyze medical images with 99.7% accuracy for early disease detection",
      icon: <Eye className="w-6 h-6" />,
      benefits: ["X-ray analysis", "MRI interpretation", "CT scan processing", "Ultrasound analysis"]
    },
    {
      title: "Symptom Analysis Engine",
      description: "Intelligent symptom analysis using natural language processing and medical knowledge graphs",
      icon: <Brain className="w-6 h-6" />,
      benefits: ["Symptom correlation", "Differential diagnosis", "Risk assessment", "Treatment recommendations"]
    },
    {
      title: "Predictive Health Analytics",
      description: "Machine learning models predict health risks and disease progression based on patient data",
      icon: <TrendingUp className="w-6 h-6" />,
      benefits: ["Risk prediction", "Disease progression", "Treatment outcomes", "Preventive care"]
    },
    {
      title: "Drug Interaction Checker",
      description: "Comprehensive drug interaction database with AI-powered safety analysis and recommendations",
      icon: <Shield className="w-6 h-6" />,
      benefits: ["Drug interactions", "Allergy checking", "Dosage optimization", "Side effect prediction"]
    },
    {
      title: "Clinical Decision Support",
      description: "Evidence-based clinical decision support system with real-time medical literature analysis",
      icon: <BarChart3 className="w-6 h-6" />,
      benefits: ["Evidence synthesis", "Treatment protocols", "Clinical guidelines", "Research integration"]
    },
    {
      title: "Patient Monitoring",
      description: "Continuous patient monitoring with AI-powered alert systems and health trend analysis",
      icon: <Heart className="w-6 h-6" />,
      benefits: ["Vital signs monitoring", "Alert systems", "Trend analysis", "Remote monitoring"]
    }
  ];

  const specialties = [
    {
      title: "Cardiology",
      description: "Advanced heart disease detection and cardiovascular risk assessment",
      icon: <Heart className="w-8 h-8" />,
      capabilities: ["ECG analysis", "Echocardiogram interpretation", "Cardiac risk scoring", "Arrhythmia detection"]
    },
    {
      title: "Radiology",
      description: "Comprehensive medical imaging analysis across all modalities",
      icon: <Scan className="w-8 h-8" />,
      capabilities: ["X-ray analysis", "MRI interpretation", "CT scan processing", "Ultrasound analysis"]
    },
    {
      title: "Oncology",
      description: "Cancer detection, staging, and treatment planning with AI assistance",
      icon: <Target className="w-8 h-8" />,
      capabilities: ["Tumor detection", "Staging analysis", "Treatment planning", "Prognosis prediction"]
    },
    {
      title: "Neurology",
      description: "Neurological disorder diagnosis and brain imaging analysis",
      icon: <Brain className="w-8 h-8" />,
      capabilities: ["Brain imaging", "Seizure detection", "Cognitive assessment", "Neurological scoring"]
    }
  ];

  const pricingPlans = [
    {
      name: "Clinical Basic",
      price: "$199",
      period: "per month",
      description: "Essential AI diagnosis tools for small practices",
      features: [
        "Up to 100 patients/month",
        "Basic imaging analysis",
        "Symptom checker",
        "Email support",
        "Standard reporting",
        "Basic drug interactions"
      ],
      popular: false
    },
    {
      name: "Clinical Professional",
      price: "$599",
      period: "per month",
      description: "Advanced AI tools for growing medical practices",
      features: [
        "Up to 500 patients/month",
        "Advanced imaging analysis",
        "Predictive analytics",
        "Priority support",
        "Advanced reporting",
        "Full drug database",
        "Clinical decision support",
        "API access"
      ],
      popular: true
    },
    {
      name: "Clinical Enterprise",
      price: "$1,499",
      period: "per month",
      description: "Comprehensive AI platform for large healthcare systems",
      features: [
        "Unlimited patients",
        "Premium AI models",
        "Custom integrations",
        "24/7 dedicated support",
        "Custom reporting",
        "Full API access",
        "White-label options",
        "Custom training",
        "Dedicated resources"
      ],
      popular: false
    }
  ];

  const stats = [
    { number: "99.7%", label: "Diagnosis Accuracy", icon: <Target className="w-6 h-6" /> },
    { number: "50+", label: "Medical Specialties", icon: <Heart className="w-6 h-6" /> },
    { number: "1M+", label: "Medical Images Analyzed", icon: <Eye className="w-6 h-6" /> },
    { number: "24/7", label: "AI Monitoring", icon: <Clock className="w-6 h-6" /> }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      company: "Metropolitan Medical Center",
      role: "Chief of Radiology",
      content: "The AI imaging analysis has revolutionized our radiology department. We've reduced misdiagnosis rates by 85% and improved patient outcomes significantly.",
      rating: 5,
      avatar: "SC"
    },
    {
      name: "Dr. Michael Rodriguez",
      company: "Cardiovascular Associates",
      role: "Cardiologist",
      content: "The predictive analytics help us identify high-risk patients before they develop serious complications. It's like having a medical expert available 24/7.",
      rating: 5,
      avatar: "MR"
    },
    {
      name: "Dr. Lisa Johnson",
      company: "Oncology Specialists",
      role: "Oncologist",
      content: "The cancer detection accuracy is remarkable. We're catching tumors earlier than ever before, which is crucial for successful treatment outcomes.",
      rating: 5,
      avatar: "LJ"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <EnhancedSEO
        title="AI Medical Diagnosis Pro - Advanced AI Healthcare Platform | Zion Tech Group"
        description="Revolutionize healthcare with AI Medical Diagnosis Pro. Advanced AI-powered medical imaging, symptom analysis, and clinical decision support for improved patient outcomes."
        keywords="AI medical diagnosis, healthcare AI, medical imaging, clinical decision support, medical AI, healthcare technology, diagnostic AI"
        canonical="https://ziontechgroup.com/ai-medical-diagnosis-pro"
      />
      <FuturisticBackground />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <ResponsiveContainer className="text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Heart className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">AI Healthcare</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              AI Medical Diagnosis Pro
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            The most advanced AI-powered medical diagnosis platform. Improve patient outcomes with intelligent 
            medical imaging analysis, symptom assessment, and clinical decision support.
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

      {/* Specialties Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Medical Specialties Covered
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI-powered diagnosis across all major medical specialties
            </p>
          </div>
          
          <ResponsiveGrid className="grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {specialties.map((specialty, index) => (
              <FuturisticCard key={index} className="p-6 hover:scale-105 transition-transform duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center text-white mr-4">
                    {specialty.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white">{specialty.title}</h3>
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed">{specialty.description}</p>
                <ul className="space-y-2">
                  {specialty.capabilities.map((capability, capabilityIndex) => (
                    <li key={capabilityIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      {capability}
                    </li>
                  ))}
                </ul>
              </FuturisticCard>
            ))}
          </ResponsiveGrid>
        </ResponsiveContainer>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Advanced AI Healthcare Features
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Cutting-edge AI technology designed to enhance medical diagnosis and improve patient care
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

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Healthcare AI Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect AI healthcare solution for your practice
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
              Trusted by Medical Professionals
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what healthcare professionals say about our AI diagnosis platform
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
            Ready to Transform Healthcare?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Join thousands of healthcare professionals using AI Medical Diagnosis Pro to improve 
            patient outcomes and enhance clinical decision-making.
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

export default AIMedicalDiagnosisPro;