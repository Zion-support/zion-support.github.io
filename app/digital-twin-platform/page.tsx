'use client',

import React from 'react';
import { ArrowRight, Star, CheckCircle, Phone, Mail, MapPin, Building, Zap, Globe, Users, Shield, Code, BarChart, Brain, Cloud, Settings, Target, Rocket, Palette, Video, Music, Gamepad2, ShoppingCart, CreditCard, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Navigation as NavIcon, PieChart, TrendingDown, Activity, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location, Truck, Smartphone, ChefHat, Rocket as RocketIcon, Sprout, Scale } from 'lucide-react',
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';
import ErrorBoundary from '../components/ErrorBoundary';
import Loading from '../components/Loading';
import PerformanceMonitor from '../components/PerformanceMonitor';
import Navigation from '../components/Navigation';

const DigitalTwinPlatformPage: React.FC = () => {
const features = [
    {
      icon: Building,
      title: "Real-time Monitoring",
      description: "Live data synchronization between physical assets and their digital replicas"
    },
    {
      icon: Brain,
      title: "AI-Powered Analytics",
      description: "Machine learning algorithms for predictive maintenance and optimization"
    },
    {
      icon: Activity,
      title: "Performance Simulation",
      description: "Test scenarios and predict outcomes before implementing changes"
    },
    {
      icon: Globe,
      title: "IoT Integration",
      description: "Connect with sensors and devices for comprehensive data collection"
    },
    {
      icon: Shield,
      title: "Predictive Maintenance",
      description: "Identify potential issues before they cause downtime or failures"
    },
    {
      icon: BarChart,
      title: "Advanced Visualization",
      description: "Interactive 3 D models with real-time data overlays and analytics"
    }
  ],

const useCases = [
    {
      title: "Manufacturing",
      description: "Optimize production lines, predict equipment failures, and improve efficiency",
      icon: Factory,
      benefits: ["25% efficiency gain", "40% less downtime", "Predictive maintenance"]
    },
    {
      title: "Smart Buildings",
      description: "Monitor energy usage, optimize HVAC systems, and improve occupant comfort",
      icon: Building,
      benefits: ["30% energy savings", "Real-time monitoring", "Automated optimization"]
    },
    {
      title: "Transportation",
      description: "Track vehicle performance, optimize routes, and predict maintenance needs",
      icon: Car,
      benefits: ["20% fuel savings", "Route optimization", "Fleet management"]
    },
    {
      title: "Healthcare",
      description: "Monitor patient vitals, optimize hospital operations, and predict equipment needs",
      icon: Heart,
      benefits: ["Improved patient care", "Operational efficiency", "Resource optimization"]
    }
  ],

const industries = [
    {
      name: "Manufacturing",
      description: "Optimize production processes and predict equipment failures",
      icon: Factory,
      examples: ["Production lines", "Quality control", "Supply chain"]
    },
    {
      name: "Healthcare",
      description: "Monitor patient care and optimize hospital operations",
      icon: Heart,
      examples: ["Patient monitoring", "Equipment tracking", "Resource management"]
    },
    {
      name: "Energy",
      description: "Monitor power grids and optimize energy distribution",
      icon: Zap,
      examples: ["Smart grids", "Renewable energy", "Power plants"]
    },
    {
      name: "Transportation",
      description: "Track vehicles and optimize logistics operations",
      icon: Truck,
      examples: ["Fleet management", "Route optimization", "Predictive maintenance"]
    },
    {
      name: "Smart Cities",
      description: "Monitor urban infrastructure and optimize city services",
      icon: Building,
      examples: ["Traffic systems", "Utilities", "Public services"]
    },
    {
      name: "Retail",
      description: "Optimize store layouts and predict customer behavior",
      icon: ShoppingCart,
      examples: ["Store optimization", "Inventory management", "Customer analytics"]
    }
  ],

const pricingPlans = [
    {
      name: "Starter",
      price: "$999/mo",
      description: "Perfect for small businesses getting started with digital twins",
      features: [
        "Up to 10 digital twins",
        "Basic monitoring",
        "Standard analytics",
        "Email support",
        "Cloud hosting",
        "Mobile app access"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$2,999/mo",
      description: "Advanced features for growing organizations",
      features: [
        "Up to 100 digital twins",
        "Advanced analytics",
        "Predictive maintenance",
        "Priority support",
        "Custom integrations",
        "API access",
        "Real-time alerts",
        "Performance optimization"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$9,999/mo",
      description: "Complete digital twin platform for large enterprises",
      features: [
        "Unlimited digital twins",
        "AI-powered insights",
        "Custom development",
        "24/7 dedicated support",
        "On-premise deployment",
        "Advanced security",
        "Custom dashboards",
        "Multi-tenant support",
        "SLA guarantee"
      ],
      popular: false
    }
  ],

const testimonials = [
    {
      name: "Dr. Maria Rodriguez",
      role: "CTO",
      company: "Advanced Manufacturing Corp",
      avatar: "MR",
      content: "Our digital twin platform has revolutionized our manufacturing process. We've reduced downtime by 45% and increased efficiency by 30% through predictive maintenance and real-time optimization."
    },
    {
      name: "James Chen",
      role: "Operations Director",
      company: "Smart City Solutions",
      avatar: "JC",
      content: "The digital twin technology helps us monitor our entire city infrastructure in real-time. We can predict and prevent issues before they impact citizens, improving service quality by 60%."
    },
    {
      name: "Sarah Thompson",
      role: "Head of Innovation",
      company: "Healthcare Systems Inc",
      avatar: "ST",
      content: "Our hospital's digital twin allows us to optimize patient flow, predict equipment maintenance needs, and improve overall operational efficiency. Patient satisfaction has increased by 40%."
    }
  ],

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></section>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"></div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Digital Twin Platform
          </h1>
          <p className="text-xl md:text-2 xl text-gray-300 mb-8 max-w-4 xl mx-auto">
            Create virtual replicas of your physical assets and systems. Monitor, analyze, and optimize 
            performance in real-time with our advanced digital twin technology.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"></div>
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-4 px-8 rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center">
              Start Building
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 font-semibold py-4 px-8 rounded-xl hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"></button></<<<butto>View</butto></<<butto>Demo</butto>
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8"></div>
            <div className="text-center"></div>
              <div className="text-4xl font-bold text-cyan-400 mb-2">45%</div>
              <div className="text-gray-400">Downtime Reduction</div>
            </div>
            <div className="text-center"></div>
              <div className="text-4xl font-bold text-purple-400 mb-2">30%</div>
              <div className="text-gray-400">Efficiency Gain</div>
            </div>
            <div className="text-center"></div>
              <div className="text-4xl font-bold text-pink-400 mb-2">60%</div>
              <div className="text-gray-400">Faster Decisions</div>
            </div>
            <div className="text-center"></div>
              <div className="text-4xl font-bold text-green-400 mb-2">99.9%</div>
              <div className="text-gray-400">Accuracy</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto"></section>
          <div className="text-center mb-20"></div>
            <h2 className="text-5xl font-bold text-white mb-6">Platform Features</h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Comprehensive digital twin capabilities that provide real-time insights and predictive analytics.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              See how digital twins are transforming industries and driving innovation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {useCases.map((useCase, index) => (</div>
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20"></div>
                <div className="flex items-center mb-6"></div>
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-600 rounded-lg flex items-center justify-center mr-4"></div>
                    <useCase.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2 xl font-bold text-white">{useCase.title}</h>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">{useCase.description}</p>
                <div className="space-y-2">
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

      {/* Industries Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto"></section>
          <div className="text-center mb-20"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Industry Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-4 xl mx-auto leading-relaxed">
              Tailored digital twin solutions for every industry and use case.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (</div>
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-green-400/20 rounded-xl p-6 hover:border-green-400/40 transition-all duration-300"></div>
                <div className="text-center"></div>
                  <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4"></div>
                    <industry.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{industry.name}</h>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">{industry.description}</p>
                  <div className="space-y-1">
                    {industry.examples.map((example, exampleIndex) => (</div>
                      <div key={exampleIndex} className="text-xs text-gray-400">
                        • {example}
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
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-4 xl mx-auto leading-relaxed">
              Flexible pricing options to match your digital twin needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (</div>
              <div key={index} className={`bg-slate-800/50 backdrop-blur-sm border rounded-xl p-8 relative ${
                plan.popular ? 'border-cyan-400/40 ring-2 ring-cyan-400/20' : 'border-gray-700'
              }`}>
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
              See how organizations are transforming their operations with digital twins.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (</div>
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20"></div>
                <div className="flex items-center mb-4"></div>
                  <div className="flex text-yellow-400">
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
                    {testimonial.avatar}
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
            Start Your Digital Twin Journey
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-4 xl mx-auto leading-relaxed">
            Transform your physical assets into intelligent, connected digital twins that drive efficiency and innovation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center"></div>
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-4 px-8 rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center">
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 font-semibold py-4 px-8 rounded-xl hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"></button></<<<butto>Schedule</butto></<<butto>Demo</butto>
            </button>
          </div>
        </div>
      </section>

      <Footer /></Foote>
    </div>
  ),
},

DigitalTwinPlatformPage.displayName = 'DigitalTwinPlatformPage',

export default DigitalTwinPlatformPage,