import React from 'react';
import { 
  Rocket, 
  Satellite, 
  Orbit, 
  Zap, 
  Target, 
  CheckCircle, 
  ArrowRight,
  Cpu,
  Globe,
  Clock,
  Users,
  Award,
  Star,
  Activity,
  PieChart,
  Navigation,
  MapPin,
  Gauge
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

const AISpaceMissionOptimizerPage = () => {
  const features = [
    {
      title: "Mission Planning AI",
      description: "AI-powered mission planning with optimal trajectory calculations and resource allocation",
      icon: <Rocket className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Real-Time Optimization",
      description: "Continuous mission optimization based on real-time data and changing conditions",
      icon: <Activity className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Satellite Management",
      description: "Comprehensive satellite constellation management and coordination",
      icon: <Satellite className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Risk Assessment",
      description: "Advanced risk analysis for space missions with collision avoidance",
      icon: <Target className="w-8 h-8" />,
      color: "from-orange-500 to-red-500"
    }
  ];

  const pricingPlans = [
    {
      name: "Mission Starter",
      price: "$499",
      period: "/month",
      description: "Perfect for small satellite missions and research projects",
      features: [
        "Basic mission planning",
        "5 satellite tracking",
        "Standard trajectory optimization",
        "Basic risk assessment",
        "Email support",
        "Mission reports"
      ],
      popular: false
    },
    {
      name: "Mission Professional",
      price: "$1,999",
      period: "/month",
      description: "Ideal for commercial satellite operators and space agencies",
      features: [
        "Advanced mission planning",
        "50 satellite tracking",
        "Real-time optimization",
        "Advanced risk modeling",
        "Priority support",
        "API access",
        "Custom algorithms",
        "Advanced analytics"
      ],
      popular: true
    },
    {
      name: "Mission Enterprise",
      price: "$9,999",
      period: "/month",
      description: "For large space organizations and government agencies",
      features: [
        "Unlimited mission planning",
        "Unlimited satellite tracking",
        "AI-powered optimization",
        "Full risk management",
        "24/7 dedicated support",
        "Full API access",
        "Custom AI models",
        "White-label solution",
        "SLA guarantee",
        "Dedicated mission control"
      ],
      popular: false
    }
  ];

  const capabilities = [
    {
      title: "Trajectory Optimization",
      description: "Calculate optimal flight paths with 99.9% fuel efficiency",
      accuracy: "99.9%",
      icon: <Navigation className="w-6 h-6" />
    },
    {
      title: "Collision Avoidance",
      description: "Real-time collision detection and avoidance maneuvers",
      accuracy: "99.8%",
      icon: <Target className="w-6 h-6" />
    },
    {
      title: "Resource Management",
      description: "Optimize fuel, power, and payload allocation",
      accuracy: "97.5%",
      icon: <Gauge className="w-6 h-6" />
    },
    {
      title: "Mission Success Rate",
      description: "Increase mission success rates with AI optimization",
      accuracy: "94.2%",
      icon: <Award className="w-6 h-6" />
    }
  ];

  const stats = [
    { number: "99.9%", label: "Trajectory Accuracy", icon: <Rocket className="w-6 h-6" /> },
    { number: "50ms", label: "Real-Time Processing", icon: <Zap className="w-6 h-6" /> },
    { number: "10,000+", label: "Satellites Tracked", icon: <Satellite className="w-6 h-6" /> },
    { number: "24/7", label: "Mission Monitoring", icon: <Globe className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <EnhancedSEO
        title="AI Space Mission Optimizer - Advanced Space AI | Zion Tech Group"
        description="Revolutionary AI-powered space mission optimization for satellite management, trajectory planning, and mission control. Starting at $499/month."
        keywords="space mission AI, satellite optimization, trajectory planning, space technology, mission control, satellite management"
        canonical="https://ziontechgroup.com/ai-space-mission-optimizer"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse"> <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"> </div>
        
        <ResponsiveContainer className="text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 mb-6">
            <Rocket className="w-4 h-4 text-blue-400 mr-2" />
            <span className="text-blue-400 text-sm font-medium">AI Space Mission Optimizer</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400">
              AI Space Mission Optimizer
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Revolutionary AI-powered space mission optimization for satellite management, 
            trajectory planning, and mission control with unprecedented accuracy.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<Rocket className="w-5 h-5" />}
            >
              Start Free Trial
            </FuturisticButton>
            <FuturisticButton
              href="/demo"
              variant="outline"
              size="lg"
              icon={<Satellite className="w-5 h-5" />}
            >
              View Demo
            </FuturisticButton>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-xs md:text-sm">{stat.label}</div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Advanced Space Mission Intelligence
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Harness the power of AI for optimal space mission planning, execution, and management.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <FuturisticCard
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10"
              >
                <div
                  className={`w-12 h-12 md:w-16 md:h-16 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-white mb-3 text-center group-hover:text-blue-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-center mb-4 leading-relaxed text-sm md:text-base">
                  {feature.description}
                </p>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-blue-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Unmatched Space Mission Performance
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI delivers unprecedented accuracy and efficiency in space mission optimization.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((capability, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10 text-center"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  {capability.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {capability.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-3">
                  {capability.description}
                </p>
                <div className="text-2xl font-bold text-blue-400">{capability.accuracy}
                </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Space Mission Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the mission optimization power that matches your space operations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                  plan.popular
                    ? 'border-blue-500/50 shadow-blue-500/20 scale-105'
                    : 'border-white/20 hover:border-blue-500/30'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-blue-400">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300 text-sm">{plan.description}</p>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900/30 to-cyan-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Optimize Your Space Missions?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join the space technology revolution with AI-powered mission optimization.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<Rocket className="w-5 h-5" />}
            >
              Start Free Trial
            </FuturisticButton>
            <FuturisticButton
              href="/pricing"
              variant="outline"
              size="lg"
              icon={<Orbit className="w-5 h-5" />}
            >
              View Pricing
            </FuturisticButton>
          </div></div>
        </div>
      </section>
    </div>
  );
};

export default AISpaceMissionOptimizerPage;