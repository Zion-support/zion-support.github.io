import React, { useState } from 'react';
import { 
  Star, 
  Quote, 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle,
  Users,
  TrendingUp,
  Award
} from 'lucide-react';

export function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CTO, TechCorp",
      company: "TechCorp",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      content: "Zion Tech Group transformed our entire IT infrastructure. Their AI solutions increased our operational efficiency by 40% and their team's expertise is unmatched. Highly recommended!",
      rating: 5,
      category: "AI Solutions",
      results: ["40% efficiency increase", "24/7 support", "Seamless integration"]
    },
    {
      name: "Michael Chen",
      position: "VP Engineering, InnovateAI",
      company: "InnovateAI",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      content: "The cloud migration project was executed flawlessly. Zion's team handled everything from planning to implementation with zero downtime. Outstanding service and results.",
      rating: 5,
      category: "Cloud Migration",
      results: ["Zero downtime", "Cost reduction 25%", "Improved security"]
    },
    {
      name: "Emily Rodriguez",
      position: "Director of IT, DataFlow",
      company: "DataFlow",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      content: "Working with Zion Tech Group has been a game-changer for our cybersecurity posture. Their zero-trust architecture implementation exceeded our expectations.",
      rating: 5,
      category: "Cybersecurity",
      results: ["Zero-trust implemented", "Compliance achieved", "Threat detection improved"]
    },
    {
      name: "David Kim",
      position: "CEO, CloudTech Solutions",
      company: "CloudTech",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      content: "Zion's micro SAAS solutions helped us scale rapidly without the complexity of building from scratch. Their platform is intuitive and powerful.",
      rating: 5,
      category: "Micro SAAS",
      results: ["Rapid scaling", "Cost effective", "User friendly"]
    }
  ];

  const stats = [
    { label: "Client Satisfaction", value: "98%", icon: Star, color: "text-yellow-400" },
    { label: "Project Success Rate", value: "99.9%", icon: CheckCircle, color: "text-zion-cyan" },
    { label: "Average Rating", value: "4.9/5", icon: Award, color: "text-zion-purple" },
    { label: "Return Clients", value: "85%", icon: Users, color: "text-zion-blue" }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentTestimonial];

  return (
    <section className="py-20 bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 cyber-grid"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What Our Clients
            <span className="block text-gradient"> Say About Us</span>
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what industry leaders and technology 
            professionals have to say about working with Zion Tech Group.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </div>
              <div className="text-3xl font-bold text-white mb-2 group-hover:text-zion-cyan transition-colors">
                {stat.value}
              </div>
              <div className="text-zion-slate-light text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="bg-gradient-to-r from-zion-blue-dark/30 to-zion-purple-dark/30 border border-zion-blue-light/20 rounded-2xl p-8 backdrop-blur-sm">
            {/* Quote Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 rounded-2xl flex items-center justify-center">
                <Quote className="w-8 h-8 text-zion-cyan" />
              </div>
            </div>

            {/* Testimonial Content */}
            <div className="text-center mb-8">
              <p className="text-xl text-white leading-relaxed mb-6 max-w-4xl mx-auto">
                "{current.content}"
              </p>
              
              {/* Category Badge */}
              <div className="inline-flex items-center gap-2 bg-zion-cyan/20 text-zion-cyan px-4 py-2 rounded-full text-sm font-medium border border-zion-cyan/30">
                <CheckCircle className="w-4 h-4" />
                {current.category}
              </div>
            </div>

            {/* Results */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {current.results.map((result, index) => (
                <div key={index} className="flex items-center gap-2 bg-zion-blue-dark/20 text-zion-cyan px-3 py-2 rounded-lg text-sm border border-zion-cyan/20">
                  <TrendingUp className="w-4 h-4" />
                  {result}
                </div>
              ))}
            </div>

            {/* Author Info */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <img
                src={current.avatar}
                alt={current.name}
                className="w-16 h-16 rounded-full border-2 border-zion-cyan/30"
              />
              <div className="text-left">
                <div className="text-white font-semibold text-lg">{current.name}</div>
                <div className="text-zion-slate-light">{current.position}</div>
                <div className="text-zion-cyan font-medium">{current.company}</div>
              </div>
            </div>

            {/* Rating */}
            <div className="flex justify-center mb-6">
              <div className="flex items-center gap-1">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center items-center gap-4">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 bg-zion-blue-dark/30 border border-zion-blue-light/20 rounded-lg flex items-center justify-center text-zion-cyan hover:bg-zion-cyan/20 hover:border-zion-cyan/50 transition-all duration-200"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                      index === currentTestimonial 
                        ? 'bg-zion-cyan w-8' 
                        : 'bg-zion-slate-light hover:bg-zion-cyan/50'
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 bg-zion-blue-dark/30 border border-zion-blue-light/20 rounded-lg flex items-center justify-center text-zion-cyan hover:bg-zion-cyan/20 hover:border-zion-cyan/50 transition-all duration-200"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-zion-blue-dark/30 to-zion-purple-dark/30 border border-zion-blue-light/20 rounded-2xl p-8 backdrop-blur-sm max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-zion-slate-light mb-6">
              Let's discuss how Zion Tech Group can transform your business with 
              cutting-edge technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue hover:from-zion-cyan/90 hover:to-zion-blue/90 text-white font-semibold rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-glow">
                <Users className="w-5 h-5 mr-2" />
                Start Your Project
              </button>
              <button className="inline-flex items-center px-8 py-4 border-2 border-zion-purple text-zion-purple hover:bg-zion-purple hover:text-white font-semibold rounded-lg transition-all duration-200 hover:scale-105">
                <Star className="w-5 h-5 mr-2" />
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}