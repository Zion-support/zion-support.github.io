import React from "react";
import { ArrowRight, Code, Globe, Smartphone, Monitor, Zap, Shield, BarChart3, Users, Clock, CheckCircle, Star, Award, Rocket, Cpu, Database, Cloud, Lock, Settings, Target, TrendingUp, FileText, MessageSquare, Calendar, Search, Filter, Download, Upload, Share, Bell, Eye, Heart, ThumbsUp, Headphones, Mic, Video, Image, Music, BookOpen, Lightbulb, Puzzle, Gamepad2, ShoppingCart, CreditCard, Wallet, Banknote, Coins, Gift, Tag, Percent, Calculator, PieChart, LineChart, Activity, Layers, Grid, List, Map, Compass, Navigation, Globe2, WifiOff, Signal, Bluetooth, Usb, HardDrive, MemoryStick, Printer, Scanner, Fax, Phone, Voicemail, Headset, Speaker, Volume2, VolumeX, Play, Pause, Stop, SkipBack, SkipForward, RotateCcw, RotateCw, Shuffle, Repeat, Repeat1, Shuffle2, Maximize, Minimize, Square, Circle, Triangle, Hexagon, Octagon, Diamond, Star as StarIcon, Moon, Sun, Sunrise, Sunset, CloudRain, CloudSnow, CloudLightning, Wind, Droplets, Thermometer, Gauge, Timer, Stopwatch, Hourglass } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import EnhancedSEO from "../components/EnhancedSEO";
import FuturisticCard from "../components/FuturisticCard";
import FuturisticButton from "../components/FuturisticButton";
import ResponsiveContainer from "../components/ResponsiveContainer";
import ResponsiveGrid from "../components/ResponsiveGrid";

