import React, { useState, useEffect } from 'react';

const DynamicTestimonials: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CTO, TechCorp Global",
      company: "Fortune 500 Technology Company",
      image: "👩‍💼",
      content: "Zion Tech's revolutionary AI solutions transformed our entire operation. We saw a 500% increase in efficiency and 60% cost reduction within just 6 months. Their technology is truly game-changing.",
      rating: 5,
      gradient: "from-blue-500 to-purple-500"
    },
    {
      name: "Dr. Michael Rodriguez",
      role: "Research Director",
      company: "Quantum Research Institute",
      image: "👨‍🔬",
      content: "The quantum-neural fusion technology helped us solve research problems that would have taken decades. Zion Tech's breakthrough solutions are pushing the boundaries of what's possible.",
      rating: 5,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      name: "Jennifer Liu",
      role: "CEO, InnovateNow",
      company: "AI Startup Accelerator",
      image: "👩‍🚀",
      content: "Their business intelligence platform gave us insights we never knew existed. The predictive analytics helped us make decisions that increased our revenue by 300% in one year.",
      rating: 5,
      gradient: "from-green-500 to-teal-500"
    },
    {
      name: "David Thompson",
      role: "Security Director",
      company: "Global Financial Services",
      image: "👨‍💻",
      content: "Zion Tech's cybersecurity solutions protected us from threats we didn't even know existed. Their AI-powered threat detection prevented multiple sophisticated attacks.",
      rating: 5,
      gradient: "from-red-500 to-orange-500"
    },
    {
      name: "Dr. Emily Watson",
      role: "Chief Innovation Officer",
      company: "FutureTech Labs",
      image: "👩‍🔬",
      content: "The neural reality interface revolutionized our training programs. We reduced learning time by 80% while improving retention rates. This is the future of education.",
      rating: 5,
      gradient: "from-indigo-500 to-blue-500"
    },
    {
      name: "James Park",
      role: "VP of Operations",
      company: "Manufacturing Giant Inc",
      image: "👨‍🏭",
      content: "Their advanced analytics solutions optimized our supply chain like never before. We reduced waste by 40% and improved delivery times by 50%. Incredible results.",
      rating: 5,
      gradient: "from-yellow-500 to-orange-500"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <div className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-full text-lg font-semibold mb-6">
            💬 CLIENT TESTIMONIALS
          </div>
          <h2 className="text-5xl font-bold text-white mb-6">
            What Our Clients Say
            <span className="block bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Real Results, Real Impact
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Hear from industry leaders who have transformed their businesses with our 
            revolutionary technology solutions.
          </p>
        </div>

        {/* Main Testimonial Carousel */}
        <div className="relative mb-16">
          <div className="overflow-hidden rounded-3xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className={`bg-gradient-to-br ${testimonial.gradient} p-12 rounded-3xl relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="relative z-10">
                      <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                          <div className="text-8xl mb-6">{testimonial.image}</div>
                          <div className="flex space-x-1 mb-4">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <span key={i} className="text-yellow-400 text-2xl">⭐</span>
                            ))}
                          </div>
                          <blockquote className="text-2xl text-white mb-8 leading-relaxed font-medium">
                            "{testimonial.content}"
                          </blockquote>
                          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
                            <div className="text-white font-bold text-xl mb-1">{testimonial.name}</div>
                            <div className="text-white/90 text-lg mb-1">{testimonial.role}</div>
                            <div className="text-white/80">{testimonial.company}</div>
                          </div>
                        </div>
                        <div className="hidden lg:block">
                          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                            <h4 className="text-2xl font-bold text-white mb-6">Key Achievements</h4>
                            <ul className="space-y-4">
                              <li className="flex items-center space-x-3">
                                <div className="w-2 h-2 bg-white rounded-full"></div>
                                <span className="text-white/90">500% efficiency increase</span>
                              </li>
                              <li className="flex items-center space-x-3">
                                <div className="w-2 h-2 bg-white rounded-full"></div>
                                <span className="text-white/90">60% cost reduction</span>
                              </li>
                              <li className="flex items-center space-x-3">
                                <div className="w-2 h-2 bg-white rounded-full"></div>
                                <span className="text-white/90">300% revenue growth</span>
                              </li>
                              <li className="flex items-center space-x-3">
                                <div className="w-2 h-2 bg-white rounded-full"></div>
                                <span className="text-white/90">80% faster learning</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial ? 'bg-white' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Testimonial Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.slice(0, 6).map((testimonial, index) => (
            <div key={index} className="group">
              <div className={`bg-gradient-to-br ${testimonial.gradient} rounded-2xl p-6 h-full hover:scale-105 transition-all duration-300 cursor-pointer`}>
                <div className="text-4xl mb-4">{testimonial.image}</div>
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">⭐</span>
                  ))}
                </div>
                <blockquote className="text-white/90 mb-6 leading-relaxed text-sm">
                  "{testimonial.content.length > 120 ? testimonial.content.substring(0, 120) + '...' : testimonial.content}"
                </blockquote>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-white font-bold text-sm mb-1">{testimonial.name}</div>
                  <div className="text-white/90 text-xs mb-1">{testimonial.role}</div>
                  <div className="text-white/80 text-xs">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-purple-900/50 to-cyan-900/50 rounded-3xl p-12 mb-16">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-white mb-4">Client Success Metrics</h3>
            <p className="text-xl text-gray-300">Real results from our technology implementations</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-6xl font-bold text-purple-400 mb-2">500+</div>
              <div className="text-white font-semibold mb-2">Happy Clients</div>
              <div className="text-gray-300 text-sm">Across 50+ countries worldwide</div>
            </div>

            <div className="text-center">
              <div className="text-6xl font-bold text-cyan-400 mb-2">99.9%</div>
              <div className="text-white font-semibold mb-2">Success Rate</div>
              <div className="text-gray-300 text-sm">Project delivery and client satisfaction</div>
            </div>

            <div className="text-center">
              <div className="text-6xl font-bold text-green-400 mb-2">$2B+</div>
              <div className="text-white font-semibold mb-2">Value Created</div>
              <div className="text-gray-300 text-sm">Total value generated for clients</div>
            </div>

            <div className="text-center">
              <div className="text-6xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="text-white font-semibold mb-2">Support</div>
              <div className="text-gray-300 text-sm">Round-the-clock assistance</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-4xl font-bold text-white mb-6">
            Ready to Join Our Success Stories?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Be the next success story. Transform your business with our revolutionary 
            technology solutions and achieve unprecedented results.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Your Transformation
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 font-semibold text-lg">
              View Case Studies
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicTestimonials;