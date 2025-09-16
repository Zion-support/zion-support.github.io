import React from 'react';
import { motion } from 'framer-motion';

const SocialProofShowcase2025: React.FC = () => {
  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      title: "CEO, Quantum Dynamics Inc.",
      company: "Fortune 500",
      image: "👩‍💼",
      quote: "Zion Tech Group's revolutionary AI solutions increased our productivity by 400% and reduced operational costs by 60%. This is the future of business.",
      rating: 5,
      results: "+400% Productivity"
    },
    {
      name: "Marcus Rodriguez",
      title: "CTO, Neural Networks Corp",
      company: "Tech Leader",
      image: "👨‍💻",
      quote: "The quantum consciousness technology they provided has transformed our research capabilities. We're now solving problems that were impossible before.",
      rating: 5,
      results: "Impossible → Possible"
    },
    {
      name: "Dr. Emily Watson",
      title: "Director, Space Exploration",
      company: "NASA Partner",
      image: "👩‍🚀",
      quote: "Their interdimensional computing solutions enabled us to process space data 1000x faster. We're now exploring galaxies we never thought possible.",
      rating: 5,
      results: "1000x Faster Processing"
    },
    {
      name: "James Thompson",
      title: "Founder, Future Tech Labs",
      company: "Innovation Hub",
      image: "👨‍🔬",
      quote: "The neural interface technology has revolutionized how we interact with computers. It's like having a direct connection to the digital world.",
      rating: 5,
      results: "Direct Neural Control"
    },
    {
      name: "Dr. Lisa Park",
      title: "Head of Research",
      company: "Global Energy Corp",
      image: "👩‍🔬",
      quote: "Their zero-point energy technology has solved our energy crisis completely. We now have unlimited clean power for the entire planet.",
      rating: 5,
      results: "Unlimited Clean Energy"
    },
    {
      name: "Alex Kumar",
      title: "VP Innovation",
      company: "Reality Systems Inc",
      image: "👨‍💼",
      quote: "The reality manipulation technology has opened up possibilities we never imagined. We can now create and modify physical reality itself.",
      rating: 5,
      results: "Reality Control"
    }
  ];

  const stats = [
    { number: "10,000+", label: "Happy Clients", description: "Worldwide" },
    { number: "99.9%", label: "Success Rate", description: "Implementation" },
    { number: "500+", label: "Technologies", description: "Available" },
    { number: "24/7", label: "Expert Support", description: "Always Available" },
    { number: "∞", label: "Possibilities", description: "For Your Future" },
    { number: "2025", label: "Revolution", description: "Happening Now" }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-blue-900 rounded-2xl p-12 mb-12 text-white"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 backdrop-blur-sm"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-purple-500/20 to-transparent rounded-full blur-3xl"></div>
      
      <div className="relative z-10">
        <div className="text-center mb-12">
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse"
          >
            🌟 SOCIAL PROOF • JANUARY 2025
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
          >
            Trusted by Industry Leaders
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl opacity-90 max-w-4xl mx-auto mb-8"
          >
            See how industry leaders and innovators are transforming their businesses with our revolutionary technologies
          </motion.p>
        </div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-3xl font-bold text-blue-400 mb-2">{stat.number}</div>
              <div className="text-lg font-semibold mb-1">{stat.label}</div>
              <div className="text-blue-200 text-sm">{stat.description}</div>
            </div>
          ))}
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
              className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-6 border border-blue-400/30 hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-4">{testimonial.image}</div>
                <div>
                  <div className="font-semibold text-lg">{testimonial.name}</div>
                  <div className="text-blue-200 text-sm">{testimonial.title}</div>
                  <div className="text-blue-300 text-xs">{testimonial.company}</div>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">⭐</span>
                ))}
              </div>
              
              <blockquote className="text-blue-100 mb-4 italic">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="bg-green-500/20 rounded-lg p-3 text-center">
                <div className="text-green-400 font-semibold text-sm">{testimonial.results}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-8"
        >
          <h3 className="text-3xl font-bold mb-4">Join the Revolution</h3>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Be part of the most successful technology transformation in history. 
            Join thousands of satisfied clients who are already experiencing the future.
          </p>
          <div className="flex justify-center space-x-4">
            <a 
              href="/pages/RevolutionaryTechShowcase2025"
              className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg"
            >
              Start Your Success Story →
            </a>
            <a 
              href="/pages/UltimateTechRevolution2025"
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-900 transition-all duration-300 font-semibold text-lg"
            >
              View Case Studies
            </a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SocialProofShowcase2025;