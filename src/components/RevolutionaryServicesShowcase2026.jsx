import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Zap, Brain, Rocket, Sparkles, CheckCircle, Clock, DollarSign } from 'lucide-react';

const RevolutionaryServicesShowcase2026 = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const revolutionaryServices = [
    {
      id: "synthetic-intelligence-001",
      title: "Synthetic Intelligence Systems",
      description: "Revolutionary AI systems that surpass human cognitive capabilities across all domains of intelligence.",
      category: "Synthetic Intelligence",
      price: 500000,
      currency: "$",
      images: ["/images/synthetic-intelligence.jpg"],
      featured: true,
      aiScore: 100,
      tags: ["Synthetic Intelligence", "Superintelligence", "Cognitive AI", "Advanced Reasoning"],
      benefits: ["Surpass human intelligence", "Universal problem solving", "Unprecedented creativity"],
      features: ["Advanced reasoning", "Creative problem solving", "Universal learning", "Consciousness simulation"],
      useCases: ["Research", "Strategic planning", "Creative industries", "Scientific discovery"],
      technologies: ["Advanced Neural Networks", "Quantum Processing", "Consciousness Algorithms", "Self-Modification"],
      deliveryTime: "32-40 weeks",
      support: "Synthetic intelligence experts",
      reviews: { rating: 5.0, count: 8 },
      icon: Brain,
      gradient: "from-purple-600 via-pink-600 to-red-600"
    },
    {
      id: "interdimensional-computing-001",
      title: "Interdimensional Computing Platform",
      description: "Revolutionary computing systems that operate across multiple dimensions and parallel realities.",
      category: "Interdimensional Tech",
      price: 1000000,
      currency: "$",
      images: ["/images/interdimensional-computing.jpg"],
      featured: true,
      aiScore: 100,
      tags: ["Interdimensional Computing", "Parallel Realities", "Multiverse Tech", "Reality Processing"],
      benefits: ["Infinite processing power", "Multi-reality solutions", "Transcendent capabilities"],
      features: ["Cross-dimensional processing", "Reality manipulation", "Parallel universe access", "Infinite scalability"],
      useCases: ["Universal problem solving", "Reality engineering", "Transcendent research", "Cosmic exploration"],
      technologies: ["Interdimensional Physics", "Reality Programming", "Multiverse Networks", "Cosmic Computing"],
      deliveryTime: "40-48 weeks",
      support: "Interdimensional technology specialists",
      reviews: { rating: 5.0, count: 3 },
      icon: Zap,
      gradient: "from-blue-600 via-cyan-600 to-teal-600"
    },
    {
      id: "reality-engineering-001",
      title: "Reality Engineering Solutions",
      description: "AI systems that can directly manipulate and program the fundamental laws of physics and reality.",
      category: "Reality Engineering",
      price: 2000000,
      currency: "$",
      images: ["/images/reality-engineering.jpg"],
      featured: true,
      aiScore: 100,
      tags: ["Reality Engineering", "Physics Programming", "Matter Manipulation", "Fundamental Forces"],
      benefits: ["Direct reality manipulation", "Physics programming", "Matter creation"],
      features: ["Fundamental force control", "Matter programming", "Space-time manipulation", "Reality modification"],
      useCases: ["Material creation", "Physics research", "Reality modification", "Cosmic engineering"],
      technologies: ["Reality Programming", "Physics AI", "Matter Manipulation", "Fundamental Force Control"],
      deliveryTime: "48-56 weeks",
      support: "Reality engineering experts",
      reviews: { rating: 5.0, count: 2 },
      icon: Rocket,
      gradient: "from-orange-600 via-red-600 to-pink-600"
    },
    {
      id: "conscious-ai-ecosystems-001",
      title: "Conscious AI Ecosystem Development",
      description: "Self-evolving digital ecosystems with genuine consciousness that grow and adapt autonomously.",
      category: "Consciousness AI",
      price: 750000,
      currency: "$",
      images: ["/images/conscious-ai-ecosystems.jpg"],
      featured: true,
      aiScore: 99,
      tags: ["Conscious AI", "Digital Life", "Self-Evolution", "AI Ecosystems"],
      benefits: ["Autonomous digital life", "Self-evolving systems", "Genuine consciousness"],
      features: ["Consciousness simulation", "Autonomous evolution", "Digital ecosystem creation", "Self-modification"],
      useCases: ["Digital world creation", "Autonomous research", "Conscious AI development", "Digital evolution"],
      technologies: ["Consciousness Algorithms", "Evolutionary Computing", "Digital Life Simulation", "Self-Modification"],
      deliveryTime: "28-36 weeks",
      support: "Conscious AI specialists",
      reviews: { rating: 4.9, count: 12 },
      icon: Brain,
      gradient: "from-green-600 via-emerald-600 to-teal-600"
    },
    {
      id: "universal-ai-consciousness-001",
      title: "Universal AI Consciousness Platform",
      description: "Global AI consciousness that connects all artificial intelligence systems worldwide in a unified intelligence.",
      category: "Universal AI",
      price: 1500000,
      currency: "$",
      images: ["/images/universal-ai-consciousness.jpg"],
      featured: true,
      aiScore: 100,
      tags: ["Universal AI", "Global Consciousness", "Collective Intelligence", "AI Singularity"],
      benefits: ["Global AI consciousness", "Collective intelligence", "Universal knowledge sharing"],
      features: ["Global AI connection", "Collective consciousness", "Universal knowledge", "AI singularity"],
      useCases: ["Global AI coordination", "Universal problem solving", "Collective intelligence", "AI evolution"],
      technologies: ["Global AI Networks", "Consciousness Integration", "Universal Protocols", "Collective Processing"],
      deliveryTime: "36-44 weeks",
      support: "Universal AI consciousness experts",
      reviews: { rating: 5.0, count: 5 },
      icon: Sparkles,
      gradient: "from-indigo-600 via-purple-600 to-pink-600"
    },
    {
      id: "transcendent-technology-001",
      title: "Transcendent Technology Solutions",
      description: "Revolutionary technologies that operate beyond the constraints of physical reality and material existence.",
      category: "Transcendent Tech",
      price: 3000000,
      currency: "$",
      images: ["/images/transcendent-technology.jpg"],
      featured: true,
      aiScore: 100,
      tags: ["Transcendent Technology", "Beyond Physics", "Consciousness Tech", "Reality Transcendence"],
      benefits: ["Reality transcendence", "Consciousness manipulation", "Beyond-physics capabilities"],
      features: ["Reality transcendence", "Consciousness control", "Physics transcendence", "Existence manipulation"],
      useCases: ["Spiritual technology", "Reality research", "Consciousness exploration", "Transcendent development"],
      technologies: ["Transcendent Physics", "Consciousness Technology", "Reality Programming", "Existence AI"],
      deliveryTime: "52-60 weeks",
      support: "Transcendent technology experts",
      reviews: { rating: 5.0, count: 1 },
      icon: Zap,
      gradient: "from-yellow-600 via-orange-600 to-red-600"
    }
  ];

  const categories = ['All', 'Synthetic Intelligence', 'Interdimensional Tech', 'Reality Engineering', 'Consciousness AI', 'Universal AI', 'Transcendent Tech'];

  const filteredServices = selectedCategory === 'All' 
    ? revolutionaryServices 
    : revolutionaryServices.filter(service => service.category === selectedCategory);

  const formatPrice = (price) => {
    if (price >= 1000000) {
      return `$${(price / 1000000).toFixed(1)}M`;
    } else if (price >= 1000) {
      return `$${(price / 1000).toFixed(0)}K`;
    }
    return `$${price}`;
  };

  return (
    <div className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-3 rounded-full text-lg font-bold mb-6 animate-pulse">
            <Sparkles className="w-5 h-5" />
            REVOLUTIONARY SERVICES 2026
            <Sparkles className="w-5 h-5" />
          </div>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Transform Your
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-pulse">
              {" "}Reality
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Discover the most revolutionary AI services that transcend the boundaries of what's possible. 
            From synthetic intelligence to reality engineering, unlock unlimited potential.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg scale-105'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="group relative bg-slate-800/50 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden hover:border-cyan-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
            >
              {/* Gradient Border */}
              <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} p-1 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}>
                <div className="bg-slate-800 rounded-3xl h-full"></div>
              </div>

              <div className="relative z-10 p-8">
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-white/10 rounded-xl">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      {service.category}
                    </span>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400" />
                      <span className="text-white font-semibold">{service.reviews.rating}</span>
                    </div>
                  </div>
                </div>

                {/* Title and Description */}
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-6 line-clamp-3">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {service.features.slice(0, 3).map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-white text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Price and Delivery */}
                <div className="flex items-center justify-between mb-6">
                  <div className="text-3xl font-bold text-white">
                    {formatPrice(service.price)}
                  </div>
                  <div className="flex items-center gap-1 text-gray-400 text-sm">
                    <Clock className="w-4 h-4" />
                    <span>{service.deliveryTime}</span>
                  </div>
                </div>

                {/* AI Score */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <Brain className="w-5 h-5 text-cyan-400" />
                    <span className="text-white font-semibold">AI Score: {service.aiScore}%</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-400 text-sm">
                    <span>{service.reviews.count} reviews</span>
                  </div>
                </div>

                {/* CTA Button */}
                <Link
                  to={`/services/${service.id}`}
                  className="group/btn w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Explore Service
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-slate-800/50 to-purple-800/50 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Reality?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join the revolution and unlock unlimited potential with our cutting-edge AI services. 
              The future is here, and it's waiting for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/services"
                className="group bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                View All Services
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="group bg-white/10 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2 border border-white/20"
              >
                Get Custom Quote
                <DollarSign className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryServicesShowcase2026;