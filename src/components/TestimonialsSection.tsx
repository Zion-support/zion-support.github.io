import React from 'react';

export function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CTO, TechCorp",
      company: "TechCorp Industries",
      content: "Zion Tech Group transformed our entire IT infrastructure. Their AI-powered solutions helped us reduce costs by 40% while improving performance.",
      rating: 5,
      avatar: "👩‍💼"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "VP of Engineering",
      company: "InnovateTech",
      content: "The cybersecurity solutions from Zion Tech Group are world-class. They helped us achieve SOC 2 compliance in record time.",
      rating: 5,
      avatar: "👨‍💻"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Operations Director",
      company: "GreenTech Solutions",
      content: "Working with Zion Tech Group has been a game-changer. Their quantum computing expertise opened new possibilities for our research.",
      rating: 5,
      avatar: "👩‍🔬"
    },
    {
      id: 4,
      name: "David Kim",
      role: "CEO",
      company: "StartupXYZ",
      content: "Zion Tech Group's AI talent matching platform helped us find the perfect team members. Highly recommended!",
      rating: 5,
      avatar: "👨‍💼"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`text-lg ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}>
        ★
      </span>
    ));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what industry leaders and technology innovators have to say about working with Zion Tech Group.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center mb-4">
                <div className="text-3xl mr-3">{testimonial.avatar}</div>
                <div>
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  <p className="text-blue-400 text-sm">{testimonial.company}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {renderStars(testimonial.rating)}
              </div>
              
              <p className="text-gray-300 text-sm leading-relaxed">
                "{testimonial.content}"
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-lg border border-white/10 rounded-full px-6 py-3">
            <span className="text-white font-semibold">Trusted by 500+ companies worldwide</span>
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}