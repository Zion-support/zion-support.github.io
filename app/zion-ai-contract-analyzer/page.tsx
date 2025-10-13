import React from "react";
import { Helmet } from "react-helmet-async";
import { ArrowRight, CheckCircle, Star, FileText, Shield, Zap, BarChart3, Users, Clock, DollarSign, Globe, Lock, Settings, Target, Database, Mail, Headphones, Mic, Video, Image, Music, BookOpen, Lightbulb, Puzzle, Gamepad2, ShoppingCart, CreditCard, Wallet, Banknote, Coins, Gift, Tag, Percent, Calculator, PieChart, LineChart, Activity, Layers, Grid, List, Map, Compass, Navigation, Globe2, WifiOff, Signal, Bluetooth, Usb, HardDrive, MemoryStick, Printer, Scanner, Fax, Phone, Voicemail, Headset, Speaker, Volume2, VolumeX, Play, Pause, Stop, SkipBack, SkipForward, RotateCcw, RotateCw, Shuffle, Repeat, Repeat1, Shuffle2, Maximize, Minimize, Square, Circle, Triangle, Hexagon, Octagon, Diamond, Star as StarIcon, Moon, Sun, Sunrise, Sunset, CloudRain, CloudSnow, CloudLightning, Wind, Droplets, Thermometer, Gauge, Timer, Stopwatch, Hourglass } from "lucide-react";

export default function ZionAiContractAnalyzer() {
  const features = [
    "AI-powered contract analysis and review",
    "Risk assessment and compliance checking",
    "Automated clause extraction and categorization",
    "Legal document comparison and version control",
    "Contract performance monitoring and alerts",
    "Template generation and customization",
    "Multi-language document support",
    "Integration with legal databases",
    "Automated contract renewal tracking",
    "Detailed analytics and reporting"
  ];

  const benefits = [
    "Reduce contract review time by 90%",
    "Identify risks and issues instantly",
    "Ensure compliance with regulations",
    "Improve contract negotiation outcomes",
    "Streamline legal workflows",
    "Reduce legal costs significantly"
  ];

  const pricing = [
    {
      name: "Starter",
      price: "$49",
      period: "/month",
      description: "Perfect for small businesses",
      features: [
        "Up to 50 contracts/month",
        "Basic AI analysis",
        "Standard risk assessment",
        "Email support",
        "Basic reporting"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$149",
      period: "/month",
      description: "Ideal for growing companies",
      features: [
        "Up to 200 contracts/month",
        "Advanced AI analysis",
        "Comprehensive risk assessment",
        "Priority support",
        "Advanced analytics",
        "Custom templates",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$399",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited contracts",
        "Full AI capabilities",
        "Enterprise security",
        "24/7 support",
        "Custom integrations",
        "White-label options",
        "Dedicated account manager"
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: "Contract Review",
      description: "Automatically analyze contracts for risks, compliance issues, and key terms",
      icon: <FileText className="w-8 h-8" />
    },
    {
      title: "Risk Assessment",
      description: "Identify potential legal and financial risks in contract language",
      icon: <Shield className="w-8 h-8" />
    },
    {
      title: "Compliance Checking",
      description: "Ensure contracts meet regulatory requirements and company policies",
      icon: <CheckCircle className="w-8 h-8" />
    },
    {
      title: "Template Generation",
      description: "Create standardized contract templates based on best practices",
      icon: <Settings className="w-8 h-8" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>Zion AI Contract Analyzer - Intelligent Legal Document Analysis</title>
        <meta name="description" content="AI-powered contract analysis tool that helps legal teams review documents, assess risks, and ensure compliance with intelligent automation." />
        <meta name="keywords" content="AI contract analysis, legal document review, contract management, risk assessment, legal automation, contract compliance" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-medium mb-6">
              <FileText className="w-4 h-4" />
              AI-Powered Legal Analysis
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Zion AI Contract <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Analyzer</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Revolutionize your legal document review process with AI-powered contract analysis. Identify risks, ensure compliance, and accelerate legal workflows with intelligent automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 font-medium">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border border-cyan-500 text-cyan-400 rounded-lg hover:bg-cyan-500/10 transition-all duration-300 font-medium">
                Watch Demo
              </button>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/30 rounded-xl p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 group">
                <div className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                  <FileText className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{feature}</h3>
              </div>
            ))}
          </div>

          {/* Use Cases Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Powerful Use Cases</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="text-center group">
                  <div className="text-cyan-400 mb-4 mx-auto w-16 h-16 bg-cyan-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {useCase.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{useCase.title}</h3>
                  <p className="text-gray-300">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Why Choose Zion AI Contract Analyzer?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="text-cyan-400 mb-4 mx-auto w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{benefit}</h3>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Simple, Transparent Pricing</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {pricing.map((plan, index) => (
                <div key={index} className={`bg-slate-800/30 rounded-xl p-8 border transition-all duration-300 ${
                  plan.popular 
                    ? 'border-cyan-500/50 ring-2 ring-cyan-500/20' 
                    : 'border-gray-700/50 hover:border-cyan-500/50'
                }`}>
                  {plan.popular && (
                    <div className="text-center mb-4">
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-6">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-600 hover:to-blue-600'
                      : 'border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10'
                  }`}>
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-8 text-center border border-cyan-500/20">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Legal Workflow?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Join leading law firms and legal departments who trust Zion AI Contract Analyzer to streamline their document review process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 font-medium">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border border-cyan-500 text-cyan-400 rounded-lg hover:bg-cyan-500/10 transition-all duration-300 font-medium">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
