import React from 'react';
import { motion } from 'framer-motion';

const UltimateContentAdvertisingBanner: React.FC = () => {
  const advertisingFeatures = [
    {
      icon: "🚀",
      title: "Revolutionary AI Technologies",",
      description: "Meta-cognitive AI, quantum-neural networks, and autonomous operations",
      highlight: "1000x Performance"
    },
    {",
      icon: "💰",
      title: "Proven Cost Savings",",
      description: "Fortune 500 case studies showing $500M+ in annual savings",
      highlight: "$500M+ Savings"
    },
    {",
      icon: "🛡️",
      title: "Military-Grade Security",",
      description: "Zero-trust architecture with 99.99% threat detection",
      highlight: "99.99% Security"
    },
    {",
      icon: "🤖",
      title: "Autonomous Operations",",
      description: "98% automation rates with self-healing systems",
      highlight: "98% Automation"
    }
  ];

  const successStats = [
    { value: "500+", label: "Enterprise Clients", icon: Users },
    { value: "$500M+", label: "Cost Savings", icon: DollarSign },
    { value: "98%", label: "Automation Rate", icon: Target },
    { value: "99.99%", label: "Security Accuracy", icon: Shield }
  ];

  return (
    <div className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated background effects */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-4 mb-8 flex-wrap">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            >

            </motion.div>
            <div className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-sm rounded-full border border-purple-500/30">

              <span className="text-sm font-bold text-white">ULTIMATE CONTENT ADVERTISING</span>
            </div>
            <div className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 backdrop-blur-sm rounded-full border border-yellow-400/30">

              <span className="text-sm font-bold text-yellow-300">LIMITED TIME ACCESS</span>
            </div>
          </div>

          <h2 className="text-7xl md:text-8xl font-extrabold mb-8 bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Ultimate Content
          </h2>
          <h3 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Advertising Hub
          </h3>
          
          <p className="text-2xl text-gray-300 max-w-5xl mx-auto leading-relaxed mb-12">
            Discover the most advanced AI content library available. From quantum-neural computing to autonomous operations - 
            everything you need to lead the AI revolution is right here.
          </p>

          {/* Urgency Banner */}
          <div className="inline-block px-8 py-4 bg-gradient-to-r from-red-500/20 to-orange-500/20 backdrop-blur-sm rounded-full border border-red-500/30 mb-12">
            <div className="flex items-center gap-3">

              <span className="text-lg font-bold text-white">LIMITED TIME: Exclusive Early Access to 2026 Content</span>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {advertisingFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-blue-500/0 to-cyan-500/0 group-hover:from-purple-500/10 group-hover:via-blue-500/10 group-hover:to-cyan-500/10 transition-all duration-500 rounded-2xl"></div>
              
              <div className="relative bg-white/8 backdrop-blur-xl rounded-2xl p-8 border border-white/15 hover:border-purple-500/50 transition-all duration-300 h-full">
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {feature.description}
                </p>
                
                <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/25 to-blue-500/25 text-purple-300 text-sm font-bold border border-purple-500/40">
                  🚀 {feature.highlight}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Success Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {successStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-8 bg-white/8 backdrop-blur-xl rounded-2xl border border-white/15"
            >
              <div className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-3">
                {stat.value}
              </div>
              <div className="text-gray-300 text-lg">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Testimonial Section */}
        <div className="mb-20">
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-12 border border-white/15">
            <div className="text-center mb-8">
              <h3 className="text-4xl font-bold text-white mb-4">
                What Our Clients Say
              </h3>
              <div className="flex items-center justify-center gap-2 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
                <span className="text-gray-300 text-lg ml-2">5.0/5.0 Rating</span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-6xl mb-4">💼</div>
                <p className="text-gray-300 mb-4 italic">
                  "Zion Tech Group's AI solutions reduced our operational costs by $50M annually. 
                  The autonomous systems are game-changing."
                </p>
                <div className="font-bold text-white">Fortune 500 CTO</div>
              </div>
              <div className="text-center">
                <div className="text-6xl mb-4">🚀</div>
                <p className="text-gray-300 mb-4 italic">
                  "The meta-cognitive AI implementation achieved 1000x performance improvements. 
                  Unprecedented results."
                </p>
                <div className="font-bold text-white">Enterprise AI Director</div>
              </div>
              <div className="text-center">
                <div className="text-6xl mb-4">🛡️</div>
                <p className="text-gray-300 mb-4 italic">
                  "Zero-trust security framework eliminated all threats. 99.99% accuracy is remarkable."
                </p>
                <div className="font-bold text-white">Security Chief</div>
              </div>
            </div>
          </div>
        </div>

        {/* Call-to-Action Section */}
        <div className="text-center">
          <div className="inline-block p-2 rounded-3xl bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500">
            <div className="bg-slate-900 rounded-2xl px-16 py-16">
              <h3 className="text-5xl font-bold text-white mb-6">
                Ready to Transform Your Enterprise?
              </h3>
              <p className="text-gray-300 mb-12 max-w-3xl mx-auto text-xl leading-relaxed">
                Join 500+ leading organizations that trust Zion Tech Group to deliver breakthrough AI solutions. 
                Get exclusive access to our 2026 content library and expert consultations.
              </p>
              
              {/* Benefits List */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="flex items-center gap-3 text-green-400">

                  <span className="text-lg font-semibold">Exclusive Early Access</span>
                </div>
                <div className="flex items-center gap-3 text-blue-400">

                  <span className="text-lg font-semibold">Expert Consultations</span>
                </div>
                <div className="flex items-center gap-3 text-purple-400">

                  <span className="text-lg font-semibold">Fortune 500 Case Studies</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-400 hover:to-blue-500 text-white font-bold py-6 px-12 rounded-xl transition-all duration-300 shadow-xl hover:shadow-purple-500/50 flex items-center justify-center gap-3 text-lg"
                >

                  <span>Get Started Today</span>
                </a>
                <a
                  href="/blog"
                  className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white font-bold py-6 px-12 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 text-lg"
                >
                  <span>Explore Content Library</span>

                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateContentAdvertisingBanner;