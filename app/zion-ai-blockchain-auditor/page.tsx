import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, CheckCircle, AlertTriangle, TrendingUp, Lock, Eye, Zap, BarChart3, Globe, Cpu, Database, FileText, Users, Clock, DollarSign, Star, ArrowRight, Brain, Code, Search, Filter, Download, Upload, Share, Bell, Target, Settings, Monitor, MessageSquare, Calendar, Activity, Layers, Grid, List, Map, Compass, Navigation, Globe2, Wifi, Signal, Bluetooth, Usb, HardDrive, MemoryStick, Printer, Scanner, Fax, Phone, Voicemail, Headset, Speaker, Volume2, VolumeX, Play, Pause, Stop, SkipBack, SkipForward, RotateCcw, RotateCw, Shuffle, Repeat, Repeat1, Shuffle2, Maximize, Minimize, Square, Circle, Triangle, Hexagon, Octagon, Diamond, Star as StarIcon, Moon, Sun, Sunrise, Sunset, CloudRain, CloudSnow, CloudLightning, Wind, Droplets, Thermometer, Gauge, Timer, Stopwatch, Hourglass, Clock3, Clock4, Clock5, Clock6, Clock7, Clock8, Clock9, Clock10, Clock11, Clock12, Calendar as CalendarIcon, CalendarDays, CalendarCheck, CalendarX, CalendarPlus, CalendarMinus, CalendarRange, CalendarSearch, CalendarHeart, CalendarStar, CalendarClock, CalendarUser, CalendarEdit, CalendarTrash, CalendarSettings, CalendarImport, CalendarExport, CalendarShare, CalendarLock, CalendarUnlock, CalendarKey, CalendarShield, CalendarAlert, CalendarBell, CalendarZap, CalendarSparkles, CalendarGift, CalendarAward, CalendarTrophy, CalendarMedal, CalendarCrown, CalendarGem, CalendarDiamond, CalendarPearl, CalendarRuby, CalendarSapphire, CalendarEmerald, CalendarTopaz, CalendarAmethyst, CalendarQuartz, CalendarCrystal, CalendarJewel, CalendarTreasure, CalendarGold, CalendarSilver, CalendarBronze, CalendarPlatinum, CalendarTitanium, CalendarSteel, CalendarIron, CalendarCopper, CalendarAluminum, CalendarZinc, CalendarTin, CalendarLead, CalendarMercury, CalendarUranium, CalendarPlutonium, CalendarRadium, CalendarThorium, CalendarActinium, CalendarProtactinium, CalendarNeptunium, CalendarAmericium, CalendarCurium, CalendarBerkelium, CalendarCalifornium, CalendarEinsteinium, CalendarFermium, CalendarMendelevium, CalendarNobelium, CalendarLawrencium, CalendarRutherfordium, CalendarDubnium, CalendarSeaborgium, CalendarBohrium, CalendarHassium, CalendarMeitnerium, CalendarDarmstadtium, CalendarRoentgenium, CalendarCopernicium, CalendarNihonium, CalendarFlerovium, CalendarMoscovium, CalendarLivermorium, CalendarTennessine, CalendarOganesson, Package, Receipt, ClipboardList, Workflow } from 'lucide-react';
import { Link } from 'react-router-dom';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';
import ResponsiveGrid from '../components/ResponsiveGrid';

