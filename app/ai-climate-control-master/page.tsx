import React from 'react';
import { Link } from 'react-router-dom';
import { Cloud, Sun, Snowflake, Star, ArrowRight, Users, Award, BarChart3, Sparkles, Thermometer, Wind, Droplets } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

const AIClimateControlMasterPage = () => {
  const features = [
    {
      title: "Global Weather Control",
      description: "Control weather patterns globally with 99.8% accuracy using advanced atmospheric manipulation",
      icon: <Cloud className="w-8 h-8" />,
      color: "from-cyan-500 to-blue-500"
    },
    {
      title: "Precision Climate Management",
      description: "Fine-tune temperature, humidity, and precipitation with quantum-level precision",
      icon: <Thermometer className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Disaster Prevention",
      description: "Prevent natural disasters and extreme weather events with predictive intervention",
      icon: <Wind className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Ecosystem Optimization",
      description: "Optimize climate conditions for agriculture, wildlife, and human habitation",
      icon: <Droplets className="w-8 h-8" />,
      color: "from-orange-500 to-red-500"
    }
  ];

  const capabilities = [
    {
      title: "Weather Modification",
      description: "Create rain, clear skies, or snow on demand for any location",
      icon: <Snowflake className="w-6 h-6" />,
      color: "text-blue-400"
    },
    {
      title: "Temperature Control",
      description: "Adjust temperatures from -50°C to 60°C with precision",
      icon: <Sun className="w-6 h-6" />,
      color: "text-yellow-400"
    },
    {
      title: "Storm Management",
      description: "Prevent or redirect hurricanes, tornadoes, and severe storms",
      icon: <Wind className="w-6 h-6" />,
      color: "text-purple-400"
    },
    {
      title: "Climate Restoration",
      description: "Restore damaged ecosystems and reverse climate change effects",
      icon: <Cloud className="w-6 h-6" />,
      color: "text-green-400"
    }
  ];

  const pricingPlans = [
    {
      name: "Local",
      price: "$999",
      period: "month",
      description: "Perfect for local weather control and small-scale projects",
      features: [
        "Control weather for 100 sq km area",
        "Basic temperature and precipitation control",
        "Weather prediction and monitoring",
        "Mobile app access",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Regional",
      price: "$4,999",
      period: "month",
      description: "Ideal for regional climate management and agriculture",
      features: [
        "Control weather for 10,000 sq km area",
        "Advanced climate management",
        "Disaster prevention protocols",
        "API integration",
        "Priority support",
        "Custom weather patterns"
      ],
      popular: true
    },
    {
      name: "Global",
      price: "$49,999",
      period: "month",
      description: "For global climate control and environmental restoration",
      features: [
        "Global weather control capabilities",
        "Complete climate management suite",
        "Disaster prevention worldwide",
        "Dedicated support team",
        "24/7 phone support",
        "Research collaboration"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Martinez",
      company: "Climate Research Institute",
      role: "Director",
      content: "This technology has revolutionized climate science. We can now control weather patterns with unprecedented precision.",
      rating: 5
    },
    {
      name: "Michael Thompson",
      company: "Agricultural Solutions",
      role: "CEO",
      content: "The climate control system has increased our crop yields by 300%. We can now grow food in any climate.",
      rating: 5
    },
    {
      name: "Emily Chen",
      company: "Disaster Prevention Agency",
      role: "Emergency Director",
      content: "We've prevented countless natural disasters using this technology. It's truly life-saving technology.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="AI Climate Control Master - Global Weather Control | Zion Tech Group"
        description="Revolutionary AI-powered climate control technology for global weather management. Control temperature, precipitation, and prevent natural disasters with quantum precision."
        keywords="climate control, weather control, global weather, climate management, weather modification, disaster prevention, climate technology"
        canonical="https://ziontechgroup.com/ai-climate-control-master"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <ResponsiveContainer className="text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Cloud className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">Revolutionary Climate Control Technology</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              AI Climate Control Master
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Control global weather patterns with unprecedented precision. 
            Prevent natural disasters, optimize agriculture, and restore damaged ecosystems with our revolutionary climate technology.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<Cloud className="w-5 h-5" />}
            >
              Control the Climate
            </FuturisticButton>
            <FuturisticButton
              href="#demo"
              variant="outline"
              size="lg"
              icon={<Sun className="w-5 h-5" />}
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
              Experience the future of climate control with our quantum-powered weather technology
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

      {/* Capabilities Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Climate Control Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the incredible power of our climate control technology
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {capabilities.map((capability, index) => (
              <FuturisticCard key={index} className="group hover:scale-105 transition-all duration-300">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-slate-700 to-slate-600 flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <div className={capability.color}>
                      {capability.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {capability.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {capability.description}
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
              Choose Your Climate Control Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Flexible pricing for every climate control need
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
              Trusted by Climate Experts
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what climate scientists and environmental experts say about our technology
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
              Take Control of the Climate
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Join the fight against climate change with the power to control weather patterns. 
              Start making a difference today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <FuturisticButton
                href="/contact"
                variant="primary"
                size="lg"
                icon={<Cloud className="w-5 h-5" />}
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

export default AIClimateControlMasterPage;