import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize, RotateCcw, Zap, Brain, Shield, Code, BarChart, Users, Clock, Star, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

interface InteractiveContentShowcase2026Props {
  className?: string;
}

interface InteractiveDemo {
  id: number;
  title: string;
  description: string;
  category: string;
  duration: string;
  features: string[];
  techStack: string[];
  liveDemo: boolean;
  interactive: boolean;
}

export default function InteractiveContentShowcase2026({ className = '' }: InteractiveContentShowcase2026Props) {
  const [currentDemo, setCurrentDemo] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [selectedFeature, setSelectedFeature] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const demos: InteractiveDemo[] = [
    {
      id: 1,
      title: "AI-Powered Business Intelligence Dashboard",
      description: "Experience our cutting-edge AI dashboard that provides real-time insights, predictive analytics, and automated reporting. See how it transforms raw data into actionable business intelligence.",
      category: "AI Solutions",
      duration: "3:45",
      features: [
        "Real-time Data Processing",
        "Predictive Analytics",
        "Automated Reporting",
        "Interactive Visualizations",
        "Custom Dashboards",
        "Mobile Responsive"
      ],
      techStack: ["React", "TypeScript", "D3.js", "TensorFlow", "Node.js", "MongoDB"],
      liveDemo: true,
      interactive: true
    },
    {
      id: 2,
      title: "Quantum Computing Simulation Platform",
      description: "Explore quantum algorithms and their applications through our interactive simulation platform. Understand quantum computing concepts with hands-on examples and visualizations.",
      category: "Quantum Computing",
      duration: "4:20",
      features: [
        "Quantum Circuit Simulator",
        "Algorithm Visualization",
        "Performance Metrics",
        "Educational Modules",
        "Real-time Calculations",
        "Export Capabilities"
      ],
      techStack: ["Qiskit", "Python", "WebGL", "Three.js", "WebAssembly", "Rust"],
      liveDemo: true,
      interactive: true
    },
    {
      id: 3,
      title: "Advanced Cybersecurity Monitoring System",
      description: "Witness our AI-powered cybersecurity platform in action. See real-time threat detection, automated response systems, and comprehensive security analytics.",
      category: "Cybersecurity",
      duration: "5:10",
      features: [
        "Real-time Threat Detection",
        "Automated Response",
        "Security Analytics",
        "Incident Management",
        "Compliance Reporting",
        "Threat Intelligence"
      ],
      techStack: ["Python", "Elasticsearch", "Kibana", "Docker", "Kubernetes", "MLflow"],
      liveDemo: true,
      interactive: true
    },
    {
      id: 4,
      title: "Micro-SaaS Application Builder",
      description: "Build and deploy micro-SaaS applications with our no-code/low-code platform. See how quickly you can create, customize, and launch your own SaaS solutions.",
      category: "Micro-SaaS",
      duration: "6:30",
      features: [
        "Drag & Drop Builder",
        "Template Library",
        "API Integration",
        "User Management",
        "Payment Processing",
        "Analytics Dashboard"
      ],
      techStack: ["Vue.js", "Nuxt.js", "PostgreSQL", "Stripe", "Redis", "AWS"],
      liveDemo: true,
      interactive: true
    }
  ];

  const currentDemoData = demos[currentDemo];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setIsPlaying(false);
            return 0;
          }
          return prev + 0.5;
        });
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  const resetDemo = () => {
    setProgress(0);
    setIsPlaying(false);
  };

  const nextDemo = () => {
    setCurrentDemo((prev) => (prev + 1) % demos.length);
    resetDemo();
  };

  const prevDemo = () => {
    setCurrentDemo((prev) => (prev - 1 + demos.length) % demos.length);
    resetDemo();
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI Solutions': return Brain;
      case 'Quantum Computing': return Zap;
      case 'Cybersecurity': return Shield;
      case 'Micro-SaaS': return Code;
      default: return BarChart;
    }
  };

  const CategoryIcon = getCategoryIcon(currentDemoData.category);

  return (
    <div className={`bg-gradient-to-br from-slate-900 via-indigo-900/20 to-purple-900/20 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-indigo-400 text-sm font-medium mb-6">
            <Play className="w-4 h-4 mr-2" />
            Interactive Demos 2026
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Experience Our Solutions
            <span className="block bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              in Action
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Interact with live demonstrations of our cutting-edge AI, quantum computing, 
            cybersecurity, and micro-SaaS solutions. See the future of technology today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Demo Selector */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <BarChart className="w-6 h-6 mr-3 text-indigo-400" />
              Available Demos
            </h3>
            
            {demos.map((demo, index) => (
              <button
                key={demo.id}
                onClick={() => {
                  setCurrentDemo(index);
                  resetDemo();
                }}
                className={`w-full p-4 rounded-xl text-left transition-all duration-200 ${
                  currentDemo === index
                    ? 'bg-indigo-600/20 border border-indigo-500/30'
                    : 'bg-slate-800/50 border border-white/10 hover:bg-slate-700/50'
                }`}
              >
                <div className="flex items-start space-x-3">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    currentDemo === index ? 'bg-indigo-600' : 'bg-slate-700'
                  }`}>
                    <CategoryIcon className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-white font-semibold mb-1 truncate">
                      {demo.title}
                    </h4>
                    <p className="text-gray-400 text-sm mb-2 line-clamp-2">
                      {demo.description}
                    </p>
                    <div className="flex items-center space-x-4 text-xs text-gray-500">
                      <span className="flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        {demo.duration}
                      </span>
                      <span className="flex items-center">
                        <Users className="w-3 h-3 mr-1" />
                        {demo.category}
                      </span>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Main Demo Area */}
          <div className="lg:col-span-2">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden">
              {/* Demo Header */}
              <div className="p-6 border-b border-white/10">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center">
                      <CategoryIcon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">
                        {currentDemoData.title}
                      </h3>
                      <p className="text-indigo-400 font-medium">
                        {currentDemoData.category}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center space-x-1 px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                      <span>Live Demo</span>
                    </div>
                    <div className="flex items-center space-x-1 px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">
                      <Zap className="w-3 h-3" />
                      <span>Interactive</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 leading-relaxed">
                  {currentDemoData.description}
                </p>
              </div>

              {/* Demo Video/Visualization */}
              <div className="relative aspect-video bg-gradient-to-br from-slate-900 to-indigo-900/50">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.1),transparent_70%)]" />
                
                {/* Demo Content */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-indigo-600/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                      <Play className="w-12 h-12 text-indigo-400" />
                    </div>
                    <div className="text-white/80 text-lg font-medium mb-2">
                      Interactive Demo
                    </div>
                    <div className="text-white/60 text-sm">
                      Click play to start the demonstration
                    </div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-slate-700">
                  <div 
                    className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-100"
                    style={{ width: `${progress}%` }}
                  />
                </div>

                {/* Controls */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={togglePlay}
                      className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-all duration-200"
                    >
                      {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                    </button>
                    
                    <button
                      onClick={toggleMute}
                      className="w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-all duration-200"
                    >
                      {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                    </button>

                    <div className="text-white text-sm">
                      {formatTime((progress / 100) * 300)} / {currentDemoData.duration}
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <button
                      onClick={resetDemo}
                      className="w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-all duration-200"
                    >
                      <RotateCcw className="w-4 h-4" />
                    </button>
                    
                    <button
                      onClick={toggleFullscreen}
                      className="w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-all duration-200"
                    >
                      <Maximize className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Navigation Arrows */}
                <button
                  onClick={prevDemo}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-slate-800/80 hover:bg-slate-700/80 rounded-full flex items-center justify-center text-white transition-all duration-200"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextDemo}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-slate-800/80 hover:bg-slate-700/80 rounded-full flex items-center justify-center text-white transition-all duration-200"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Demo Details */}
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Features */}
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                      <Star className="w-5 h-5 mr-2 text-yellow-400" />
                      Key Features
                    </h4>
                    <div className="space-y-2">
                      {currentDemoData.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-indigo-400 rounded-full flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                      <Code className="w-5 h-5 mr-2 text-green-400" />
                      Technology Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {currentDemoData.techStack.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-slate-700/50 text-gray-300 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-6 pt-6 border-t border-white/10">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className="cyber-button bg-gradient-to-r from-indigo-600 to-purple-600 hover:scale-105 transform transition-all duration-200 flex-1">
                      Try Live Demo
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                    <button className="px-6 py-3 border border-white/20 text-white rounded-xl hover:bg-white/5 transition-all duration-200">
                      Schedule Consultation
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}