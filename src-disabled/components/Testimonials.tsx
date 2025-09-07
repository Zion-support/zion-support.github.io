import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
interface Testimonial {
  id: number;,
  name: string;,
  company: string;,
  role: string;,
  content: string;,
  rating: number;,
  avatar?: string;
}
const Testimonials: React.FC = () => {,
  const testimonials: Testimonial[] = [,
    {
      id: 1,

  ];
  return (

          initial={ opacity: 0, y: 30 }
          whileInView={ opacity: 1, y: 0 }
          transition={ duration: 0.8 }
          viewport={ once: true }
        >

          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">"
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 hover:bg-gray-800/70 transition-all duration-300 border border-gray-700/50 hover:border-cyan-400/50 group"",
              initial={ opacity: 0, y: 30 }
              whileInView={ opacity: 1, y: 0 }
              transition={ duration: 0.6, delay: index * 0.1 }
              viewport={ once: true }
            >
              <div className="flex items-center mb-6">"
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center text-black font-bold text-lg mr-4">"
                  {testimonial.avatar}
                </div>
                <div>

                </div>
              </div>
              <div className="flex items-center mb-4">"
                {[...Array(testimonial.rating)].map((_, i) => (

                ))}
              </div>
              <div className="relative">"
                <Quote className="absolute -top-2 -left-2 w-8 h-8 text-cyan-400/20" />"
                <p className="text-gray-300 leading-relaxed pl-6">"
                  "{testimonial.content}""
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        {/* Stats */}
        <motion.div

          initial={ opacity: 0, y: 30 }
          whileInView={ opacity: 1, y: 0 }
          transition={ duration: 0.8, delay: 0.2 }
          viewport={ once: true }
        >
          <div className="text-center">"
            <div className="text-4xl font-bold text-white mb-2">98%</div>"
            <div className="text-gray-400">Client Satisfaction</div>"
          </div>
          <div className="text-center">"
            <div className="text-4xl font-bold text-white mb-2">500+</div>"
            <div className="text-gray-400">Projects Completed</div>"
          </div>
          <div className="text-center">"
            <div className="text-4xl font-bold text-white mb-2">100+</div>"
            <div className="text-gray-400">Happy Clients</div>"
          </div>
          <div className="text-center">"
            <div className="text-4xl font-bold text-white mb-2">5+</div>"
            <div className="text-gray-400">Years Experience</div>"
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;