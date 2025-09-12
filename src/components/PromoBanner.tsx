import React from 'react';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight, 
  Star, 
  Download, 
  BookOpen, 
  TrendingUp,
  X,
  Sparkles
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

export function PromoBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 text-white py-3 px-4 overflow-hidden"
    >
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                x: [0, 100, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.1,
                ease: "easeInOut"
              }}
              className="absolute w-2 h-2 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto flex items-center justify-between relative z-10">
        <div className="flex items-center gap-4">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            <Sparkles className="w-5 h-5 text-yellow-300" />
          </motion.div>
          
          <div className="flex items-center gap-3">
            <Badge className="bg-yellow-500 text-black font-bold animate-pulse">
              NEW
            </Badge>
            <span className="text-sm md:text-base font-medium">
              🎉 <strong>AI Solutions Hub</strong> - Explore our new AI resources, case studies & expert guides!
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Button
            size="sm"
            className="bg-white/20 hover:bg-white/30 text-white border-white/30"
            asChild
          >
            <Link to="/ai-solutions" className="flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              Explore AI
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>

          <Button
            size="sm"
            variant="outline"
            className="border-white/30 text-white hover:bg-white/10"
            asChild
          >
            <Link to="/resources" className="flex items-center gap-2">
              <Download className="w-4 h-4" />
              Resources
            </Link>
          </Button>

          <Button
            size="sm"
            variant="ghost"
            className="text-white hover:bg-white/10 p-1"
            onClick={() => setIsVisible(false)}
          >
            <X className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </motion.div>
  );
}

export function FeaturedContentBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-4 bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-2">
              <TrendingUp className="w-4 h-4 mr-2" />
              Featured Content
            </Badge>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Discover Our Latest AI Resources
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-10">
              Stay ahead with our comprehensive AI guides, real case studies, and expert insights 
              that are transforming businesses worldwide.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-4">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">AI Implementation Guide</h3>
              <p className="text-slate-300 mb-4">
                Complete roadmap for implementing AI in your organization with proven strategies and best practices.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span>4.9/5 rating</span>
                  <span>•</span>
                  <span>2.4k downloads</span>
                </div>
                <Button
                  size="sm"
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                  asChild
                >
                  <Link to="/resources">
                    Download
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl flex items-center justify-center mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Success Stories</h3>
              <p className="text-slate-300 mb-4">
                Real case studies showing how companies achieved 300%+ ROI with our AI solutions.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span>25+ case studies</span>
                  <span>•</span>
                  <span>Avg 340% ROI</span>
                </div>
                <Button
                  size="sm"
                  className="bg-green-600 hover:bg-green-700 text-white"
                  asChild
                >
                  <Link to="/case-studies">
                    View Stories
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Expert Consultation</h3>
              <p className="text-slate-300 mb-4">
                Book a free consultation with our AI experts to discuss your specific needs and goals.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span>Free consultation</span>
                  <span>•</span>
                  <span>24hr response</span>
                </div>
                <Button
                  size="sm"
                  className="bg-purple-600 hover:bg-purple-700 text-white"
                  asChild
                >
                  <Link to="/contact">
                    Book Now
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}