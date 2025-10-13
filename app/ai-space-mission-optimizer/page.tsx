import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Rocket, 
  Globe, 
  Zap, 
  Shield, 
  Star, 
  CheckCircle, 
  ArrowRight, 
  Users, 
  Settings, 
  Clock,
  Award,
  Sparkles,
  Brain,
  Activity,
  Target,
  Satellite
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

const AISpaceMissionOptimizer = () => {
  const features = [
    {
      title: "99.9% Trajectory Accuracy",
      description: "Precision orbital mechanics with quantum-level accuracy for mission success",
      icon: <Rocket className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Real-time Mission Control",
      description: "Live monitoring and optimization of space missions with instant adjustments",
      icon: <Globe className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Fuel Optimization",
      description: "Advanced algorithms reduce fuel consumption by up to 40% through optimal routing",
      icon: <Zap className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Risk Assessment",
      description: "Comprehensive space weather and collision avoidance with predictive modeling",
      icon: <Shield className="w-6 h-6" />,
      color: "from-orange-500 to-red-500"
    }
  ];

  const pricingPlans = [
    {
      name: "Explorer",
      price: "$499",
      period: "per month",
      description: "Perfect for educational institutions and small space programs",
      features: [
        "Up to 5 mission simulations",
        "Basic trajectory optimization",
        "Standard fuel calculations",
        "Educational resources",
        "Email support",
        "1-year mission planning",
        "Basic risk assessment"
      ],
      popular: false,
      cta: "Start Free Trial"
    },
    {
      name: "Professional",
      price: "$1,999",
      period: "per month",
      description: "Ideal for commercial space companies and research institutions",
      features: [
        "Up to 50 mission simulations",
        "Advanced trajectory optimization",
        "Real-time fuel optimization",
        "Priority support",
        "API access",
        "5-year mission planning",
        "Advanced risk assessment",
        "Space weather monitoring",
        "Custom algorithms"
      ],
      popular: true,
      cta: "Start Free Trial"
    },
    {
      name: "Enterprise",
      price: "$9,999",
      period: "per month",
      description: "For space agencies, defense contractors, and large commercial operators",
      features: [
        "Unlimited mission simulations",
        "Quantum trajectory optimization",
        "Real-time mission control",
        "24/7 dedicated support",
        "Full API access",
        "Unlimited mission planning",
        "Advanced risk modeling",
        "Space weather alerts",
        "Custom mission algorithms",
        "White-label solution",
        "SLA guarantee",
        "On-site training"
      ],
      popular: false,
      cta: "Contact Sales"
    }
  ];

  const capabilities = [
    {
      title: "Mission Planning",
      description: "Comprehensive mission design from launch to destination with optimal trajectories",
      icon: <Target className="w-8 h-8" />,
      details: [
        "Launch window optimization",
        "Orbital transfer planning",
        "Landing site selection",
        "Mission timeline creation",
        "Resource allocation"
      ]
    },
    {
      title: "Trajectory Optimization",
      description: "Advanced orbital mechanics for fuel-efficient and time-optimal paths",
      icon: <Rocket className="w-8 h-8" />,
      details: [
        "Hohmann transfer optimization",
        "Multi-body gravity assists",
        "Low-thrust trajectories",
        "Aerobraking calculations",
        "Precision landing guidance"
      ]
    },
    {
      title: "Risk Management",
      description: "Comprehensive risk assessment and mitigation for space missions",
      icon: <Shield className="w-8 h-8" />,
      details: [
        "Space weather monitoring",
        "Collision avoidance",
        "Radiation exposure analysis",
        "Equipment failure prediction",
        "Emergency abort planning"
      ]
    },
    {
      title: "Real-time Control",
      description: "Live mission monitoring and adaptive control systems",
      icon: <Activity className="w-8 h-8" />,
      details: [
        "Live telemetry analysis",
        "Adaptive trajectory correction",
        "Emergency response protocols",
        "Mission status monitoring",
        "Automated decision support"
      ]
    }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Mitchell",
      company: "NASA Jet Propulsion Laboratory",
      role: "Mission Design Engineer",
      content: "The AI Space Mission Optimizer has revolutionized our mission planning process. We've reduced fuel requirements by 35% while improving trajectory accuracy to unprecedented levels.",
      rating: 5,
      avatar: "SM"
    },
    {
      name: "Captain James Chen",
      company: "SpaceX",
      role: "Mission Operations Director",
      content: "This platform has become essential for our Mars missions. The real-time optimization capabilities have saved us millions in fuel costs and improved mission success rates.",
      rating: 5,
      avatar: "JC"
    },
    {
      name: "Dr. Elena Rodriguez",
      company: "European Space Agency",
      role: "Mission Analysis Lead",
      content: "The risk assessment capabilities are outstanding. We can now predict and mitigate potential mission failures before they occur, ensuring higher success rates.",
      rating: 5,
      avatar: "ER"
    }
  ];

  const missionTypes = [
    {
      name: "Earth Orbit",
      description: "LEO, MEO, GEO, and polar orbit missions",
      icon: <Globe className="w-8 h-8" />,
      complexity: "Medium",
      fuelSavings: "25%"
    },
    {
      name: "Lunar Missions",
      description: "Moon landing, orbit, and return missions",
      icon: <Satellite className="w-8 h-8" />,
      complexity: "High",
      fuelSavings: "40%"
    },
    {
      name: "Mars Missions",
      description: "Mars orbit, landing, and sample return",
      icon: <Rocket className="w-8 h-8" />,
      complexity: "Very High",
      fuelSavings: "45%"
    },
    {
      name: "Deep Space",
      description: "Asteroid, comet, and outer planet missions",
      icon: <Star className="w-8 h-8" />,
      complexity: "Extreme",
      fuelSavings: "50%"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <EnhancedSEO
        title="AI Space Mission Optimizer - 99.9% Trajectory Accuracy | Zion Tech Group"
        description="Revolutionary AI-powered space mission optimization with 99.9% trajectory accuracy. Real-time mission control, fuel optimization, and risk assessment for space agencies and commercial operators."
        keywords="space mission optimization, trajectory planning, orbital mechanics, space technology, mission control, fuel optimization, space weather, NASA, SpaceX"
        canonical="https://ziontechgroup.com/ai-space-mission-optimizer"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <ResponsiveContainer className="text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">99.9% Trajectory Accuracy</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              AI Space Mission Optimizer
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Revolutionary AI-powered space mission optimization with unprecedented 99.9% trajectory accuracy. 
            Transform space exploration with advanced orbital mechanics and real-time mission control.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <FuturisticButton
              href="#pricing"
              variant="primary"
              size="lg"
              icon={<Rocket className="w-5 h-5" />}
            >
              Start Free Trial
            </FuturisticButton>
            <FuturisticButton
              href="#demo"
              variant="outline"
              size="lg"
              icon={<Globe className="w-5 h-5" />}
            >
              View Mission Demo
            </FuturisticButton>
          </div>
        </ResponsiveContainer>
      </section>

      {/* Mission Types Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Mission Types Supported
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From Earth orbit to deep space exploration, our AI optimizes every type of space mission
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {missionTypes.map((mission, index) => (
              <FuturisticCard key={index} className="text-center group hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {mission.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {mission.name}
                </h3>
                <p className="text-gray-300 mb-4 text-sm">
                  {mission.description}
                </p>
                <div className="space-y-2">
                  <div className="text-cyan-400 text-sm">
                    <span className="font-medium">Complexity:</span> {mission.complexity}
                  </div>
                  <div className="text-green-400 text-sm">
                    <span className="font-medium">Fuel Savings:</span> {mission.fuelSavings}
                  </div>
                </div>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Advanced Space Technology
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Cutting-edge AI and quantum computing deliver unprecedented precision in space mission optimization.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <FuturisticCard
                key={index}
                className="text-center group hover:scale-105 transition-all duration-300"
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Mission Intelligence
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From initial planning to real-time control, our AI covers every aspect of space mission optimization.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((capability, index) => (
              <FuturisticCard key={index} className="group hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {capability.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-cyan-400 transition-colors text-center">
                  {capability.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed text-center">
                  {capability.description}
                </p>
                <div className="space-y-2">
                  {capability.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="text-sm text-cyan-400 flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                      {detail}
                    </div>
                  ))}
                </div>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Choose Your Mission Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Access space mission optimization at any scale. All plans include real-time data and mission support.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border ${
                  plan.popular 
                    ? 'border-cyan-500/50 shadow-2xl shadow-cyan-500/10' 
                    : 'border-white/20'
                } hover:bg-white/20 transition-all duration-300 hover:scale-105`}
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
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300 ml-2">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <FuturisticButton
                  href={plan.name === 'Enterprise' ? '/contact' : '#signup'}
                  variant={plan.popular ? 'primary' : 'outline'}
                  size="lg"
                  className="w-full"
                >
                  {plan.cta}
                </FuturisticButton>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by Space Leaders
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how AI Space Mission Optimizer is transforming space exploration
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <FuturisticCard key={index} className="group hover:scale-105 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}</div>
                    <div className="text-sm text-cyan-400">{testimonial.company}</div>
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 italic leading-relaxed">"{testimonial.content}"</p>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Optimize Your Space Missions?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Join NASA, SpaceX, and leading space agencies using AI Space Mission Optimizer 
              to revolutionize space exploration. Start your free trial today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <FuturisticButton
                href="#signup"
                variant="primary"
                size="lg"
                icon={<Sparkles className="w-5 h-5" />}
              >
                Start Free Trial
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
          </div>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default AISpaceMissionOptimizer;