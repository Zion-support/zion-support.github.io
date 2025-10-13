import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Zap, Star, ArrowRight, Users, Award, BarChart3, Sparkles, Globe, Brain, History, Calendar } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

const AITimeTravelSimulatorPage = () => {
  const features = [
    {
      title: "Historical Simulation",
      description: "Experience any historical period with 99.9% accuracy using advanced AI and quantum computing",
      icon: <History className="w-8 h-8" />,
      color: "from-cyan-500 to-blue-500"
    },
    {
      title: "Future Prediction Engine",
      description: "Simulate future scenarios based on current data trends and AI predictions",
      icon: <Clock className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Interactive Timeline",
      description: "Navigate through time with full interactivity and real-time decision making",
      icon: <Calendar className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Quantum Time Dilation",
      description: "Experience time at different speeds and perspectives using quantum mechanics",
      icon: <Zap className="w-8 h-8" />,
      color: "from-orange-500 to-red-500"
    }
  ];

  const timePeriods = [
    {
      period: "Ancient Civilizations",
      description: "Explore ancient Egypt, Rome, Greece, and other great civilizations",
      icon: <Globe className="w-6 h-6" />,
      color: "text-yellow-400"
    },
    {
      period: "Medieval Times",
      description: "Experience knights, castles, and medieval life in full detail",
      icon: <Award className="w-6 h-6" />,
      color: "text-purple-400"
    },
    {
      period: "Industrial Revolution",
      description: "Witness the birth of modern industry and technological advancement",
      icon: <Zap className="w-6 h-6" />,
      color: "text-blue-400"
    },
    {
      period: "Future Scenarios",
      description: "Explore possible futures based on current trends and predictions",
      icon: <Brain className="w-6 h-6" />,
      color: "text-green-400"
    }
  ];

  const pricingPlans = [
    {
      name: "Explorer",
      price: "$199",
      period: "month",
      description: "Perfect for history enthusiasts and students",
      features: [
        "Access to 10 historical periods",
        "Basic simulation features",
        "Educational content",
        "Mobile app access",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Researcher",
      price: "$499",
      period: "month",
      description: "Ideal for researchers and educators",
      features: [
        "Access to all historical periods",
        "Advanced simulation tools",
        "Custom scenario creation",
        "Data export capabilities",
        "Priority support",
        "Collaboration tools"
      ],
      popular: true
    },
    {
      name: "Institution",
      price: "$1,999",
      period: "month",
      description: "For universities and research institutions",
      features: [
        "Everything in Researcher",
        "Unlimited users",
        "Custom time periods",
        "API access",
        "Dedicated support team",
        "24/7 phone support",
        "Research collaboration"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Dr. Elizabeth Stone",
      company: "Historical Research Institute",
      role: "Director",
      content: "This technology has revolutionized historical research. We can now experience history as it actually happened.",
      rating: 5
    },
    {
      name: "Professor James Wilson",
      company: "University of Technology",
      role: "History Professor",
      content: "My students are completely engaged. The time travel simulator makes history come alive like never before.",
      rating: 5
    },
    {
      name: "Sarah Martinez",
      company: "Future Studies Lab",
      role: "Research Scientist",
      content: "The future prediction capabilities are incredible. We can model scenarios with unprecedented accuracy.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="AI Time Travel Simulator - Historical & Future Simulation | Zion Tech Group"
        description="Revolutionary AI-powered time travel simulation technology. Experience historical periods and future scenarios with 99.9% accuracy using quantum computing and advanced AI."
        keywords="time travel simulator, historical simulation, future prediction, quantum computing, AI simulation, virtual time travel, historical education"
        canonical="https://ziontechgroup.com/ai-time-travel-simulator"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <ResponsiveContainer className="text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Clock className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">Revolutionary Time Simulation Technology</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              AI Time Travel Simulator
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Experience any historical period or future scenario with unprecedented accuracy. 
            Our AI-powered quantum simulation technology brings time travel to life.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<Clock className="w-5 h-5" />}
            >
              Start Your Journey
            </FuturisticButton>
            <FuturisticButton
              href="#demo"
              variant="outline"
              size="lg"
              icon={<History className="w-5 h-5" />}
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
              Experience time like never before with our quantum-powered simulation technology
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

      {/* Time Periods Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Explore Time Periods
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Journey through history and into the future with our immersive simulations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {timePeriods.map((period, index) => (
              <FuturisticCard key={index} className="group hover:scale-105 transition-all duration-300">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-slate-700 to-slate-600 flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <div className={period.color}>
                      {period.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {period.period}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {period.description}
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
              Choose Your Time Travel Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Flexible pricing for every time travel need
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
              Trusted by Researchers
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what researchers and educators say about our time travel simulator
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
              Begin Your Time Travel Journey
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Experience history and explore the future like never before. 
              Join thousands of users already traveling through time.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <FuturisticButton
                href="/contact"
                variant="primary"
                size="lg"
                icon={<Clock className="w-5 h-5" />}
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

export default AITimeTravelSimulatorPage;