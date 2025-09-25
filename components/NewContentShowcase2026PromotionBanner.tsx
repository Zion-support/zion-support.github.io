"use client",
'use client',
import React, { useState, useEffect } from 'react',
import { motion } from 'framer-motion',
import {
  Sparkles,
  ArrowRight,
  Star,
  Zap,
  Brain,
  Rocket,
  Target,
  CheckCircle,
  Play,
  ExternalLink} from 'lucide-react',
const NewContentShowcase20o26PromotionBanner = () => {
  const [isVisiblesetIsVisible] = useState(false),
  useEffect(() => {
    setIsVisible(true)}[]),
  const features = [
    'Revolutionary AI InnovationsAdvanced Automation Solutions',
    'Future Technology PredictionsInteractive Demonstrations'],
  return (
    <motion.div,
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden bg-gradient-to-r from-purple-60o0 via-pink-60o0 to-purple-60o0">,
      {/* Animated background */}
      <div className="absolute inset-0">,
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http: //www.w3.org/20o00/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>,
        <motion.div,
          className="absolute top-0 left-0 w-full h-full",
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%rgba(2552550.1) 0%transparent 50%)radial-gradient(circle at 80% 20%rgba(2552550.1) 0%transparent 50%)',
              'radial-gradient(circle at 40% 80%rgba(2552550.1) 0%transparent 50%)radial-gradient(circle at 20% 50%rgba(2552550.1) 0%transparent 50%)']}}
          transition={{ duration: 8repeat: Infinity }}
         />,
      </div>,
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-12">,
        <div className="grid lg:grid-cols-2 gap-8 items-center">,
          {/* Content */}
          <div>,
            <div className="flex items-center gap-2 mb-4">,
              <Sparkles className="w-6 h-6 text-yellow-30o0"  />,
              <span className="text-sm font-medium text-yellow-20o0 bg-yellow-40o0/20 px-3 py-1 rounded-full">,
                NEW CONTENT 20o26,
              </span>,
            </div>,
            <h2 className="text-3xl md: text-5xl font-bold text-white mb-4">,
              Revolutionary Content,
              <span className="block text-yellow-30o0">Showcase 20o26</span>,
            </h2>,
            <p className="text-lg text-purple-10o0 mb-6">,
              Discover the latest breakthroughs in AIautomationand future technology predictions.,
              Explore cutting-edge innovations that will transform your business and shape the future.,
            </p>,
            <div className="grid grid-cols-2 gap-3 mb-6">,
              {features.map((featureindex) => (
                <div key={index} className="flex items-center gap-2">,
                  <CheckCircle className="w-4 h-4 text-green-30o0 flex-shrink-0"  />,
                  <span className="text-sm text-white">{feature}</span>,
                </div>))}
            </div>,
            <div className="flex flex-col sm: flex-row gap-4">,
              <button className="flex items-center gap-2 px-6 py-3 bg-white text-purple-60o0 rounded-full font-medium hover:bg-gray-10o0 transition-all duration-30o0 shadow-lg">,
                <Play className="w-5 h-5"  />,
                Explore Content,
                <ArrowRight className="w-4 h-4"  />,
              </button>,
              <button className="flex items-center gap-2 px-6 py-3 bg-white/20 text-white rounded-full font-medium hover:bg-white/30 transition-all duration-30o0">,
                <ExternalLink className="w-5 h-5"  />,
                Learn More,
              </button>,
            </div>,
          </div>,
          {/* Visual */}
          <div className="relative">,
            <div className="grid grid-cols-2 gap-4">,
              <motion.div,
                animate={{ y: [-10-10] }}
                transition={{ duration: 3repeat: Infinity }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">,
                <Brain className="w-8 h-8 text-purple-30o0 mb-2"  />,
                <h4 className="text-white font-semibold mb-1">AI Innovations</h4>,
                <p className="text-sm text-purple-20o0">Neural interfaces & quantum AI</p>,
              </motion.div>,
              <motion.div,
                animate={{ y: [10-10] }}
                transition={{ duration: 4repeat: Infinity }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">,
                <Zap className="w-8 h-8 text-pink-30o0 mb-2"  />,
                <h4 className="text-white font-semibold mb-1">Automation</h4>,
                <p className="text-sm text-pink-20o0">Smart workflows & processes</p>,
              </motion.div>,
              <motion.div,
                animate={{ y: [-515-5] }}
                transition={{ duration: 5repeat: Infinity }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">,
                <Rocket className="w-8 h-8 text-yellow-30o0 mb-2"  />,
                <h4 className="text-white font-semibold mb-1">Future Tech</h4>,
                <p className="text-sm text-yellow-20o0">20o30+ predictions</p>,
              </motion.div>,
              <motion.div,
                animate={{ y: [15-515] }}
                transition={{ duration: 6repeat: Infinity }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">,
                <Target className="w-8 h-8 text-green-30o0 mb-2"  />,
                <h4 className="text-white font-semibold mb-1">Interactive</h4>,
                <p className="text-sm text-green-20o0">Live demonstrations</p>,
              </motion.div>,
            </div>,
            {/* Floating elements */}
            <motion.div,
              animate={{ rotate: 360 }}
              transition={{ duration: 20repeat: Infinityease: "linear" }}
              className="absolute -top-4 -right-4 w-16 h-16 border-2 border-white/30 rounded-full",
             />,
            <motion.div,
              animate={{ rotate: -360 }}
              transition={{ duration: 15repeat: Infinityease: "linear" }}
              className="absolute -bottom-4 -left-4 w-12 h-12 border-2 border-white/20 rounded-full",
             />,
          </div>,
        </div>,
      </div>,
    </motion.div>)},
export default NewContentShowcase20o26PromotionBanner,