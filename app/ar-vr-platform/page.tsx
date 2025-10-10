'use client';

import React from 'react';
import { ArrowRight, Star, CheckCircle, Phone, Mail, MapPin, Eye, Zap, Globe, Users, Shield, Code, BarChart, Brain, Cloud, Settings, Target, Rocket, Palette, Video, Music, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Navigation as NavIcon, PieChart, TrendingDown, Activity, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location, Truck, Smartphone, ChefHat, Rocket as RocketIcon, Sprout, Scale } from 'lucide-react';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';
import ErrorBoundary from '../components/ErrorBoundary';
import Loading from '../components/Loading';
import PerformanceMonitor from '../components/PerformanceMonitor';
import Navigation from '../components/Navigation';

const ARVRPlatformPage: React.FC = () => {
  const features = [
    {
      icon: Eye,
      title: "Immersive 3 D Experiences",
      description: "Create stunning AR/VR experiences with photorealistic graphics and smooth interactions"
    },
    {
      icon: Zap,
      title: "Real-time Rendering",
      description: "Advanced rendering engine with 120 fps support and low-latency tracking"
    },
    {
      icon: Globe,
      title: "Cross-Platform Support",
      description: "Deploy to all major VR headsets, AR glasses, and mobile devices"
    },
    {
      icon: Users,
      title: "Multi-User Collaboration",
      description: "Enable multiple users to interact in shared virtual spaces"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security with encrypted data transmission and user authentication"
    },
    {
      icon: Code,
      title: "Developer Tools",
      description: "Comprehensive SDK and API for custom development and integration"
    }
  ];

  const useCases = [
    {
      title: "Virtual Training",
      description: "Immersive training simulations for healthcare, aviation, and manufacturing",
      icon: GraduationCap,
      benefits: ["90% faster learning", "Reduced training costs", "Risk-free practice"]
    },
    {
      title: "Virtual Meetings",
      description: "Next-generation collaboration with spatial audio and virtual whiteboards",
      icon: Users,
      benefits: ["Enhanced presence", "Global accessibility", "Cost savings"]
    },
    {
      title: "Virtual Showrooms",
      description: "Interactive product demonstrations and virtual storefronts",
      icon: ShoppingCart,
      benefits: ["24/7 availability", "Unlimited inventory", "Global reach"]
    },
    {
      title: "Architectural Visualization",
      description: "Walk through buildings before they're built with photorealistic rendering",
      icon: Building,
      benefits: ["Client engagement", "Design validation", "Cost reduction"]
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$299/mo",
      description: "Perfect for small teams getting started with AR/VR",
      features: [
        "Up to 10 concurrent users",
        "Basic 3 D assets library",
        "Standard rendering quality",
        "Email support",
        "Mobile AR support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$799/mo",
      description: "Advanced features for growing businesses",
      features: [
        "Up to 100 concurrent users",
        "Premium 3 D assets library",
        "High-quality rendering",
        "Priority support",
        "VR headset support",
        "Custom branding",
        "Analytics dashboard"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$1,999/mo",
      description: "Full-scale AR/VR solutions for large organizations",
      features: [
        "Unlimited concurrent users",
        "Custom 3 D asset creation",
        "Ultra-high quality rendering",
        "24/7 dedicated support",
        "All device support",
        "White-label solution",
        "Advanced analytics",
        "Custom integrations",
        "SLA guarantee"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      role: "Chief Medical Officer",
      company: "MedTech Innovations",
      avatar: "SC",
      content: "The AR/VR platform revolutionized our surgical training. Our residents can practice complex procedures in a risk-free environment, leading to 85% improvement in surgical outcomes."
    },
    {
      name: "Michael Rodriguez",
      role: "VP of Training",
      company: "Global Manufacturing Corp",
      avatar: "MR",
      content: "We've reduced training costs by 70% while improving employee engagement. The virtual factory tours help new employees understand complex processes faster than ever."
    },
    {
      name: "Emily Watson",
      role: "Creative Director",
      company: "Design Studio Pro",
      avatar: "EW",
      content: "Our clients can now walk through their future homes before construction begins. This has increased our project approval rate by 95% and reduced design revisions by 60%."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden"></section>
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800/20 to-purple-800/20 opacity-20"></section>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"></div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"></h1>
            AR/VR Platform
          </h1>
          <p className="text-xl md:text-2 xl text-gray-300 mb-8 max-w-4 xl mx-auto"></p>
            Build immersive augmented and virtual reality experiences that transform how people work, learn, and interact. 
            Create photorealistic 3 D environments with our cutting-edge platform.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"></div>
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-4 px-8 rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center"></button>
              Start Building
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 font-semibold py-4 px-8 rounded-xl hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"></button></<<<butto>Watch</butto></<<butto>Demo</butto>
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8"></div>
            <div className="text-center"></div>
              <div className="text-4xl font-bold text-cyan-400 mb-2">120fps</div>
              <div className="text-gray-400">Rendering Speed</div>
            </div>
            <div className="text-center"></div>
              <div className="text-4xl font-bold text-purple-400 mb-2">99.9%</div>
              <div className="text-gray-400">Uptime</div>
            </div>
            <div className="text-center"></div>
              <div className="text-4xl font-bold text-pink-400 mb-2">50+</div>
              <div className="text-gray-400">Device Support</div>
            </div>
            <div className="text-center"></div>
              <div className="text-4xl font-bold text-green-400 mb-2">24/7</div>
              <div className="text-gray-400">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8"></section>
        <div className="max-w-7xl mx-auto"></section>
          <div className="text-center mb-20"></div>
            <h2 className="text-5xl font-bold text-white mb-6">Platform Features</h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"></p>
              Everything you need to create, deploy, and manage immersive AR/VR experiences at scale.
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
      <section className="py-24 bg-gradient-to-r from-purple-900/20 to-blue-900/20"></section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></section>
          <div className="text-center mb-20"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6"></h2>
              Transform Your Industry
            </h2>
            <p className="text-xl text-gray-300 max-w-4 xl mx-auto leading-relaxed"></p>
              Discover how AR/VR technology is revolutionizing industries across the globe.
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

      {/* Pricing Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8"></section>
        <div className="max-w-7xl mx-auto"></section>
          <div className="text-center mb-20"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6"></h2>
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-4 xl mx-auto leading-relaxed"></p>
              Flexible pricing options to match your AR/VR development needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8"></div>
            {pricingPlans.map((plan, index) => (</div>
              <div key={index} className={`bg-slate-800/50 backdrop-blur-sm border rounded-xl p-8 relative ${
                plan.popular ? 'border-cyan-400/40 ring-2 ring-cyan-400/20' : 'border-gray-700'
              }`}></div>
                {plan.popular && (</div>
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2"></div>
                    <span className="bg-gradient-to-r from-cyan-400 to-purple-600 text-white text-sm font-bold px-4 py-2 rounded-full"></span>
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
      <section className="py-24 bg-gradient-to-r from-cyan-500/10 to-purple-500/10"></section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></section>
          <div className="text-center mb-20"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6"></h2>
              Success Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-4 xl mx-auto leading-relaxed"></p>
              See how leading organizations are transforming their operations with our AR/VR platform.
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
                <p className="text-gray-300 mb-6 italic"></p>
                  "{testimonial.content}"
                </p>
                <div className="flex items-center"></div>
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-4"></div>
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
      <section className="py-24 bg-gradient-to-r from-cyan-500/10 to-purple-500/10"></section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"></section>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8"></h2>
            Ready to Build the Future?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-4 xl mx-auto leading-relaxed"></p>
            Join thousands of developers and organizations creating immersive experiences with our AR/VR platform.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center"></div>
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-4 px-8 rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center"></button>
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
  );
};

ARVRPlatformPage.displayName = 'ARVRPlatformPage';

export default ARVRPlatformPage;