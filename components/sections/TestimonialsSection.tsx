import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CTO, TechCorp',
      content: 'Zion Tech Group transformed our infrastructure with their cutting-edge AI solutions. The results exceeded our expectations.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'CEO, InnovateLab',
      content: 'Their quantum computing expertise helped us solve complex problems that seemed impossible. Truly revolutionary.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Director of Engineering, DataFlow',
      content: 'The cybersecurity solutions provided by Zion Tech Group gave us peace of mind and robust protection.',
      rating: 5
    }
  ];

  return (
    <section className='py-20 px-6 bg-gradient-to-r from-white/5 to-white/10'>
      <div className='max-w-7xl mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='text-center mb-16'
        >
          <h2 className='text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent'>
            What Our Clients Say
          </h2>
          <p className='text-xl text-white/70 max-w-3xl mx-auto'>
            Hear from industry leaders who have transformed their businesses with our technology solutions
          </p>
        </motion.div>
        
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className='relative p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300'
            >
              <Quote className='w-8 h-8 text-cyan-400 mb-4' />
              <p className='text-white/80 mb-6 leading-relaxed'>
                "{testimonial.content}"
              </p>
              <div className='flex items-center mb-4'>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className='w-5 h-5 text-yellow-400 fill-current' />
                ))}
              </div>
              <div>
                <div className='font-semibold text-white'>{testimonial.name}</div>
                <div className='text-white/60 text-sm'>{testimonial.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}