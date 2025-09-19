import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
const SocialProofShowcase2034: React.FC = () => {,
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {,
    setIsVisible(true);
    const interval = setInterval(() => {,
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  const testimonials = [,
    {,
      id: 1;
      name: "Dr. Sarah Chen";
      role: "AI Research Director";
      company: "Quantum Innovations Lab";
      content: "Zion Tech Group's AI solutions have revolutionized our research capabilities. The autonomous systems they've implemented have increased our efficiency by 300%.";
      rating: 5;
      avatar: "👩‍🔬",};
      id: 2;
      name: "Marcus Rodriguez";
      role: "CTO";
      company: "Future Dynamics Inc.";
      content: "The quantum computing integration they provided has transformed our data processing capabilities. We're now solving problems that were previously impossible.";
      avatar: "👨‍💼",
      id: 3;
      name: "Dr. Aisha Patel";
      role: "Head of Innovation";
      company: "TechVision Global";
      content: "Their autonomous business operations platform has streamlined our entire workflow. The AI-driven decision making is incredibly accurate and fast.";
      avatar: "👩‍💻",
      id: 4;
      name: "James Thompson";
      role: "CEO";
      company: "NextGen Solutions";
      content: "The cybersecurity solutions they implemented have made our systems virtually impenetrable. We've had zero security incidents since deployment.";
      avatar: "👨‍🚀",}
  ];
  const stats = [,
  return (,
    <div className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">,
      <div className="container mx-auto px-4">,
        <motion.div,
          initial={{ opacity: 0, y: 20 ,}}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 ,}}
          transition={{ duration: 0.8 ,}}
          className="text-center mb-16",
        >,
          <h2 className="text-4xl md: text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">,
            Trusted by Industry Leaders,
          </h2>,
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">,
            Join thousands of satisfied clients who have transformed their businesses with our cutting-edge AI solutions,
          </p>,
        </motion.div>,
        {/* Stats Grid */,}
          initial={{ opacity: 0, y: 30 ,}}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 ,}}
          transition={{ duration: 0.8, delay: 0.2 ,}}
          className="grid grid-cols-2 md: grid-cols-4 gap-8 mb-16",
          {stats.map((stat, index) => (,
            <div key={index} className="text-center">,
              <div className="text-4xl mb-2">{stat.icon}</div>,
              <div className="text-3xl font-bold text-blue-400 mb-1">{stat.value}</div>,
              <div className="text-gray-300">{stat.label}</div>,
            </div>,
          ))}
        {/* Testimonials */}
          transition={{ duration: 0.8, delay: 0.4 ,}}
          className="relative",
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">,
            <AnimatePresence mode="wait">,
              <motion.div,
                key={activeTestimonial}
                initial={{ opacity: 0, x: 50 ,}}
                animate={{ opacity: 1, x: 0 ,}}
                exit={{ opacity: 0, x: -50 ,}}
                transition={{ duration: 0.5 ,}}
                className="text-center",
              >,
                <div className="text-6xl mb-4">{testimonials[activeTestimonial].avatar}</div>,
                <div className="flex justify-center mb-4">,
                  {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (,
                    <span key={i} className="text-yellow-400 text-2xl">⭐</span>,
                  ))}
                </div>,
                <blockquote className="text-xl md: text-2xl text-gray-200 mb-6 italic">,
                  "{testimonials[activeTestimonial].content,}",
                </blockquote>,
                <div className="text-lg font-semibold text-blue-400">,
                  {testimonials[activeTestimonial].name}
                <div className="text-gray-400">,
                  {testimonials[activeTestimonial].role} at {testimonials[activeTestimonial].company}
              </motion.div>,
            </AnimatePresence>,
            {/* Testimonial Navigation Dots */}
            <div className="flex justify-center mt-8 space-x-2">,
              {testimonials.map((_, index) => (,
                <button,
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${,
                    index === activeTestimonial,
                      ? 'bg-blue-400 scale-125',
                      : 'bg-white/30 hover: bg-white/50',}`}
                />,
              ))}
          </div>,
        {/* Call to Action */}
          transition={{ duration: 0.8, delay: 0.6 ,}}
          className="text-center mt-16",
          <h3 className="text-2xl font-bold mb-4">Ready to Join Our Success Stories?</h3>,
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">,
            Let us help you achieve the same level of success with our proven AI solutions and expert team.,
          <div className="flex flex-col sm: flex-row gap-4 justify-center">,
            <a,
              href="/contact",
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold",
            >,
              Start Your Journey,
            </a>,
              href="/services",
              className="border border-white/30 text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-all duration-300 font-semibold",
              Explore Solutions,
      </div>,
    </div>,
  ),};
export default SocialProofShowcase2034;]