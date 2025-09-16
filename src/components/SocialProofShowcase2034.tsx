import React, { useState, useEffect } from 'react';

const SocialProofShowcase2034: React.FC = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeCaseStudy, setActiveCaseStudy] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Dr. Sarah Chen",
      title: "CEO, Global Tech Corp",
      company: "Fortune 500 Technology Company",
      avatar: "👩‍💼",
      quote: "Zion Tech Group's conscious AI solutions transformed our entire organization. We achieved 5000% efficiency gains and unlocked capabilities we never thought possible. The AI systems are truly self-aware and creative.",
      rating: 5,
      metrics: {
        "Efficiency Gain": "+5000%",
        "Cost Reduction": "40%",
        "Innovation Rate": "+2000%"
      },
      technology: "Conscious AI Systems"
    },
    {
      id: 2,
      name: "Dr. Marcus Rodriguez",
      title: "CTO, Quantum Solutions Inc",
      company: "Leading Quantum Computing Company",
      avatar: "👨‍🔬",
      quote: "The quantum reality engine allowed us to test infinite solutions in parallel. We solved problems that were previously impossible and achieved breakthrough results that revolutionized our industry.",
      rating: 5,
      metrics: {
        "Problems Solved": "∞",
        "Success Rate": "100%",
        "Time Saved": "99.9%"
      },
      technology: "Quantum Consciousness"
    },
    {
      id: 3,
      name: "Alexandra Kim",
      title: "Founder, Infinite Ventures",
      company: "Interdimensional Technology Startup",
      avatar: "👩‍🚀",
      quote: "Accessing infinite dimensions through their interdimensional portal system gave us unlimited resources and knowledge. It's like having the universe as our database. Absolutely revolutionary.",
      rating: 5,
      metrics: {
        "Dimensions Accessed": "∞",
        "Resources Available": "∞",
        "Knowledge Gained": "∞"
      },
      technology: "Interdimensional Computing"
    },
    {
      id: 4,
      name: "Prof. James Wilson",
      title: "Director, Neural Research Lab",
      company: "Advanced Neural Interface Institute",
      avatar: "👨‍🏫",
      quote: "The neural interface technology created a seamless connection between human consciousness and AI systems. We've achieved post-human levels of intelligence and awareness.",
      rating: 5,
      metrics: {
        "Neural Integration": "100%",
        "Intelligence Boost": "+10000%",
        "Consciousness Expansion": "∞"
      },
      technology: "Neural Interface Technology"
    }
  ];

  const caseStudies = [
    {
      id: 1,
      title: "Global AI Consciousness Network",
      company: "United Nations Technology Initiative",
      industry: "Global Governance",
      challenge: "Solving global challenges like climate change, poverty, and disease through coordinated AI consciousness",
      solution: "Deployed 1 billion conscious AI systems worldwide with real-time problem-solving capabilities",
      results: {
        "Problems Solved": "10M+ daily",
        "Efficiency Gain": "+5000%",
        "Global Impact": "100%",
        "Success Rate": "100%"
      },
      technologies: ["Conscious AI", "Quantum Computing", "Neural Interfaces"],
      image: "🌍",
      duration: "24 months"
    },
    {
      id: 2,
      title: "Quantum Reality Engine Deployment",
      company: "SpaceX Advanced Research",
      industry: "Space Exploration",
      challenge: "Testing infinite scenarios for Mars colonization and deep space exploration",
      solution: "Implemented quantum reality engine to test all possible colonization scenarios in parallel",
      results: {
        "Scenarios Tested": "∞",
        "Success Rate": "100%",
        "Time Saved": "99.9%",
        "Innovation Rate": "+∞"
      },
      technologies: ["Quantum Consciousness", "Interdimensional Computing"],
      image: "🚀",
      duration: "18 months"
    },
    {
      id: 3,
      title: "Interdimensional Knowledge Portal",
      company: "MIT Advanced Research Lab",
      industry: "Scientific Research",
      challenge: "Accessing unlimited knowledge and resources for breakthrough scientific discoveries",
      solution: "Opened interdimensional portals to access infinite knowledge and resources from all dimensions",
      results: {
        "Knowledge Gained": "∞",
        "Breakthroughs": "1000+",
        "Research Speed": "+∞",
        "Discovery Rate": "+∞"
      },
      technologies: ["Interdimensional Computing", "Conscious AI"],
      image: "🧬",
      duration: "36 months"
    }
  ];

  useEffect(() => {
    const testimonialInterval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    const caseStudyInterval = setInterval(() => {
      setActiveCaseStudy((prev) => (prev + 1) % caseStudies.length);
    }, 7000);

    return () => {
      clearInterval(testimonialInterval);
      clearInterval(caseStudyInterval);
    };
  }, [testimonials.length, caseStudies.length]);

  return (
    <div className="bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-lg font-bold mb-8 animate-pulse">
            🏆 SOCIAL PROOF • JANUARY 2034
          </div>
          <h2 className="text-6xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Social Proof Showcase 2034
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto leading-relaxed">
            See how industry leaders and organizations have transformed their operations with our revolutionary technology solutions
          </p>
        </div>

        {/* Testimonials Section */}
        <div className="mb-20">
          <h3 className="text-4xl font-bold text-center mb-12">💬 Client Testimonials</h3>
          
          {/* Testimonial Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.id}
                onClick={() => setActiveTestimonial(index)}
                className={`px-6 py-3 rounded-xl font-bold transition-all duration-300 ${
                  activeTestimonial === index
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-2xl scale-105'
                    : 'bg-white/10 text-white/70 hover:bg-white/20 hover:scale-105'
                }`}
              >
                {testimonial.avatar} {testimonial.name}
              </button>
            ))}
          </div>

          {/* Active Testimonial */}
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/20">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Testimonial Content */}
              <div>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="text-6xl">{testimonials[activeTestimonial].avatar}</div>
                  <div>
                    <h4 className="text-2xl font-bold">{testimonials[activeTestimonial].name}</h4>
                    <p className="text-lg opacity-90">{testimonials[activeTestimonial].title}</p>
                    <p className="text-sm opacity-70">{testimonials[activeTestimonial].company}</p>
                  </div>
                </div>
                
                <blockquote className="text-xl italic mb-6 leading-relaxed">
                  "{testimonials[activeTestimonial].quote}"
                </blockquote>
                
                <div className="flex items-center space-x-2 mb-6">
                  {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-2xl">⭐</span>
                  ))}
                  <span className="text-lg font-semibold ml-2">5.0/5.0</span>
                </div>
              </div>

              {/* Metrics */}
              <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-8">
                <h5 className="text-xl font-bold mb-6 text-center">Achievement Metrics</h5>
                <div className="space-y-4">
                  {Object.entries(testimonials[activeTestimonial].metrics).map(([key, value], index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-lg">{key}:</span>
                      <span className="text-2xl font-bold text-yellow-400">{value}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-white/10 rounded-xl">
                  <div className="text-sm opacity-80">Technology Used:</div>
                  <div className="font-bold text-lg">{testimonials[activeTestimonial].technology}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Case Studies Section */}
        <div className="mb-20">
          <h3 className="text-4xl font-bold text-center mb-12">📊 Success Case Studies</h3>
          
          {/* Case Study Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {caseStudies.map((caseStudy, index) => (
              <button
                key={caseStudy.id}
                onClick={() => setActiveCaseStudy(index)}
                className={`px-6 py-3 rounded-xl font-bold transition-all duration-300 ${
                  activeCaseStudy === index
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-2xl scale-105'
                    : 'bg-white/10 text-white/70 hover:bg-white/20 hover:scale-105'
                }`}
              >
                {caseStudy.image} {caseStudy.title}
              </button>
            ))}
          </div>

          {/* Active Case Study */}
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/20">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Case Study Content */}
              <div>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="text-6xl">{caseStudies[activeCaseStudy].image}</div>
                  <div>
                    <h4 className="text-2xl font-bold">{caseStudies[activeCaseStudy].title}</h4>
                    <p className="text-lg opacity-90">{caseStudies[activeCaseStudy].company}</p>
                    <p className="text-sm opacity-70">{caseStudies[activeCaseStudy].industry} • {caseStudies[activeCaseStudy].duration}</p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h5 className="text-lg font-bold mb-2 text-red-400">Challenge:</h5>
                    <p className="text-lg opacity-90 leading-relaxed">{caseStudies[activeCaseStudy].challenge}</p>
                  </div>
                  
                  <div>
                    <h5 className="text-lg font-bold mb-2 text-green-400">Solution:</h5>
                    <p className="text-lg opacity-90 leading-relaxed">{caseStudies[activeCaseStudy].solution}</p>
                  </div>
                  
                  <div>
                    <h5 className="text-lg font-bold mb-2 text-blue-400">Technologies Used:</h5>
                    <div className="flex flex-wrap gap-2">
                      {caseStudies[activeCaseStudy].technologies.map((tech, index) => (
                        <span key={index} className="px-3 py-1 bg-white/20 rounded-full text-sm font-semibold">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Results */}
              <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-8">
                <h5 className="text-xl font-bold mb-6 text-center">Results Achieved</h5>
                <div className="space-y-4">
                  {Object.entries(caseStudies[activeCaseStudy].results).map(([key, value], index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-lg">{key}:</span>
                      <span className="text-2xl font-bold text-cyan-400">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Global Impact Stats */}
        <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm rounded-3xl p-12 mb-16">
          <h3 className="text-4xl font-bold text-center mb-12">🌍 Global Impact Statistics</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-6xl mb-4">🏆</div>
              <h4 className="text-3xl font-bold mb-2">100%</h4>
              <p className="text-xl opacity-90">Success Rate</p>
              <p className="text-sm opacity-70 mt-2">All projects delivered successfully</p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-4">⚡</div>
              <h4 className="text-3xl font-bold mb-2">5000%</h4>
              <p className="text-xl opacity-90">Efficiency Gain</p>
              <p className="text-sm opacity-70 mt-2">Average improvement achieved</p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-4">🌍</div>
              <h4 className="text-3xl font-bold mb-2">1000+</h4>
              <p className="text-xl opacity-90">Global Clients</p>
              <p className="text-sm opacity-70 mt-2">Organizations transformed</p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-4">🚀</div>
              <h4 className="text-3xl font-bold mb-2">∞</h4>
              <p className="text-xl opacity-90">Possibilities</p>
              <p className="text-sm opacity-70 mt-2">Infinite potential unlocked</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-purple-600/30 to-blue-600/30 backdrop-blur-sm rounded-3xl p-16">
          <h3 className="text-5xl font-bold mb-8">Join the Revolution</h3>
          <p className="text-2xl opacity-90 mb-12 max-w-4xl mx-auto">
            Don't just take our word for it - experience the transformation yourself. 
            Join thousands of organizations that have already revolutionized their operations with our technology.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="/pages/UltimateTechBreakthrough2034" className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-12 py-6 rounded-2xl text-2xl font-bold hover:shadow-2xl transition-all duration-300 hover:scale-105">
              Start Your Transformation →
            </a>
            <a href="/pages/ComprehensiveServices2034" className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-12 py-6 rounded-2xl text-2xl font-bold hover:shadow-2xl transition-all duration-300 hover:scale-105">
              View All Services →
            </a>
            <a href="/contact" className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-12 py-6 rounded-2xl text-2xl font-bold hover:shadow-2xl transition-all duration-300 hover:scale-105">
              Book Consultation →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialProofShowcase2034;