'use client';

import React from 'react';
import { ArrowRight, Star, CheckCircle, Phone, Mail, MapPin, Building, Zap, Globe, Users, Shield, Code, BarChart, Brain, Cloud, Settings, Target, Rocket, Palette, Video, Music, Gamepad2, ShoppingCart, CreditCard, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Navigation as NavIcon, PieChart, TrendingDown, Activity, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location, Truck, Smartphone, ChefHat, Rocket as RocketIcon, Sprout, Scale } from 'lucide-react';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';
import ErrorBoundary from '../components/ErrorBoundary';
import Loading from '../components/Loading';
import PerformanceMonitor from '../components/PerformanceMonitor';
import Navigation from '../components/Navigation';

const AIEdgeComputingPage: React.FC = () => {
  const features = [
    {
      icon: Zap,
      title: "Ultra-Low Latency",
      description: "Process data locally with sub-millisecond response times for real-time applications"
    },
    {
      icon: Brain,
      title: "AI at the Edge",
      description: "Deploy machine learning models directly on edge devices for instant decision making"
    },
    {
      icon: Shield,
      title: "Enhanced Security",
      description: "Keep sensitive data local with advanced encryption and secure processing"
    },
    {
      icon: Globe,
      title: "Offline Capability",
      description: "Continue operations even when disconnected from the central cloud infrastructure"
    },
    {
      icon: Activity,
      title: "Real-time Analytics",
      description: "Process and analyze data streams in real-time without cloud dependency"
    },
    {
      icon: Cloud,
      title: "Hybrid Architecture",
      description: "Seamlessly integrate edge computing with cloud services for optimal performance"
    }
  ];

  const useCases = [
    {
      title: "Autonomous Vehicles",
      description: "Enable real-time decision making for self-driving cars with instant processing",
      icon: Car,
      benefits: ["Sub-10ms response", "Offline operation", "Enhanced safety"]
    },
    {
      title: "Industrial IoT",
      description: "Monitor and control manufacturing processes with real-time edge analytics",
      icon: Factory,
      benefits: ["Real-time control", "Predictive maintenance", "Reduced downtime"]
    },
    {
      title: "Smart Cities",
      description: "Process traffic, security, and utility data locally for immediate response",
      icon: Building,
      benefits: ["Instant response", "Data privacy", "Reduced bandwidth"]
    },
    {
      title: "Healthcare Monitoring",
      description: "Analyze patient data in real-time for immediate medical intervention",
      icon: Heart,
      benefits: ["Life-critical speed", "Privacy compliance", "Continuous monitoring"]
    }
  ];

  const edgeDevices = [
    {
      name: "Edge Servers",
      description: "High-performance computing nodes for complex AI workloads",
      icon: Cloud,
      specs: ["Multi-core processors", "GPU acceleration", "High memory", "Fast storage"]
    },
    {
      name: "Edge Gateways",
      description: "Connectivity and processing hubs for IoT device management",
      icon: Globe,
      specs: ["Multiple protocols", "Data aggregation", "Local processing", "Cloud sync"]
    },
    {
      name: "Edge Sensors",
      description: "Intelligent sensors with built-in AI processing capabilities",
      icon: Activity,
      specs: ["AI inference", "Low power", "Wireless connectivity", "Real-time data"]
    },
    {
      name: "Mobile Edge",
      description: "Portable edge computing solutions for field operations",
      icon: Smartphone,
      specs: ["Rugged design", "Battery powered", "5G connectivity", "Weather resistant"]
    },
    {
      name: "Edge Cameras",
      description: "Smart cameras with onboard AI for video analytics",
      icon: Video,
      specs: ["Computer vision", "Object detection", "Facial recognition", "Motion tracking"]
    },
    {
      name: "Edge Controllers",
      description: "Industrial control systems with AI-powered automation",
      icon: Settings,
      specs: ["PLC integration", "Real-time control", "Predictive algorithms", "Safety systems"]
    }
  ];

  const pricingPlans = [
    {
      name: "Edge Starter",
      price: "$2,999/mo",
      description: "Perfect for small deployments and proof of concepts",
      features: [
        "Up to 5 edge devices",
        "Basic AI models",
        "Cloud synchronization",
        "Standard support",
        "Remote monitoring",
        "Monthly reports"
      ],
      popular: false
    },
    {
      name: "Edge Professional",
      price: "$9,999/mo",
      description: "Advanced edge computing for growing organizations",
      features: [
        "Up to 50 edge devices",
        "Custom AI models",
        "Real-time analytics",
        "Priority support",
        "Advanced security",
        "API access",
        "Performance optimization",
        "24/7 monitoring"
      ],
      popular: true
    },
    {
      name: "Edge Enterprise",
      price: "$29,999/mo",
      description: "Complete edge computing ecosystem for large enterprises",
      features: [
        "Unlimited edge devices",
        "Full AI suite",
        "Custom development",
        "Dedicated support team",
        "On-site deployment",
        "Advanced analytics",
        "Multi-site management",
        "SLA guarantee"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "David Chen",
      role: "CTO",
      company: "Autonomous Systems Inc",
      avatar: "DC",
      content: "Edge computing has been a game-changer for our autonomous vehicle fleet. We can process sensor data in real-time, making split-second decisions that keep our passengers safe."
    },
    {
      name: "Maria Rodriguez",
      role: "Operations Director",
      company: "Smart Manufacturing Corp",
      avatar: "MR",
      content: "Our production line efficiency increased by 40% with edge AI. We can predict equipment failures before they happen and optimize processes in real-time."
    },
    {
      name: "Dr. James Wilson",
      role: "Chief Medical Officer",
      company: "Advanced Healthcare Systems",
      avatar: "JW",
      content: "Edge computing enables us to monitor patients in real-time and respond to critical situations immediately. It's literally saving lives with faster response times."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
    </div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"> </div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"> </div><Navigation />
      
      {/* Hero Section */}
     </Navigation /> </Navigation /><section className="relative py-20 overflow-hidden">
       </section className="relative py-20 overflow-hidden"> </section className="relative py-20 overflow-hidden"><div className="absolute inset-0 bg-gradient-to-br from-slate-800/20 to-purple-800/20 opacity-20"></div>
        
       <//div> <//div><div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        </div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"> </div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"> </div><h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            AI Edge Computing
       </h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"> </h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"> </h1>
         <//h1> <//h1><p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Bring artificial intelligence to the edge of your network. Process data locally with ultra-low latency, 
            enhanced security, and real-time decision making capabilities.
        </p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto"> </p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto"> </p>
          
         <//p> <//p><div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          </div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"> </div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"> </div><button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-4 px-8 rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center">
              Deploy Edge AI
             </button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-4 px-8 rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center"> </button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-4 px-8 rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center"><ArrowRight className="w-5 h-5 ml-2" />
          </ArrowRight className="w-5 h-5 ml-2" /> </ArrowRight className="w-5 h-5 ml-2" /> </button>
           <//button> <//button><button className="border-2 border-cyan-400 text-cyan-400 font-semibold py-4 px-8 rounded-xl hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
              View Solutions
          </button className="border-2 border-cyan-400 text-cyan-400 font-semibold py-4 px-8 rounded-xl hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"> </button className="border-2 border-cyan-400 text-cyan-400 font-semibold py-4 px-8 rounded-xl hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"> </button>
        <//button> <//button> </div>

          {/* Stats */}
         <//div> <//div><div className="grid grid-cols-2 md:grid-cols-4 gap-8">
           </div className="grid grid-cols-2 md:grid-cols-4 gap-8"> </div className="grid grid-cols-2 md:grid-cols-4 gap-8"><div className="text-center">
             </div className="text-center"> </div className="text-center"><div className="text-4xl font-bold text-cyan-400 mb-2">&lt;1</div className="text-4xl font-bold text-cyan-400 mb-2">0</div className="text-4xl font-bold text-cyan-400 mb-2">m</div>s</div>
             <//div> <//div><div className="text-gray-400">Response T</div className="text-gray-400">i</div className="text-gray-400">m</div>e</div>
          <//div> <//div> </div>
           <//div> <//div><div className="text-center">
             </div className="text-center"> </div className="text-center"><div className="text-4xl font-bold text-purple-400 mb-2">99</div className="text-4xl font-bold text-purple-400 mb-2">.</div className="text-4xl font-bold text-purple-400 mb-2">9</div>%</div>
             <//div> <//div><div className="text-gray-400">Upt</div className="text-gray-400">i</div className="text-gray-400">m</div>e</div>
          <//div> <//div> </div>
           <//div> <//div><div className="text-center">
             </div className="text-center"> </div className="text-center"><div className="text-4xl font-bold text-pink-400 mb-2">5</div className="text-4xl font-bold text-pink-400 mb-2">0</div>%</div>
             <//div> <//div><div className="text-gray-400">Bandwidth Savi</div className="text-gray-400">n</div className="text-gray-400">g</div>s</div>
          <//div> <//div> </div>
           <//div> <//div><div className="text-center">
             </div className="text-center"> </div className="text-center"><div className="text-4xl font-bold text-green-400 mb-2">2</div className="text-4xl font-bold text-green-400 mb-2">4</div className="text-4xl font-bold text-green-400 mb-2">/</div>7</div>
             <//div> <//div><div className="text-gray-400">Offline Operat</div className="text-gray-400">i</div className="text-gray-400">o</div>n</div>
          <//div> <//div> </div>
        <//div> <//div> </div>
      <//div> <//div> </div>
    <//div> <//div> </section>

      {/* Features Section */}
     <//section> <//section><section className="py-24 px-4 sm:px-6 lg:px-8">
       </section className="py-24 px-4 sm:px-6 lg:px-8"> </section className="py-24 px-4 sm:px-6 lg:px-8"><div className="max-w-7xl mx-auto">
         </div className="max-w-7xl mx-auto"> </div className="max-w-7xl mx-auto"><div className="text-center mb-20">
          </div className="text-center mb-20"> </div className="text-center mb-20"> </div><h2 className="text-5xl font-bold text-white mb-6">Edge Computing Featur</h2 className="text-5xl font-bold text-white mb-6">e</h2 className="text-5xl font-bold text-white mb-6">s</h2>
           <//h2> <//h2><p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Powerful edge computing capabilities that bring AI and real-time processing to your data sources.
          </p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"> </p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"> </p>
        <//p> <//p> </div>
          
         <//div> <//div><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
             </div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> </div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"><div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-8 hover:border-cyan-400/40 transition-all duration-300">
               </div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-8 hover:border-cyan-400/40 transition-all duration-300"> </div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-8 hover:border-cyan-400/40 transition-all duration-300"><div className="text-center">
                 </div className="text-center"> </div className="text-center"><div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                  </div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-6"> </div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-6"> </div><feature.icon className="w-8 h-8 text-white" />
                </feature.icon className="w-8 h-8 text-white" /> </feature.icon className="w-8 h-8 text-white" /> </div>
                 <//div> <//div><h3 className="text-xl font-bold text-white mb-4">{feature.titl</h3 className="text-xl font-bold text-white mb-4">e</h3 className="text-xl font-bold text-white mb-4">}</h3>
                 <//h3> <//h3><p className="text-gray-300 leading-relaxed">{feature.descriptio</p className="text-gray-300 leading-relaxed">n</p className="text-gray-300 leading-relaxed">}</p>
              <//p> <//p> </div>
            <//div> <//div> </div>
            ))}
        <//div> <//div> </div>
      <//div> <//div> </div>
    <//div> <//div> </section>

      {/* Use Cases Section */}
     <//section> <//section><section className="py-24 bg-gradient-to-r from-purple-900/20 to-blue-900/20">
       </section className="py-24 bg-gradient-to-r from-purple-900/20 to-blue-900/20"> </section className="py-24 bg-gradient-to-r from-purple-900/20 to-blue-900/20"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         </div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> </div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="text-center mb-20">
          </div className="text-center mb-20"> </div className="text-center mb-20"> </div><h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Real-World Applications
          </h2 className="text-4xl md:text-5xl font-bold text-white mb-6"> </h2 className="text-4xl md:text-5xl font-bold text-white mb-6"> </h2>
           <//h2> <//h2><p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              See how edge computing is transforming industries with real-time AI processing.
          </p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"> </p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"> </p>
        <//p> <//p> </div>
          
         <//div> <//div><div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {useCases.map((useCase, index) => (
             </div className="grid grid-cols-1 md:grid-cols-2 gap-12"> </div className="grid grid-cols-1 md:grid-cols-2 gap-12"><div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
               </div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20"> </div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20"><div className="flex items-center mb-6">
                 </div className="flex items-center mb-6"> </div className="flex items-center mb-6"><div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-600 rounded-lg flex items-center justify-center mr-4">
                  </div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-600 rounded-lg flex items-center justify-center mr-4"> </div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-600 rounded-lg flex items-center justify-center mr-4"> </div><useCase.icon className="w-6 h-6 text-white" />
                </useCase.icon className="w-6 h-6 text-white" /> </useCase.icon className="w-6 h-6 text-white" /> </div>
                 <//div> <//div><h3 className="text-2xl font-bold text-white">{useCase.titl</h3 className="text-2xl font-bold text-white">e</h3 className="text-2xl font-bold text-white">}</h3>
              <//h3> <//h3> </div>
               <//div> <//div><p className="text-gray-300 mb-6 leading-relaxed">{useCase.descriptio</p className="text-gray-300 mb-6 leading-relaxed">n</p className="text-gray-300 mb-6 leading-relaxed">}</p>
               <//p> <//p><div className="space-y-2">
                  {useCase.benefits.map((benefit, benefitIndex) => (
                   </div className="space-y-2"> </div className="space-y-2"><div key={benefitIndex} className="flex items-center text-gray-300">
                    </div key={benefitIndex} className="flex items-center text-gray-300"> </div key={benefitIndex} className="flex items-center text-gray-300"> </div><CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                  </CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" /> </CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" /> </div>
                  ))}
              <//div> <//div> </div>
            <//div> <//div> </div>
            ))}
        <//div> <//div> </div>
      <//div> <//div> </div>
    <//div> <//div> </section>

      {/* Edge Devices Section */}
     <//section> <//section><section className="py-24 px-4 sm:px-6 lg:px-8">
       </section className="py-24 px-4 sm:px-6 lg:px-8"> </section className="py-24 px-4 sm:px-6 lg:px-8"><div className="max-w-7xl mx-auto">
         </div className="max-w-7xl mx-auto"> </div className="max-w-7xl mx-auto"><div className="text-center mb-20">
          </div className="text-center mb-20"> </div className="text-center mb-20"> </div><h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Edge Computing Devices
          </h2 className="text-4xl md:text-5xl font-bold text-white mb-6"> </h2 className="text-4xl md:text-5xl font-bold text-white mb-6"> </h2>
           <//h2> <//h2><p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Comprehensive range of edge devices designed for different applications and environments.
          </p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"> </p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"> </p>
        <//p> <//p> </div>
          
         <//div> <//div><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {edgeDevices.map((device, index) => (
             </div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> </div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"><div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-green-400/20 rounded-xl p-6 hover:border-green-400/40 transition-all duration-300">
               </div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-green-400/20 rounded-xl p-6 hover:border-green-400/40 transition-all duration-300"> </div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-green-400/20 rounded-xl p-6 hover:border-green-400/40 transition-all duration-300"><div className="text-center">
                 </div className="text-center"> </div className="text-center"><div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  </div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4"> </div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4"> </div><device.icon className="w-6 h-6 text-white" />
                </device.icon className="w-6 h-6 text-white" /> </device.icon className="w-6 h-6 text-white" /> </div>
                 <//div> <//div><h3 className="text-lg font-bold text-white mb-3">{device.nam</h3 className="text-lg font-bold text-white mb-3">e</h3 className="text-lg font-bold text-white mb-3">}</h3>
                 <//h3> <//h3><p className="text-gray-300 text-sm mb-4 leading-relaxed">{device.descriptio</p className="text-gray-300 text-sm mb-4 leading-relaxed">n</p className="text-gray-300 text-sm mb-4 leading-relaxed">}</p>
                 <//p> <//p><div className="space-y-1">
                    {device.specs.map((spec, specIndex) => (
                     </div className="space-y-1"> </div className="space-y-1"><div key={specIndex} className="text-xs text-gray-400">
                        • {spec}
                   </div key={specIndex} className="text-xs text-gray-400"> </div key={specIndex} className="text-xs text-gray-400"> </div> </div>
                    ))}
                <//div> <//div> </div>
              <//div> <//div> </div>
            <//div> <//div> </div>
            ))}
        <//div> <//div> </div>
      <//div> <//div> </div>
    <//div> <//div> </section>

      {/* Pricing Section */}
     <//section> <//section><section className="py-24 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
       </section className="py-24 bg-gradient-to-r from-cyan-500/10 to-purple-500/10"> </section className="py-24 bg-gradient-to-r from-cyan-500/10 to-purple-500/10"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         </div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> </div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="text-center mb-20">
          </div className="text-center mb-20"> </div className="text-center mb-20"> </div><h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Edge Computing Plans
          </h2 className="text-4xl md:text-5xl font-bold text-white mb-6"> </h2 className="text-4xl md:text-5xl font-bold text-white mb-6"> </h2>
           <//h2> <//h2><p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Flexible pricing options to match your edge computing requirements.
          </p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"> </p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"> </p>
        <//p> <//p> </div>
          
         <//div> <//div><div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
             </div className="grid grid-cols-1 md:grid-cols-3 gap-8"> </div className="grid grid-cols-1 md:grid-cols-3 gap-8"><div key={index} className={`bg-slate-800/50 backdrop-blur-sm border rounded-xl p-8 relative ${
                plan.popular ? 'border-cyan-400/40 ring-2 ring-cyan-400/20' : 'border-gray-700'
              }`}>
                {plan.popular && (
                 </div key={index} className={`bg-slate-800/50 backdrop-blur-sm border rounded-xl p-8 relative ${
                plan.popular ? 'border-cyan-400/40 ring-2 ring-cyan-400/20' : 'border-gray-700'
              }`}> </div key={index} className={`bg-slate-800/50 backdrop-blur-sm border rounded-xl p-8 relative ${
                plan.popular ? 'border-cyan-400/40 ring-2 ring-cyan-400/20' : 'border-gray-700'
              }`}><div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  </div className="absolute -top-4 left-1/2 transform -translate-x-1/2"> </div className="absolute -top-4 left-1/2 transform -translate-x-1/2"> </div><span className="bg-gradient-to-r from-cyan-400 to-purple-600 text-white text-sm font-bold px-4 py-2 rounded-full">
                      Most Popular
                 </span className="bg-gradient-to-r from-cyan-400 to-purple-600 text-white text-sm font-bold px-4 py-2 rounded-full"> </span className="bg-gradient-to-r from-cyan-400 to-purple-600 text-white text-sm font-bold px-4 py-2 rounded-full"> </span>
                <//span> <//span> </div>
                )}
                
               <//div> <//div><div className="text-center mb-8">
                </div className="text-center mb-8"> </div className="text-center mb-8"> </div><h3 className="text-2xl font-bold text-white mb-2">{plan.nam</h3 className="text-2xl font-bold text-white mb-2">e</h3 className="text-2xl font-bold text-white mb-2">}</h3>
                 <//h3> <//h3><div className="text-4xl font-bold text-cyan-400 mb-2">{plan.pri</div className="text-4xl font-bold text-cyan-400 mb-2">c</div className="text-4xl font-bold text-cyan-400 mb-2">e</div>}</div>
                 <//div> <//div><p className="text-gray-300">{plan.descriptio</p className="text-gray-300">n</p className="text-gray-300">}</p>
              <//p> <//p> </div>
                
               <//div> <//div><ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                   </ul className="space-y-4 mb-8"> </ul className="space-y-4 mb-8"><li key={featureIndex} className="flex items-center text-gray-300">
                     </li key={featureIndex} className="flex items-center text-gray-300"> </li key={featureIndex} className="flex items-center text-gray-300"><CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      {feature}
                  </CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" /> </CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" /> </li>
                  ))}
              <//li> <//li> </ul>
                
               <//ul> <//ul><button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700' 
                    : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                }`}>
                  Get Started
              </button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700' 
                    : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                }`}> </button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700' 
                    : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                }`}> </button>
            <//button> <//button> </div>
            ))}
        <//div> <//div> </div>
      <//div> <//div> </div>
    <//div> <//div> </section>

      {/* Testimonials Section */}
     <//section> <//section><section className="py-24 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
       </section className="py-24 bg-gradient-to-r from-cyan-500/10 to-purple-500/10"> </section className="py-24 bg-gradient-to-r from-cyan-500/10 to-purple-500/10"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         </div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> </div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="text-center mb-20">
          </div className="text-center mb-20"> </div className="text-center mb-20"> </div><h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Success Stories
          </h2 className="text-4xl md:text-5xl font-bold text-white mb-6"> </h2 className="text-4xl md:text-5xl font-bold text-white mb-6"> </h2>
           <//h2> <//h2><p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              See how organizations are leveraging edge computing for competitive advantage.
          </p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"> </p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"> </p>
        <//p> <//p> </div>
          
         <//div> <//div><div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
             </div className="grid grid-cols-1 md:grid-cols-3 gap-8"> </div className="grid grid-cols-1 md:grid-cols-3 gap-8"><div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
               </div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20"> </div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20"><div className="flex items-center mb-4">
                 </div className="flex items-center mb-4"> </div className="flex items-center mb-4"><div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                    </div className="flex text-yellow-400"> </div className="flex text-yellow-400"> </div><Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                </Star key={i} className="w-5 h-5 fill-current" /> </Star key={i} className="w-5 h-5 fill-current" /> </div>
              <//div> <//div> </div>
               <//div> <//div><p className="text-gray-300 mb-6 italic">
                  "{testimonial.content}"
              </p className="text-gray-300 mb-6 italic"> </p className="text-gray-300 mb-6 italic"> </p>
               <//p> <//p><div className="flex items-center">
                 </div className="flex items-center"> </div className="flex items-center"><div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.avatar}
               </div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-4"> </div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-4"> </div> </div>
                 <//div> <//div><div>
                  </div> </div> </div><h4 className="text-white font-semibold">{testimonial.nam</h4 className="text-white font-semibold">e</h4 className="text-white font-semibold">}</h4>
                   <//h4> <//h4><p className="text-gray-400 text-sm">{testimonial.rol</p className="text-gray-400 text-sm">e</p className="text-gray-400 text-sm">}</p>
                   <//p> <//p><p className="text-gray-500 text-xs">{testimonial.compan</p className="text-gray-500 text-xs">y</p className="text-gray-500 text-xs">}</p>
                <//p> <//p> </div>
              <//div> <//div> </div>
            <//div> <//div> </div>
            ))}
        <//div> <//div> </div>
      <//div> <//div> </div>
    <//div> <//div> </section>

      {/* CTA Section */}
     <//section> <//section><section className="py-24 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
       </section className="py-24 bg-gradient-to-r from-cyan-500/10 to-purple-500/10"> </section className="py-24 bg-gradient-to-r from-cyan-500/10 to-purple-500/10"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        </div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"> </div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"> </div><h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Deploy AI at the Edge
        </h2 className="text-4xl md:text-5xl font-bold text-white mb-8"> </h2 className="text-4xl md:text-5xl font-bold text-white mb-8"> </h2>
         <//h2> <//h2><p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Transform your operations with real-time AI processing at the edge of your network.
        </p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"> </p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"> </p>
          
         <//p> <//p><div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          </div className="flex flex-col sm:flex-row gap-4 justify-center items-center"> </div className="flex flex-col sm:flex-row gap-4 justify-center items-center"> </div><button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-4 px-8 rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center">
              Start Deployment
             </button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-4 px-8 rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center"> </button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-4 px-8 rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center"><ArrowRight className="w-5 h-5 ml-2" />
          </ArrowRight className="w-5 h-5 ml-2" /> </ArrowRight className="w-5 h-5 ml-2" /> </button>
           <//button> <//button><button className="border-2 border-cyan-400 text-cyan-400 font-semibold py-4 px-8 rounded-xl hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
              Schedule Demo
          </button className="border-2 border-cyan-400 text-cyan-400 font-semibold py-4 px-8 rounded-xl hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"> </button className="border-2 border-cyan-400 text-cyan-400 font-semibold py-4 px-8 rounded-xl hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"> </button>
        <//button> <//button> </div>
      <//div> <//div> </div>
    <//div> <//div> </section>

     <//section> <//section><Footer />
  </Footer /> </Footer /> </div>
  );
};

AIEdgeComputingPage.displayName = 'AIEdgeComputingPage';

export default AIEdgeComputingPage<//div>;<//div>