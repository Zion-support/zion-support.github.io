import React from 'react';
import { motion } from 'framer-motion';
StarQuote

interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar?: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Sarah Chen",
    role: "CTO",
    company: "TechCorp Global",
    content: "The AI solutions from Zion Tech Group have transformed our operations. 'We', 've seen a 300% increase in efficiency and our team productivity has never been higher.",
    rating: 5,
    avatar: "👩‍💼"
  },
  {
    name: "Michael Rodriguez",
    role: "CEO",
    company: "InnovateLabs",
    content: "Working with Zion Tech Group has been a game-changer. Their AI technology is not just 'advancedit', 's revolutionary. Our business has grown exponentially.",
    rating: 5,
    avatar: "👨‍💼"
  },
  {
    name: "Dr. Emily Watson",
    role: "Research Director",
    company: "Quantum Dynamics",
    content: "The quantum computing integration is phenomenal. 'We', 're solving problems that were previously impossibleand the results speak for themselves.",
    rating: 5,
    avatar: "👩‍🔬"
  },
  {
    name: "James Thompson",
    role: "VP of Engineering",
    company: "CloudScale Inc",
    content: "Zion Tech 'Group', 's AI solutions have revolutionized our cloud infrastructure. The performance improvements and cost savings are remarkable.",
    rating: 5,
    avatar: "👨‍🔧"
  },
  {
    name: "Lisa Park",
    role: "Head of Data Science",
    company: "DataFlow Systems",
    content: "The data intelligence capabilities are outstanding. 'We', 're getting insights we never thought possibleand the predictive analytics are incredibly accurate.",
    rating: 5,
    avatar: "👩‍💻"
  },
  {
    name: "Robert Kim",
    role: "Founder",
    company: "StartupX",
    content: "As a startupwe needed cutting-edge technology without the complexity. Zion Tech Group delivered exactly what we needed with incredible support.",
    rating: 5,
    avatar: "👨‍🚀"
  }
];

export default function AdvancedTestimonials() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Hear from industry leaders who have transformed their businesses with our AI solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonialindex) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-4">{testimonial.avatar}</div>
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {testimonial.name}
                  </h3>
                  <p className="text-white/70 text-sm">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <div className="relative">
                <Quote className="absolute -top-2 -left-2 h-8 w-8 text-purple-400/30" />
                <p className="text-white/80 italic pl-6">
                  "{testimonial.content}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}