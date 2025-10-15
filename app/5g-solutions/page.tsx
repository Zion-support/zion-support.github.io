import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Wifi, Zap, Shield, CheckCircle, ArrowRight, Star, Users, Clock, Globe, Smartphone } from 'lucide-react';

const FiveGSolutionsPage: React.FC = () => {
  const solutions = [
    {
      icon: <Wifi className="w-8 h-8" />,
      title: "5G Network Implementation",
      description: "Complete 5G network deployment and optimization services",
      price: "From $5,999",
      features: ["Core network setup", "RAN deployment", "Network optimization", "Performance monitoring"]
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "5G Smart City Solutions",
      description: "Comprehensive smart city infrastructure powered by 5G",
      price: "From $7,999",
      features: ["IoT integration", "Traffic management", "Public safety", "Environmental monitoring"]
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "5G Mobile Applications",
      description: "5G-optimized mobile app development for ultra-low latency",
      price: "From $2,499",
      features: ["AR/VR applications", "Real-time gaming", "Video streaming", "IoT mobile apps"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "5G Security Solutions",
      description: "Advanced security for 5G networks and applications",
      price: "From $3,499",
      features: ["Network security", "Data encryption", "Threat detection", "Compliance management"]
    }
  ];

  const benefits = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Ultra-Low Latency",
      description: "Sub-millisecond latency for real-time applications"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Massive Connectivity",
      description: "Support for millions of connected devices per square kilometer"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Enhanced Security",
      description: "Advanced encryption and security protocols for 5G networks"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Future-Ready",
      description: "Scalable infrastructure that grows with your business"
    }
  ];

  const useCases = [
    {
      title: "Manufacturing",
      description: "Industrial IoT and automation with 5G connectivity",
      icon: "🏭"
    },
    {
      title: "Healthcare",
      description: "Remote surgery and telemedicine applications",
      icon: "🏥"
    },
    {
      title: "Transportation",
      description: "Autonomous vehicles and smart traffic management",
      icon: "🚗"
    },
    {
      title: "Entertainment",
      description: "AR/VR experiences and immersive content delivery",
      icon: "🎮"
    }
  ];

  return (
    <>
      <Helmet>
        <title>5G Solutions - Zion Tech Group | Next-Generation 5G Infrastructure & Applications</title>
        <meta name="description" content="Transform your business with cutting-edge 5G solutions. Network implementation, smart city solutions, mobile apps, and security services for the 5G era." />
        <meta name="keywords" content="5G solutions, 5G implementation, smart city, 5G mobile apps, 5G security, IoT, edge computing, network infrastructure" />
        <meta property="og:title" content="5G Solutions - Zion Tech Group" />
        <meta property="og:description" content="Next-generation 5G infrastructure and applications for modern businesses" />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-8">
                <Star className="w-4 h-4 mr-2" />
                Next-Generation Connectivity
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">5G Solutions</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Unlock the full potential of 5G technology with our comprehensive solutions. 
                From network implementation to smart city applications, we deliver the future of connectivity.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                  Get Consultation
                </button>
                <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                  View Case Studies
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Our 5G Solutions</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive 5G services designed to transform your business operations
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {solutions.map((solution, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-cyan-500/40 transition-all duration-300">
                  <div className="text-cyan-400 mb-6">
                    {solution.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4">{solution.title}</h3>
                  <p className="text-gray-300 mb-6">{solution.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {solution.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-cyan-400 font-semibold">{solution.price}</span>
                    <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                      Learn More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">5G Use Cases</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover how 5G technology is transforming industries across the globe
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="text-center">
                  <div className="text-6xl mb-4">{useCase.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                  <p className="text-gray-300">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Why Choose Our 5G Solutions?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Partner with industry leaders in 5G technology implementation
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="text-cyan-400 mb-4 flex justify-center">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-cyan-600 to-purple-600 rounded-2xl p-12 text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Embrace the 5G Revolution?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Let's discuss how 5G solutions can transform your business and give you a competitive edge.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-cyan-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300">
                  Get Started Today
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300">
                  Schedule Consultation
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default FiveGSolutionsPage;