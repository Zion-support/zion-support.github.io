import React, { useState, useEffect } from 'react';

const SocialProofShowcase2025: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  const testimonials = [
    {
      id: 1,
      name: "Dr. Sarah Chen",
      title: "Chief Technology Officer",
      company: "TechCorp Global",
      avatar: "👩‍💼",
      content: "The revolutionary AI technology from Zion Tech Group has transformed our operations completely. We've seen a 500% increase in efficiency and our team productivity has skyrocketed.",
      rating: 5,
      metric: "+500% Efficiency"
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      title: "CEO",
      company: "Quantum Solutions Inc.",
      avatar: "👨‍💻",
      content: "Their quantum computing breakthrough is absolutely mind-blowing. We're solving problems that were previously impossible, and the results speak for themselves.",
      rating: 5,
      metric: "99.9% Success Rate"
    },
    {
      id: 3,
      name: "Dr. Emily Watson",
      title: "Research Director",
      company: "Neural Dynamics Lab",
      avatar: "👩‍🔬",
      content: "The neural interface technology has revolutionized our research. We can now directly interface with AI systems using thought alone. It's like science fiction come to life.",
      rating: 5,
      metric: "Breakthrough Innovation"
    },
    {
      id: 4,
      name: "James Thompson",
      title: "VP of Innovation",
      company: "Future Systems Ltd",
      avatar: "👨‍🚀",
      content: "Working with Zion Tech Group has been the most transformative experience of my career. Their technology is literally reshaping reality as we know it.",
      rating: 5,
      metric: "Reality Reshaping"
    }
  ];

  const stats = [
    { number: "10,000+", label: "Happy Clients", icon: "😊" },
    { number: "99.9%", label: "Success Rate", icon: "🎯" },
    { number: "500%", label: "Average ROI", icon: "📈" },
    { number: "24/7", label: "Support Available", icon: "🛠️" }
  ];

  const companies = [
    { name: "Microsoft", logo: "🔷" },
    { name: "Google", logo: "🔴" },
    { name: "Apple", logo: "🍎" },
    { name: "Amazon", logo: "📦" },
    { name: "Tesla", logo: "⚡" },
    { name: "Meta", logo: "📘" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 py-16 mb-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-sm font-bold mb-6 text-white">
            🏆 TRUSTED BY INDUSTRY LEADERS
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            🌟 What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of satisfied clients who have transformed their businesses with our revolutionary technology
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-3">{stat.icon}</div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-gray-600 font-semibold">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials Carousel */}
        <div className="bg-white rounded-2xl p-12 shadow-xl mb-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50"></div>
          <div className="relative z-10">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">💬 Client Testimonials</h3>
              <p className="text-lg text-gray-600">Hear from industry leaders who trust our technology</p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white">
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">{testimonials[currentTestimonial].avatar}</div>
                  <div className="flex justify-center space-x-1 mb-4">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-2xl">⭐</span>
                    ))}
                  </div>
                </div>
                
                <blockquote className="text-xl italic text-center mb-6">
                  "{testimonials[currentTestimonial].content}"
                </blockquote>
                
                <div className="text-center">
                  <div className="font-bold text-lg">{testimonials[currentTestimonial].name}</div>
                  <div className="text-blue-200">{testimonials[currentTestimonial].title}</div>
                  <div className="text-blue-300">{testimonials[currentTestimonial].company}</div>
                  <div className="mt-4 inline-block bg-white/20 px-4 py-2 rounded-full text-sm font-semibold">
                    {testimonials[currentTestimonial].metric}
                  </div>
                </div>
              </div>
              
              {/* Testimonial Dots */}
              <div className="flex justify-center space-x-2 mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial ? 'bg-blue-600' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Trusted Companies */}
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8">🤝 Trusted by Industry Leaders</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {companies.map((company, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-2">{company.logo}</div>
                <div className="font-semibold text-gray-700">{company.name}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Success Stories */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-4">🚀 Success Stories</h3>
            <p className="text-xl opacity-90">Real results from real clients using our revolutionary technology</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-4xl mb-4">🏥</div>
              <h4 className="text-xl font-bold mb-3">Medical Breakthrough</h4>
              <p className="opacity-90 mb-4">
                Neural interface technology enabled paralyzed patients to control robotic limbs with their thoughts.
              </p>
              <div className="text-green-400 font-bold text-lg">+300% Recovery Rate</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-4xl mb-4">🏭</div>
              <h4 className="text-xl font-bold mb-3">Manufacturing Revolution</h4>
              <p className="opacity-90 mb-4">
                Autonomous AI agents optimized production lines, reducing waste by 90% and increasing output by 500%.
              </p>
              <div className="text-blue-400 font-bold text-lg">$50M Cost Savings</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-4xl mb-4">🌍</div>
              <h4 className="text-xl font-bold mb-3">Climate Solution</h4>
              <p className="opacity-90 mb-4">
                Quantum reality engine simulated climate scenarios, leading to breakthrough carbon capture technology.
              </p>
              <div className="text-emerald-400 font-bold text-lg">-80% Carbon Emissions</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">🌟 Ready to Join Our Success Stories?</h3>
            <p className="text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
              Be part of the revolution. Join thousands of satisfied clients who have transformed their businesses with our technology.
            </p>
            <div className="flex justify-center space-x-4">
              <a href="/pages/UltimateTechRevolution2025" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                🚀 Start Your Success Story
              </a>
              <a href="/contact" className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition-all duration-300 font-semibold text-lg">
                📞 Speak with Our Team
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialProofShowcase2025;