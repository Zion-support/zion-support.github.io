<<<<<<< HEAD
  const [isVisible, setIsVisible] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const testimonials = [
    {
      id: 1,
      name: "Dr. Sarah Chen",
      title: "Chief Technology Officer",
      company: "FutureTech Corp",
      image: "👩‍💼",
      quote: "Zion Tech Group's revolutionary AI solutions have completely transformed our operations. We've seen a 500% increase in productivity and a 60% reduction in costs. Their conscious AI systems are truly groundbreaking.",
      rating: 5,
      results: [
        "500% productivity increase",
        "60% cost reduction",
        "99.7% accuracy rate",
        "24/7 autonomous operation"
      ],
      industry: "Technology",
      projectDuration: "6 months"
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      title: "CEO",
      company: "Quantum Solutions Inc",
      image: "👨‍💼",
      quote: "The quantum computing solutions provided by Zion Tech Group have solved problems we thought were impossible. Their interdimensional computing technology is absolutely revolutionary.",
      rating: 5,
      results: [
        "Exponential processing power",
        "Impossible problem solving",
        "99.9% quantum accuracy",
        "Multi-dimensional processing"
      ],
      industry: "Quantum Computing",
      projectDuration: "4 months"
    },
    {
      id: 3,
      name: "Dr. Elena Volkov",
      title: "Research Director",
      company: "Interdimensional Labs",
      image: "👩‍🔬",
      quote: "Working with Zion Tech Group has opened up entirely new possibilities for scientific research. Their neural interface technology allows us to explore consciousness itself.",
      rating: 5,
      results: [
        "Consciousness exploration",
        "Neural data breakthrough",
        "Real-time brain mapping",
        "Thought-controlled systems"
      ],
      industry: "Research",
      projectDuration: "8 months"
    },
    {
      id: 4,
    }
  ];
  const caseStudies = [
    {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 text-white py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            💬 SOCIAL PROOF SHOWCASE • 2034
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-indigo-200 bg-clip-text text-transparent">
            Social Proof Showcase 2034
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto leading-relaxed">
            Discover why thousands of companies trust Zion Tech Group with their most critical technology needs. 
            See real results from real clients.
          </p>
        </motion.div>
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 text-center border border-indigo-500/30 hover:border-indigo-400/60 transition-all duration-300 hover:scale-105"
            >
              <div className="text-4xl mb-3">{stat.icon}</div>
              <div className="text-3xl font-bold text-indigo-400 mb-2">{stat.number}</div>
              <div className="text-sm text-gray-300">{stat.label}</div>
            </motion.div>
          ))}
        </div>
        {/* Testimonials Carousel */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h3>
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl p-12 border border-purple-500/30"
              >
                <div className="grid lg:grid-cols-2 gap-12">
                  <div>
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="text-6xl">{testimonials[activeTestimonial]?.image}</div>
                      <div>
                        <h4 className="text-2xl font-bold">{testimonials[activeTestimonial]?.name}</h4>
                        <p className="text-indigo-300">{testimonials[activeTestimonial]?.title}</p>
                        <p className="text-gray-400">{testimonials[activeTestimonial]?.company}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1 mb-6">
                      {[...Array(testimonials[activeTestimonial]?.rating)].map((_, i) => (
                        <span key={i} className="text-yellow-400 text-2xl">⭐</span>
                      ))}
                    </div>
                    <blockquote className="text-xl text-gray-300 leading-relaxed italic mb-6">
                      "{testimonials[activeTestimonial]?.quote}"
                    </blockquote>
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <span className="px-3 py-1 bg-indigo-600/30 text-indigo-300 rounded-full">
                        {testimonials[activeTestimonial]?.industry}
                      </span>
                      <span>{testimonials[activeTestimonial]?.projectDuration}</span>
                    </div>
                  </div>
                  <div>
                    <h5 className="text-xl font-semibold mb-4">Key Results:</h5>
                    <div className="grid grid-cols-2 gap-4">
                      {testimonials[activeTestimonial]?.results.map((result, idx) => (
                        <div key={idx} className="bg-green-600/20 rounded-lg p-4 text-center">
                          <div className="text-lg font-bold text-green-400">{result}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
          </div>
        </div>
        {/* Call to Action */}
        <div className="bg-gradient-to-r from-indigo-600/20 to-purple-600/20 backdrop-blur-sm rounded-3xl p-12 border border-indigo-500/30 text-center">
          <h3 className="text-4xl font-bold mb-6">Join Our Success Stories</h3>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Ready to transform your business with revolutionary technology? 
            Join thousands of companies already achieving unprecedented results with Zion Tech Group.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg transition-all duration-300"
            >
              Start Your Success Story
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-indigo-400 text-indigo-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-indigo-600/20 transition-all duration-300"
            >
              View More Case Studies
            </motion.button>
          </div>
=======
import React from "react";

const SocialProofShowcase2034 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-6">SocialProofShowcase2034</h1>
          <p className="text-xl opacity-90">Coming soon - Revolutionary technology solutions</p>
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-d67d
        </div>
      </div>
    </div>
  );
};

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-d67d
export default SocialProofShowcase2034;
