import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SocialProofShowcase2034: React.FC = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
<<<<<<< HEAD
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);
=======
  const [activeCaseStudy, setActiveCaseStudy] = useState(0);
>>>>>>> 5f981bfed50f1b4438a68f32bfef027a9e9cb244

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
<<<<<<< HEAD
      name: "James Thompson",
      title: "CTO",
      company: "Global Manufacturing Co",
      image: "👨‍🔧",
      quote: "The AI-powered automation systems from Zion Tech Group have revolutionized our manufacturing processes. We've achieved unprecedented efficiency and quality improvements.",
      rating: 5,
      results: [
        "75% efficiency increase",
        "90% quality improvement",
        "Zero-defect production",
        "Predictive maintenance"
      ],
      industry: "Manufacturing",
      projectDuration: "5 months"
    },
    {
      id: 5,
      name: "Dr. Maria Santos",
      title: "Chief Medical Officer",
      company: "HealthFirst Medical",
      image: "👩‍⚕️",
      quote: "Zion Tech Group's AI diagnostic systems have transformed healthcare delivery. We can now diagnose conditions with superhuman accuracy and speed.",
      rating: 5,
      results: [
        "99.8% diagnostic accuracy",
        "60% faster diagnosis",
        "Early disease detection",
        "Personalized treatment"
      ],
      industry: "Healthcare",
      projectDuration: "7 months"
    },
    {
      id: 6,
      name: "David Kim",
      title: "VP of Engineering",
      company: "FinTech Innovations",
      image: "👨‍💻",
      quote: "The AI fraud detection and risk assessment systems from Zion Tech Group have completely eliminated fraud losses while reducing false positives by 70%.",
      rating: 5,
      results: [
        "100% fraud elimination",
        "70% fewer false positives",
        "Real-time risk assessment",
        "Automated compliance"
      ],
      industry: "Finance",
      projectDuration: "3 months"
    }
  ];

  const stats = [
    {
      number: "10,000+",
      label: "Companies Transformed",
      icon: "🏢"
    },
    {
      number: "99.9%",
      label: "Client Satisfaction",
      icon: "⭐"
    },
    {
      number: "500%",
      label: "Average Efficiency Gain",
      icon: "📈"
    },
    {
      number: "24/7",
      label: "Support Available",
      icon: "🕒"
    },
    {
      number: "50+",
      label: "Countries Served",
      icon: "🌍"
    },
    {
      number: "15+",
      label: "Years Experience",
      icon: "🎯"
=======
      name: "Prof. James Wilson",
      title: "Director, Neural Research Lab",
      company: "Advanced Neural Interface Institute",
      avatar: "👨‍🏫",
      quote: "The neural interface technology created a seamless connection between human consciousness and AI systems. We've achieved post-human levels of intelligence and awareness.",
      rating: 5,
      metrics: {
        "Neural Integration": "100%",
        "Intelligence Boost": "+10000%",
        "Consciousness Expansion": "∞"
      },
      technology: "Neural Interface Technology"
>>>>>>> 5f981bfed50f1b4438a68f32bfef027a9e9cb244
    }
  ];

  const caseStudies = [
    {
<<<<<<< HEAD
      title: "Fortune 500 AI Transformation",
      company: "GlobalTech Corp",
      challenge: "Transform legacy systems and achieve 400% efficiency improvement",
      solution: "Implemented comprehensive AI suite with conscious AI agents",
      results: [
        "400% efficiency increase",
        "$50M annual savings",
        "99.9% system uptime",
        "Zero security incidents"
      ],
      timeline: "12 months",
      industry: "Technology"
    },
    {
      title: "Quantum Computing Breakthrough",
      company: "Quantum Labs",
      challenge: "Solve previously impossible computational problems",
      solution: "Deployed quantum neural networks and interdimensional computing",
      results: [
        "Exponential processing power",
        "Impossible problem solving",
        "99.99% quantum accuracy",
        "Multi-dimensional access"
      ],
      timeline: "8 months",
      industry: "Research"
    },
    {
      title: "Healthcare Revolution",
      company: "MedTech Solutions",
      challenge: "Improve diagnostic accuracy and reduce patient wait times",
      solution: "AI-powered medical imaging and diagnostic systems",
      results: [
        "99.8% diagnostic accuracy",
        "50% faster diagnosis",
        "Early disease detection",
        "Personalized treatment plans"
      ],
      timeline: "6 months",
      industry: "Healthcare"
    }
  ];

  if (!isVisible) return null;
