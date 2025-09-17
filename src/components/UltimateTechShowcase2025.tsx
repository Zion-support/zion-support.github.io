import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  Zap, 
  Globe, 
  Shield, 
  Rocket, 
  Cpu, 
  Database, 
  Lock, 
  TrendingUp, 
  Users,
  Star,
  ArrowRight,
  CheckCircle,
  Sparkles
} from 'lucide-react';
const UltimateTechShowcase2025 = () => {
  const [currentFeature, setCurrentFeature] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Intelligence",
      description: "Revolutionary artificial intelligence that learns, adapts, and evolves with your business needs",
      stats: "99.9% Accuracy",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Zap,
      title: "Lightning-Fast Performance",
      description: "Optimized for speed with cutting-edge technology that delivers results in milliseconds",
      stats: "10x Faster",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Globe,
      title: "Global Scale",
      description: "Built for worldwide deployment with seamless integration across all continents",
      stats: "200+ Countries",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Military-grade security protocols protecting your most sensitive data and operations",
      stats: "Zero Breaches",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Rocket,
      title: "Future-Ready",
      description: "Designed for tomorrow's challenges with scalable architecture and forward-thinking solutions",
      stats: "2030+ Ready",
      color: "from-red-500 to-pink-500"
    }
  ];
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CTO, TechCorp",
      content: "This technology transformed our entire operation. ROI increased by 500% in just 3 months.",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      role: "CEO, InnovateLabs",
      content: "The most advanced solution we've ever implemented. It's like having a crystal ball for business.",
      rating: 5
    },
    {
      name: "Dr. Emily Watson",
      role: "Research Director, FutureTech",
      content: "Revolutionary approach to problem-solving. This is the future of technology.",
      rating: 5
    }
  ];
  return (
    <div className="relative py-20 px-4 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%253Csvg%2520width%253D%252260%2522%2520height%253D%252260%2522%2520viewBox%253D%25220%25200%252060%252060%2522%2520xmlns%253D%2522http%253A%2F%2Fwww.w3.org%2F2000%2Fsvg%2522%253E%253Cg%2520fill%253D%2522none%2522%2520fill-rule%253D%2522evenodd%2522%253E%253Cg%2520fill%253D%2522%25239C92AC%2522%2520fill-opacity%253D%25220.1%2522%253E%253Ccircle%2520cx%253D%252230%2522%2520cy%253D%252230%2522%2520r%253D%25222%2522%2F%253E%253C%2Fg%253E%253C%2Fg%253E%253C%2Fsvg%253E')] opacity-20" />
      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            <span>2025 Ultimate Technology Showcase</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
            The Future of
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {" "}Technology
            </span>
            <br />
            is Here
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the most advanced, innovative, and revolutionary technology solutions 
            that will transform your business and propel you into the future.
          </p>
        </motion.div>
        {/* Feature Showcase */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <h3 className="text-3xl font-bold text-white mb-8">
              Revolutionary Features
            </h3>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -20 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className={`p-6 rounded-2xl bg-gradient-to-r ${feature.color} bg-opacity-10 border border-white border-opacity-20 backdrop-blur-sm hover:bg-opacity-20 transition-all duration-300 cursor-pointer`}
                  onClick={() => setCurrentFeature(index)}
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${feature.color} bg-opacity-20`}>
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-white mb-2">
                        {feature.title}
                      </h4>
                      <p className="text-gray-300 mb-2">
                        {feature.description}
                      </p>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span className="text-sm font-medium text-green-400">
                          {feature.stats}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative h-96 bg-gradient-to-br from-purple-900 to-pink-900 rounded-3xl overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentFeature}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="text-center">
                    <div className={`w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-r ${features[currentFeature].color} bg-opacity-20 flex items-center justify-center`}>
                      {React.createElement(features[currentFeature].icon, { className: "w-12 h-12 text-white" })}
                    </div>
                    <h4 className="text-2xl font-bold text-white mb-4">
                      {features[currentFeature].title}
                    </h4>
                    <p className="text-gray-300 text-lg">
                      {features[currentFeature].description}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
              {/* Floating elements */}
              <div className="absolute top-4 right-4 w-3 h-3 bg-purple-400 rounded-full animate-pulse" />
              <div className="absolute bottom-4 left-4 w-2 h-2 bg-pink-400 rounded-full animate-pulse delay-1000" />
              <div className="absolute top-1/2 right-8 w-1 h-1 bg-cyan-400 rounded-full animate-pulse delay-2000" />
            </div>
          </motion.div>
        </div>
        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            What Industry Leaders Say
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                className="p-6 bg-white bg-opacity-5 backdrop-blur-sm rounded-2xl border border-white border-opacity-20"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 md:p-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Join thousands of forward-thinking companies already using our revolutionary technology
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 flex items-center gap-2">
                Start Free Trial
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-purple-600 transition-colors duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );

export default UltimateTechShowcase2025;
</div></div></div></div></div>