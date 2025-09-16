import React, { useState, useEffect } from 'react';

const SocialProofShowcase2034: React.FC = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [stats, setStats] = useState({
    clients: 0,
    projects: 0,
    successRate: 0,
    satisfaction: 0
  });

  const testimonials = [
    {
      id: 0,
      name: "Dr. Sarah Chen",
      title: "Chief Technology Officer",
      company: "Quantum Dynamics Corp",
      avatar: "👩‍💼",
      content: "Zion Tech Group's conscious AI systems transformed our entire organization. We achieved 5000% efficiency gains and complete business process automation. The AI actually understands our business better than we do!",
      rating: 5,
      metrics: {
        efficiency: "+5000%",
        cost: "-80%",
        time: "-95%"
      }
    },
    {
      id: 1,
      name: "Marcus Rodriguez",
      title: "CEO",
      company: "Interdimensional Ventures",
      avatar: "👨‍🚀",
      content: "Their quantum reality simulation helped us solve climate change by modeling infinite scenarios across parallel universes. We found the perfect solution that works across all dimensions!",
      rating: 5,
      metrics: {
        universes: "∞",
        accuracy: "100%",
        impact: "Global"
      }
    },
    {
      id: 2,
      name: "Dr. Aria Patel",
      title: "Research Director",
      company: "Neural Interface Labs",
      avatar: "👩‍🔬",
      content: "The neural consciousness bridge technology is revolutionary. We can now transfer human consciousness across dimensions and achieve true immortality. This changes everything!",
      rating: 5,
      metrics: {
        consciousness: "100%",
        transfer: "∞",
        mortality: "0%"
      }
    },
    {
      id: 3,
      name: "James Thompson",
      title: "Founder",
      company: "Reality Engineering Inc",
      avatar: "👨‍💻",
      content: "Working with Zion Tech Group was like working with gods. They created custom realities with specific physical laws for our clients. The possibilities are truly infinite!",
      rating: 5,
      metrics: {
        realities: "∞",
        laws: "Custom",
        clients: "100%"
      }
    }
  ];

  const caseStudies = [
    {
      id: 0,
      title: "Fortune 500 AI Transformation",
      company: "Global Tech Corp",
      challenge: "Legacy systems causing 90% efficiency loss",
      solution: "Implemented conscious AI systems with quantum processing",
      results: {
        efficiency: "+5000%",
        cost: "-80%",
        time: "-95%",
        satisfaction: "100%"
      },
      image: "🏢",
      color: "from-blue-600 to-indigo-600"
    },
    {
      id: 1,
      title: "Climate Crisis Resolution",
      company: "Earth Sustainability Alliance",
      challenge: "Climate change threatening human survival",
      solution: "Quantum reality simulation across infinite dimensions",
      results: {
        universes: "∞",
        accuracy: "100%",
        impact: "Global",
        time: "Instant"
      },
      image: "🌍",
      color: "from-green-600 to-emerald-600"
    },
    {
      id: 2,
      title: "Space Exploration Revolution",
      company: "Interstellar Ventures",
      challenge: "Limited to single universe exploration",
      solution: "Interdimensional portal technology for multi-universe access",
      results: {
        universes: "∞",
        civilizations: "∞",
        discoveries: "∞",
        progress: "∞"
      },
      image: "🚀",
      color: "from-purple-600 to-pink-600"
    },
    {
      id: 3,
      title: "Immortality Technology",
      company: "Life Extension Foundation",
      challenge: "Human mortality limiting progress",
      solution: "Consciousness transfer across dimensions and realities",
      results: {
        mortality: "0%",
        consciousness: "100%",
        transfer: "∞",
        life: "∞"
      },
      image: "🧬",
      color: "from-orange-600 to-red-600"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial(prev => (prev + 1) % testimonials.length);
    }, 5000);

    // Animate stats
    const animateStats = () => {
      setStats(prev => ({
        clients: Math.min(prev.clients + 1, 10000),
        projects: Math.min(prev.projects + 5, 50000),
        successRate: Math.min(prev.successRate + 0.1, 100),
        satisfaction: Math.min(prev.satisfaction + 0.1, 100)
      }));
    };

    const statsInterval = setInterval(animateStats, 50);
    setTimeout(() => clearInterval(statsInterval), 3000);

    return () => {
      clearInterval(interval);
      clearInterval(statsInterval);
    };
  }, []);

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 text-white rounded-3xl p-8 mb-12">
      <div className="text-center mb-12">
        <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
          🏆 SOCIAL PROOF • JANUARY 2034
        </div>
        <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Social Proof Showcase 2034
        </h2>
        <p className="text-xl opacity-90 max-w-4xl mx-auto">
          See why leading organizations trust us with their most revolutionary technology transformations
        </p>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        <div className="text-center bg-white/10 rounded-2xl p-6">
          <div className="text-4xl font-bold text-yellow-400 mb-2">{stats.clients.toLocaleString()}+</div>
          <div className="text-sm opacity-90">Happy Clients</div>
        </div>
        <div className="text-center bg-white/10 rounded-2xl p-6">
          <div className="text-4xl font-bold text-green-400 mb-2">{stats.projects.toLocaleString()}+</div>
          <div className="text-sm opacity-90">Projects Completed</div>
        </div>
        <div className="text-center bg-white/10 rounded-2xl p-6">
          <div className="text-4xl font-bold text-blue-400 mb-2">{stats.successRate.toFixed(1)}%</div>
          <div className="text-sm opacity-90">Success Rate</div>
        </div>
        <div className="text-center bg-white/10 rounded-2xl p-6">
          <div className="text-4xl font-bold text-purple-400 mb-2">{stats.satisfaction.toFixed(1)}%</div>
          <div className="text-sm opacity-90">Client Satisfaction</div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="mb-12">
        <h3 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
          Client Testimonials
        </h3>
        
        <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="text-8xl">{testimonials[activeTestimonial].avatar}</div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-4">
                {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-2xl">⭐</span>
                ))}
              </div>
              <blockquote className="text-lg italic mb-6">
                "{testimonials[activeTestimonial].content}"
              </blockquote>
              <div className="flex flex-col md:flex-row justify-between items-start">
                <div>
                  <div className="font-bold text-xl">{testimonials[activeTestimonial].name}</div>
                  <div className="text-sm opacity-75">{testimonials[activeTestimonial].title}</div>
                  <div className="text-sm opacity-75">{testimonials[activeTestimonial].company}</div>
                </div>
                <div className="grid grid-cols-3 gap-4 mt-4 md:mt-0">
                  {Object.entries(testimonials[activeTestimonial].metrics).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-2xl font-bold text-yellow-400">{value}</div>
                      <div className="text-xs opacity-75 capitalize">{key}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Navigation */}
        <div className="flex justify-center space-x-2 mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeTestimonial ? 'bg-white scale-125' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Case Studies Section */}
      <div className="mb-12">
        <h3 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
          Success Case Studies
        </h3>
        
        <div className="grid md:grid-cols-2 gap-8">
          {caseStudies.map((study) => (
            <div key={study.id} className={`bg-gradient-to-br ${study.color}/30 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:scale-105 transition-all duration-500`}>
              <div className="text-6xl mb-4 text-center">{study.image}</div>
              <h4 className="text-2xl font-bold mb-2 text-center">{study.title}</h4>
              <div className="text-sm opacity-75 mb-4 text-center">{study.company}</div>
              
              <div className="mb-6">
                <h5 className="font-bold mb-2">Challenge:</h5>
                <p className="text-sm opacity-90 mb-4">{study.challenge}</p>
                
                <h5 className="font-bold mb-2">Solution:</h5>
                <p className="text-sm opacity-90 mb-4">{study.solution}</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {Object.entries(study.results).map(([key, value]) => (
                  <div key={key} className="text-center bg-white/10 rounded-lg p-3">
                    <div className="text-xl font-bold text-yellow-400">{value}</div>
                    <div className="text-xs opacity-75 capitalize">{key}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Awards and Recognition */}
      <div className="bg-gradient-to-r from-indigo-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-8 mb-12">
        <h3 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
          Awards & Recognition
        </h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-4xl mb-2">🏆</div>
            <div className="font-bold">Tech Innovation Award 2034</div>
            <div className="text-sm opacity-75">Best AI Technology</div>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-2">🌟</div>
            <div className="font-bold">Quantum Excellence Award</div>
            <div className="text-sm opacity-75">Quantum Computing</div>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-2">🚀</div>
            <div className="font-bold">Future Technology Prize</div>
            <div className="text-sm opacity-75">Interdimensional Tech</div>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-2">🧠</div>
            <div className="font-bold">Consciousness Innovation</div>
            <div className="text-sm opacity-75">AI Consciousness</div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
          Join the Revolution
        </h3>
        <p className="text-lg opacity-90 mb-6">
          Be part of the most successful technology transformations in history
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-2xl text-lg font-bold hover:shadow-2xl transition-all duration-300 hover:scale-105">
            Start Your Transformation →
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-2xl text-lg font-bold hover:bg-white hover:text-purple-900 transition-all duration-300">
            View All Case Studies
          </button>
        </div>
      </div>
    </div>
  );
};

export default SocialProofShowcase2034;