import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { 
  ArrowRight, 
  Brain,
  TrendingUp,
  BookOpen,
  Sparkles,
  X,
  Zap,
  Target,
  Award,
  CheckCircle,
  Star,
  Rocket
} from "lucide-react";

interface NeuralArchitectureFeature {
  id: string;
  title: string;
  description: string;
  metric: string;
  icon: React.ComponentType<any>;
  color: string;
}

const neuralFeatures: NeuralArchitectureFeature[] = [
  {
    id: 'processing-speed',
    title: 'Processing Speed',
    description: 'Revolutionary neural architectures',
    metric: '300-500% Faster',
    icon: Zap,
    color: 'from-purple-500 to-indigo-600'
  },
  {
    id: 'accuracy-improvement',
    title: 'Accuracy Improvement',
    description: 'Cross-modal learning enhancement',
    metric: '25-45% Better',
    icon: Target,
    color: 'from-blue-500 to-cyan-600'
  },
  {
    id: 'cost-reduction',
    title: 'Resource Efficiency',
    description: 'Optimized computational overhead',
    metric: '60-80% Less',
    icon: TrendingUp,
    color: 'from-green-500 to-emerald-600'
  },
  {
    id: 'roi-achievement',
    title: 'ROI Achievement',
    description: 'Proven business value creation',
    metric: '380% ROI',
    icon: Award,
    color: 'from-orange-500 to-red-600'
  }
];

