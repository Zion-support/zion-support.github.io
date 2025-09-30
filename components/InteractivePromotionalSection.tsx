import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const InteractivePromotionalSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [animatedStats, setAnimatedStats] = useState({
    projects: 0,
    savings: 0,
    efficiency: 0,
    roi: 0
  });

  const testimonials = [
    {
      quote: "Zion Tech Group transformed our enterprise with AI solutions that achieved 300% ROI in just 8 months. The autonomous systems are revolutionary.",
      author: "Sarah Chen",
      position: "CTO, Fortune 500 Manufacturing",
      company: "Global Manufacturing Corp"
    },
    {
      quote: "The quantum AI breakthrough solutions delivered 500x faster processing. Our computational capabilities are now unmatched in the industry.",
      author: "Dr. Michael Rodriguez",
      position: "Chief Innovation Officer",
      company: "Quantum Tech Solutions"
    },
    {
      quote: "We achieved $50M annual savings and 95% efficiency gains across 47 countries. The AI transformation exceeded all expectations.",
      author: "Jennifer Liu",
      position: "VP Operations",
      company: "International Logistics Group"
    }
  ];

  const stats = [
    { label: "Projects Delivered", value: 500, suffix: "+", color: "text-blue-600" },
    { label: "Cost Savings Generated", value: 250, suffix: "M+", color: "text-green-600" },
    { label: "Efficiency Improvement", value: 90, suffix: "%", color: "text-purple-600" },
    { label: "Average ROI", value: 300, suffix: "%", color: "text-orange-600" }
  ];

  useEffect(() => {
    // Animate stats
    const timer = setTimeout(() => {
      setAnimatedStats({
        projects: 500,
        savings: 250,
        efficiency: 90,
        roi: 300
      });
    }, 1000);

    // Rotate testimonials
    const testimonialInterval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => {
      clearTimeout(timer);
      clearInterval(testimonialInterval);
    };
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-purple-500 to-blue-500 px-6 py-2 rounded-full text-sm font-semibold mb-4">
            🚀 Revolutionary AI Solutions 2026
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
            Transform Your Enterprise with
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
              Next-Generation AI
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Join 500+ enterprises achieving unprecedented results with our cutting-edge AI solutions. 
            Experience 300% ROI, 90% efficiency gains, and $250M+ in cost savings.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className={`text-4xl md:text-5xl font-bold mb-2 ${stat.color} transition-all duration-500 group-hover:scale-110`}>
                {stat.value}{stat.suffix}
              </div>
              <div className="text-gray-300 text-sm md:text-base font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial Carousel */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 mb-16">
          <div className="text-center">
            <div className="text-4xl text-yellow-400 mb-6">"</div>
            <blockquote className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
              {testimonials[currentTestimonial].quote}
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">
                  {testimonials[currentTestimonial].author.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <div className="text-left">
                <div className="text-white font-semibold text-lg">
                  {testimonials[currentTestimonial].author}
                </div>
                <div className="text-gray-400 text-sm">
                  {testimonials[currentTestimonial].position}
                </div>
                <div className="text-blue-300 text-sm font-medium">
                  {testimonials[currentTestimonial].company}
                </div>
              </div>
            </div>
          </div>
          
          {/* Testimonial Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial ? 'bg-yellow-400' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Interactive Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-all duration-300 group">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <span className="text-2xl">🧠</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Neural Interface Systems</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Direct human-AI collaboration with breakthrough neural interface technology achieving 1000x faster communication.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-all duration-300 group">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <span className="text-2xl">⚛️</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Quantum AI Processing</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Revolutionary quantum-enhanced AI solving impossible optimization problems in seconds with 500x performance gains.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-all duration-300 group">
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <span className="text-2xl">🤖</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Autonomous AI Agents</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Self-evolving AI agents that learn, adapt, and optimize enterprise workflows achieving 300% productivity gains.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-1 rounded-2xl inline-block mb-8">
            <div className="bg-slate-900 rounded-xl px-8 py-4">
              <div className="text-lg font-semibold text-white mb-2">
                🎯 Limited Time: 50% Off AI Transformation Consultation
              </div>
              <div className="text-sm text-gray-300">
                Book your free AI strategy session and receive a custom ROI projection
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/services/ai-2026-revolutionary-solutions"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Explore AI 2026 Solutions
            </Link>
            <a
              href="tel:+13024640950"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-slate-900 transition-all duration-300"
            >
              Call +1 302 464 0950
            </a>
          </div>
          
          <div className="text-sm text-gray-400">
            <p>✨ 500+ Enterprise Clients • 🏆 99.9% Success Rate • 🚀 24/7 Expert Support</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractivePromotionalSection;