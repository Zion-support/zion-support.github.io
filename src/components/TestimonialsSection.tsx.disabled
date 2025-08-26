import React from 'react';
import { Star, Quote } from 'lucide-react';

<<<<<<< HEAD
const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CTO at TechFlow",
    company: "TechFlow Inc.",
    content: "Zion has revolutionized how we source tech talent. The AI matching is incredibly accurate and has saved us countless hours.",
    rating: 5,
    avatar: "SJ"
  },
  {
    name: "Michael Chen",
    role: "Lead Developer",
    company: "InnovateCorp",
    content: "The quality of services and equipment available on Zion is outstanding. It's become our go-to platform for all tech needs.",
    rating: 5,
    avatar: "MC"
  },
  {
    name: "Emily Rodriguez",
    role: "IT Director",
    company: "Global Solutions",
    content: "Zion's marketplace has everything we need in one place. The customer support is exceptional and always available.",
    rating: 5,
    avatar: "ER"
  }
];

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-zion-blue-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What Our Users Say
          </h2>
          <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
            Join thousands of satisfied professionals who trust Zion for their technology needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-zion-blue border border-zion-blue-light rounded-xl p-6 hover:border-zion-purple/50 transition-all duration-300 hover:transform hover:scale-105 group"
            >
              {/* Quote icon */}
              <div className="mb-4">
                <Quote className="w-8 h-8 text-zion-cyan opacity-60" />
              </div>
              
              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              {/* Content */}
              <p className="text-zion-slate-light mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              
              {/* Author */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-zion-purple to-zion-cyan rounded-full flex items-center justify-center text-white font-semibold text-lg mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="text-white font-semibold">{testimonial.name}</div>
                  <div className="text-zion-slate-light text-sm">{testimonial.role}</div>
                  <div className="text-zion-cyan text-sm">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Trust indicators */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-6 bg-zion-blue/50 backdrop-blur-sm border border-zion-cyan/20 rounded-full px-8 py-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-zion-cyan text-sm font-medium">Verified Reviews</span>
            </div>
            <div className="w-px h-4 bg-zion-cyan/30"></div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
              <span className="text-zion-cyan text-sm font-medium">Real Users</span>
            </div>
            <div className="w-px h-4 bg-zion-cyan/30"></div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
              <span className="text-zion-cyan text-sm font-medium">Recent Feedback</span>
            </div>
=======
export const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      company: "TechCorp Solutions",
      role: "CTO",
      content: "Zion Tech Group transformed our AI infrastructure completely. Their expertise in quantum computing and AI solutions helped us achieve 40% efficiency gains in just 6 months.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "Michael Chen",
      company: "InnovateTech",
      role: "VP of Engineering",
      content: "The team at Zion delivered exceptional results. Their AI-powered security solutions protected our systems from advanced threats while maintaining optimal performance.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      company: "DataFlow Systems",
      role: "Data Science Director",
      content: "Working with Zion Tech Group was a game-changer. Their AI business intelligence platform gave us insights we never had before, driving 25% revenue growth.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 4,
      name: "David Kim",
      company: "Quantum Industries",
      role: "Research Director",
      content: "Zion's quantum computing expertise is unmatched. They helped us implement cutting-edge quantum algorithms that solved problems we thought were impossible.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 5,
      name: "Lisa Thompson",
      company: "GreenTech Solutions",
      role: "Sustainability Officer",
      content: "Zion's Green IT solutions helped us reduce our carbon footprint by 30% while improving our technology infrastructure. Truly innovative approach.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 6,
      name: "Robert Wilson",
      company: "SpaceTech Ventures",
      role: "CEO",
      content: "The space technology solutions from Zion Tech Group are revolutionary. They helped us develop satellite systems that exceeded all our expectations.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-orange-500/10 text-orange-400 rounded-full text-sm font-medium mb-6">
            <Quote className="w-4 h-4 mr-2" />
            Client Success Stories
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover how Zion Tech Group has transformed businesses across industries 
            with our cutting-edge technology solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-slate-800/50 border border-white/10 rounded-xl p-6 hover:border-orange-500/50 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="flex -space-x-2 mr-4">
                  <img
                    className="w-12 h-12 rounded-full border-2 border-white/20"
                    src={testimonial.avatar}
                    alt={testimonial.name}
                  />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">{testimonial.name}</h4>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                  <p className="text-sm text-orange-400">{testimonial.company}</p>
                </div>
              </div>

              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>

              <blockquote className="text-gray-300 italic">
                "{testimonial.content}"
              </blockquote>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-600 to-red-600 text-white font-semibold rounded-lg hover:from-orange-700 hover:to-red-700 transition-all duration-300">
            <Quote className="w-5 h-5 mr-2" />
            Read More Success Stories
>>>>>>> origin/cursor/website-audit-and-enhancement-438b
          </div>
        </div>
      </div>
    </section>
  );
<<<<<<< HEAD
}
=======
};
>>>>>>> origin/cursor/website-audit-and-enhancement-438b
