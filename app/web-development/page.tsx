import React from 'react';
import { ArrowRight, Code, Cloud, Shield, Zap, Users, Award, BarChart3, CheckCircle, Star, Clock, DollarSign, Globe, Smartphone, Monitor, Database, Settings, Target, TrendingUp, Cpu, FileText, MessageSquare, Calendar, Search, Filter, Download, Upload, Share, Bell, Eye, Heart, ThumbsUp, Rocket, Headphones, Mic, Video, Image, Music, BookOpen, Lightbulb, Puzzle, Gamepad2, ShoppingCart, CreditCard, Wallet, Banknote, Coins, Gift, Tag, Percent, Calculator, PieChart, LineChart, Activity, Layers, Grid, List, Map, Compass, Navigation, Globe2, WifiOff, Signal, Bluetooth, Usb, HardDrive, MemoryStick, Printer, Scanner, Fax, Phone, Voicemail, Headset, Speaker, Volume2, VolumeX, Play, Pause, Stop, SkipBack, SkipForward, RotateCcw, RotateCw, Shuffle, Repeat, Repeat1, Shuffle2, Maximize, Minimize, Square, Circle, Triangle, Hexagon, Octagon, Diamond, Star as StarIcon, Moon, Sun, Sunrise, Sunset, CloudRain, CloudSnow, CloudLightning, Wind, Droplets, Thermometer, Gauge, Timer, Stopwatch, Hourglass, Package, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import EnhancedSEO from '../components/EnhancedSEO';

const WebDevelopmentPage = () => {
  const services = [
    {
      title: "Custom Web Applications",
      description: "Build scalable, modern web applications tailored to your business needs with cutting-edge technologies",
      icon: <Code className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      features: [
        "React, Vue.js, Angular development",
        "Node.js, Python, PHP backends",
        "RESTful API development",
        "Database design & optimization",
        "Cloud deployment & scaling",
        "Performance optimization",
        "Security implementation",
        "Mobile responsiveness"
      ],
      benefits: [
        "Faster time to market",
        "Scalable architecture",
        "Better user experience",
        "Reduced maintenance costs"
      ],
      price: "From $5,000",
      link: "/contact"
    },
    {
      title: "E-commerce Solutions",
      description: "Complete e-commerce platforms with payment integration, inventory management, and analytics",
      icon: <ShoppingCart className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      features: [
        "Custom e-commerce platforms",
        "Payment gateway integration",
        "Inventory management",
        "Order processing system",
        "Customer management",
        "Analytics & reporting",
        "Mobile commerce",
        "SEO optimization"
      ],
      benefits: [
        "Increase online sales",
        "Streamline operations",
        "Better customer experience",
        "Real-time analytics"
      ],
      price: "From $8,000",
      link: "/contact"
    },
    {
      title: "Progressive Web Apps",
      description: "Modern PWAs that work offline, load instantly, and provide native app-like experience",
      icon: <Smartphone className="w-8 h-8" />,
      color: "from-purple-500 to-indigo-500",
      features: [
        "Offline functionality",
        "Push notifications",
        "App-like experience",
        "Fast loading times",
        "Cross-platform compatibility",
        "Service worker implementation",
        "Responsive design",
        "Installation prompts"
      ],
      benefits: [
        "Better user engagement",
        "Reduced bounce rates",
        "Native app features",
        "Improved performance"
      ],
      price: "From $6,000",
      link: "/contact"
    },
    {
      title: "API Development",
      description: "Robust APIs and microservices architecture for seamless integration and scalability",
      icon: <Database className="w-8 h-8" />,
      color: "from-orange-500 to-yellow-500",
      features: [
        "RESTful API design",
        "GraphQL implementation",
        "Microservices architecture",
        "API documentation",
        "Rate limiting & security",
        "Version control",
        "Testing & monitoring",
        "Third-party integrations"
      ],
      benefits: [
        "Faster integration",
        "Better scalability",
        "Improved security",
        "Easier maintenance"
      ],
      price: "From $3,000",
      link: "/contact"
    }
  ];

  const technologies = [
    { name: "React", icon: <Code className="w-6 h-6" />, color: "text-blue-400" },
    { name: "Vue.js", icon: <Code className="w-6 h-6" />, color: "text-green-400" },
    { name: "Angular", icon: <Code className="w-6 h-6" />, color: "text-red-400" },
    { name: "Node.js", icon: <Code className="w-6 h-6" />, color: "text-green-400" },
    { name: "Python", icon: <Code className="w-6 h-6" />, color: "text-yellow-400" },
    { name: "PHP", icon: <Code className="w-6 h-6" />, color: "text-purple-400" },
    { name: "MongoDB", icon: <Database className="w-6 h-6" />, color: "text-green-400" },
    { name: "PostgreSQL", icon: <Database className="w-6 h-6" />, color: "text-blue-400" },
    { name: "AWS", icon: <Cloud className="w-6 h-6" />, color: "text-orange-400" },
    { name: "Docker", icon: <Package className="w-6 h-6" />, color: "text-blue-400" }
  ];

  const stats = [
    { number: "200+", label: "Web Projects", icon: <Code className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime SLA", icon: <Award className="w-6 h-6" /> },
    { number: "50+", label: "Technologies", icon: <Settings className="w-6 h-6" /> },
    { number: "24/7", label: "Support", icon: <Headphones className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="Web Development - Custom Web Solutions & Applications"
        description="Professional web development services including custom web applications, e-commerce solutions, PWAs, and API development. Build modern, scalable web solutions with our expert team."
        keywords="web development, custom web applications, e-commerce solutions, progressive web apps, API development, web design, frontend development, backend development"
        canonical="https://ziontechgroup.com/web-development"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Code className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">#1 Web Development Company 2024</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Web Development
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Build modern, responsive, and scalable web applications with our expert web development services. 
            From custom web apps to e-commerce solutions, we create digital experiences that drive business growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/demo"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              View Portfolio
              <Eye className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
            </Link>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-xs md:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Web Development Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive web development solutions designed to meet your business requirements and exceed your expectations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center text-white mr-6 group-hover:scale-110 transition-transform`}>
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-cyan-400 font-medium text-lg">{service.price}</p>
                  </div>
                </div>
                
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  {service.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Benefits:</h4>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center text-gray-300">
                        <Star className="w-4 h-4 text-yellow-400 mr-3 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link
                  to={service.link}
                  className="inline-flex items-center text-cyan-400 font-medium group-hover:text-cyan-300 transition-colors"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Technologies We Use
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We work with the latest and most reliable technologies to build robust, scalable, and maintainable web solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 text-center"
              >
                <div className={`w-12 h-12 mx-auto mb-3 rounded-lg bg-gradient-to-r from-slate-700 to-slate-600 flex items-center justify-center ${tech.color} group-hover:scale-110 transition-transform`}>
                  {tech.icon}
                </div>
                <h3 className="text-white font-semibold group-hover:text-cyan-400 transition-colors">
                  {tech.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Build Your Next Web Application?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Let's discuss your project requirements and create a custom web solution that drives your business forward. 
            Our expert team is ready to bring your vision to life.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/demo"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              Schedule Consultation
              <Calendar className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebDevelopmentPage;