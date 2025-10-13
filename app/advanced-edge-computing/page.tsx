import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Zap, 
  Shield, 
  BarChart3, 
  Cloud, 
  Sparkles, 
  ArrowRight, 
  Star, 
  Users, 
  Award, 
  CheckCircle,
  Cpu,
  Database,
  Lock,
  Target,
  TrendingUp,
  Globe,
  Settings,
  Lightbulb,
  Rocket,
  Mail,
  Phone,
  MapPin,
  Activity,
  Wifi,
  Server,
  HardDrive
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticBackground from '../components/FuturisticBackground';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

const AdvancedEdgeComputingPage = () => {
  const features = [
    {
      title: "Ultra-Low Latency Processing",
      description: "Process data at the edge with sub-millisecond latency for real-time applications and critical operations",
      icon: <Zap className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      benefits: ["<1ms latency", "Real-time processing", "Local data handling"]
    },
    {
      title: "AI-Powered Edge Intelligence",
      description: "Deploy machine learning models directly on edge devices for intelligent decision-making without cloud dependency",
      icon: <Brain className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      benefits: ["Local AI inference", "Offline capabilities", "Privacy protection"]
    },
    {
      title: "Distributed Edge Network",
      description: "Build resilient, distributed computing networks that automatically scale and self-heal across multiple edge locations",
      icon: <Globe className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      benefits: ["Auto-scaling", "Self-healing", "Global distribution"]
    },
    {
      title: "Edge Security & Compliance",
      description: "Comprehensive security framework with zero-trust architecture and compliance with industry standards",
      icon: <Shield className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      benefits: ["Zero-trust security", "Data encryption", "Compliance ready"]
    }
  ];

  const useCases = [
    {
      industry: "Autonomous Vehicles",
      description: "Real-time decision making for autonomous vehicles with edge AI processing for safety-critical applications",
      icon: <Car className="w-6 h-6" />,
      results: "99.9% uptime, <10ms response time"
    },
    {
      industry: "Smart Manufacturing",
      description: "Industrial IoT with edge computing for predictive maintenance, quality control, and process optimization",
      icon: <Cog className="w-6 h-6" />,
      results: "40% reduction in downtime, 60% cost savings"
    },
    {
      industry: "Healthcare & Telemedicine",
      description: "Real-time patient monitoring, medical imaging analysis, and emergency response systems at the edge",
      icon: <Heart className="w-6 h-6" />,
      results: "50% faster diagnosis, 90% accuracy improvement"
    },
    {
      industry: "Retail & Smart Cities",
      description: "Smart retail analytics, traffic management, and public safety systems powered by edge computing",
      icon: <Building className="w-6 h-6" />,
      results: "300% efficiency gain, 80% cost reduction"
    }
  ];

  const pricing = [
    {
      plan: "Edge Starter",
      price: "$1,499",
      period: "per month",
      description: "Perfect for small businesses starting with edge computing",
      features: [
        "Up to 5 edge nodes",
        "Basic AI models",
        "Standard support",
        "Cloud integration",
        "Basic monitoring"
      ],
      popular: false
    },
    {
      plan: "Edge Professional",
      price: "$5,999",
      period: "per month",
      description: "Ideal for growing companies with complex edge requirements",
      features: [
        "Up to 25 edge nodes",
        "Advanced AI models",
        "Priority support",
        "Custom integrations",
        "Advanced monitoring",
        "SLA guarantee"
      ],
      popular: true
    },
    {
      plan: "Edge Enterprise",
      price: "$19,999",
      period: "per month",
      description: "For large enterprises requiring maximum edge computing power",
      features: [
        "Unlimited edge nodes",
        "Custom AI development",
        "24/7 dedicated support",
        "On-premise deployment",
        "Full customization",
        "Training included",
        "White-label solutions"
      ],
      popular: false
    }
  ];

  const stats = [
    { number: "<1ms", label: "Latency", icon: <Zap className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime SLA", icon: <Award className="w-6 h-6" /> },
    { number: "100+", label: "Edge Locations", icon: <Globe className="w-6 h-6" /> },
    { number: "24/7", label: "Support Available", icon: <Shield className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <EnhancedSEO
        title="Advanced Edge Computing Solutions | Zion Tech Group - Ultra-Low Latency Processing"
        description="Transform your business with advanced edge computing. Ultra-low latency processing, AI-powered edge intelligence, and distributed networks. Reduce latency by 99% today!"
        keywords="edge computing, low latency, edge AI, distributed computing, IoT, real-time processing, edge analytics, edge security, 5G edge"
        canonical="https://ziontechgroup.com/advanced-edge-computing"
      />
      <FuturisticBackground />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <ResponsiveContainer className="text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-green-400 mr-2" />
            <span className="text-green-400 text-sm font-medium">Ultra-Low Latency Edge Computing</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-400 to-purple-400">
              Advanced Edge Computing
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Process data at the edge with sub-millisecond latency. Deploy AI models locally, 
            reduce cloud dependency, and build resilient distributed networks that scale automatically.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Start Edge Journey
            </FuturisticButton>
            <FuturisticButton
              href="#pricing"
              variant="outline"
              size="lg"
              icon={<Rocket className="w-5 h-5" />}
            >
              View Pricing
            </FuturisticButton>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
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
              Edge Computing Features
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Harness the power of edge computing to process data closer to the source, 
              reduce latency, and build intelligent distributed systems.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <FuturisticCard
                key={index}
                className="group hover:scale-105 transition-all duration-300"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {feature.description}
                </p>
                <div className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-sm text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-green-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how edge computing is transforming industries across the globe
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center text-white mr-4">
                    {useCase.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white">{useCase.industry}</h3>
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {useCase.description}
                </p>
                <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-3">
                  <p className="text-green-400 text-sm font-medium">{useCase.results}</p>
                </div>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Edge Computing Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect edge computing solution for your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                  plan.popular 
                    ? 'border-green-500/50 ring-2 ring-green-500/20' 
                    : 'border-white/20 hover:border-green-500/30'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.plan}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300 ml-2">{plan.period}</span>
                  </div>
                  <p className="text-gray-300 mt-2">{plan.description}</p>
                </div>
                
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <FuturisticButton
                  href="/contact"
                  variant={plan.popular ? "primary" : "outline"}
                  size="lg"
                  className="w-full"
                >
                  Get Started
                </FuturisticButton>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-900/30 to-emerald-900/30">
        <ResponsiveContainer>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Deploy Edge Computing?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Join thousands of businesses already using our edge computing solutions to reduce latency, 
              improve performance, and build resilient distributed systems. Contact our experts today.
            </p>
            
            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Email</h3>
                <p className="text-green-400">kleber@ziontechgroup.com</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Phone</h3>
                <p className="text-green-400">+1 302 464 0950</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Address</h3>
                <p className="text-green-400 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <FuturisticButton
                href="/contact"
                variant="primary"
                size="lg"
                icon={<ArrowRight className="w-5 h-5" />}
              >
                Start Edge Journey
              </FuturisticButton>
              <FuturisticButton
                href="/demo"
                variant="outline"
                size="lg"
                icon={<Rocket className="w-5 h-5" />}
              >
                Schedule Demo
              </FuturisticButton>
            </div>
          </div>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default AdvancedEdgeComputingPage;