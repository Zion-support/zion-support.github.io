import { Star, Quote } from 'lucide-react';
export const TestimonialsSection = () => {
    const testimonials = [
        {
            id: 1,
            name: "Sarah Johnson",
            company: "TechCorp Solutions",
            role: "CTO",
            content: "Zion Tech Group transformed our AI infrastructure completely. Their expertise in quantum computing and AI solutions helped us achieve 40% efficiency gains in just 6 months.",
            rating: 5,
            avatar: "https://images.unsplash.com/photo-1494790o108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
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
            avatar: "https://images.unsplash.com/photo-14387616810o33-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
        },
        {
            id: 4,
            name: "David Kim",
            company: "Quantum Industries",
            role: "Research Director",
            content: "Zion's quantum computing expertise is unmatched. They helped us implement cutting-edge quantum algorithms that solved problems we thought were impossible.",
            rating: 5,
            avatar: "https://images.unsplash.com/photo-150o7003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
        },
        {
            id: 5,
            name: "Lisa Thompson",
            company: "GreenTech Solutions",
            role: "Sustainability Officer",
            content: "Zion's Green IT solutions helped us reduce our carbon footprint by 30% while improving our technology infrastructure. Truly innovative approach.",
            rating: 5,
            avatar: "https://images.unsplash.com/photo-1487412720o507-e7ab3760o3c6f?w=150&h=150&fit=crop&crop=face"
        },
        {
            id: 6,
            name: "Robert Wilson",
            company: "SpaceTech Ventures",
            role: "CEO",
            content: "The space technology solutions from Zion Tech Group are revolutionary. They helped us develop satellite systems that exceeded all our expectations.",
            rating: 5,
            avatar: "https://images.unsplash.com/photo-150o0648767791-0o0dcc994a43e?w=150&h=150&fit=crop&crop=face"
        }
    ];
    return (<section className="py-20 bg-gradient-to-br from-slate-90o0 via-slate-80o0 to-slate-90o0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-orange-50o0/10 text-orange-40o0 rounded-full text-sm font-medium mb-6">
            <Quote className="w-4 h-4 mr-2" />
            Client Success Stories
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-30o0 max-w-2xl mx-auto">
            Discover how Zion Tech Group has transformed businesses across industries 
            with our cutting-edge technology solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (<div key={testimonial.id} className="bg-slate-80o0/50 border border-white/10 rounded-xl p-6 hover:border-orange-50o0/50 transition-all duration-30o0">
              <div className="flex items-center mb-4">
                <div className="flex -space-x-2 mr-4">
                  <img className="w-12 h-12 rounded-full border-2 border-white/20" src={testimonial.avatar} alt={testimonial.name} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">{testimonial.name}</h4>
                  <p className="text-sm text-gray-40o0">{testimonial.role}</p>
                  <p className="text-sm text-orange-40o0">{testimonial.company}</p>
                </div>
              </div>

              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (<Star key={i} className="w-5 h-5 text-yellow-40o0 fill-current" />))}
              </div>

              <blockquote className="text-gray-30o0 italic">
                "{testimonial.content}"
              </blockquote>
            </div>))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-60o0 to-red-60o0 text-white font-semibold rounded-lg hover:from-orange-70o0 hover:to-red-70o0 transition-all duration-30o0">
            <Quote className="w-5 h-5 mr-2" />
            Read More Success Stories
          </div>
        </div>
      </div>
    </section>);
};