export function NeuralArchitecture2026PromotionBanner() {
  const [currentFeature, setCurrentFeature] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Check if banner was previously dismissed
    const dismissed = localStorage.getItem('neural-architecture-banner-dismissed');
    if (dismissed) {
      setIsDismissed(true);
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }

    // Auto-rotate features every 6 seconds
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % neuralFeatures.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
    localStorage.setItem('neural-architecture-banner-dismissed', 'true');
  };

  if (!isVisible || isDismissed) {
    return null;
  }

  const feature = neuralFeatures[currentFeature];
  const IconComponent = feature.icon;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -100, opacity: 0 }}
        className="relative bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 border-b border-purple-700/50 overflow-hidden"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-1/4 left-1/4 w-4 h-4 rounded-full bg-purple-400 opacity-30"
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.7, 0.3],
              scale: [1, 1.3, 1],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute top-1/3 right-1/3 w-3 h-3 rounded-full bg-blue-400 opacity-20"
            animate={{
              y: [0, 20, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 0.7, 1],
              rotate: [360, 180, 0]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
          <motion.div
            className="absolute bottom-1/4 left-1/3 w-2 h-2 rounded-full bg-green-400 opacity-25"
            animate={{
              y: [0, -15, 0],
              opacity: [0.25, 0.6, 0.25],
              scale: [1, 1.2, 1],
              rotate: [0, -180, -360]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
          
          {/* Neural Network Pattern */}
          <div className="absolute inset-0 opacity-5">
            <svg className="w-full h-full" viewBox="0 0 400 100">
              <defs>
                <pattern id="neural-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                  <circle cx="20" cy="20" r="2" fill="currentColor" className="text-purple-400">
                    <animate attributeName="opacity" values="0.3;1;0.3" dur="3s" repeatCount="indefinite"/>
                  </circle>
                  <circle cx="80" cy="30" r="2" fill="currentColor" className="text-blue-400">
                    <animate attributeName="opacity" values="0.3;1;0.3" dur="4s" repeatCount="indefinite"/>
                  </circle>
                  <circle cx="50" cy="70" r="2" fill="currentColor" className="text-green-400">
                    <animate attributeName="opacity" values="0.3;1;0.3" dur="5s" repeatCount="indefinite"/>
                  </circle>
                  <line x1="20" y1="20" x2="80" y2="30" stroke="currentColor" strokeWidth="0.5" className="text-purple-300 opacity-30">
                    <animate attributeName="opacity" values="0.1;0.5;0.1" dur="2s" repeatCount="indefinite"/>
                  </line>
                  <line x1="80" y1="30" x2="50" y2="70" stroke="currentColor" strokeWidth="0.5" className="text-blue-300 opacity-30">
                    <animate attributeName="opacity" values="0.1;0.5;0.1" dur="3s" repeatCount="indefinite"/>
                  </line>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#neural-pattern)" />
            </svg>
          </div>
        </div>

        <div className="relative z-10 container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              {/* Main Icon */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-purple-500 to-indigo-600 shadow-xl">
                <Brain className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30 text-sm font-semibold">
                    <Sparkles className="h-4 w-4 mr-2" />
                    Neural Architecture 2026
                  </Badge>
                  <Badge className="bg-red-500/20 text-red-400 border-red-500/30 text-sm animate-pulse">
                    <Rocket className="h-4 w-4 mr-2" />
                    Revolutionary
                  </Badge>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2">
                  The Neural Architecture Revolution is Here
                </h3>
                
                <p className="text-slate-300 text-lg max-w-3xl">
                  Discover how 2026's revolutionary neural architectures are transforming enterprise AI with 
                  <span className="text-purple-400 font-semibold"> 300-500% faster processing</span>, 
                  <span className="text-blue-400 font-semibold"> 25-45% accuracy improvements</span>, and 
                  <span className="text-green-400 font-semibold"> 60-80% cost reductions</span>.
                </p>

                {/* Current Feature Highlight */}
                <div className="mt-4 flex items-center space-x-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${feature.color} shadow-lg`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-semibold text-lg">{feature.metric}</div>
                    <div className="text-slate-300 text-sm">{feature.description}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex items-center space-x-4">
              <div className="flex flex-col space-y-2">
                <Link to="/blog/ai-2026-neural-architecture-revolution">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white border-0 shadow-xl"
                  >
                    <Brain className="w-5 h-5 mr-2" />
                    Read the Revolution
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                
                <Link to="/case-studies/fortune-500-neural-architecture-transformation-2026">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white"
                  >
                    <TrendingUp className="w-5 h-5 mr-2" />
                    $2.4B Success Story
                  </Button>
                </Link>
              </div>

              {/* Close Button */}
              <button
                onClick={handleDismiss}
                className="p-3 text-slate-400 hover:text-white transition-colors"
                aria-label="Close banner"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Feature Indicators */}
          <div className="flex justify-center mt-6 space-x-3">
            {neuralFeatures.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentFeature(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentFeature 
                    ? 'bg-purple-400 scale-125 shadow-lg' 
                    : 'bg-slate-600 hover:bg-slate-400'
                }`}
                aria-label={`Go to feature ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export function NeuralArchitectureFeatureGrid() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Brain className="w-8 h-8 text-purple-400" />
            <h2 className="text-5xl font-bold text-white">
              Neural Architecture 2026
            </h2>
            <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30 text-lg px-4 py-2 animate-pulse">
              <Sparkles className="h-5 w-5 mr-2" />
              Revolutionary
            </Badge>
          </div>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto mb-8">
            Experience the future of AI with revolutionary neural architectures that deliver unprecedented performance, 
            accuracy, and efficiency for enterprise applications.
          </p>
          
          {/* Success Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center p-4 rounded-xl bg-gradient-to-r from-purple-500/10 to-indigo-600/10 border border-purple-500/20">
              <div className="text-3xl font-bold text-purple-400">300-500%</div>
              <div className="text-slate-300 text-sm">Faster Processing</div>
            </div>
            <div className="text-center p-4 rounded-xl bg-gradient-to-r from-blue-500/10 to-cyan-600/10 border border-blue-500/20">
              <div className="text-3xl font-bold text-blue-400">25-45%</div>
              <div className="text-slate-300 text-sm">Accuracy Improvement</div>
            </div>
            <div className="text-center p-4 rounded-xl bg-gradient-to-r from-green-500/10 to-emerald-600/10 border border-green-500/20">
              <div className="text-3xl font-bold text-green-400">60-80%</div>
              <div className="text-slate-300 text-sm">Cost Reduction</div>
            </div>
            <div className="text-center p-4 rounded-xl bg-gradient-to-r from-orange-500/10 to-red-600/10 border border-orange-500/20">
              <div className="text-3xl font-bold text-orange-400">380%</div>
              <div className="text-slate-300 text-sm">Average ROI</div>
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {neuralFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="absolute inset-0 opacity-50">
                  <div className="w-full h-full bg-gradient-to-br from-white/5 to-transparent"></div>
                </div>
                
                <div className="relative z-10 p-8">
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {feature.title}
                  </h3>
                  
                  <p className="text-slate-300 mb-6">
                    {feature.description}
                  </p>
                  
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                    {feature.metric}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/blog/ai-2026-neural-architecture-revolution">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white border-0 shadow-xl text-lg px-8 py-4"
              >
                <Brain className="h-6 w-6 mr-3" />
                Read the Full Revolution Story
                <ArrowRight className="h-6 w-6 ml-3" />
              </Button>
            </Link>
            
            <Link to="/resources/ai-2026-neural-architecture-implementation-guide">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white text-lg px-8 py-4"
              >
                <BookOpen className="h-6 w-6 mr-3" />
                Download Implementation Guide
              </Button>
            </Link>
          </div>
          
          <p className="text-slate-400 mt-6">
            Join 500+ companies already transforming with neural architecture technology
          </p>
        </div>
      </div>
    </section>
  );
}