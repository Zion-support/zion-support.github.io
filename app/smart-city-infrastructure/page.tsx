'use client';

import React from 'react';
import { ArrowRight, Star, CheckCircle, Phone, Mail, MapPin, Building, Zap, Globe, Users, Shield, Code, BarChart, Brain, Cloud, Settings, Target, Rocket, Palette, Video, Music, Gamepad2, ShoppingCart, CreditCard, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Navigation as NavIcon, PieChart, TrendingDown, Activity, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location, Truck, Smartphone, ChefHat, Rocket as RocketIcon, Sprout, Scale } from 'lucide-react';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';
import ErrorBoundary from '../components/ErrorBoundary';
import Loading from '../components/Loading';
import PerformanceMonitor from '../components/PerformanceMonitor';
import Navigation from '../components/Navigation';

const SmartCityInfrastructurePage: React.FC = () => {
  const features = [
    {
      icon: Building,
      title: "Smart Buildings",
      description: "Intelligent building management with automated climate control, lighting, and security systems"
    },
    {
      icon: Car,
      title: "Smart Transportation",
      description: "AI-powered traffic management, autonomous vehicle integration, and real-time route optimization"
    },
    {
      icon: Zap,
      title: "Smart Energy Grid",
      description: "Renewable energy integration, smart meters, and intelligent power distribution"
    },
    {
      icon: Globe,
      title: "IoT Integration",
      description: "Comprehensive sensor networks for real-time monitoring and data collection"
    },
    {
      icon: Shield,
      title: "Smart Security",
      description: "Advanced surveillance systems with AI-powered threat detection and emergency response"
    },
    {
      icon: Users,
      title: "Citizen Services",
      description: "Digital platforms for government services, healthcare, and community engagement"
    }
  ];

  const solutions = [
    {
      title: "Traffic Management",
      description: "Reduce congestion by 40% with AI-powered traffic optimization and real-time monitoring",
      icon: Car,
      benefits: ["40% less congestion", "25% fuel savings", "Real-time updates"]
    },
    {
      title: "Energy Efficiency",
      description: "Cut energy consumption by 30% through smart grid technology and renewable integration",
      icon: Zap,
      benefits: ["30% energy savings", "50% renewable energy", "Smart metering"]
    },
    {
      title: "Public Safety",
      description: "Enhance security with AI-powered surveillance and predictive crime prevention",
      icon: Shield,
      benefits: ["50% faster response", "Predictive analytics", "24/7 monitoring"]
    },
    {
      title: "Waste Management",
      description: "Optimize waste collection routes and implement smart recycling programs",
      icon: Truck,
      benefits: ["35% cost reduction", "Smart routing", "Recycling optimization"]
    }
  ];

  const technologies = [
    {
      name: "IoT Sensors",
      description: "Deploy thousands of connected sensors for real-time data collection",
      icon: Activity
    },
    {
      name: "AI Analytics",
      description: "Machine learning algorithms for predictive insights and optimization",
      icon: Brain
    },
    {
      name: "5 G Networks",
      description: "Ultra-fast connectivity for seamless data transmission and communication",
      icon: Globe
    },
    {
      name: "Edge Computing",
      description: "Process data locally for faster response times and reduced latency",
      icon: Cloud
    },
    {
      name: "Blockchain",
      description: "Secure data sharing and transparent governance systems",
      icon: Shield
    },
    {
      name: "Digital Twins",
      description: "Virtual replicas of city infrastructure for simulation and planning",
      icon: Building
    }
  ];

  const pricingPlans = [
    {
      name: "Smart District",
      price: "$50,000/mo",
      description: "Perfect for small districts or neighborhoods",
      features: [
        "Up to 1,000 sensors",
        "Basic traffic management",
        "Energy monitoring",
        "Citizen app",
        "24/7 support",
        "Monthly reports"
      ],
      popular: false
    },
    {
      name: "Smart City",
      price: "$150,000/mo",
      description: "Comprehensive solution for mid-sized cities",
      features: [
        "Up to 10,000 sensors",
        "Advanced traffic management",
        "Smart energy grid",
        "Public safety systems",
        "Waste management",
        "Citizen services platform",
        "Real-time dashboard",
        "Priority support"
      ],
      popular: true
    },
    {
      name: "Mega City",
      price: "$500,000/mo",
      description: "Complete smart city infrastructure for large metropolitan areas",
      features: [
        "Unlimited sensors",
        "Full traffic optimization",
        "Complete energy grid",
        "Advanced security systems",
        "Comprehensive waste management",
        "Full citizen services",
        "AI-powered analytics",
        "Custom integrations",
        "Dedicated support team",
        "SLA guarantee"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Mayor Jennifer Chen",
      role: "City Mayor",
      company: "Tech Valley City",
      avatar: "JC",
      content: "Our smart city infrastructure has transformed how we serve our citizens. Traffic congestion is down 45%, energy costs reduced by 35%, and citizen satisfaction increased to 95%."
    },
    {
      name: "Dr. Michael Torres",
      role: "City Planner",
      company: "Metro City Planning",
      avatar: "MT",
      content: "The AI-powered analytics help us make data-driven decisions. We've optimized our public transportation routes, reducing wait times by 60% and increasing ridership by 25%."
    },
    {
      name: "Sarah Williams",
      role: "Director of Public Safety",
      company: "Safe City Initiative",
      avatar: "SW",
      content: "Our smart security systems have reduced crime by 30% and improved emergency response times by 50%. Citizens feel safer and more connected to their city."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <Navigation /></Navigatio>
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden"></sectio>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3 Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3 E%3 Cg fill="none" fill-rule="evenodd"%3 E%3 Cg fill="%239 C92 AC" fill-opacity="0.1"%3 E%3 Ccircle cx="30" cy="30" r="2"/%3 E%3 C/g%3 E%3 C/g%3 E%3 C/svg%3 E')] opacity-20"></div>
        
        <div className="relative z-10 max-w-7 xl mx-auto px-4 sm:px-6 lg:px-8 text-center"></div>
          <h1 className="text-5 xl md:text-7 xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"></h1></<<<h>Smart</h></<<h>City</h> Infrastructure
          </h1>
          <p className="text-xl md:text-2 xl text-gray-300 mb-8 max-w-4 xl mx-auto">
            Transform your city into a connected, efficient, and sustainable urban environment. 
            Our comprehensive smart city solutions optimize everything from traffic to energy consumption.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"></div>
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-4 px-8 rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center"></button></<<<button>Start</button></<<button>Planning</button>
              <ArrowRight className="w-5 h-5 ml-2" /></ArrowRigh>
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 font-semibold py-4 px-8 rounded-xl hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"></button></<<<butto>View</butto></<<butto>Case</butto></<butto>Studies</butto>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8"></div>
            <div className="text-center"></div>
              <div className="text-4 xl font-bold text-cyan-400 mb-2">40%</div>
              <div className="text-gray-400">Traffic Reduction</div>
            </div>
            <div className="text-center"></div>
              <div className="text-4 xl font-bold text-purple-400 mb-2">30%</div>
              <div className="text-gray-400">Energy Savings</div>
            </div>
            <div className="text-center"></div>
              <div className="text-4 xl font-bold text-pink-400 mb-2">95%</div>
              <div className="text-gray-400">Citizen Satisfaction</div>
            </div>
            <div className="text-center"></div>
              <div className="text-4 xl font-bold text-green-400 mb-2">50%</div>
              <div className="text-gray-400">Faster Response</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8"></sectio>
        <div className="max-w-7 xl mx-auto"></div>
          <div className="text-center mb-20"></div>
            <h2 className="text-5 xl font-bold text-white mb-6">Smart City Features</h>
            <p className="text-xl text-gray-300 max-w-4 xl mx-auto leading-relaxed">
              Comprehensive infrastructure solutions that make cities more efficient, sustainable, and livable.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-8 hover:border-cyan-400/40 transition-all duration-300"></div>
                <div className="text-center"></div>
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-6"></div>
                    <feature.icon className="w-8 h-8 text-white" /></featur>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-24 bg-gradient-to-r from-purple-900/20 to-blue-900/20"></sectio>
        <div className="max-w-7 xl mx-auto px-4 sm:px-6 lg:px-8"></div>
          <div className="text-center mb-20"></div>
            <h2 className="text-4 xl md:text-5 xl font-bold text-white mb-6"></h2></<<<h>Proven</h></<<h>Solutions</h>
            </h2>
            <p className="text-xl text-gray-300 max-w-4 xl mx-auto leading-relaxed">
              Real-world implementations that deliver measurable results for cities worldwide.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12"></div>
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20"></div>
                <div className="flex items-center mb-6"></div>
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-600 rounded-lg flex items-center justify-center mr-4"></div>
                    <solution.icon className="w-6 h-6 text-white" /></solutio>
                  </div>
                  <h3 className="text-2 xl font-bold text-white">{solution.title}</h>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">{solution.description}</p>
                <div className="space-y-2"></div>
                  {solution.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center text-gray-300"></div>
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" /></CheckCircl>
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8"></sectio>
        <div className="max-w-7 xl mx-auto"></div>
          <div className="text-center mb-20"></div>
            <h2 className="text-4 xl md:text-5 xl font-bold text-white mb-6"></h2></<<<h>Cutting</h>-Edge Technologies
            </h2>
            <p className="text-xl text-gray-300 max-w-4 xl mx-auto leading-relaxed">
              Powered by the latest innovations in IoT, AI, and connectivity.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
            {technologies.map((tech, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-green-400/20 rounded-xl p-6 hover:border-green-400/40 transition-all duration-300"></div>
                <div className="text-center"></div>
                  <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4"></div>
                    <tech.icon className="w-6 h-6 text-white" /></tec>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{tech.name}</h>
                  <p className="text-gray-300 text-sm leading-relaxed">{tech.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-gradient-to-r from-cyan-500/10 to-purple-500/10"></sectio>
        <div className="max-w-7 xl mx-auto px-4 sm:px-6 lg:px-8"></div>
          <div className="text-center mb-20"></div>
            <h2 className="text-4 xl md:text-5 xl font-bold text-white mb-6"></h2></<<<h>Smart</h></<<h>City</h> Packages
            </h2>
            <p className="text-xl text-gray-300 max-w-4 xl mx-auto leading-relaxed">
              Scalable solutions designed for cities of all sizes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8"></div>
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-slate-800/50 backdrop-blur-sm border rounded-xl p-8 relative ${
                plan.popular ? 'border-cyan-400/40 ring-2 ring-cyan-400/20' : 'border-gray-700'
              }`}></div>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2"></div>
                    <span className="bg-gradient-to-r from-cyan-400 to-purple-600 text-white text-sm font-bold px-4 py-2 rounded-full"></span></<<<spa>Most</spa></<<spa>Popular</spa>
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8"></div>
                  <h3 className="text-2 xl font-bold text-white mb-2">{plan.name}</h>
                  <div className="text-4 xl font-bold text-cyan-400 mb-2">{plan.price}</div>
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
      <section className="py-24 bg-gradient-to-r from-cyan-500/10 to-purple-500/10"></sectio>
        <div className="max-w-7 xl mx-auto px-4 sm:px-6 lg:px-8"></div>
          <div className="text-center mb-20"></div>
            <h2 className="text-4 xl md:text-5 xl font-bold text-white mb-6"></h2></<<<h>City</h></<<h>Success</h> Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-4 xl mx-auto leading-relaxed">
              Hear from city leaders who have transformed their urban environments.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8"></div>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20"></div>
                <div className="flex items-center mb-4"></div>
                  <div className="flex text-yellow-400"></div>
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" /></Sta>
                    ))}
                  </div>
                </div>
                <p className="text-gray-300 mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center"></div>
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-4"></div>
                    {testimonial.avatar}
                  </div>
                  <div></div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h>
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
      <section className="py-24 bg-gradient-to-r from-cyan-500/10 to-purple-500/10"></sectio>
        <div className="max-w-7 xl mx-auto px-4 sm:px-6 lg:px-8 text-center"></div>
          <h2 className="text-4 xl md:text-5 xl font-bold text-white mb-8"></h2></<<<h>Build</h></<<h>the</h> City of Tomorrow
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-4 xl mx-auto leading-relaxed">
            Join the smart city revolution and create a more sustainable, efficient, and livable urban environment.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center"></div>
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-4 px-8 rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center"></button></<<<button>Start</button></<<button>Planning</button>
              <ArrowRight className="w-5 h-5 ml-2" /></ArrowRigh>
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 font-semibold py-4 px-8 rounded-xl hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"></button></<<<butto>Schedule</butto></<<butto>Consultation</butto>
            </button>
          </div>
        </div>
      </section>

      <Footer /></Foote>
    </div>
  );
};

SmartCityInfrastructurePage.displayName = 'SmartCityInfrastructurePage';

export default SmartCityInfrastructurePage;