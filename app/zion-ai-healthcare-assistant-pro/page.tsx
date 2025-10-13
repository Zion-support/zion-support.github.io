import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { 
  Heart, 
  Brain, 
  Stethoscope, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Award, 
  Clock, 
  Shield, 
  BarChart3,
  Mail,
  Phone,
  Globe,
  Sparkles,
  Zap,
  FileText,
  Calendar,
  UserCheck,
  Search,
  Filter,
  Database,
  Cpu,
  Network,
  Lock,
  Eye,
  MessageSquare,
  Video,
  Headphones,
  Settings,
  Activity,
  Pill,
  Microscope,
  AlertTriangle,
  TrendingUp
} from "lucide-react";

export default function ZionAIHealthcareAssistantPro() {
  const features = [
    {
      title: "AI Medical Diagnosis Support",
      description: "Advanced AI algorithms analyze symptoms, medical history, and test results to provide diagnostic support with 98% accuracy.",
      icon: <Brain className="w-8 h-8" />,
      benefits: ["98% diagnostic accuracy", "50% faster diagnosis", "Reduced misdiagnosis rates"]
    },
    {
      title: "Patient Monitoring & Alerts",
      description: "Real-time patient monitoring with AI-powered alerts for critical health changes and emergency situations.",
      icon: <Activity className="w-8 h-8" />,
      benefits: ["Real-time health monitoring", "Proactive alert system", "Emergency response automation"]
    },
    {
      title: "Drug Interaction Analysis",
      description: "AI-powered drug interaction checking to prevent adverse reactions and optimize medication regimens.",
      icon: <Pill className="w-8 h-8" />,
      benefits: ["99.9% interaction detection", "Automated safety checks", "Personalized medication plans"]
    },
    {
      title: "Medical Image Analysis",
      description: "AI-powered analysis of X-rays, MRIs, CT scans, and other medical images with expert-level accuracy.",
      icon: <Microscope className="w-8 h-8" />,
      benefits: ["95% image analysis accuracy", "Faster image processing", "Early disease detection"]
    }
  ];

  const pricingPlans = [
    {
      name: "Clinic",
      price: "$399/month",
      description: "Perfect for small clinics",
      features: [
        "Up to 100 patients",
        "Basic AI diagnosis support",
        "Patient monitoring",
        "Email support",
        "Standard integrations"
      ],
      popular: false
    },
    {
      name: "Hospital",
      price: "$899/month",
      description: "Ideal for hospitals",
      features: [
        "Up to 1,000 patients",
        "Advanced AI diagnosis",
        "Full patient monitoring",
        "Drug interaction analysis",
        "Priority support",
        "Advanced analytics",
        "Custom workflows"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$1,999/month",
      description: "For healthcare systems",
      features: [
        "Unlimited patients",
        "AI-powered healthcare suite",
        "Custom AI model training",
        "White-label solutions",
        "Dedicated account manager",
        "Advanced reporting",
        "API access",
        "Custom integrations"
      ],
      popular: false
    }
  ];

  const stats = [
    { number: "98%", label: "Diagnostic Accuracy", icon: <Brain className="w-6 h-6" /> },
    { number: "50%", label: "Faster Diagnosis", icon: <Clock className="w-6 h-6" /> },
    { number: "99.9%", label: "Drug Safety", icon: <Shield className="w-6 h-6" /> },
    { number: "10,000+", label: "Lives Saved", icon: <Heart className="w-6 h-6" /> }
  ];

  return (
    <>
      <Helmet>
        <title>Zion AI Healthcare Assistant Pro - AI-Powered Medical Solutions | Zion Tech Group</title>
        <meta
          name="description"
          content="Transform healthcare with Zion AI Healthcare Assistant Pro. AI-powered medical diagnosis, patient monitoring, drug interaction analysis, and medical image analysis."
        />
        <meta
          name="keywords"
          content="AI healthcare, medical diagnosis, patient monitoring, drug interaction analysis, medical image analysis, healthcare AI, medical technology"
        />
        <link rel="canonical" href="https://ziontechgroup.com/zion-ai-healthcare-assistant-pro" />
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
                <span className="text-cyan-400 text-sm font-medium">#1 AI Healthcare Platform 2024</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                  Zion AI Healthcare Assistant Pro
                </span>
              </h1>
              
              <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Revolutionize healthcare with AI-powered medical solutions. 
                Achieve 98% diagnostic accuracy, reduce diagnosis time by 50%, and save more lives.
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
                  <Sparkles className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
                </Link>
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
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  AI-Powered Healthcare Features
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Leverage cutting-edge AI technology to enhance patient care and improve medical outcomes.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                      {feature.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        {feature.description}
                      </p>
                      <div className="space-y-2">
                        {feature.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-center text-sm text-cyan-400">
                            <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                            <span>{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Choose Your Plan
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Flexible pricing plans designed to scale with your healthcare needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                    plan.popular 
                      ? 'border-cyan-500/50 shadow-cyan-500/25' 
                      : 'border-white/20 hover:border-cyan-500/30'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="text-4xl font-bold text-cyan-400 mb-2">{plan.price}</div>
                    <p className="text-gray-400 text-sm">per month</p>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link
                    to="/contact"
                    className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                        : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Healthcare?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join leading healthcare providers using AI to improve patient outcomes and save lives.
              </p>
              
              {/* Contact Details */}
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
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Address</h3>
                  <p className="text-cyan-400 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/demo"
                  className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
                >
                  Schedule Demo
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}