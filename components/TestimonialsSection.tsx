import React from &apos;react&apos;;
import { motion } from &apos;framer-motion&apos;;
import { Card, CardContent } from &apos;./ui/Card&apos;;
import { Star } from &apos;lucide-react&apos;;

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: &apos;Sarah Johnson&apos;,
      role: &apos;CEO&apos;,
      company: &apos;TechStart Inc.&apos;,
      content: &apos;Zion Tech Group transformed our entire digital infrastructure. Their AI solutions increased our efficiency by 40% and their cloud migration was seamless.&apos;,
      rating: 5,
      avatar: &apos;/api/placeholder/64/64&apos;},
    {
      name: &apos;Michael Chen&apos;,
      role: &apos;CTO&apos;,
      company: &apos;DataCorp&apos;,
      content: &apos;The cybersecurity audit they performed saved us from a potential breach. Their expertise and attention to detail are unmatched.&apos;,
      rating: 5,
      avatar: &apos;/api/placeholder/64/64&apos;},
    {
      name: &apos;Emily Rodriguez&apos;,
      role: &apos;VP of Operations&apos;,
      company: &apos;GrowthCo&apos;,
      content: &apos;Their custom development team delivered exactly what we needed, on time and within budget. Highly recommend their services.&apos;,
      rating: 5,
      avatar: &apos;/api/placeholder/64/64&apos;}
  ]
  return(
    <section className=&apos;py-20 bg-white&apos;>
      <div className=&apos;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&apos;>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className=&apos;text-center mb-16&apos;>
          <h2 className=&apos;text-3xl md:text-4xl font-bold text-gray-900 mb-4&apos;>
            What Our Clients Say
          </h2>
          <p className=&apos;text-xl text-gray-600 max-w-3xl mx-auto&apos;>
            Don&apos;t just take our word for it. Here&apos;s what our satisfied clients have to say about working with us.
          </p>
        </motion.div>
        <div className=&apos;grid grid-cols-1 md:grid-cols-3 gap-8&apos;>
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className=&apos;h-full hover:shadow-lg transition-shadow duration-300&apos;>
                <CardContent className=&apos;p-6&apos;>
                  <div className=&apos;flex items-center mb-4&apos;>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className=&apos;h-5 w-5 text-yellow-400 fill-current&apos; />
                    ))}
                  </div>
                  <blockquote className=&apos;text-gray-600 mb-6 italic&apos;>
                    &apos;{testimonial.content}&apos;
                  </blockquote>
                  <div className=&apos;flex items-center&apos;>
                    <div className=&apos;w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-4&apos;>
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <div className=&apos;font-semibold text-gray-900&apos;>{testimonial.name}</div>
                      <div className=&apos;text-sm text-gray-500&apos;>{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )}
;
export default TestimonialsSection