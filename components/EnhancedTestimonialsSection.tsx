import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, TrendingUp, Users, Award, CheckCircle } from 'lucide-react';







import { Star, Quote, Users, Award, TrendingUp, CheckCircle } from 'lucide-react';















                <Quote className="w-8 h-8" />;





  }
];

const stats = [
  { number: '500+', label: 'Enterprise Clients', icon: Users },
  { number: '99.9%', label: 'Uptime Guarantee', icon: CheckCircle },
  { number: '45%', label: 'Average Cost Reduction', icon: TrendingUp },
  { number: '10x', label: 'Performance Improvement', icon: Award }
];

const awards = [
  { name: 'AI Innovation Award 2025', organization: 'TechCrunch', icon: '🏆' },
  { name: 'Best Cybersecurity Platform', organization: 'RSA Conference', icon: '🛡️' },
  { name: 'Quantum Computing Excellence', organization: 'IEEE', icon: '⚛️' },
  { name: 'Healthcare AI Leader', organization: 'HIMSS', icon: '🏥' }
];

export default function EnhancedTestimonialsSection() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
            Customer Success Stories
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            See how leading companies are transforming their businesses with Zion Tech Group&apos;s revolutionary micro SAAS services
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 p-4 mx-auto mb-4 flex items-center justify-center">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-white/70">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Awards Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">Industry Recognition & Awards</h3>
            <p className="text-white/70">Recognized by leading organizations for innovation and excellence</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {awards.map((award, index) => (
              <motion.div
                key={award.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 rounded-lg p-6 text-center border border-white/10 hover:border-cyan-400/30 transition-all duration-300"
              >
                <div className="text-4xl mb-3">{award.icon}</div>
                <h4 className="font-semibold text-white mb-2">{award.name}</h4>
                <p className="text-white/60 text-sm">{award.organization}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
                <Quote className='w - 8 h - 8' />;
                <Quote className="w - 8 h - 8" />;








            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 text-cyan-400/20 text-4xl">
                <Quote />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-white/80 mb-6 leading-relaxed">
                  &ldquo;{testimonial.content}&rdquo;
                </blockquote>

                {/* Service Used */}
                <div className="mb-4">
                  <div className="text-xs text-cyan-400 mb-1">Service Used</div>
                  <div className="text-sm font-medium text-white">{testimonial.service}</div>
                </div>

                {/* Results */}
                <div className="mb-6">
                  <div className="text-xs text-green-400 mb-2">Key Results</div>
                  <div className="space-y-1">
                    {testimonial.results.map((result, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-white/70">
                        <CheckCircle className="w-3 h-3 text-green-400" />
                        {result}
                      </div>
                    ))}
                  </div>
                </div>


















            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:kleber@ziontechgroup.com?subject=Request for Customer Success Case Study"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              >
                Request Case Study
              </a>
              <a
                href="tel:+13024640950"
                className="px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm bg-white/5 hover:bg-white/10"
              >
                Speak with Sales
              </a>
            </div>
            <div className="mt-8 text-white/60">
              <p>See how we can help you achieve similar results</p>
              <p>Contact: <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">kleber@ziontechgroup.com</a> | <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300">+1 302 464 0950</a></p>
            </div>
          </div>
export default EnhancedTestimonialsSection);
export default EnhancedTestimonialsSection;