const ZionAIBlockchainAuditorPage: React.FC = () => {
  const features = [
    {
      icon: <Shield className="w-8 h-8 text-cyan-400" />,
      title: "Smart Contract Security Analysis",
      description: "AI-powered analysis of smart contracts to identify vulnerabilities, gas optimization opportunities, and security risks before deployment.",
      benefits: [
        "Automated vulnerability detection",
        "Gas optimization recommendations",
        "Security best practices compliance",
        "Real-time risk assessment"
      ]
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-green-400" />,
      title: "Blockchain Transaction Monitoring",
      description: "Continuous monitoring of blockchain transactions with AI-driven anomaly detection and fraud prevention capabilities.",
      benefits: [
        "Real-time transaction analysis",
        "Anomaly detection algorithms",
        "Fraud prevention alerts",
        "Compliance reporting"
      ]
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-blue-400" />,
      title: "DeFi Protocol Auditing",
      description: "Comprehensive auditing of decentralized finance protocols with focus on economic security and tokenomics analysis.",
      benefits: [
        "Economic model validation",
        "Tokenomics analysis",
        "Liquidity risk assessment",
        "Yield farming optimization"
      ]
    },
    {
      icon: <Lock className="w-8 h-8 text-purple-400" />,
      title: "Multi-Chain Security Assessment",
      description: "Cross-chain security analysis covering Ethereum, BSC, Polygon, Solana, and other major blockchain networks.",
      benefits: [
        "Multi-chain compatibility",
        "Cross-chain risk analysis",
        "Network-specific optimizations",
        "Unified security dashboard"
      ]
    },
    {
      icon: <Eye className="w-8 h-8 text-yellow-400" />,
      title: "Real-Time Threat Detection",
      description: "Advanced threat detection system that monitors blockchain networks for suspicious activities and potential attacks.",
      benefits: [
        "24/7 threat monitoring",
        "Attack pattern recognition",
        "Early warning system",
        "Automated response protocols"
      ]
    },
    {
      icon: <Zap className="w-8 h-8 text-pink-400" />,
      title: "Automated Compliance Reporting",
      description: "Generate comprehensive compliance reports for regulatory requirements across different jurisdictions.",
      benefits: [
        "Regulatory compliance automation",
        "Multi-jurisdiction support",
        "Audit trail generation",
        "Legal requirement tracking"
      ]
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$299",
      period: "per month",
      description: "Perfect for small projects and individual developers",
      features: [
        "Up to 10 smart contract audits per month",
        "Basic vulnerability scanning",
        "Email support",
        "Standard reporting",
        "Ethereum network support"
      ],
      popular: false,
      cta: "Start Free Trial"
    },
    {
      name: "Professional",
      price: "$799",
      period: "per month",
      description: "Ideal for growing DeFi projects and development teams",
      features: [
        "Up to 50 smart contract audits per month",
        "Advanced AI analysis",
        "Multi-chain support",
        "Priority support",
        "Custom compliance reports",
        "API access"
      ],
      popular: true,
      cta: "Start Free Trial"
    },
    {
      name: "Enterprise",
      price: "$1,999",
      period: "per month",
      description: "Comprehensive solution for large-scale blockchain projects",
      features: [
        "Unlimited smart contract audits",
        "Custom AI model training",
        "Dedicated security team",
        "24/7 phone support",
        "White-label reporting",
        "Custom integrations",
        "SLA guarantees"
      ],
      popular: false,
      cta: "Contact Sales"
    }
  ];

  const useCases = [
    {
      title: "DeFi Protocol Launch",
      description: "Comprehensive security audit before launching a new DeFi protocol",
      icon: <TrendingUp className="w-6 h-6" />,
      benefits: ["Risk mitigation", "Investor confidence", "Regulatory compliance"]
    },
    {
      title: "NFT Marketplace Security",
      description: "Security assessment for NFT marketplaces and smart contracts",
      icon: <Shield className="w-6 h-6" />,
      benefits: ["Asset protection", "User trust", "Platform security"]
    },
    {
      title: "Cross-Chain Bridge Auditing",
      description: "Security analysis for cross-chain bridge implementations",
      icon: <Globe className="w-6 h-6" />,
      benefits: ["Multi-chain security", "Bridge reliability", "Asset safety"]
    },
    {
      title: "Token Launch Security",
      description: "Complete security audit for new token launches and ICOs",
      icon: <DollarSign className="w-6 h-6" />,
      benefits: ["Investor protection", "Regulatory compliance", "Market confidence"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Zion AI Blockchain Auditor - Advanced Smart Contract Security & DeFi Auditing | Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered blockchain auditing platform for smart contract security, DeFi protocol analysis, and multi-chain threat detection. Secure your blockchain projects with advanced AI technology." />
        <meta name="keywords" content="blockchain auditor, smart contract security, DeFi auditing, blockchain security, AI blockchain analysis, cryptocurrency security, smart contract audit, DeFi protocol audit" />
        <meta property="og:title" content="Zion AI Blockchain Auditor - Advanced Smart Contract Security & DeFi Auditing" />
        <meta property="og:description" content="Revolutionary AI-powered blockchain auditing platform for smart contract security, DeFi protocol analysis, and multi-chain threat detection." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/zion-ai-blockchain-auditor" />
        <link rel="canonical" href="https://ziontechgroup.com/zion-ai-blockchain-auditor" />
      </Helmet>

      <EnhancedSEO
        title="Zion AI Blockchain Auditor - Advanced Smart Contract Security & DeFi Auditing"
        description="Revolutionary AI-powered blockchain auditing platform for smart contract security, DeFi protocol analysis, and multi-chain threat detection. Secure your blockchain projects with advanced AI technology."
        keywords="blockchain auditor, smart contract security, DeFi auditing, blockchain security, AI blockchain analysis, cryptocurrency security, smart contract audit, DeFi protocol audit"
        url="https://ziontechgroup.com/zion-ai-blockchain-auditor"
      />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 animate-pulse"></div>
        <ResponsiveContainer>
          <div className="text-center relative z-10">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 text-sm font-medium mb-6">
              <Brain className="w-4 h-4 mr-2" />
              AI-Powered Blockchain Security
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Zion AI
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"> Blockchain Auditor</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Revolutionary AI-powered platform for comprehensive blockchain security auditing, smart contract analysis, and DeFi protocol assessment. Secure your blockchain projects with cutting-edge artificial intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <FuturisticButton
                href="#demo"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                <Zap className="w-5 h-5 mr-2" />
                Start Free Trial
              </FuturisticButton>
              <FuturisticButton
                href="#pricing"
                variant="outline"
                className="border-2 border-cyan-400 text-cyan-300 hover:bg-cyan-400 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
              >
                <DollarSign className="w-5 h-5 mr-2" />
                View Pricing
              </FuturisticButton>
            </div>
          </div>
        </ResponsiveContainer>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Advanced AI-Powered
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"> Security Features</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive blockchain security solutions powered by cutting-edge artificial intelligence and machine learning algorithms.
            </p>
          </div>
          <ResponsiveGrid className="gap-8">
            {features.map((feature, index) => (
              <FuturisticCard key={index} className="p-8 hover:scale-105 transition-all duration-300">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{feature.description}</p>
                  <ul className="space-y-2 text-left">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-cyan-300">
                        <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </FuturisticCard>
            ))}
          </ResponsiveGrid>
        </ResponsiveContainer>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Perfect For
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"> Every Use Case</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From DeFi protocols to NFT marketplaces, our AI blockchain auditor adapts to your specific security needs.
            </p>
          </div>
          <ResponsiveGrid className="gap-8">
            {useCases.map((useCase, index) => (
              <FuturisticCard key={index} className="p-8 hover:scale-105 transition-all duration-300">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-4">
                    {useCase.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{useCase.title}</h3>
                  <p className="text-gray-300 mb-4">{useCase.description}</p>
                  <ul className="space-y-1">
                    {useCase.benefits.map((benefit, idx) => (
                      <li key={idx} className="text-cyan-300 text-sm">
                        • {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </FuturisticCard>
            ))}
          </ResponsiveGrid>
        </ResponsiveContainer>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Transparent
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"> Pricing</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect plan for your blockchain security needs. All plans include our core AI auditing features.
            </p>
          </div>
          <ResponsiveGrid className="gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <FuturisticCard key={index} className={`p-8 relative ${plan.popular ? 'ring-2 ring-cyan-400 scale-105' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-6">{plan.description}</p>
                  <div className="mb-8">
                    <span className="text-5xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300 ml-2">{plan.period}</span>
                  </div>
                  <ul className="space-y-4 mb-8 text-left">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 mr-3 text-green-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <FuturisticButton
                    href="#contact"
                    className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white'
                        : 'border-2 border-cyan-400 text-cyan-300 hover:bg-cyan-400 hover:text-white'
                    }`}
                  >
                    {plan.cta}
                  </FuturisticButton>
                </div>
              </FuturisticCard>
            ))}
          </ResponsiveGrid>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
        <ResponsiveContainer>
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Secure Your
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"> Blockchain Project?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join thousands of developers and projects who trust Zion AI Blockchain Auditor for their security needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <FuturisticButton
                href="#demo"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                <Zap className="w-5 h-5 mr-2" />
                Start Free Trial
              </FuturisticButton>
              <FuturisticButton
                href="/contact"
                variant="outline"
                className="border-2 border-cyan-400 text-cyan-300 hover:bg-cyan-400 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Contact Sales
              </FuturisticButton>
            </div>
            <div className="mt-8 text-sm text-gray-400">
              <p>✓ 14-day free trial • ✓ No credit card required • ✓ Cancel anytime</p>
            </div>
          </div>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default ZionAIBlockchainAuditorPage;