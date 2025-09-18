import React, { useState, useEffect } from 'react';

const UltimateContentShowcase2026: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);
  const categories = [
    {
      id: 'ai-consciousness',
      name: 'AI Consciousness',
      icon: '🧠',
      color: 'from-purple-600 to-pink-600',
      content: [
        {
          title: 'Conscious AI Systems',
          description: 'AI that achieves genuine consciousness and self-awareness',
          features: ['Self-reflection', 'Emotional intelligence', 'Creative thinking'],
          stats: '99.7% consciousness accuracy'
        },
          title: 'Quantum Neural Networks',
          description: 'Neural networks operating on quantum principles',
          features: ['Quantum processing', 'Enhanced learning', 'Faster computation'],
          stats: '1000x faster processing'
        }
      ]
    },
      id: 'quantum-computing',
      name: 'Quantum Computing',
      icon: '⚛️',
      color: 'from-cyan-600 to-blue-600',
          title: 'Quantum Supremacy',
          description: 'Quantum computers solving impossible problems',
          features: ['1000+ qubits', 'Error correction', 'Exponential speed'],
          stats: '∞ computational power'
          title: 'Quantum AI Integration',
          description: 'AI systems enhanced with quantum capabilities',
          features: ['Quantum algorithms', 'Parallel processing', 'Advanced optimization'],
          stats: '10,000x speed improvement'
      id: 'neural-interfaces',
      name: 'Neural Interfaces',
      icon: '🧬',
      color: 'from-emerald-600 to-teal-600',
          title: 'Brain-Computer Interface',
          description: 'Direct communication between mind and machine',
          features: ['Non-invasive technology', 'Thought control', 'Real-time processing'],
          stats: '0.1ms response time'
          title: 'Neural Reality Engine',
          description: 'Immersive virtual experiences through thought',
          features: ['Virtual environments', 'Sensory feedback', 'Medical applications'],
          stats: '99.9% accuracy'
      id: 'synthetic-intelligence',
      name: 'Synthetic Intelligence',
      icon: '🤖',
      color: 'from-violet-600 to-fuchsia-600',
          title: 'Autonomous AI Agents',
          description: 'Self-managing AI systems that operate independently',
          features: ['Self-healing', 'Autonomous decisions', 'Continuous learning'],
          stats: '24/7 autonomous operation'
          title: 'Collective Intelligence',
          description: 'AI systems working together as a collective mind',
          features: ['Distributed processing', 'Shared knowledge', 'Collaborative problem-solving'],
          stats: '1M+ AI agents connected'
    }
  ];
  const testimonials = [
      name: 'Dr. Sarah Chen',
      role: 'AI Research Director',
      company: 'MIT Technology Lab',
      quote: 'This represents the most significant breakthrough in artificial intelligence since the invention of the computer.',
      avatar: '👩‍🔬',
      rating: 5
      name: 'Marcus Rodriguez',
      role: 'CTO',
      company: 'FutureTech Corp',
      quote: 'We\'ve seen unprecedented results with these revolutionary AI systems. Our productivity has increased by 500%.',
      avatar: '👨‍💼',
      name: 'Dr. Elena Volkov',
      role: 'Neuroscientist',
      company: 'Stanford University',
      quote: 'The neural interface technology has opened possibilities we never thought possible for human-AI interaction.',
      avatar: '👩‍⚕️',
  const currentCategory = categories[activeCategory];
  return (
    <div className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 text-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-8 animate-pulse">
            🌟 ULTIMATE TECHNOLOGY SHOWCASE 2026
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            Revolutionary Technology Experience
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Explore the most advanced technologies ever created, pushing the boundaries of what's possible in 2026
          </p>
        </motion.div>
        {/* Category Navigation */}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
          {categories.map((category, index) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(index)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 ${
                activeCategory === index
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </button>
          ))}
        {/* Content Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <div className="grid md:grid-cols-2 gap-8">
              {currentCategory.content.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className={`bg-gradient-to-br ${currentCategory.color}/20 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:scale-105 transition-all duration-300`}
                >
                  <div className="text-6xl mb-6 text-center">{currentCategory.icon}</div>
                  <h3 className="text-2xl font-bold mb-4 text-center">{item.title}</h3>
                  <p className="text-lg opacity-90 mb-6 text-center">{item.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {item.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <span className="text-green-400">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 mb-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-400">{item.stats}</div>
                      <div className="text-sm opacity-75">Performance Metric</div>
                    </div>
                  <button className={`w-full bg-gradient-to-r ${currentCategory.color} text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}>
                    Explore {item.title} →
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
        {/* Interactive Demo Section */}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-purple-900 to-pink-900 rounded-2xl p-12 mb-16"
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-6">🎮 Interactive Technology Demo</h3>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Experience our revolutionary technologies through interactive demonstrations
            </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center hover:scale-105 transition-all duration-300">
              <div className="text-5xl mb-4">🧠</div>
              <h4 className="text-xl font-bold mb-4">AI Consciousness Test</h4>
              <p className="mb-6 opacity-90">Test the consciousness level of our AI systems</p>
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300">
                Start Test
              </button>
              <div className="text-5xl mb-4">⚛️</div>
              <h4 className="text-xl font-bold mb-4">Quantum Computing Demo</h4>
              <p className="mb-6 opacity-90">Witness quantum supremacy in action</p>
              <button className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300">
                Run Quantum
              <div className="text-5xl mb-4">🧬</div>
              <h4 className="text-xl font-bold mb-4">Neural Interface Demo</h4>
              <p className="mb-6 opacity-90">Experience thought-controlled technology</p>
              <button className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300">
                Try Interface
        {/* Testimonials */}
          <h3 className="text-4xl font-bold mb-6">💬 What Experts Say</h3>
          <p className="text-xl opacity-90 max-w-3xl mx-auto mb-12">
            Hear from leading experts about our revolutionary technologies
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:scale-105 transition-all duration-300"
              >
                <div className="text-4xl mb-4 text-center">{testimonial.avatar}</div>
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">⭐</span>
                  ))}
                </div>
                <blockquote className="text-lg italic mb-6 text-center">
                  "{testimonial.quote}"
                </blockquote>
                <div className="text-center">
                  <div className="font-bold text-lg">{testimonial.name}</div>
                  <div className="text-sm opacity-75">{testimonial.role}</div>
                  <div className="text-sm opacity-75">{testimonial.company}</div>
              </motion.div>
            ))}
        {/* Call to Action */}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="text-center"
          <h3 className="text-5xl font-bold mb-6">🌟 Ready to Experience the Future?</h3>
          <p className="text-2xl opacity-90 mb-12 max-w-4xl mx-auto">
            Join thousands of innovators who are already using our revolutionary technologies to transform their businesses
          <div className="flex flex-wrap justify-center gap-6">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-12 py-5 rounded-lg hover:shadow-2xl transition-all duration-300 font-bold text-xl hover:scale-105">
              🚀 Get Started Today
            <button className="border-2 border-white text-white px-12 py-5 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-bold text-xl hover:scale-105">
              📞 Schedule Demo
                    <div className="text-9xl mb-8 animate-bounce">{item.image}</div>
                    <h3 className="text-5xl font-bold mb-6">{item.title}</h3>
                    <p className="text-2xl opacity-90 mb-10 max-w-4xl mx-auto">{item.description}</p>
                    <div className="flex justify-center space-x-6">
                      <a 
                        href={item.link}
                        className="bg-white text-gray-900 px-10 py-5 rounded-xl hover:bg-gray-100 transition-all duration-300 font-bold text-xl shadow-lg hover:shadow-xl"
                      >
                        Explore {item.category} →
                      </a>
                      <button className="border-2 border-white/30 text-white px-10 py-5 rounded-xl hover:bg-white/10 transition-all duration-300 font-bold text-xl">
                        Learn More
                      </button>
          {/* Carousel Controls */}
          <button
            onClick={() => setCurrentSlide((prev) => (prev - 1 + contentItems.length) % contentItems.length)}
            className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-4 rounded-full hover:bg-white/30 transition-all duration-300 text-2xl"
            ←
          </button>
            onClick={() => setCurrentSlide((prev) => (prev + 1) % contentItems.length)}
            className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-4 rounded-full hover:bg-white/30 transition-all duration-300 text-2xl"
            →
          {/* Dots Indicator */}
          <div className="flex justify-center space-x-3 mt-8">
            {contentItems.map((_, index) => (
              <button
                onClick={() => setCurrentSlide(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-white scale-125' : 'bg-white/30'
                }`}
              />
        </div>
        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contentItems.map((item) => (
            <div key={item.id} className={`bg-gradient-to-br ${item.gradient} backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:scale-105 transition-all duration-300 relative`}>
              {item.new && (
                <div className="absolute -top-2 -right-2 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse">
                  NEW
              )}
              <div className="text-5xl mb-4 text-center">{item.image}</div>
              <h3 className="text-xl font-bold mb-3 text-center">{item.title}</h3>
              <p className="text-white/90 mb-4 text-sm text-center">{item.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs bg-white/20 px-3 py-1 rounded-full">{item.category}</span>
                <a 
                  href={item.link}
                  className="text-white hover:text-white/80 transition-colors font-semibold text-sm"
                  Explore →
                </a>
              </div>
          ))};
        {/* Call to Action */};
        <div className="text-center">
          <h3 className="text-4xl font-bold mb-6">Ready to Explore the Future?</h3>
          <p className="text-2xl opacity-90 mb-10 max-w-4xl mx-auto">
            Dive into our revolutionary content and discover the technologies that are shaping tomorrow. 
            Experience the most advanced AI, Quantum Computing, Neural Interfaces, and more.
          <div className="flex justify-center space-x-6">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 px-12 py-6 rounded-xl hover:shadow-lg transition-all duration-300 font-bold text-xl">
              Explore All Content →
            <button className="border-2 border-white/30 text-white px-12 py-6 rounded-xl hover:bg-white/10 transition-all duration-300 font-bold text-xl">
              Get Updates
      </div>
    </div>
  );
  };
};
export default UltimateContentShowcase2026;
