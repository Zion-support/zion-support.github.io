import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  company: string;
  role: string;
  content: string;
  rating: number;
  avatar?: string;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Sarah Johnson',
      company: 'TechCorp Solutions',
      role: 'CEO',
      content: 'Zion Tech Group transformed our entire digital infrastructure. Their AI solutions increased our efficiency by 300% and their team\'s expertise is unmatched.',
      rating: 5,
      avatar: 'SJ',
    },
    {
      id: 2,
      name: 'Michael Chen',
      company: 'DataFlow Inc',
      role: 'CTO',
      content: 'The cybersecurity solutions provided by Zion Tech have been exceptional. We\'ve had zero security incidents since implementation, and their 24/7 support is outstanding.',
      rating: 5,
      avatar: 'MC',
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      company: 'CloudScale Systems',
      role: 'VP of Engineering',
      content: 'Their cloud migration service was flawless. We reduced our infrastructure costs by 40% while improving performance. Highly recommend their services.',
      rating: 5,
      avatar: 'ER',
    },
    {
      id: 4,
      name: 'David Thompson',
      company: 'InnovateLabs',
      role: 'Founder',
      content: 'The micro SaaS platform they built for us has been a game-changer. It\'s scalable, reliable, and has generated significant recurring revenue for our business.',
      rating: 5,
      avatar: 'DT',
    },
    {
      id: 5,
      name: 'Lisa Wang',
      company: 'AnalyticsPro',
      role: 'Data Director',
      content: 'Their data analytics solutions provided insights we never knew existed. The custom dashboards and reporting tools have revolutionized our decision-making process.',
      rating: 5,
      avatar: 'LW',
    },
    {
      id: 6,
      name: 'James Wilson',
      company: 'SecureNet Corp',
      role: 'IT Director',
      content: 'Outstanding IT services and support. Their team is professional, knowledgeable, and always available when we need them. They\'ve become an extension of our team.',
      rating: 5,
      avatar: 'JW',
    },
  ];

  return (
    <div className="py-20 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our satisfied clients have to say about working with us.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 hover:bg-gray-800/70 transition-all duration-300 border border-gray-700/50 hover:border-cyan-400/50 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center text-black font-bold text-lg mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{testimonial.name}</h3>
                  <p className="text-gray-400 text-sm">{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>

              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <div className="relative">
                <Quote className="absolute -top-2 -left-2 w-8 h-8 text-cyan-400/20" />
                <p className="text-gray-300 leading-relaxed pl-6">
                  "{testimonial.content}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">98%</div>
            <div className="text-gray-400">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">500+</div>
            <div className="text-gray-400">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">100+</div>
            <div className="text-gray-400">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">5+</div>
            <div className="text-gray-400">Years Experience</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;
