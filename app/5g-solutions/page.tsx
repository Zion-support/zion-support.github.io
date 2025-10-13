import { ArrowRight, Wifi, Globe, Cpu, Smartphone, Cloud, Shield, Zap, Target, Users, TrendingUp, FileText, Mail, Star, CheckCircle, Clock, DollarSign } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function FiveGSolutions() {
  const fiveGServices = [
    {
      title: "5G Network Infrastructure",
      description: "Complete 5G network deployment and management solutions. Ultra-low latency, massive IoT connectivity, and edge computing capabilities.",
      icon: <Wifi className="w-8 h-8" />,
      path: "/5g-network-infrastructure",
      color: "from-cyan-500 to-blue-500",
      price: "Custom Pricing",
      features: ["Network Planning", "Edge Computing", "IoT Integration", "Performance Monitoring"],
      benefits: ["10x faster speeds", "Ultra-low latency", "Massive connectivity", "Real-time processing"]
    },
    {
      title: "5G IoT Solutions",
      description: "Comprehensive IoT connectivity solutions powered by 5G technology. Smart sensors, real-time data processing, and automated systems.",
      icon: <Globe className="w-8 h-8" />,
      path: "/5g-iot-solutions",
      color: "from-green-500 to-emerald-500",
      price: "From $199/month",
      features: ["Smart Sensors", "Real-time Data", "Automated Systems", "Remote Monitoring"],
      benefits: ["Massive IoT scale", "Real-time insights", "Automated operations", "Cost efficiency"]
    },
    {
      title: "5G Edge Computing",
      description: "Distributed computing infrastructure at the edge of 5G networks. Ultra-low latency processing for critical applications and real-time analytics.",
      icon: <Cpu className="w-8 h-8" />,
      path: "/5g-edge-computing",
      color: "from-purple-500 to-pink-500",
      price: "From $299/month",
      features: ["Edge Processing", "Low Latency", "Real-time Analytics", "Distributed Computing"],
      benefits: ["Ultra-low latency", "Real-time processing", "Reduced bandwidth", "Enhanced security"]
    },
    {
      title: "5G Mobile Applications",
      description: "Next-generation mobile app development leveraging 5G capabilities. AR/VR applications, real-time streaming, and immersive experiences.",
      icon: <Smartphone className="w-8 h-8" />,
      path: "/5g-mobile-applications",
      color: "from-orange-500 to-red-500",
      price: "From $149/month",
      features: ["AR/VR Apps", "Real-time Streaming", "Immersive Experiences", "High-bandwidth Apps"],
      benefits: ["Immersive experiences", "Real-time streaming", "Enhanced mobility", "Better performance"]
    },
    {
      title: "5G Smart City Solutions",
      description: "Comprehensive smart city infrastructure powered by 5G. Traffic management, environmental monitoring, and citizen services.",
      icon: <Target className="w-8 h-8" />,
      path: "/5g-smart-city-solutions",
      color: "from-indigo-500 to-purple-500",
      price: "From $499/month",
      features: ["Traffic Management", "Environmental Monitoring", "Citizen Services", "Public Safety"],
      benefits: ["Smart city infrastructure", "Efficient services", "Environmental monitoring", "Public safety"]
    },
    {
      title: "5G Private Networks",
      description: "Dedicated 5G private networks for enterprises. Secure, high-performance connectivity for industrial applications and critical operations.",
      icon: <Shield className="w-8 h-8" />,
      path: "/5g-private-networks",
      color: "from-red-500 to-orange-500",
      price: "From $399/month",
      features: ["Dedicated Networks", "Enterprise Security", "Industrial Applications", "Custom Configuration"],
      benefits: ["Enhanced security", "Dedicated bandwidth", "Custom solutions", "Industrial grade"]
    },
    {
      title: "5G Data Analytics",
      description: "Real-time data analytics platform powered by 5G networks. Process massive data streams with ultra-low latency and high throughput.",
      icon: <TrendingUp className="w-8 h-8" />,
      path: "/5g-data-analytics",
      color: "from-teal-500 to-cyan-500",
      price: "From $249/month",
      features: ["Real-time Analytics", "Massive Data Streams", "Ultra-low Latency", "High Throughput"],
      benefits: ["Real-time insights", "Massive scale", "Low latency", "High performance"]
    },
    {
      title: "5G Cloud Integration",
      description: "Seamless integration of 5G networks with cloud infrastructure. Hybrid cloud solutions with edge computing capabilities.",
      icon: <Cloud className="w-8 h-8" />,
      path: "/5g-cloud-integration",
      color: "from-blue-500 to-indigo-500",
      price: "From $179/month",
      features: ["Hybrid Cloud", "Edge Computing", "Seamless Integration", "Scalable Infrastructure"],
      benefits: ["Hybrid solutions", "Edge capabilities", "Seamless integration", "Scalable infrastructure"]
    }
  ];

  const pricingPlans = [
    {
      name: "5G Starter",
      price: "$199",
      period: "per month",
      description: "Perfect for small businesses exploring 5G",
      features: ["Basic 5G Connectivity", "IoT Integration", "Email Support", "Standard SLA"],
      popular: false
    },
    {
      name: "5G Professional",
      price: "$499",
      period: "per month",
      description: "Ideal for growing businesses with 5G needs",
      features: ["Advanced 5G Features", "Edge Computing", "Priority Support", "Custom SLA", "Dedicated Support"],
      popular: true
    },
    {
      name: "5G Enterprise",
      price: "$1,299",
      period: "per month",
      description: "For large organizations with extensive 5G requirements",
      features: ["Full 5G Suite", "Private Networks", "24/7 Support", "Custom Solutions", "Dedicated Team", "White-label Options"],
      popular: false
    }
  ];

  return (
    <>
      <Helmet>
        <title>5G Solutions - Zion Tech Group | Next-Generation Connectivity</title>
        <meta
          name="description"
          content="Comprehensive 5G solutions including network infrastructure, IoT connectivity, edge computing, mobile applications, and smart city implementations. Transform your business with next-generation connectivity."
        />
        <meta
          name="keywords"
          content="5G solutions, 5G network, IoT connectivity, edge computing, mobile applications, smart city, private networks, data analytics, cloud integration, next-generation connectivity"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <Wifi className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">Next-Generation 5G Solutions Available</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              5G Solutions
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
                {" "}& Services
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Transform your business with next-generation 5G connectivity solutions. 
              From network infrastructure to smart city implementations, we provide comprehensive 5G services that drive innovation and growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Start 5G Journey
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/consultation"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Free 5G Consultation
                <Zap className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Our 5G Solutions
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive 5G services designed to accelerate your business growth and digital transformation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {fiveGServices.map((service, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
                >
                  {/* Animated background effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <div
                      className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3 text-center group-hover:text-cyan-300 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 text-center mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    
                    {/* Price and Features */}
                    <div className="space-y-3">
                      <div className="text-center">
                        <span className="text-cyan-400 font-bold text-lg">{service.price}</span>
                      </div>
                      <div className="flex flex-wrap gap-2 justify-center">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded-full border border-cyan-500/30"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mt-4 text-center">
                      <Link
                        to={service.path}
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

        {/* Pricing Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                5G Service Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect 5G solution for your business. All plans include 14-day free trial and no setup fees.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border ${
                    plan.popular 
                      ? 'border-cyan-500/50 shadow-2xl shadow-cyan-500/10' 
                      : 'border-white/20'
                  } hover:bg-white/20 transition-all duration-300 hover:scale-105`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                      <span className="text-gray-300 ml-2">{plan.period}</span>
                    </div>
                    <p className="text-gray-300 text-sm mt-2">{plan.description}</p>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 shadow-lg hover:shadow-cyan-500/25'
                        : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                    }`}
                  >
                    Start Free Trial
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
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
                Ready to Transform Your Business with 5G?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of businesses already using our 5G solutions to drive growth and innovation. 
                Contact us today for a personalized consultation.
              </p>
              
              {/* Contact Details */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Email</h3>
                  <p className="text-cyan-400">kleber@ziontechgroup.com</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Smartphone className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Phone</h3>
                  <p className="text-cyan-400">+1 302 464 0950</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Address</h3>
                  <p className="text-cyan-400 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
                >
                  Start Your 5G Journey
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/case-studies"
                  className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
                >
                  View Case Studies
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}