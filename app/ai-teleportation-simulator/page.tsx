import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Globe, Star, ArrowRight, Users, Award, BarChart3, Sparkles, MapPin, Navigation, Plane, Compass } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

const AITeleportationSimulatorPage = () => {
  const features = [
    {
      title: "Instant Global Travel",
      description: "Teleport to any location on Earth instantly with 99.9% accuracy using quantum entanglement",
      icon: <Globe className="w-8 h-8" />,
      color: "from-cyan-500 to-blue-500"
    },
    {
      title: "Quantum Coordinates",
      description: "Precise quantum positioning system for safe and accurate teleportation",
      icon: <MapPin className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Safety Protocols",
      description: "Advanced AI safety systems ensure 100% safe teleportation with backup protocols",
      icon: <Award className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Real-time Monitoring",
      description: "Live tracking and monitoring of teleportation events with detailed analytics",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-orange-500 to-red-500"
    }
  ];

  const destinations = [
    {
      location: "Global Cities",
      description: "Teleport to major cities worldwide with instant access",
      icon: <Navigation className="w-6 h-6" />,
      color: "text-blue-400"
    },
    {
      location: "Natural Wonders",
      description: "Visit breathtaking natural locations around the world",
      icon: <Compass className="w-6 h-6" />,
      color: "text-green-400"
    },
    {
      location: "Space Stations",
      description: "Teleport to space stations and orbital facilities",
      icon: <Plane className="w-6 h-6" />,
      color: "text-purple-400"
    },
    {
      location: "Underwater Cities",
      description: "Explore underwater habitats and marine research stations",
      icon: <Globe className="w-6 h-6" />,
      color: "text-cyan-400"
    }
  ];

  const pricingPlans = [
    {
      name: "Explorer",
      price: "$299",
      period: "month",
      description: "Perfect for personal travel and exploration",
      features: [
        "Up to 100 teleportations per month",
        "Access to 50 global destinations",
        "Basic safety protocols",
        "Mobile app access",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Business",
      price: "$799",
      period: "month",
      description: "Ideal for business travel and corporate use",
      features: [
        "Unlimited teleportations",
        "Access to all destinations",
        "Advanced safety protocols",
        "Priority booking",
        "API integration",
        "Priority support"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$2,999",
      period: "month",
      description: "For organizations requiring maximum access",
      features: [
        "Everything in Business",
        "Custom destinations",
        "Dedicated support team",
        "24/7 phone support",
        "Custom integrations",
        "Research collaboration"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Kim",
      company: "Global Research Institute",
      role: "Research Director",
      content: "The teleportation simulator has revolutionized our research capabilities. We can now conduct field studies anywhere in the world instantly.",
      rating: 5
    },
    {
      name: "Michael Chen",
      company: "International Business Corp",
      role: "CEO",
      content: "This technology has transformed our business operations. We can meet clients anywhere in the world without travel time.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      company: "Adventure Travel Agency",
      role: "Travel Director",
      content: "Our clients are amazed by the teleportation experience. It's like having a magic portal to anywhere on Earth.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="AI Teleportation Simulator - Instant Global Travel | Zion Tech Group"
        description="Revolutionary AI-powered teleportation technology for instant global travel. Quantum entanglement-based transportation with 99.9% accuracy and advanced safety protocols."
        keywords="teleportation, instant travel, quantum transportation, global travel, quantum entanglement, instant transportation, teleportation technology"
        canonical="https://ziontechgroup.com/ai-teleportation-simulator"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <ResponsiveContainer className="text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Zap className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">Revolutionary Teleportation Technology</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              AI Teleportation Simulator
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Experience instant global travel with our revolutionary AI-powered teleportation technology. 
            Teleport anywhere on Earth in seconds with quantum precision and absolute safety.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<Zap className="w-5 h-5" />}
            >
              Start Teleporting
            </FuturisticButton>
            <FuturisticButton
              href="#demo"
              variant="outline"
              size="lg"
              icon={<Globe className="w-5 h-5" />}
            >
              Watch Demo
            </FuturisticButton>
          </div>
        </ResponsiveContainer>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Revolutionary Features
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Experience the future of transportation with our quantum teleportation technology
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FuturisticCard key={index} className="group hover:scale-105 transition-all duration-300">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 text-center group-hover:text-cyan-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-center leading-relaxed">
                  {feature.description}
                </p>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Destinations Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Explore Destinations
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Teleport to amazing locations around the world and beyond
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {destinations.map((destination, index) => (
              <FuturisticCard key={index} className="group hover:scale-105 transition-all duration-300">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-slate-700 to-slate-600 flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <div className={destination.color}>
                      {destination.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {destination.location}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {destination.description}
                  </p>
                </div>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Choose Your Teleportation Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Flexible pricing for every teleportation need
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border ${
                  plan.popular 
                    ? 'border-cyan-500/50 shadow-2xl shadow-cyan-500/20' 
                    : 'border-white/20'
                } hover:bg-white/20 transition-all duration-300 hover:scale-105`}
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
                    <span className="text-gray-400 ml-2">/{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <Star className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <FuturisticButton
                  href="/contact"
                  variant={plan.popular ? "primary" : "outline"}
                  className="w-full"
                >
                  Get Started
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
              Trusted by Travelers
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what users say about our teleportation technology
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <FuturisticCard key={index} className="group hover:scale-105 transition-all duration-300">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                </div>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <ResponsiveContainer>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Start Your Teleportation Journey
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Experience instant global travel like never before. 
              Join thousands of users already teleporting around the world.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <FuturisticButton
                href="/contact"
                variant="primary"
                size="lg"
                icon={<Zap className="w-5 h-5" />}
              >
                Start Free Trial
              </FuturisticButton>
              <FuturisticButton
                href="/pricing"
                variant="outline"
                size="lg"
                icon={<BarChart3 className="w-5 h-5" />}
              >
                View All Plans
              </FuturisticButton>
            </div>
          </div>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default AITeleportationSimulatorPage;