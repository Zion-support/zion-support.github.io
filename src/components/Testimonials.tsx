import React from 'react.ts';
import { motion } from 'framer-motion.ts';
import { Star, Users } from 'lucide-react.ts';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  rating: number;
  avatar: string;
}

interface TestimonialsProps extends React.PropsWithChildren<{}> {

  testimonials: Testimonial[];
}

export function Testimonials(...args: any[]): any {

  return()
    <section className="py-20 bg-gray-800">"
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">"
        <div className="text-center mb-16">
          <motion.h2"
            className="text-4xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            What Our Clients Say
          </motion.h2>
          <motion.p"
            className="text-xl text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Trusted by leading companies worldwide
          </motion.p>
        </div>
"
        <div className="grid grid-cols-1 md: anygrid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}"
              className="group bg-gray-900 rounded-xl p-8 border border-gray-700 hover:border-cyan-500/30 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300"
              whileHover={{ y: -5 }}
            >"
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3, delay: i * 0.1 }}
                  >"
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  </motion.div>
                ))}
              </div>

              <motion.blockquote"
                className="text-gray-300 mb-6 italic leading-relaxed group-hover:text-gray-200 transition-colors"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >"
                "{testimonial.quote}"
              </motion.blockquote>
"
              <div className="flex items-center space-x-4">
                <motion.div"
                  className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >"
                  <Users className="w-6 h-6 text-white" />
                </motion.div>
                <div>"
                  <div className="font-semibold text-white group-hover:text-cyan-400 transition-colors">
                    {testimonial.author}
                  </div>"
                  <div className="text-sm text-gray-400">
                    {testimonial.role}
                  </div>"
                  <div className="text-sm text-cyan-400 font-medium">
                    {testimonial.comp}
                  </div>
                </div>
              </div>
            </motion.div>) ) }
        </div>
      </div>
    </section>) ;
}

export default Testimonials;
'"