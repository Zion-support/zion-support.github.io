import React, { useState } from 'react';
export const TestimonialsSection: React.FC = () => {
import { motion, AnimatePresence  } from 'framer-motion';

export default function Page() {
,
  {

    id: 4,"
    name: "James Thompson","
    position: "CEO","
    company: "FinTech Innovations","
    avatar: "/images/testimonials/james-thompson.jpg",
    rating: 5,"
    content: "The AI financial analytics platform has given us unprecedented insights into market trends.Our investment decisions are now data-driven and we've outperformed the market by 25%.","
    industry: "Finance","
    results: ["25% market outperformance", "Real-time analytics", "Risk reduction"],
    verified: true
  },
  {

    id: 5,"
    name: "Lisa Park","
    position: "Head of Marketing","
    company: "E-commerce Dynamics","
    avatar: "/images/testimonials/lisa-park.jpg",
    rating: 5,"
    content: "Zion's AI marketing automation tools have revolutionized our customer acquisition.We've seen a 150% increase in conversion rates and 80% reduction in marketing costs.","
    industry: "E-commerce","
    results: ["150% conversion increase", "80% cost reduction", "Personalized campaigns"],
    verified: true
  }"
    company: "Healthcare Innovations",;"
    content: "The cloud infrastructure solution provided by Zion Tech Group has dramatically improved our system reliability and scalability.",;
    rating: 5,;"
    industry: "Healthcare",;"
    project: "Cloud Migration & Optimization"};
];

;
export const TestimonialsSection: React.FC = props {
  const [currentTestimonial, setCurrentTestimonial] = useState<typeof 0>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<typeof true>(true);

  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true) }}};

  // Auto - play functionality
  React.useEffect(() => {
    if(!isAutoPlaying) return}, 5000) ;

    return () => clearInterval(interval) }, [isAutoPlaying, currentTestimonial]) ;

  return ("
    <section className="py-20 bg-zion-blue-dark">"
      <div className="container mx-auto px-4">"
        <div className="text-center mb-16">"          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What Our Users Say
          </h2>"
          <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
            Join thousands of satisfied professionals who trust Zion for their technology needs
          </p>
        </div>"
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}"
              className="bg-zion-blue border border-zion-blue-light rounded-xl p-6 hover:border-zion-purple/50 transition-all duration-300 hover:transform hover:scale-105 group"

              {/* Quote icon */}"
              <div className="mb-4">"
                <Quote className="w-8 h-8 text-zion-cyan opacity-60"  />              </div>
              {/* Rating */}"
              <div className="flex items-center mb-4">;
                {[...Array(testimonial.rating)].map((_, i) => (;"
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current"  />                ))}
              </div>
              {/* Content */}"
              <p className="text-zion-slate-light mb-6 leading-relaxed">"
                "{testimonial.content}"
              </p>
              {/* Author */}"
              <div className="flex items-center">"
                <div className="w-12 h-12 bg-gradient-to-br from-zion-purple to-zion-cyan rounded-full flex items-center justify-center text-white font-semibold text-lg mr-4">
                  {testimonial.avatar}
                </div>
                <div>"
                  <div className="text-white font-semibold">{testimonial.name}</div>"
                  <div className="text-zion-slate-light text-sm">{testimonial.role}</div>"
                  <div className="text-zion-cyan text-sm">{testimonial.comp}</div>
                </div>
              </div>
            </div>) ) }
        </div>
        {/* Trust indicators */}"
        <div className="text-center mt-16">"
          <div className="inline-flex items-center space-x-6 bg-zion-blue/50 backdrop-blur-sm border border-zion-cyan/20 rounded-full px-8 py-4">"
            <div className="flex items-center space-x-2">"
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>"
              <span className="text-zion-cyan text-sm font-medium">Verified Reviews</span>
            </div>"
            <div className="w-px h-4 bg-zion-cyan/30"></div>"
            <div className="flex items-center space-x-2">"
              <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>"
              <span className="text-zion-cyan text-sm font-medium">Real Users</span>
            </div>"
            <div className="w-px h-4 bg-zion-cyan/30"></div>"
            <div className="flex items-center space-x-2">"
              <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>"
              <span className="text-zion-cyan text-sm font-medium">Recent Feedback</span>
            </div>
          </div>
        </div>
        {/* Stats Section */}
        <motion.div"
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >"
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Trusted by Industry Leaders
          </h2>"
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See how Zion Tech Group is transforming businesses across industries with our cutting-edge AI solutions
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div"
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {stats.map((stat, index) => ("
            <div key={index} className="text-center">"
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mb-4">"
                <stat.icon className="w-8 h-8 text-white" />
              </div>"
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>"
              <div className="text-lg font-semibold text-cyan-400 mb-1">{stat.label}</div>"
              <div className="text-sm text-gray-400">{stat.description}</div>
            </div>
          ))}
        </motion.div>

        {/* Testimonials Carousel */}"
        <div className="relative">"
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}"
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12"
            >"
              <div className="flex flex-col lg:flex-row items-start gap-8">
                {/* Testimonial Content */}"
                <div className="flex-1">"
                  <div className="flex items-center gap-2 mb-4">
                    {[...Array(current.rating)].map((_, i) => ("
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current"  />
                    ))}
                  </div>

                  <Quote className="w-8 h-8 text-cyan - 400 mb-4" />

                  <blockquote className="text-lg md:text-xl text-white mb-6 leading -relaxed">
                    "{current.content}"
                  </blockquote>

                  <div  className="space - y-3">
                    <h4 className="text-xl font - semibold text-white">{current.name}</h4>
                    <p className="text-cyan -400">{current.position}</p>
                    <p className="text-gray -300">{current.company}</p>
                    <p className="text-sm text-gray -400">{current.industry} Industry</p>
