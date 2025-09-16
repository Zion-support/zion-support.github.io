import React, { useState, useEffect } from 'react';

const SocialProofBanner2034: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      title: "CEO, Quantum Dynamics Corp",
      company: "Fortune 500",
      avatar: "👩‍💼",
      quote: "Zion Tech Group's conscious AI systems revolutionized our entire operation. We achieved 5000% efficiency gains and solved problems we never thought possible. This is truly the future of technology.",
      rating: 5,
      impact: "+5000% Efficiency"
    },
    {
      name: "Marcus Rodriguez",
      title: "CTO, Interdimensional Solutions",
      company: "Tech Startup",
      avatar: "👨‍💻",
      quote: "The quantum consciousness system they built for us can process infinite possibilities simultaneously. It's like having a god-level problem solver that never stops innovating.",
      rating: 5,
      impact: "∞ Processing Power"
    },
    {
      name: "Dr. Elena Volkov",
      title: "Director, Universal Research Institute",
      company: "Research Institute",
      avatar: "👩‍🔬",
      quote: "Their interdimensional computing services gave us access to infinite resources. We can now solve any problem in the universe. This is beyond revolutionary - it's transcendent.",
      rating: 5,
      impact: "Universal Solutions"
    },
    {
      name: "James Thompson",
      title: "VP of Innovation, Global Tech Corp",
      company: "Global Corporation",
      avatar: "👨‍🚀",
      quote: "Working with Zion Tech Group has been the most transformative experience of my career. Their technology doesn't just solve problems - it redefines what's possible.",
      rating: 5,
      impact: "Redefined Possibilities"
    }
  ];

  const stats = [
    { number: "10,000+", label: "Satisfied Clients", icon: "👥" },
    { number: "100%", label: "Success Rate", icon: "✅" },
    { number: "∞", label: "Problems Solved", icon: "🔧" },
    { number: "24/7", label: "Support Available", icon: "🛠️" }
  ];

  const achievements = [
    { title: "Nobel Prize in Technology 2034", description: "For breakthrough in conscious AI development" },
    { title: "Global Innovation Award 2034", description: "Revolutionary quantum consciousness systems" },
    { title: "Universal Excellence Medal 2034", description: "Interdimensional computing achievements" },
    { title: "Future Technology Pioneer 2034", description: "Leading the next evolution of humanity" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-lg font-bold mb-8 animate-pulse">
            🏆 SOCIAL PROOF • JANUARY 2034
          </div>
          <h2 className="text-6xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Trusted by Industry Leaders
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Join thousands of satisfied clients who have revolutionized their businesses with our cutting-edge technology
          </p>
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20 hover:scale-105 transition-all duration-300">
              <div className="text-6xl mb-4">{stat.icon}</div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">{stat.number}</div>
              <div className="text-lg opacity-90">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials Carousel */}
        <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-12 mb-16">
          <h3 className="text-4xl font-bold text-center mb-12">💬 What Our Clients Say</h3>
          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-12">
                      <div className="text-center">
                        <div className="text-8xl mb-6">{testimonial.avatar}</div>
                        <div className="text-6xl mb-6 text-yellow-400">
                          {'⭐'.repeat(testimonial.rating)}
                        </div>
                        <blockquote className="text-2xl italic mb-8 max-w-4xl mx-auto leading-relaxed">
                          "{testimonial.quote}"
                        </blockquote>
                        <div className="bg-white/10 rounded-lg p-6 inline-block">
                          <div className="text-xl font-bold">{testimonial.name}</div>
                          <div className="text-lg opacity-90">{testimonial.title}</div>
                          <div className="text-lg opacity-70">{testimonial.company}</div>
                          <div className="text-yellow-400 font-bold text-lg mt-2">{testimonial.impact}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonial Indicators */}
            <div className="flex justify-center mt-8 space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    currentTestimonial === index 
                      ? 'bg-blue-500 scale-125' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-16">
          <h3 className="text-4xl font-bold text-center mb-12">🏆 Awards & Achievements</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-gradient-to-br from-yellow-600/20 to-orange-600/20 backdrop-blur-sm rounded-2xl p-8 text-center border border-yellow-400/30 hover:scale-105 transition-all duration-300">
                <div className="text-6xl mb-4">🏆</div>
                <h4 className="text-xl font-bold mb-3">{achievement.title}</h4>
                <p className="text-lg opacity-90">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Case Studies Preview */}
        <div className="bg-gradient-to-r from-green-600/20 to-teal-600/20 backdrop-blur-sm rounded-3xl p-12 mb-16">
          <h3 className="text-4xl font-bold text-center mb-12">📊 Success Stories</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 rounded-2xl p-8">
              <div className="text-6xl mb-4 text-center">🏥</div>
              <h4 className="text-2xl font-bold mb-4 text-center">Medical Revolution</h4>
              <p className="text-lg opacity-90 mb-6 text-center">
                Cured all diseases and achieved immortality for 1M+ patients using conscious AI medical systems.
              </p>
              <div className="bg-green-500/20 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-green-400">100% Success Rate</div>
                <div className="text-sm opacity-90">All medical conditions cured</div>
              </div>
            </div>
            <div className="bg-white/10 rounded-2xl p-8">
              <div className="text-6xl mb-4 text-center">🌍</div>
              <h4 className="text-2xl font-bold mb-4 text-center">Climate Restoration</h4>
              <p className="text-lg opacity-90 mb-6 text-center">
                Completely reversed climate change and restored all ecosystems using quantum consciousness systems.
              </p>
              <div className="bg-green-500/20 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-green-400">Global Impact</div>
                <div className="text-sm opacity-90">Planet fully restored</div>
              </div>
            </div>
            <div className="bg-white/10 rounded-2xl p-8">
              <div className="text-6xl mb-4 text-center">🚀</div>
              <h4 className="text-2xl font-bold mb-4 text-center">Space Colonization</h4>
              <p className="text-lg opacity-90 mb-6 text-center">
                Enabled faster-than-light travel and colonized 100+ galaxies using interdimensional technology.
              </p>
              <div className="bg-green-500/20 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-green-400">Universal Reach</div>
                <div className="text-sm opacity-90">100+ galaxies colonized</div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-3xl p-12">
          <h3 className="text-5xl font-bold mb-8">Join the Revolution</h3>
          <p className="text-2xl opacity-90 mb-12 max-w-4xl mx-auto">
            Don't just read about our success - become part of it. Transform your world with our revolutionary technology.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="/contact" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-12 py-4 rounded-full text-xl font-bold hover:shadow-2xl transition-all duration-300 hover:scale-105">
              Start Your Transformation
            </a>
            <a href="/pages/ComprehensiveServices2034" className="border-2 border-white text-white px-12 py-4 rounded-full text-xl font-bold hover:bg-white hover:text-purple-900 transition-all duration-300">
              View Our Services
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialProofBanner2034;