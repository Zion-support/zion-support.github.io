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
      benefits: ["Sub-10 ms response", "Offline operation", "Enhanced safety"]
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
      specs: ["Rugged design", "Battery powered", "5 G connectivity", "Weather resistant"]
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800/20 to-purple-800/20 opacity-20"></section>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"></div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            AI Edge Computing</h1>
          </h1>
          <p className="text-xl md:text-2 xl text-gray-300 mb-8 max-w-4 xl mx-auto">
            Bring artificial intelligence to the edge of your network. Process data locally with ultra-low latency, 
            enhanced security, and real-time decision making capabilities.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"></div>
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-4 px-8 rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center">
              Deploy Edge AI
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 font-semibold py-4 px-8 rounded-xl hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"></button></<<<butto>View</butto></<<butto>Solutions</butto>
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8"></div>
            <div className="text-center"></div>
              <div className="text-4xl font-bold text-cyan-400 mb-2">&lt;10ms</div>
              <div className="text-gray-400">Response Time</div>
            </div>
            <div className="text-center"></div>
              <div className="text-4xl font-bold text-purple-400 mb-2">99.9%</div>
              <div className="text-gray-400">Uptime</div>
            </div>
            <div className="text-center"></div>
              <div className="text-4xl font-bold text-pink-400 mb-2">50%</div>
              <div className="text-gray-400">Bandwidth Savings</div>
            </div>
            <div className="text-center"></div>
              <div className="text-4xl font-bold text-green-400 mb-2">24/7</div>
              <div className="text-gray-400">Offline Operation</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto"></section>
          <div className="text-center mb-20"></div>
            <h2 className="text-5xl font-bold text-white mb-6">Edge Computing Features</h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Powerful edge computing capabilities that bring AI and real-time processing to your data sources.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
            {features.map((feature, index) => (</div>
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-8 hover:border-cyan-400/40 transition-all duration-300"></div>
                <div className="text-center"></div>
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-6"></div>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-24 bg-gradient-to-r from-purple-900/20 to-blue-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></section>
          <div className="text-center mb-20"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Real-World Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-4 xl mx-auto leading-relaxed">
              See how edge computing is transforming industries with real-time AI processing.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12"></div>
            {useCases.map((useCase, index) => (</div>
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20"></div>
                <div className="flex items-center mb-6"></div>
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-600 rounded-lg flex items-center justify-center mr-4"></div>
                    <useCase.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2 xl font-bold text-white">{useCase.title}</h>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">{useCase.description}</p>
                <div className="space-y-2"></div>
                  {useCase.benefits.map((benefit, benefitIndex) => (</div>
                    <div key={benefitIndex} className="flex items-center text-gray-300"></div>
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Edge Devices Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto"></section>
          <div className="text-center mb-20"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Edge Computing Devices
            </h2>
            <p className="text-xl text-gray-300 max-w-4 xl mx-auto leading-relaxed">
              Comprehensive range of edge devices designed for different applications and environments.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
            {edgeDevices.map((device, index) => (</div>
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-green-400/20 rounded-xl p-6 hover:border-green-400/40 transition-all duration-300"></div>
                <div className="text-center"></div>
                  <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4"></div>
                    <device.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{device.name}</h>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">{device.description}</p>
                  <div className="space-y-1"></div>
                    {device.specs.map((spec, specIndex) => (</div>
                      <div key={specIndex} className="text-xs text-gray-400">
                        • {spec}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></section>
          <div className="text-center mb-20"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Edge Computing Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-4 xl mx-auto leading-relaxed">
              Flexible pricing options to match your edge computing requirements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8"></div>
            {pricingPlans.map((plan, index) => (</div>
              <div key={index} className={`bg-slate-800/50 backdrop-blur-sm border rounded-xl p-8 relative ${
                plan.popular ? 'border-cyan-400/40 ring-2 ring-cyan-400/20' : 'border-gray-700'
              }`}></div>
                {plan.popular && (</div>
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2"></div>
                    <span className="bg-gradient-to-r from-cyan-400 to-purple-600 text-white text-sm font-bold px-4 py-2 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8"></div>
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-cyan-400 mb-2">{plan.price}</div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>
                
                <ul className="space-y-4 mb-8"></u>
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300"></l>
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" /></CheckCircl>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700' 
                    : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                }`}></button></<<<butto>Get</butto></<<butto>Started</butto>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></section>
          <div className="text-center mb-20"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Success Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-4 xl mx-auto leading-relaxed">
              See how organizations are leveraging edge computing for competitive advantage.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8"></div>
            {testimonials.map((testimonial, index) => (</div>
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20"></div>
                <div className="flex items-center mb-4"></div>
                  <div className="flex text-yellow-400"></div>
                    {[...Array(5)].map((_, i) => (</div>
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-300 mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center"></div>
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.avatar}</div>
                  </div>
                  <div></div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                    <p className="text-gray-500 text-xs">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"></section>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Deploy AI at the Edge
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-4 xl mx-auto leading-relaxed">
            Transform your operations with real-time AI processing at the edge of your network.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center"></div>
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-4 px-8 rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center">
              Start Deployment
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 font-semibold py-4 px-8 rounded-xl hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"></button></<<<butto>Schedule</butto></<<butto>Demo</butto>
            </button>
          </div>
        </div>
      </section>

      <Footer /></Footer>
    </div>
  );
};

AIEdgeComputingPage.displayName = 'AIEdgeComputingPage';

export default AIEdgeComputingPage;