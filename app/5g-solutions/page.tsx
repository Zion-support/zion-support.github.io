import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Globe, 
  Zap, 
  Clock, 
  CheckCircle, 
  ArrowRight,
  BarChart3,
  Award,
  Star,
  Activity,
  Settings,
  TrendingUp,
  DollarSign,
  Target,
  Shield,
  Smartphone,
  Monitor,
  FileText,
  Calendar,
  MessageSquare,
  UserCheck,
  Workflow,
  Bot,
  Database,
  Network,
  Server,
  Wifi,
  Radio
} from 'lucide-react';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

const FiveGSolutions = () => {
  const features = [
    {
      title: "Ultra-Fast Connectivity",
      description: "Deploy 5G networks with speeds up to 10 Gbps and ultra-low latency for mission-critical applications",
      icon: <Zap className="w-6 h-6" />,
      stats: "10 Gbps speeds"
    },
    {
      title: "Edge Computing Integration",
      description: "Seamlessly integrate edge computing with 5G for real-time data processing and analytics",
      icon: <Server className="w-6 h-6" />,
      stats: "< 1ms latency"
    },
    {
      title: "IoT Network Management",
      description: "Connect and manage millions of IoT devices with 5G's massive device capacity",
      icon: <Network className="w-6 h-6" />,
      stats: "1M+ devices/km²"
    },
    {
      title: "Network Slicing",
      description: "Create dedicated virtual networks for different applications and services",
      icon: <Settings className="w-6 h-6" />,
      stats: "Custom networks"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$499",
      period: "/month",
      description: "Perfect for small businesses exploring 5G capabilities",
      features: [
        "Basic 5G setup",
        "Up to 100 devices",
        "Standard support",
        "Basic monitoring",
        "1 network slice",
        "Email support",
        "Basic analytics",
        "30-day data retention"
      ],
      popular: false,
      cta: "Start Free Trial"
    },
    {
      name: "Professional",
      price: "$1,299",
      period: "/month",
      description: "Advanced 5G solutions for growing businesses",
      features: [
        "Advanced 5G deployment",
        "Up to 1,000 devices",
        "Priority support",
        "Real-time monitoring",
        "5 network slices",
        "24/7 support",
        "Advanced analytics",
        "90-day data retention",
        "Edge computing",
        "Custom integrations"
      ],
      popular: true,
      cta: "Start Free Trial"
    },
    {
      name: "Enterprise",
      price: "$3,999",
      period: "/month",
      description: "Complete 5G infrastructure for large organizations",
      features: [
        "Full 5G infrastructure",
        "Unlimited devices",
        "Dedicated support",
        "AI-powered monitoring",
        "Unlimited network slices",
        "24/7 phone support",
        "Custom analytics",
        "Unlimited data retention",
        "Private 5G networks",
        "White-label solution",
        "Dedicated account manager",
        "Custom 5G solutions"
      ],
      popular: false,
      cta: "Contact Sales"
    }
  ];

  const capabilities = [
    {
      title: "5G Network Design",
      description: "Comprehensive 5G network architecture design and planning for optimal coverage and performance",
      icon: <Globe className="w-8 h-8" />,
      benefits: ["Optimal coverage", "Performance optimization", "Cost efficiency", "Future-proof design"]
    },
    {
      title: "Edge Computing Solutions",
      description: "Deploy edge computing infrastructure to process data closer to the source with 5G connectivity",
      icon: <Server className="w-8 h-8" />,
      benefits: ["Ultra-low latency", "Real-time processing", "Bandwidth optimization", "Improved reliability"]
    },
    {
      title: "IoT Integration",
      description: "Connect and manage massive IoT deployments with 5G's enhanced capacity and reliability",
      icon: <Network className="w-8 h-8" />,
      benefits: ["Massive device support", "Reliable connectivity", "Power efficiency", "Scalable management"]
    },
    {
      title: "Network Slicing",
      description: "Create dedicated virtual networks for different applications with guaranteed performance",
      icon: <Settings className="w-8 h-8" />,
      benefits: ["Service isolation", "Guaranteed QoS", "Custom configurations", "Resource optimization"]
    },
    {
      title: "Private 5G Networks",
      description: "Deploy private 5G networks for secure, dedicated connectivity in enterprise environments",
      icon: <Shield className="w-8 h-8" />,
      benefits: ["Enhanced security", "Dedicated resources", "Custom policies", "Full control"]
    },
    {
      title: "5G Security",
      description: "Comprehensive security solutions for 5G networks including threat detection and prevention",
      icon: <Shield className="w-8 h-8" />,
      benefits: ["Advanced threat protection", "Network security", "Data encryption", "Compliance support"]
    }
  ];

  const useCases = [
    {
      title: "Smart Manufacturing",
      description: "Enable real-time monitoring and control of manufacturing processes with 5G and edge computing",
      icon: <Settings className="w-6 h-6" />,
      results: "50% efficiency improvement"
    },
    {
      title: "Autonomous Vehicles",
      description: "Support autonomous vehicle operations with ultra-low latency 5G connectivity",
      icon: <Globe className="w-6 h-6" />,
      results: "99.9% reliability"
    },
    {
      title: "Smart Cities",
      description: "Power smart city infrastructure with 5G connectivity for traffic, utilities, and public safety",
      icon: <Target className="w-6 h-6" />,
      results: "30% cost reduction"
    },
    {
      title: "Healthcare IoT",
      description: "Enable remote patient monitoring and telemedicine with reliable 5G connectivity",
      icon: <Activity className="w-6 h-6" />,
      results: "24/7 monitoring"
    }
  ];

  const testimonials = [
    {
      name: "Robert Kim",
      company: "Manufacturing Corp",
      role: "CTO",
      content: "Zion's 5G solutions have revolutionized our manufacturing operations. We've achieved 50% efficiency improvements with real-time monitoring.",
      rating: 5,
      avatar: "RK"
    },
    {
      name: "Sarah Williams",
      company: "Smart City Initiative",
      role: "Technology Director",
      content: "The 5G infrastructure deployment was flawless. Our smart city projects are now running with unprecedented reliability and performance.",
      rating: 5,
      avatar: "SW"
    },
    {
      name: "Michael Chen",
      company: "Healthcare Systems",
      role: "IT Director",
      content: "5G has enabled us to implement remote patient monitoring at scale. The reliability and speed are exactly what we needed.",
      rating: 5,
      avatar: "MC"
    }
  ];

  const stats = [
    { number: "100+", label: "5G Deployments", icon: <Globe className="w-6 h-6" /> },
    { number: "10 Gbps", label: "Peak Speeds", icon: <Zap className="w-6 h-6" /> },
    { number: "< 1ms", label: "Ultra-Low Latency", icon: <Clock className="w-6 h-6" /> },
    { number: "1M+", label: "Devices per km²", icon: <Network className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900">
      <Helmet>
        <title>5G Solutions - Next-Generation Connectivity Services | Zion Tech Group</title>
        <meta name="description" content="Transform your business with Zion's 5G solutions. Ultra-fast connectivity, edge computing, IoT integration, and network slicing. Deploy next-generation 5G infrastructure." />
        <meta name="keywords" content="5G solutions, 5G deployment, edge computing, IoT connectivity, network slicing, private 5G, 5G infrastructure, ultra-low latency" />
        <link rel="canonical" href="https://ziontechgroup.com/5g-solutions" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <ResponsiveContainer className="text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 mb-6">
            <Globe className="w-4 h-4 text-orange-400 mr-2" />
            <span className="text-orange-400 text-sm font-medium">Next-Generation 5G Connectivity</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-400 to-pink-400">
              5G Solutions
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Transform your business with next-generation 5G connectivity. Ultra-fast speeds, ultra-low latency, 
            and massive IoT capacity for the future of digital transformation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <FuturisticButton
              href="#pricing"
              variant="primary"
              size="lg"
              icon={<Globe className="w-5 h-5" />}
            >
              Get Started
            </FuturisticButton>
            <FuturisticButton
              href="#demo"
              variant="outline"
              size="lg"
              icon={<Monitor className="w-5 h-5" />}
            >
              View Demo
            </FuturisticButton>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-orange-500/20 to-red-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
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
              Advanced 5G Features
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Our 5G solutions provide cutting-edge connectivity and performance for modern applications
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FuturisticCard
                key={index}
                className="group hover:scale-105 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 text-center group-hover:text-orange-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-center mb-4 leading-relaxed">
                  {feature.description}
                </p>
                <div className="text-center">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-orange-500/20 to-red-500/20 text-orange-400">
                    {feature.stats}
                  </span>
                </div>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-orange-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive 5G Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Complete 5G infrastructure solutions for every aspect of your digital transformation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <FuturisticCard
                key={index}
                className="group hover:scale-105 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  {capability.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 text-center group-hover:text-orange-400 transition-colors">
                  {capability.title}
                </h3>
                <p className="text-gray-300 text-center mb-6 leading-relaxed">
                  {capability.description}
                </p>
                <div className="space-y-2">
                  {capability.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </div>
                  ))}
                </div>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Real-World 5G Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how businesses across industries are leveraging 5G for transformative results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <FuturisticCard
                key={index}
                className="group hover:scale-105 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                  {useCase.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3 text-center group-hover:text-orange-400 transition-colors">
                  {useCase.title}
                </h3>
                <p className="text-gray-300 text-center mb-4 leading-relaxed text-sm">
                  {useCase.description}
                </p>
                <div className="text-center">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-orange-500/20 to-red-500/20 text-orange-400">
                    {useCase.results}
                  </span>
                </div>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-orange-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Flexible 5G Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the 5G solution that matches your connectivity needs and business scale
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <FuturisticCard
                key={index}
                className={`relative group hover:scale-105 transition-all duration-300 ${
                  plan.popular ? 'ring-2 ring-orange-500 scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <FuturisticButton
                  href={plan.cta === "Contact Sales" ? "/contact" : "#signup"}
                  variant={plan.popular ? "primary" : "outline"}
                  size="lg"
                  className="w-full"
                >
                  {plan.cta}
                </FuturisticButton>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how organizations are using our 5G solutions to transform their operations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <FuturisticCard
                key={index}
                className="group hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-900/30 to-red-900/30">
        <ResponsiveContainer>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Deploy 5G Today
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Join the 5G revolution and transform your business with next-generation connectivity. 
              Start your 5G deployment journey today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <FuturisticButton
                href="#signup"
                variant="primary"
                size="lg"
                icon={<Globe className="w-5 h-5" />}
              >
                Get Started
              </FuturisticButton>
              <FuturisticButton
                href="/contact"
                variant="outline"
                size="lg"
                icon={<ArrowRight className="w-5 h-5" />}
              >
                Contact Sales
              </FuturisticButton>
            </div>
            
            <div className="mt-8 text-sm text-gray-400">
              <p>Free consultation • No setup fees • 30-day money-back guarantee</p>
            </div>
          </div>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default FiveGSolutions;
