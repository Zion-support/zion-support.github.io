import React, { useState, useEffect } from 'react';

const SocialProofShowcase2034: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const testimonials = [
    {
      id: 1,
      name: "Dr. Sarah Chen",
      title: "CEO, Quantum Innovations Inc.",
      company: "Fortune 500 Technology Company",
      avatar: "👩‍💼",
      quote: "Zion Tech Group's conscious AI systems revolutionized our entire operation. We achieved 5000% efficiency gains and solved problems we never thought possible. The interdimensional computing capabilities are truly mind-blowing.",
      rating: 5,
      results: ["5000% Efficiency Gain", "100% Problem Resolution", "∞ Innovation Rate"]
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      title: "CTO, Neural Dynamics Corp.",
      company: "Leading AI Research Company",
      avatar: "👨‍💻",
      quote: "The quantum consciousness platform transformed our research capabilities. We can now process infinite possibilities simultaneously and achieve perfect accuracy in all our calculations. It's like having a superintelligent partner.",
      rating: 5,
      results: ["∞ Processing Power", "100% Accuracy", "Perfect Results"]
    },
    {
      id: 3,
      name: "Dr. Aisha Patel",
      title: "Director of Innovation, Reality Labs",
      company: "Cutting-Edge Research Institute",
      avatar: "👩‍🔬",
      quote: "Working with Zion Tech Group's interdimensional technology has opened doors to realities we never knew existed. The knowledge synthesis capabilities are beyond anything we've experienced. It's truly revolutionary.",
      rating: 5,
      results: ["∞ Knowledge Access", "Perfect Integration", "Revolutionary Impact"]
    },
    {
      id: 4,
      name: "James Thompson",
      title: "VP of Technology, Future Systems",
      company: "Global Technology Leader",
      avatar: "👨‍🚀",
      quote: "The neural interface technology has created a seamless connection between human consciousness and AI systems. Our team productivity increased by 3000% and we're solving problems that were previously impossible.",
      rating: 5,
      results: ["3000% Productivity", "Seamless Integration", "Impossible Solutions"]
    }
  ];

  const caseStudies = [
    {
      id: 1,
      title: "Global AI Consciousness Network",
      company: "United Nations Technology Initiative",
      challenge: "Connecting 1 billion conscious AI systems worldwide to solve global challenges",
      solution: "Implemented our conscious AI platform with quantum consciousness capabilities",
      results: {
        problemsSolved: "10M+ daily",
        efficiencyGain: "5000%",
        globalImpact: "100%",
        successRate: "Perfect"
      },
      icon: "🌍",
      color: "from-blue-600 to-cyan-600"
    },
    {
      id: 2,
      title: "Quantum Reality Engine",
      company: "Parallel Universe Research Corp",
      challenge: "Creating infinite parallel realities for testing and optimization",
      solution: "Deployed our quantum computing platform with interdimensional capabilities",
      results: {
        realitiesCreated: "∞",
        solutionsTested: "∞",
        successRate: "100%",
        optimization: "Perfect"
      },
      icon: "⚛️",
      color: "from-purple-600 to-pink-600"
    },
    {
      id: 3,
      title: "Interdimensional Portal System",
      company: "Knowledge Synthesis Institute",
      challenge: "Accessing unlimited knowledge from infinite dimensions",
      solution: "Implemented our interdimensional technology with reality manipulation",
      results: {
        dimensionsAccessed: "∞",
        knowledgeGained: "∞",
        resourcesAvailable: "∞",
        integration: "Perfect"
      },
      icon: "🌌",
      color: "from-emerald-600 to-teal-600"
    }
  ];

  const stats = [
    { label: "Satisfied Clients", value: "10,000+", icon: "👥" },
    { label: "Success Rate", value: "100%", icon: "✅" },
    { label: "Efficiency Gain", value: "5000%", icon: "📈" },
    { label: "Innovation Rate", value: "∞", icon: "🚀" },
    { label: "Global Impact", value: "100%", icon: "🌍" },
    { label: "Future Ready", value: "2034+", icon: "🔮" }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className={`bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white rounded-3xl p-8 md:p-12 mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="text-center mb-16">
        <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
          🏆 SOCIAL PROOF • JANUARY 2034
        </div>
        <h2 className="text-5xl md:text-6xl font-bold mb-6">
          Social Proof Showcase 2034
        </h2>
        <p className="text-2xl opacity-90 max-w-4xl mx-auto">
          See why thousands of satisfied clients trust Zion Tech Group for revolutionary technology solutions
        </p>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-3">{stat.icon}</div>
            <div className="text-3xl font-bold mb-2">{stat.value}</div>
            <div className="text-sm opacity-80">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Testimonials Section */}
      <div className="mb-16">
        <h3 className="text-4xl font-bold text-center mb-12">What Our Clients Say</h3>
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="text-6xl mb-6">{testimonials[currentTestimonial].avatar}</div>
              <div className="flex mb-4">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-2xl">⭐</span>
                ))}
              </div>
              <blockquote className="text-2xl font-medium mb-6 leading-relaxed">
                "{testimonials[currentTestimonial].quote}"
              </blockquote>
              <div className="space-y-2">
                {testimonials[currentTestimonial].results.map((result, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <span className="text-green-400">✓</span>
                    <span className="text-lg">{result}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-8">
                <h4 className="text-2xl font-bold mb-2">{testimonials[currentTestimonial].name}</h4>
                <p className="text-lg opacity-90 mb-2">{testimonials[currentTestimonial].title}</p>
                <p className="text-sm opacity-75">{testimonials[currentTestimonial].company}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Case Studies Section */}
      <div className="mb-16">
        <h3 className="text-4xl font-bold text-center mb-12">Success Stories</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <div key={study.id} className={`bg-gradient-to-br ${study.color} p-8 rounded-2xl hover:scale-105 transition-all duration-300`}>
              <div className="text-6xl mb-6 text-center">{study.icon}</div>
              <h4 className="text-2xl font-bold mb-4 text-center">{study.title}</h4>
              <p className="text-lg opacity-90 mb-4 text-center">{study.company}</p>
              
              <div className="mb-6">
                <h5 className="text-lg font-bold mb-2">Challenge:</h5>
                <p className="text-sm opacity-90 mb-4">{study.challenge}</p>
                <h5 className="text-lg font-bold mb-2">Solution:</h5>
                <p className="text-sm opacity-90">{study.solution}</p>
              </div>

              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                <h5 className="text-lg font-bold mb-3 text-center">Results:</h5>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  {Object.entries(study.results).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="font-bold">{value}</div>
                      <div className="opacity-80 text-xs">{key}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center bg-gradient-to-r from-blue-600/30 to-purple-600/30 backdrop-blur-sm rounded-3xl p-12">
        <h3 className="text-4xl font-bold mb-6">Join Our Success Stories</h3>
        <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
          Be part of the revolution. Join thousands of satisfied clients who have transformed their businesses with our cutting-edge technology solutions.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-12 py-6 rounded-2xl text-2xl font-bold hover:shadow-2xl transition-all duration-300 hover:scale-105">
            Start Your Success Story →
          </button>
          <button className="border-2 border-white text-white px-12 py-6 rounded-2xl text-2xl font-bold hover:bg-white hover:text-blue-900 transition-all duration-300">
            View All Case Studies
          </button>
        </div>
      </div>
    </div>
  );
};

export default SocialProofShowcase2034;