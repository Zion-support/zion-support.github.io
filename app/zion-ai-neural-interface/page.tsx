import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Zap, 
  Eye, 
  Hand, 
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
  Lock,
  Gauge,
  Mic,
  Monitor
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

const ZionAINeuralInterfacePage = () => {
  const features = [
    {
      title: "Neural Signal Processing",
      description: "Advanced brain-computer interface technology for direct neural communication",
      icon: <Brain className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Thought-to-Text",
      description: "Convert neural signals directly into text with 95% accuracy",
      icon: <Mic className="w-8 h-8" />,
      color: "from-cyan-500 to-blue-500"
    },
    {
      title: "Mind Control Interface",
      description: "Control devices and applications using only your thoughts",
      icon: <Hand className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Neural Visualization",
      description: "Real-time visualization of brain activity and neural patterns",
      icon: <Eye className="w-8 h-8" />,
      color: "from-orange-500 to-red-500"
    }
  ];

  const pricingPlans = [
    {
      name: "Neural Starter",
      price: "$199",
      period: "/month",
      description: "Perfect for researchers and early adopters",
      features: [
        "Basic neural interface",
        "Thought-to-text conversion",
        "Simple device control",
        "Basic neural visualization",
        "Email support",
        "Standard accuracy"
      ],
      popular: false
    },
    {
      name: "Neural Professional",
      price: "$599",
      period: "/month",
      description: "Ideal for developers and advanced users",
      features: [
        "Advanced neural interface",
        "High-accuracy thought-to-text",
        "Complex device control",
        "Advanced neural visualization",
        "Priority support",
        "API access",
        "Custom neural models",
        "Real-time processing"
      ],
      popular: true
    },
    {
      name: "Neural Enterprise",
      price: "$1,999",
      period: "/month",
      description: "For organizations and medical applications",
      features: [
        "Full neural interface suite",
        "Medical-grade accuracy",
        "Unlimited device control",
        "Professional neural analysis",
        "24/7 dedicated support",
        "Full API access",
        "Custom neural algorithms",
        "White-label solution",
        "SLA guarantee",
        "Dedicated neural team"
      ],
      popular: false
    }
  ];

  const capabilities = [
    {
      title: "Neural Accuracy",
      description: "Convert neural signals to text with medical-grade precision",
      accuracy: "95%",
      icon: <Target className="w-6 h-6" />
    },
    {
      title: "Response Time",
      description: "Ultra-fast neural signal processing and response",
      speed: "50ms",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "Device Compatibility",
      description: "Control any device through neural interface",
      compatibility: "99%",
      icon: <Monitor className="w-6 h-6" />
    },
    {
      title: "Neural Security",
      description: "Military-grade encryption for neural data",
      security: "100%",
      icon: <Lock className="w-6 h-6" />
    }
  ];

  const stats = [
    { number: "95%", label: "Neural Accuracy", icon: <Brain className="w-6 h-6" /> },
    { number: "50ms", label: "Response Time", icon: <Zap className="w-6 h-6" /> },
    { number: "99%", label: "Device Compatibility", icon: <Monitor className="w-6 h-6" /> },
    { number: "24/7", label: "Neural Monitoring", icon: <Globe className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="Zion AI Neural Interface - Brain-Computer Interface | Zion Tech Group"
        description="Revolutionary brain-computer interface technology for thought-to-text conversion, mind control, and neural visualization. Starting at $199/month."
        keywords="neural interface, brain-computer interface, BCI, thought-to-text, mind control, neural technology, brain interface"
        canonical="https://ziontechgroup.com/zion-ai-neural-interface"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <ResponsiveContainer className="text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-6">
            <Brain className="w-4 h-4 text-purple-400 mr-2" />
            <span className="text-purple-400 text-sm font-medium">Zion AI Neural Interface</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">
              Zion AI Neural Interface
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Revolutionary brain-computer interface technology for thought-to-text conversion, 
            mind control, and neural visualization with unprecedented accuracy.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<Brain className="w-5 h-5" />}
            >
              Start Free Trial
            </FuturisticButton>
            <FuturisticButton
              href="/demo"
              variant="outline"
              size="lg"
              icon={<Eye className="w-5 h-5" />}
            >
              View Demo
            </FuturisticButton>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
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
              Advanced Neural Interface Technology
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Harness the power of your mind with our cutting-edge brain-computer interface technology.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <FuturisticCard
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10"
              >
                <div
                  className={`w-12 h-12 md:w-16 md:h-16 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-white mb-3 text-center group-hover:text-purple-400 transition-colors">
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Unmatched Neural Performance
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our neural interface technology delivers unprecedented accuracy and speed.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((capability, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10 text-center"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  {capability.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
                  {capability.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-3">
                  {capability.description}
                </p>
                <div className="text-2xl font-bold text-purple-400">
                  {capability.accuracy || capability.speed || capability.compatibility || capability.security}
                </div>
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
              Neural Interface Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the neural interface power that matches your mind control needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                  plan.popular
                    ? 'border-purple-500/50 shadow-purple-500/20 scale-105'
                    : 'border-white/20 hover:border-purple-500/30'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-purple-400">{plan.price}</span>
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/30 to-pink-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Control with Your Mind?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join the neural interface revolution with our advanced brain-computer interface technology.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<Brain className="w-5 h-5" />}
            >
              Start Free Trial
            </FuturisticButton>
            <FuturisticButton
              href="/pricing"
              variant="outline"
              size="lg"
              icon={<Hand className="w-5 h-5" />}
            >
              View Pricing
            </FuturisticButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ZionAINeuralInterfacePage;