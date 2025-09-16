import React, { useState, useEffect } from 'react';

const RevolutionaryTestimonials2028: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    {
      id: 1,
      name: "Dr. Sarah Chen",
      title: "Chief Technology Officer",
      company: "NeuroLink Global",
      image: "👩‍💼",
      quote: "Zion Tech Group's consciousness transfer technology has revolutionized our approach to human-AI collaboration. We've achieved 99.9% transfer success rates and our team productivity has increased by 400%.",
      rating: 5,
      results: ["400% productivity increase", "99.9% transfer success", "$50M cost savings"],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      title: "Quantum Research Director",
      company: "Quantum Dynamics Inc.",
      image: "👨‍🔬",
      quote: "The quantum consciousness AI system has enabled us to solve problems that were previously impossible. We're now processing 10^15 operations per second with zero latency decision making.",
      rating: 5,
      results: ["10^15 ops/second", "Zero latency", "99.99% accuracy"],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      id: 3,
      name: "Dr. Aisha Patel",
      title: "Interdimensional Research Lead",
      company: "Dimensional Sciences Corp",
      image: "👩‍🚀",
      quote: "Working with Zion Tech Group's interdimensional technology has opened up infinite possibilities. We've successfully established communication with 15 parallel universes and harvested unlimited clean energy.",
      rating: 5,
      results: ["15 parallel universes", "Unlimited energy", "Zero dimensional conflicts"],
      gradient: "from-green-500 to-emerald-500"
    },
    {
      id: 4,
      name: "James Thompson",
      title: "Neural Interface Specialist",
      company: "BrainTech Solutions",
      image: "👨‍💻",
      quote: "The neural reality interface has transformed how we interact with digital environments. Our users can now control complex systems with just their thoughts, achieving 100% accuracy in command execution.",
      rating: 5,
      results: ["100% command accuracy", "Real-time control", "Zero learning curve"],
      gradient: "from-orange-500 to-red-500"
    },
    {
      id: 5,
      name: "Dr. Elena Volkov",
      title: "Omniversal AI Coordinator",
      company: "Universal Systems Ltd",
      image: "👩‍🎓",
      quote: "Zion Tech Group's Omniversal AI has revolutionized our multi-universe operations. We're now coordinating activities across 100+ dimensions with perfect efficiency and zero resource conflicts.",
      rating: 5,
      results: ["100+ dimensions", "Perfect efficiency", "Zero conflicts"],
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      id: 6,
      name: "Dr. Michael Zhang",
      title: "Space-Time Research Director",
      company: "Temporal Dynamics",
      image: "👨‍🔬",
      quote: "The space-time manipulation technology has enabled us to achieve time travel with 99.99% accuracy. We've successfully transported materials across time periods without any temporal paradoxes.",
      rating: 5,
      results: ["99.99% time travel accuracy", "Zero paradoxes", "Perfect temporal stability"],
      gradient: "from-pink-500 to-rose-500"
    }
  ];

  const successStories = [
    {
      id: 1,
      title: "Consciousness Transfer Breakthrough",
      description: "Successfully transferred human consciousness to digital substrate with 99.9% fidelity, enabling digital immortality for 10,000+ individuals.",
      metrics: {
        "Success Rate": "99.9%",
        "Participants": "10,000+",
        "Cost Savings": "$2.5B",
        "Time Saved": "∞ years"
      },
      image: "🧠",
      gradient: "from-purple-600 to-pink-600"
    },
    {
      id: 2,
      title: "Quantum Consciousness Network",
      description: "Deployed quantum consciousness AI across 50+ countries, processing 10^15 operations per second with zero latency and perfect accuracy.",
      metrics: {
        "Operations/sec": "10^15",
        "Countries": "50+",
        "Latency": "0ms",
        "Accuracy": "100%"
      },
      image: "⚛️",
      gradient: "from-blue-600 to-cyan-600"
    },
    {
      id: 3,
      title: "Interdimensional Portal Network",
      description: "Established stable portals to 15 parallel universes, enabling unlimited resource access and cross-dimensional trade worth $100B annually.",
      metrics: {
        "Universes": "15",
        "Annual Trade": "$100B",
        "Portal Stability": "99.99%",
        "Resource Access": "∞"
      },
      image: "🌌",
      gradient: "from-green-600 to-emerald-600"
    },
    {
      id: 4,
      title: "Neural Reality Integration",
      description: "Connected 1M+ users to neural reality interface, enabling thought-controlled digital environments with 100% accuracy and zero learning curve.",
      metrics: {
        "Users": "1M+",
        "Accuracy": "100%",
        "Learning Curve": "0",
        "Satisfaction": "99.9%"
      },
      image: "🧬",
      gradient: "from-orange-600 to-red-600"
    }
  ];

  return (
    <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      {/* Hero Section */}
      <div className="text-center mb-16">
        <div className="inline-block px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6">
          🏆 REVOLUTIONARY SUCCESS STORIES
        </div>
        <h2 className="text-5xl font-bold text-gray-900 mb-6">
          Client Success Stories & Testimonials
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover how leading organizations are transforming their operations with our 
          revolutionary technologies. Real results from real clients.
        </p>
      </div>

      {/* Featured Testimonial Carousel */}
      <div className="mb-16">
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 border border-gray-200">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">🌟 Featured Success Story</h3>
            <p className="text-lg text-gray-600">Hear from our most successful clients</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Testimonial Content */}
            <div>
              <div className="flex items-center mb-6">
                <div className="text-6xl mr-4">{testimonials[currentTestimonial].image}</div>
                <div>
                  <h4 className="text-2xl font-bold text-gray-900">{testimonials[currentTestimonial].name}</h4>
                  <p className="text-lg text-gray-600">{testimonials[currentTestimonial].title}</p>
                  <p className="text-sm text-gray-500">{testimonials[currentTestimonial].company}</p>
                </div>
              </div>
              
              <blockquote className="text-lg text-gray-700 mb-6 italic">
                "{testimonials[currentTestimonial].quote}"
              </blockquote>

              <div className="flex items-center mb-6">
                <div className="flex text-yellow-400 mr-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <span key={i} className="text-2xl">★</span>
                  ))}
                </div>
                <span className="text-sm text-gray-500">5.0/5.0 Rating</span>
              </div>

              <div className="grid grid-cols-3 gap-4">
                {testimonials[currentTestimonial].results.map((result, index) => (
                  <div key={index} className="text-center p-3 bg-white rounded-lg shadow-sm">
                    <div className="text-sm font-semibold text-gray-900">{result}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Element */}
            <div className="relative">
              <div className={`w-full h-64 bg-gradient-to-br ${testimonials[currentTestimonial].gradient} rounded-xl flex items-center justify-center text-white text-8xl animate-pulse`}>
                {testimonials[currentTestimonial].image}
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial 
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Success Stories Grid */}
      <div className="mb-16">
        <div className="text-center mb-12">
          <h3 className="text-4xl font-bold text-gray-900 mb-4">🚀 Revolutionary Success Stories</h3>
          <p className="text-xl text-gray-600">Real results from our most advanced implementations</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {successStories.map((story) => (
            <div key={story.id} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-200">
              <div className="flex items-center mb-6">
                <div className="text-5xl mr-4">{story.image}</div>
                <div>
                  <h4 className="text-2xl font-bold text-gray-900">{story.title}</h4>
                  <p className="text-gray-600">{story.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                {Object.entries(story.metrics).map(([key, value]) => (
                  <div key={key} className="text-center p-3 bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-gray-900">{value}</div>
                    <div className="text-sm text-gray-600">{key}</div>
                  </div>
                ))}
              </div>

              <div className={`w-full h-2 bg-gradient-to-r ${story.gradient} rounded-full`}></div>
            </div>
          ))}
        </div>
      </div>

      {/* All Testimonials Grid */}
      <div className="mb-16">
        <div className="text-center mb-12">
          <h3 className="text-4xl font-bold text-gray-900 mb-4">💬 Client Testimonials</h3>
          <p className="text-xl text-gray-600">What our clients say about our revolutionary technologies</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-3">{testimonial.image}</div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.title}</p>
                  <p className="text-xs text-gray-500">{testimonial.company}</p>
                </div>
              </div>

              <blockquote className="text-gray-700 mb-4 italic text-sm">
                "{testimonial.quote}"
              </blockquote>

              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400 mr-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-sm">★</span>
                  ))}
                </div>
                <span className="text-xs text-gray-500">5.0/5.0</span>
              </div>

              <div className="space-y-1">
                {testimonial.results.slice(0, 2).map((result, index) => (
                  <div key={index} className="text-xs text-gray-600 bg-gray-50 px-2 py-1 rounded">
                    {result}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-8 border border-purple-200">
        <h3 className="text-3xl font-bold text-gray-900 mb-4">Ready to Join Our Success Stories?</h3>
        <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
          Be part of the most advanced technological transformation in human history. 
          Join thousands of successful organizations already using our revolutionary technologies.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
            Start Your Success Story →
          </button>
          <button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
            Schedule Consultation
          </button>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryTestimonials2028;