export default function WebDevelopment() {
  const webServices = [
    {
      id: "responsive-web-design",
      name: "Responsive Web Design",
      description: "Modern, mobile-first websites that look perfect on all devices and screen sizes",
      features: [
        "Mobile-first approach",
        "Cross-browser compatibility",
        "Fast loading times",
        "SEO optimized",
        "Accessibility compliant"
      ],
      price: "From $2,500",
      icon: Monitor,
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: "e-commerce-solutions",
      name: "E-commerce Solutions",
      description: "Complete online stores with payment processing, inventory management, and analytics",
      features: [
        "Payment gateway integration",
        "Inventory management",
        "Order tracking",
        "Customer accounts",
        "Analytics dashboard"
      ],
      price: "From $5,000",
      icon: ShoppingCart,
      color: "from-green-500 to-teal-500"
    },
    {
      id: "web-applications",
      name: "Web Applications",
      description: "Custom web applications built with modern frameworks and technologies",
      features: [
        "Custom functionality",
        "User authentication",
        "Database integration",
        "API development",
        "Real-time features"
      ],
      price: "From $8,000",
      icon: Code,
      color: "from-purple-500 to-pink-500"
    },
    {
      id: "cms-development",
      name: "CMS Development",
      description: "Content management systems that make it easy to update and manage your website",
      features: [
        "Easy content editing",
        "User management",
        "Media library",
        "SEO tools",
        "Multi-language support"
      ],
      price: "From $3,500",
      icon: FileText,
      color: "from-orange-500 to-red-500"
    },
    {
      id: "api-development",
      name: "API Development",
      description: "RESTful APIs and GraphQL endpoints for seamless data integration",
      features: [
        "RESTful API design",
        "GraphQL endpoints",
        "Authentication & security",
        "Rate limiting",
        "Comprehensive documentation"
      ],
      price: "From $2,000",
      icon: Database,
      color: "from-indigo-500 to-purple-500"
    },
    {
      id: "performance-optimization",
      name: "Performance Optimization",
      description: "Speed up your website with advanced optimization techniques and monitoring",
      features: [
        "Page speed optimization",
        "Image optimization",
        "Caching strategies",
        "CDN integration",
        "Performance monitoring"
      ],
      price: "From $1,500",
      icon: Zap,
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const technologies = [
    { name: "React", icon: Code, category: "Frontend" },
    { name: "Next.js", icon: Rocket, category: "Frontend" },
    { name: "Vue.js", icon: Globe, category: "Frontend" },
    { name: "Angular", icon: Cpu, category: "Frontend" },
    { name: "Node.js", icon: Database, category: "Backend" },
    { name: "Python", icon: Code, category: "Backend" },
    { name: "PHP", icon: Code, category: "Backend" },
    { name: "MongoDB", icon: Database, category: "Database" },
    { name: "PostgreSQL", icon: Database, category: "Database" },
    { name: "AWS", icon: Cloud, category: "Cloud" },
    { name: "Docker", icon: Settings, category: "DevOps" },
    { name: "Kubernetes", icon: Settings, category: "DevOps" }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "We analyze your requirements and create a detailed project plan",
      icon: Search
    },
    {
      step: "02",
      title: "Design & Prototyping",
      description: "Create wireframes and prototypes to visualize your project",
      icon: FileText
    },
    {
      step: "03",
      title: "Development",
      description: "Build your website using modern technologies and best practices",
      icon: Code
    },
    {
      step: "04",
      title: "Testing & Launch",
      description: "Thoroughly test your website and launch it successfully",
      icon: Rocket
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="Web Development Services - Zion Tech Group | Professional Web Solutions"
        description="Professional web development services including responsive design, e-commerce solutions, web applications, and API development. Modern websites built with cutting-edge technologies."
        keywords="web development, website design, e-commerce development, web applications, responsive design, API development, custom websites, modern web development"
        canonical="https://ziontechgroup.com/web-development"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer className="text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Code className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">Professional Web Development</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Web Development
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Transform your digital presence with modern, responsive websites and web applications. 
            We build fast, secure, and scalable solutions that drive business growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Start Your Project
            </FuturisticButton>
            <FuturisticButton
              href="#services"
              variant="outline"
              size="lg"
              icon={<Monitor className="w-5 h-5" />}
            >
              View Our Work
            </FuturisticButton>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center group">
              <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Globe className="w-6 h-6 text-cyan-400" />
              </div>
              <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">200+</div>
              <div className="text-gray-300 text-xs md:text-sm">Websites Built</div>
            </div>
            <div className="text-center group">
              <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Users className="w-6 h-6 text-cyan-400" />
              </div>
              <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">150+</div>
              <div className="text-gray-300 text-xs md:text-sm">Happy Clients</div>
            </div>
            <div className="text-center group">
              <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Award className="w-6 h-6 text-cyan-400" />
              </div>
              <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">5+</div>
              <div className="text-gray-300 text-xs md:text-sm">Years Experience</div>
            </div>
            <div className="text-center group">
              <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-6 h-6 text-cyan-400" />
              </div>
              <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">99%</div>
              <div className="text-gray-300 text-xs md:text-sm">Client Satisfaction</div>
            </div>
          </div>
        </ResponsiveContainer>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Web Development Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive web development solutions tailored to your business needs and goals.
            </p>
          </div>

          <ResponsiveGrid className="gap-8">
            {webServices.map((service) => (
              <FuturisticCard
                key={service.id}
                className="group cursor-pointer hover:scale-105 transition-transform duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform`}>
                    <service.icon className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-cyan-400 font-semibold">{service.price}</p>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between">
                  <FuturisticButton
                    href="/contact"
                    variant="outline"
                    size="sm"
                    className="w-full"
                  >
                    Get Quote
                  </FuturisticButton>
                </div>
              </FuturisticCard>
            ))}
          </ResponsiveGrid>
        </ResponsiveContainer>
      </section>

      {/* Technologies Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Technologies We Use
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We work with the latest technologies and frameworks to deliver cutting-edge solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 text-center"
              >
                <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <tech.icon className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-white font-semibold mb-1">{tech.name}</h3>
                <p className="text-gray-400 text-xs">{tech.category}</p>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Development Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A proven methodology that ensures your project is delivered on time and exceeds expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center text-white text-2xl font-bold group-hover:scale-110 transition-transform">
                    {step.step}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                    <step.icon className="w-4 h-4 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <ResponsiveContainer className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Build Your Dream Website?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Let's discuss your project and create a website that perfectly represents your brand and drives results.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Start Your Project
            </FuturisticButton>
            <FuturisticButton
              href="/portfolio"
              variant="outline"
              size="lg"
              icon={<Eye className="w-5 h-5" />}
            >
              View Portfolio
            </FuturisticButton>
          </div>
        </ResponsiveContainer>
      </section>
    </div>
  );
}