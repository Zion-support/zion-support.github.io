'use client';

import React from 'react';
import { ArrowRight, Star, CheckCircle, Phone, Mail, MapPin, Building, Zap, Globe, Users, Shield, Code, BarChart, Brain, Cloud, Settings, Target, Rocket, Palette, Video, Music, Gamepad2, ShoppingCart, CreditCard, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Navigation as NavIcon, PieChart, TrendingDown, Activity, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location, Truck, Smartphone, ChefHat, Rocket as RocketIcon, Sprout, Scale } from 'lucide-react';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';
import ErrorBoundary from '../components/ErrorBoundary';
import Loading from '../components/Loading';
import PerformanceMonitor from '../components/PerformanceMonitor';
import Navigation from '../components/Navigation';

const RoboticsIntegrationPage: React.FC = () => {
  const features = [
    {
      icon: Settings,
      title: "Automated Integration",
      description: "Seamlessly integrate robots into existing workflows with minimal disruption"
    },
    {
      icon: Brain,
      title: "AI-Powered Control",
      description: "Intelligent robot control systems that adapt and learn from their environment"
    },
    {
      icon: Shield,
      title: "Safety Protocols",
      description: "Advanced safety systems ensuring human-robot collaboration without risk"
    },
    {
      icon: Activity,
      title: "Real-time Monitoring",
      description: "Comprehensive monitoring and analytics for optimal robot performance"
    },
    {
      icon: Globe,
      title: "Multi-Platform Support",
      description: "Support for all major robot manufacturers and operating systems"
    },
    {
      icon: Code,
      title: "Custom Development",
      description: "Tailored solutions and custom programming for specific business needs"
    }
  ];

  const solutions = [
    {
      title: "Manufacturing Automation",
      description: "Increase production efficiency by 60% with intelligent robotic systems",
      icon: Factory,
      benefits: ["60% efficiency gain", "24/7 operation", "Precision manufacturing"]
    },
    {
      title: "Warehouse Automation",
      description: "Optimize logistics with autonomous mobile robots and picking systems",
      icon: Truck,
      benefits: ["50% faster fulfillment", "Reduced errors", "Scalable operations"]
    },
    {
      title: "Healthcare Robotics",
      description: "Enhance patient care with surgical robots and rehabilitation systems",
      icon: Heart,
      benefits: ["Improved precision", "Faster recovery", "Reduced complications"]
    },
    {
      title: "Service Robotics",
      description: "Deploy service robots for cleaning, security, and customer interaction",
      icon: Users,
      benefits: ["24/7 service", "Cost reduction", "Enhanced customer experience"]
    }
  ];

  const robotTypes = [
    {
      name: "Industrial Robots",
      description: "Heavy-duty robots for manufacturing and assembly operations",
      icon: Factory,
      applications: ["Welding", "Assembly", "Painting", "Material handling"]
    },
    {
      name: "Collaborative Robots",
      description: "Safe robots designed to work alongside human workers",
      icon: Users,
      applications: ["Quality inspection", "Packaging", "Machine tending", "Assembly"]
    },
    {
      name: "Mobile Robots",
      description: "Autonomous robots for transportation and logistics",
      icon: Truck,
      applications: ["Warehouse navigation", "Delivery", "Patrol", "Cleaning"]
    },
    {
      name: "Service Robots",
      description: "Robots designed for customer service and interaction",
      icon: Users,
      applications: ["Reception", "Cleaning", "Security", "Entertainment"]
    },
    {
      name: "Medical Robots",
      description: "Precision robots for healthcare and surgical applications",
      icon: Heart,
      applications: ["Surgery", "Rehabilitation", "Diagnostics", "Patient care"]
    },
    {
      name: "Agricultural Robots",
      description: "Specialized robots for farming and agricultural operations",
      icon: Sprout,
      applications: ["Planting", "Harvesting", "Monitoring", "Pest control"]
    }
  ];

  const pricingPlans = [
    {
      name: "Basic Integration",
      price: "$5,000/mo",
      description: "Perfect for small businesses starting with robotics",
      features: [
        "Up to 5 robots",
        "Basic integration",
        "Standard support",
        "Training included",
        "Remote monitoring",
        "Monthly reports"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$15,000/mo",
      description: "Advanced robotics solutions for growing businesses",
      features: [
        "Up to 25 robots",
        "Advanced integration",
        "AI-powered control",
        "Priority support",
        "Custom programming",
        "Real-time analytics",
        "24/7 monitoring",
        "Performance optimization"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$50,000/mo",
      description: "Complete robotics ecosystem for large organizations",
      features: [
        "Unlimited robots",
        "Full automation suite",
        "Custom development",
        "Dedicated support team",
        "On-site engineers",
        "Advanced AI systems",
        "Multi-site management",
        "SLA guarantee"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Robert Kim",
      role: "Manufacturing Director",
      company: "Precision Manufacturing Ltd",
      avatar: "RK",
      content: "Our robotics integration has transformed our production line. We've increased output by 60% while reducing defects by 45%. The ROI was achieved in just 8 months."
    },
    {
      name: "Dr. Lisa Wang",
      role: "Chief Medical Officer",
      company: "Advanced Medical Center",
      avatar: "LW",
      content: "The surgical robots have revolutionized our procedures. We can perform complex surgeries with greater precision and faster recovery times. Patient outcomes have improved dramatically."
    },
    {
      name: "Michael Johnson",
      role: "Operations Manager",
      company: "Global Logistics Corp",
      avatar: "MJ",
      content: "Our warehouse automation with mobile robots has increased efficiency by 50% and reduced labor costs by 30%. The system is incredibly reliable and easy to maintain."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Robotics Integration
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Transform your operations with intelligent robotic systems. From manufacturing to healthcare, 
            our robotics integration solutions deliver unprecedented efficiency and precision.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-4 px-8 rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center">
              Start Integration
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 font-semibold py-4 px-8 rounded-xl hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
              View Solutions
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">60%</div>
              <div className="text-gray-400">Efficiency Gain</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">45%</div>
              <div className="text-gray-400">Defect Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-400 mb-2">24/7</div>
              <div className="text-gray-400">Operation</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">8mo</div>
              <div className="text-gray-400">ROI Timeline</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-white mb-6">Integration Features</h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Comprehensive robotics solutions that seamlessly integrate with your existing systems.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-8 hover:border-cyan-400/40 transition-all duration-300">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-24 bg-gradient-to-r from-purple-900/20 to-blue-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Industry Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Specialized robotics solutions tailored for different industries and applications.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-600 rounded-lg flex items-center justify-center mr-4">
                    <solution.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{solution.title}</h3>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">{solution.description}</p>
                <div className="space-y-2">
                  {solution.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center text-gray-300">
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

      {/* Robot Types Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Robot Types
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Comprehensive range of robots for every application and industry need.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {robotTypes.map((robot, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-green-400/20 rounded-xl p-6 hover:border-green-400/40 transition-all duration-300">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <robot.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{robot.name}</h3>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">{robot.description}</p>
                  <div className="space-y-1">
                    {robot.applications.map((application, appIndex) => (
                      <div key={appIndex} className="text-xs text-gray-400">
                        • {application}
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Integration Packages
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Flexible pricing options to match your robotics integration needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-slate-800/50 backdrop-blur-sm border rounded-xl p-8 relative ${
                plan.popular ? 'border-cyan-400/40 ring-2 ring-cyan-400/20' : 'border-gray-700'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-400 to-purple-600 text-white text-sm font-bold px-4 py-2 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-cyan-400 mb-2">{plan.price}</div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700' 
                    : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Success Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              See how organizations are transforming their operations with robotics integration.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-300 mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Automate Your Future
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Join the robotics revolution and transform your operations with intelligent automation solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-4 px-8 rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center">
              Start Integration
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 font-semibold py-4 px-8 rounded-xl hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

RoboticsIntegrationPage.displayName = 'RoboticsIntegrationPage';

export default RoboticsIntegrationPage;