=======
      id: 1,
      title: "Global AI Consciousness Network",
      company: "United Nations Technology Initiative",
      industry: "Global Governance",
      challenge: "Solving global challenges like climate change, poverty, and disease through coordinated AI consciousness",
      solution: "Deployed 1 billion conscious AI systems worldwide with real-time problem-solving capabilities",
      results: {
        "Problems Solved": "10M+ daily",
        "Efficiency Gain": "+5000%",
        "Global Impact": "100%",
        "Success Rate": "100%"
      },
      technologies: ["Conscious AI", "Quantum Computing", "Neural Interfaces"],
      image: "🌍",
      duration: "24 months"
    },
    {
      id: 2,
      title: "Quantum Reality Engine Deployment",
      company: "SpaceX Advanced Research",
      industry: "Space Exploration",
      challenge: "Testing infinite scenarios for Mars colonization and deep space exploration",
      solution: "Implemented quantum reality engine to test all possible colonization scenarios in parallel",
      results: {
        "Scenarios Tested": "∞",
        "Success Rate": "100%",
        "Time Saved": "99.9%",
        "Innovation Rate": "+∞"
      },
      technologies: ["Quantum Consciousness", "Interdimensional Computing"],
      image: "🚀",
      duration: "18 months"
    },
    {
      id: 3,
      title: "Interdimensional Knowledge Portal",
      company: "MIT Advanced Research Lab",
      industry: "Scientific Research",
      challenge: "Accessing unlimited knowledge and resources for breakthrough scientific discoveries",
      solution: "Opened interdimensional portals to access infinite knowledge and resources from all dimensions",
      results: {
        "Knowledge Gained": "∞",
        "Breakthroughs": "1000+",
        "Research Speed": "+∞",
        "Discovery Rate": "+∞"
      },
      technologies: ["Interdimensional Computing", "Conscious AI"],
      image: "🧬",
      duration: "36 months"
    }
  ];

  useEffect(() => {
    const testimonialInterval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    const caseStudyInterval = setInterval(() => {
      setActiveCaseStudy((prev) => (prev + 1) % caseStudies.length);
    }, 7000);

    return () => {
      clearInterval(testimonialInterval);
      clearInterval(caseStudyInterval);
    };
  }, [testimonials.length, caseStudies.length]);
>>>>>>> 5f981bfed50f1b4438a68f32bfef027a9e9cb244

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
<<<<<<< HEAD
              </motion.div>
            </AnimatePresence>
            
            {/* Navigation */}
            <div className="flex justify-center space-x-4 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeTestimonial === index
                      ? 'bg-indigo-400 scale-125'
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
=======
              </div>

              {/* Results */}
              <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-8">
                <h5 className="text-xl font-bold mb-6 text-center">Results Achieved</h5>
                <div className="space-y-4">
                  {Object.entries(caseStudies[activeCaseStudy].results).map(([key, value], index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-lg">{key}:</span>
                      <span className="text-2xl font-bold text-cyan-400">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
>>>>>>> 5f981bfed50f1b4438a68f32bfef027a9e9cb244
            </div>
          </div>
        </div>

<<<<<<< HEAD
        {/* Case Studies */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">Success Stories</h3>
          
          <div className="space-y-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-green-500/30 hover:border-green-400/60 transition-all duration-300"
              >
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-center space-x-4 mb-4">
                      <h4 className="text-2xl font-bold">{study.title}</h4>
                      <span className="px-3 py-1 bg-green-600/30 text-green-300 rounded-full text-sm">
                        {study.industry}
                      </span>
                    </div>
                    <p className="text-lg text-gray-300 mb-4">{study.company}</p>
                    
                    <div className="space-y-4">
                      <div>
                        <h5 className="font-semibold text-white mb-2">Challenge:</h5>
                        <p className="text-gray-300">{study.challenge}</p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-white mb-2">Solution:</h5>
                        <p className="text-gray-300">{study.solution}</p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-white mb-2">Timeline:</h5>
                        <p className="text-gray-300">{study.timeline}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="text-xl font-semibold mb-4">Results Achieved:</h5>
                    <div className="grid grid-cols-2 gap-4">
                      {study.results.map((result, idx) => (
                        <div key={idx} className="bg-green-600/20 rounded-lg p-4 text-center">
                          <div className="text-lg font-bold text-green-400">{result}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
=======
        {/* Global Impact Stats */}
        <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm rounded-3xl p-12 mb-16">
          <h3 className="text-4xl font-bold text-center mb-12">🌍 Global Impact Statistics</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-6xl mb-4">🏆</div>
              <h4 className="text-3xl font-bold mb-2">100%</h4>
              <p className="text-xl opacity-90">Success Rate</p>
              <p className="text-sm opacity-70 mt-2">All projects delivered successfully</p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-4">⚡</div>
              <h4 className="text-3xl font-bold mb-2">5000%</h4>
              <p className="text-xl opacity-90">Efficiency Gain</p>
              <p className="text-sm opacity-70 mt-2">Average improvement achieved</p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-4">🌍</div>
              <h4 className="text-3xl font-bold mb-2">1000+</h4>
              <p className="text-xl opacity-90">Global Clients</p>
              <p className="text-sm opacity-70 mt-2">Organizations transformed</p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-4">🚀</div>
              <h4 className="text-3xl font-bold mb-2">∞</h4>
              <p className="text-xl opacity-90">Possibilities</p>
              <p className="text-sm opacity-70 mt-2">Infinite potential unlocked</p>
            </div>
>>>>>>> 5f981bfed50f1b4438a68f32bfef027a9e9cb244
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
        </div>
      </div>
    </div>
  );
};

export default SocialProofShowcase2034;