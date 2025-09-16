import { motion } from 'framer-motion';
import {
  ArrowRight,
  BarChart3,
  Brain,
  CheckCircle,
  Cpu as CpuIcon,
  Globe,
  Rocket as RocketIcon,
  Shield,
  Sparkles,
  Star,
  TrendingUp,
  Zap
} from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const RevolutionaryContent2026Banner = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      quote: "The AI content marketing solution increased our engagement by 500% in just 3 months!",
      author: "Sarah Chen",
      role: "CMO, TechCorp Global",
      metric: "500% Engagement"
    },
    {
      quote: "Quantum cybersecurity gave us 99.99% security uptime with zero incidents.",
      author: "Michael Rodriguez",
      role: "CTO, SecureBank International",
      metric: "99.99% Security"
    },
    {
      quote: "Autonomous business intelligence transformed our decision-making process completely.",
      author: "Dr. Lisa Wang",
      role: "CEO, DataFlow Analytics",
      metric: "400% Speed"
    }
  ];

  const features = [
    { icon: Brain, title: "AI Content Marketing", metric: "500% Engagement" },
    { icon: Shield, title: "Quantum Security", metric: "99.99% Protection" },
    { icon: BarChart3, title: "Autonomous BI", metric: "400% Speed" },
    { icon: CpuIcon, title: "Synthetic Intelligence", metric: "1000% Improvement" },
    { icon: Globe, title: "Metaverse Business", metric: "500% Collaboration" },
    { icon: RocketIcon, title: "Revolutionary Tech", metric: "600% Innovation" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%22100%22%20height%3D%22100%22%20viewBox%3D%220%200%20100%20100%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M50%2050c0-27.614-22.386-50-50-50v100c27.614%200%2050-22.386%2050-50z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
      </div>

      <div className="relative z-10">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <Sparkles className="h-6 w-6 text-yellow-400" />
                  <span className="text-yellow-400 font-semibold text-sm uppercase tracking-wider">
                    Revolutionary Content 2026
                  </span>
                </div>
                <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                Transform Your Business with
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {" "}Revolutionary Content
                </span>
              </h1>

              <p className="text-xl text-gray-300 leading-relaxed">
                Discover the most advanced AI, quantum, and autonomous technology solutions that are delivering unprecedented results for businesses worldwide.
              </p>

              {/* Feature Grid */}
              <div className="grid grid-cols-2 gap-4">
                {features.slice(0, 4).map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-white/20 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                        <feature.icon className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <div className="text-white font-semibold text-sm">{feature.title}</div>
                        <div className="text-purple-300 text-xs">{feature.metric}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/ultimate-content-showcase-2026"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center group"
                >
                  Explore All Content
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <Link
                  to="/contact"
                  className="border border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
                >
                  Get Started
                  <Zap className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </motion.div>

            {/* Right Content - Testimonials & Metrics */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Testimonial */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <motion.div
                  key={currentTestimonial}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-4"
                >
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-white text-lg italic">
                    "{testimonials[currentTestimonial].quote}"
                  </blockquote>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-white font-semibold">{testimonials[currentTestimonial].author}</div>
                      <div className="text-purple-200 text-sm">{testimonials[currentTestimonial].role}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-purple-400">{testimonials[currentTestimonial].metric}</div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-xl p-6 border border-purple-500/20">
                  <div className="text-3xl font-bold text-white mb-2">500%</div>
                  <div className="text-purple-200 text-sm">Engagement Increase</div>
                </div>
                <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-xl p-6 border border-blue-500/20">
                  <div className="text-3xl font-bold text-white mb-2">99.99%</div>
                  <div className="text-blue-200 text-sm">Security Effectiveness</div>
                </div>
                <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-xl p-6 border border-green-500/20">
                  <div className="text-3xl font-bold text-white mb-2">400%</div>
                  <div className="text-green-200 text-sm">Decision Speed</div>
                </div>
                <div className="bg-gradient-to-r from-orange-600/20 to-red-600/20 rounded-xl p-6 border border-orange-500/20">
                  <div className="text-3xl font-bold text-white mb-2">1000%</div>
                  <div className="text-orange-200 text-sm">ROI Improvement</div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl p-6 border border-purple-500/30">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle className="h-6 w-6 text-green-400" />
                  <span className="text-white font-semibold">Limited Time Offer</span>
                </div>
                <p className="text-purple-100 mb-4">
                  Get exclusive access to our revolutionary content solutions with a 30-day free trial.
                </p>
                <Link
                  to="/contact"
                  className="bg-white text-purple-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center group"
                >
                  Start Free Trial
                  <TrendingUp className="ml-2 h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 left-10 w-4 h-4 bg-pink-400/20 rounded-full"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-40 right-20 w-3 h-3 bg-purple-400/20 rounded-full"
        />
        <motion.div
          animate={{
            x: [0, 60, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-20 left-20 w-2 h-2 bg-cyan-400/20 rounded-full"
        />
      </div>
    </div>
  );
};

export default RevolutionaryContent2026Banner;