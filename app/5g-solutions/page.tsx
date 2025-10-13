import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Wifi, 
  CheckCircle, 
  Star, 
  Users, 
  TrendingUp, 
  Zap, 
  Globe, 
  Smartphone, 
  Mail, 
  Phone, 
  MapPin,
  Brain,
  Database,
  Settings,
  Clock,
  Award,
  Sparkles,
  Rocket,
  Target,
  BarChart3,
  Eye,
  Cpu,
  Shield,
  Network,
  Cpu as Server,
  HardDrive,
  Activity
} from "lucide-react";

const FiveGSolutionsPage = () => {
  const services = [
    {
      title: "5G Network Infrastructure",
      description: "Complete 5G network deployment and management solutions with ultra-low latency and massive IoT connectivity for smart cities and enterprises.",
      icon: <Network className="w-8 h-8" />,
      price: "Custom Pricing",
      features: [
        "Network Planning & Design",
        "Edge Computing Integration",
        "IoT Device Management",
        "Performance Monitoring",
        "Smart City Solutions",
        "Private Network Setup"
      ],
      category: "Infrastructure",
      popular: true,
      color: "from-cyan-500 to-blue-500",
      link: "/5g-network-infrastructure"
    },
    {
      title: "5G Edge Computing",
      description: "Deploy edge computing solutions that bring processing power closer to data sources, reducing latency and improving performance for critical applications.",
      icon: <Cpu className="w-8 h-8" />,
      price: "From $2,999/month",
      features: [
        "Edge Server Deployment",
        "Real-time Processing",
        "Low Latency Applications",
        "Distributed Computing",
        "Edge AI Integration",
        "Content Delivery Networks"
      ],
      category: "Edge Computing",
      popular: true,
      color: "from-purple-500 to-violet-500",
      link: "/5g-edge-computing"
    },
    {
      title: "5G IoT Solutions",
      description: "Comprehensive IoT solutions powered by 5G connectivity for industrial automation, smart agriculture, and connected devices.",
      icon: <Activity className="w-8 h-8" />,
      price: "From $1,499/month",
      features: [
        "Industrial IoT Integration",
        "Smart Agriculture",
        "Connected Devices",
        "Real-time Monitoring",
        "Predictive Maintenance",
        "Data Analytics"
      ],
      category: "IoT Solutions",
      popular: false,
      color: "from-green-500 to-emerald-500",
      link: "/5g-iot-solutions"
    },
    {
      title: "5G Smart City Solutions",
      description: "Transform cities with 5G-powered smart infrastructure including traffic management, public safety, and environmental monitoring.",
      icon: <Globe className="w-8 h-8" />,
      price: "Custom Pricing",
      features: [
        "Smart Traffic Management",
        "Public Safety Systems",
        "Environmental Monitoring",
        "Smart Lighting",
        "Waste Management",
        "Citizen Services"
      ],
      category: "Smart Cities",
      popular: false,
      color: "from-orange-500 to-amber-500",
      link: "/5g-smart-city-solutions"
    },
    {
      title: "5G Private Networks",
      description: "Dedicated 5G private networks for enterprises requiring ultra-secure, high-performance connectivity for critical operations.",
      icon: <Shield className="w-8 h-8" />,
      price: "From $4,999/month",
      features: [
        "Dedicated Network Infrastructure",
        "Enhanced Security",
        "Custom Configuration",
        "Priority Access",
        "24/7 Monitoring",
        "SLA Guarantees"
      ],
      category: "Private Networks",
      popular: true,
      color: "from-red-500 to-pink-500",
      link: "/5g-private-networks"
    },
    {
      title: "5G Mobile Applications",
      description: "Develop next-generation mobile applications that leverage 5G's high speed and low latency for immersive user experiences.",
      icon: <Smartphone className="w-8 h-8" />,
      price: "From $999/month",
      features: [
        "AR/VR Applications",
        "Real-time Gaming",
        "Video Streaming",
        "Mobile Commerce",
        "Location Services",
        "Cloud Integration"
      ],
      category: "Mobile Apps",
      popular: false,
      color: "from-indigo-500 to-purple-500",
      link: "/5g-mobile-applications"
    }
  ];

  const useCases = [
    {
      title: "Manufacturing",
      description: "5G enables real-time monitoring, predictive maintenance, and automated quality control in smart factories.",
      icon: <Cpu className="w-8 h-8" />,
      benefits: ["30% increase in efficiency", "50% reduction in downtime", "Real-time quality control"]
    },
    {
      title: "Healthcare",
      description: "Remote surgery, telemedicine, and real-time patient monitoring powered by ultra-reliable 5G connectivity.",
      icon: <Shield className="w-8 h-8" />,
      benefits: ["Remote surgery capabilities", "Real-time patient monitoring", "Enhanced telemedicine"]
    },
    {
      title: "Transportation",
      description: "Connected vehicles, autonomous driving, and smart traffic management systems for safer, more efficient transportation.",
      icon: <Globe className="w-8 h-8" />,
      benefits: ["Autonomous vehicle support", "Smart traffic management", "Enhanced safety"]
    },
    {
      title: "Entertainment",
      description: "Immersive AR/VR experiences, ultra-high-definition streaming, and cloud gaming with minimal latency.",
      icon: <Smartphone className="w-8 h-8" />,
      benefits: ["Immersive AR/VR", "4K/8K streaming", "Cloud gaming"]
    }
  ];

  const stats = [
    { number: "10x", label: "Faster than 4G", icon: <Zap className="w-6 h-6" /> },
    { number: "1ms", label: "Ultra-low Latency", icon: <Clock className="w-6 h-6" /> },
    { number: "1M+", label: "Devices per km²", icon: <Network className="w-6 h-6" /> },
    { number: "99.9%", label: "Reliability", icon: <Shield className="w-6 h-6" /> }
  ];

  return (
    <>
      <Helmet>
        <title>5G Solutions - Next-Generation Connectivity | Zion Tech Group</title>
        <meta
          name="description"
          content="Transform your business with 5G solutions including network infrastructure, edge computing, IoT integration, and smart city implementations. Ultra-low latency and massive connectivity."
        />
        <meta
          name="keywords"
          content="5G solutions, 5G network infrastructure, edge computing, IoT solutions, smart cities, private networks, mobile applications, ultra-low latency"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 mb-6">
                  <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
                  <span className="text-cyan-400 text-sm font-medium">Next-Generation Connectivity</span>
                </div>
                
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
                    5G Solutions
                  </span>
                </h1>
                
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Transform your business with next-generation 5G connectivity. Ultra-low latency, massive IoT connectivity, 
                  and edge computing capabilities for smart cities, enterprises, and innovative applications.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Link
                    to="/contact"
                    className="group bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
                  >
                    Get Started
                    <Rocket className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    to="/demo"
                    className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
                  >
                    Watch Demo
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
                
                {/* Stats */}
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                        {stat.icon}
                      </div>
                      <div className="text-2xl font-bold text-white">{stat.number}</div>
                      <div className="text-gray-300 text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-semibold text-white mb-2">5G Network Dashboard</h3>
                    <p className="text-gray-300 text-sm">Real-time network performance</p>
                  </div>
                  
                  {/* Mock Dashboard */}
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-white font-semibold">Network Speed</span>
                        <span className="text-green-400 text-sm">2.1 Gbps</span>
                      </div>
                      <div className="text-2xl font-bold text-white">Ultra-Fast</div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white/5 rounded-lg p-4">
                        <div className="text-gray-300 text-sm mb-1">Latency</div>
                        <div className="text-lg font-bold text-white">0.8ms</div>
                      </div>
                      <div className="bg-white/5 rounded-lg p-4">
                        <div className="text-gray-300 text-sm mb-1">Connected Devices</div>
                        <div className="text-lg font-bold text-white">15,247</div>
                      </div>
                    </div>
                    
                    <div className="bg-white/5 rounded-lg p-4">
                      <div className="text-gray-300 text-sm mb-2">Network Status</div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-white text-sm">All systems operational</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                  Comprehensive 5G Solutions
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From network infrastructure to smart city implementations, we provide end-to-end 5G solutions
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
                >
                  {service.popular && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                        POPULAR
                      </span>
                    </div>
                  )}
                  
                  <div className="relative z-10">
                    <div
                      className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      {service.icon}
                    </div>
                    
                    <div className="text-center mb-4">
                      <span className="text-xs bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded-full border border-cyan-500/30">
                        {service.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-3 text-center group-hover:text-cyan-300 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 text-center mb-4 leading-relaxed text-sm">
                      {service.description}
                    </p>
                    
                    <div className="text-center mb-4">
                      <span className="text-cyan-400 font-bold text-lg">{service.price}</span>
                    </div>
                    
                    <div className="space-y-2 mb-6">
                      {service.features.slice(0, 4).map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-4 text-center">
                      <Link
                        to={service.link}
                        className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-all duration-300"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                  Industry Applications
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See how 5G transforms different industries and enables new possibilities
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                    {useCase.icon}
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {useCase.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {useCase.description}
                  </p>
                  
                  <div className="space-y-2">
                    {useCase.benefits.map((benefit, idx) => (
                      <div key={idx} className="text-cyan-400 font-semibold text-sm">
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Information Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Deploy 5G?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join the 5G revolution and transform your business with next-generation connectivity. 
                Contact us for a consultation and custom 5G solution design.
              </p>
              
              {/* Contact Details */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Email</h3>
                  <p className="text-cyan-400">kleber@ziontechgroup.com</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Phone</h3>
                  <p className="text-cyan-400">+1 302 464 0950</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Address</h3>
                  <p className="text-cyan-400 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="group bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
                >
                  Get Consultation
                  <Rocket className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/demo"
                  className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
                >
                  Schedule Demo
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default FiveGSolutionsPage;