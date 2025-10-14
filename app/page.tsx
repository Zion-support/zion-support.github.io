import React, { memo, useEffect, useState } from 'react';
import { Phone, Mail, MapPin, ArrowRight, Zap, Shield, Globe, Brain, Cpu, Database, Cloud, Lock, Wifi, BarChart3, Code, MessageSquare, Eye, Layers, Settings, TrendingUp } from 'lucide-react';

// Loading skeleton component
const ServiceCardSkeleton: React.FC = memo(() => (
  <div className="bg-white rounded-lg shadow-lg p-6 animate-pulse" role="status" aria-label="Loading service card">
    <div className="h-4 bg-gray-300 rounded mb-4"></div>
    <div className="h-3 bg-gray-300 rounded mb-2"></div>
    <div className="h-3 bg-gray-300 rounded"></div>
  </div>
));
ServiceCardSkeleton.displayName = 'ServiceCardSkeleton';

const HomePage: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const services = [
    {
      icon: Brain,
      title: 'AI Analytics Dashboard Pro',
      description: 'Advanced AI-powered analytics with real-time insights, predictive modeling, and automated reporting. Transform your data into actionable intelligence.',
      price: 'Starting at $299/month',
      features: ['Real-time Analytics', 'Predictive Modeling', 'Custom Dashboards', 'API Integration'],
      href: '/ai-analytics-dashboard'
    },
    {
      icon: MessageSquare,
      title: 'AI Chatbot Enterprise',
      description: 'Intelligent conversational AI that understands context, handles complex queries, and provides 24/7 customer support with human-like interactions.',
      price: 'Starting at $199/month',
      features: ['Natural Language Processing', 'Multi-language Support', 'Integration APIs', 'Analytics Dashboard'],
      href: '/ai-chatbot-enterprise'
    },
    {
      icon: Code,
      title: 'AI Code Assistant Pro',
      description: 'Revolutionary AI-powered coding assistant that writes, reviews, and optimizes code. Supports 50+ programming languages with intelligent suggestions.',
      price: 'Starting at $149/month',
      features: ['50+ Languages', 'Code Review', 'Auto-completion', 'Security Scanning'],
      href: '/ai-code-assistant-pro'
    },
    {
      icon: Eye,
      title: 'AI Computer Vision Suite',
      description: 'Advanced computer vision solutions for image recognition, object detection, and visual analytics. Perfect for manufacturing, retail, and security.',
      price: 'Starting at $399/month',
      features: ['Object Detection', 'Image Classification', 'Real-time Processing', 'Custom Models'],
      href: '/ai-computer-vision'
    },
    {
      icon: Wifi,
      title: '5G Network Optimization',
      description: 'Complete 5G infrastructure solutions with ultra-low latency, massive connectivity, and edge computing capabilities for next-gen applications.',
      price: 'Starting at $2,999/month',
      features: ['Ultra-low Latency', 'Edge Computing', 'IoT Integration', 'Network Slicing'],
      href: '/5g-network-optimization'
    },
    {
      icon: Shield,
      title: 'Advanced Security Suite',
      description: 'Comprehensive cybersecurity solution with AI-powered threat detection, zero-trust architecture, and 24/7 monitoring for enterprise protection.',
      price: 'Starting at $499/month',
      features: ['AI Threat Detection', 'Zero Trust', '24/7 Monitoring', 'Compliance Tools'],
      href: '/advanced-security-suite'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <main className="relative">
        {/* Hero Section with Futuristic Effects */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0">
            <div 
              className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"
              style={{
                left: mousePosition.x - 200,
                top: mousePosition.y - 200,
                transition: 'all 0.3s ease-out'
              }}
            />
            <div 
              className="absolute w-64 h-64 bg-purple-500/20 rounded-full blur-2xl animate-pulse"
              style={{
                right: mousePosition.x - 150,
                bottom: mousePosition.y - 150,
                transition: 'all 0.3s ease-out'
              }}
            />
          </div>
          
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
          
          <div className="container mx-auto px-4 py-20 relative z-10">
            <div className="text-center max-w-5xl mx-auto">
              <div className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full border border-blue-400/30 mb-8">
                <span className="text-blue-300 text-sm font-medium">🚀 Next-Gen Technology Solutions</span>
              </div>
              
              <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                Advanced AI & IT Solutions
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto">
                Transform your business with cutting-edge artificial intelligence, 
                5G technology, and comprehensive IT services. Experience the future of technology today.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
                <button className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-xl text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-blue-500/25">
                  <span className="flex items-center justify-center">
                    Get Started Free
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
                <button className="group border-2 border-white/30 text-white px-10 py-4 rounded-xl text-lg font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm">
                  <span className="flex items-center justify-center">
                    Watch Demo
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">500+</div>
                  <div className="text-gray-400 text-sm">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">150+</div>
                  <div className="text-gray-400 text-sm">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">99.9%</div>
                  <div className="text-gray-400 text-sm">Uptime Guarantee</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">24/7</div>
                  <div className="text-gray-400 text-sm">Support Available</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.1),transparent_50%)]"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-20">
              <div className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full border border-blue-400/20 mb-8">
                <span className="text-blue-600 text-sm font-medium">🚀 Our Premium Services</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
                Advanced Technology Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Comprehensive AI, 5G, and IT solutions designed to accelerate your business growth. 
                Choose from our premium service packages tailored to your specific needs.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div 
                    key={index}
                    className="group bg-white/80 backdrop-blur-sm border border-gray-200/50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 relative overflow-hidden"
                  >
                    {/* Hover Effect Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="relative z-10">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                        {service.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {service.description}
                      </p>
                      
                      <div className="mb-6">
                        <div className="text-2xl font-bold text-blue-600 mb-2">{service.price}</div>
                        <div className="text-sm text-gray-500">Per month • Cancel anytime</div>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Features:</h4>
                        <ul className="space-y-2">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform group-hover:scale-105 flex items-center justify-center">
                        Get Started
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
            
            {/* CTA Section */}
            <div className="text-center mt-16">
              <p className="text-gray-600 mb-6">Need a custom solution? We've got you covered.</p>
              <button className="bg-gradient-to-r from-gray-800 to-gray-900 text-white px-8 py-4 rounded-xl font-semibold hover:from-gray-700 hover:to-gray-800 transition-all duration-300 transform hover:scale-105">
                Contact Our Experts
              </button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-24 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 relative overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.1),transparent_50%)]"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-20">
              <div className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full border border-blue-400/30 mb-8">
                <span className="text-blue-300 text-sm font-medium">📞 Get In Touch</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Contact us today to discuss how our AI and IT solutions can accelerate your success. 
                Our experts are ready to help you choose the perfect solution for your needs.
              </p>
            </div>
            
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="group text-center p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Call Us</h3>
                  <p className="text-gray-300 mb-4">Speak directly with our experts</p>
                  <a 
                    href="tel:+13024640950" 
                    className="text-2xl font-bold text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    +1 302 464 0950
                  </a>
                  <p className="text-sm text-gray-400 mt-2">Mon-Fri 9AM-6PM EST</p>
                </div>
                
                <div className="group text-center p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2">
                  <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Email Us</h3>
                  <p className="text-gray-300 mb-4">Get a detailed response within 24 hours</p>
                  <a 
                    href="mailto:kleber@ziontechgroup.com" 
                    className="text-lg font-semibold text-green-400 hover:text-green-300 transition-colors break-all"
                  >
                    kleber@ziontechgroup.com
                  </a>
                  <p className="text-sm text-gray-400 mt-2">Response within 24 hours</p>
                </div>
                
                <div className="group text-center p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2">
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Visit Us</h3>
                  <p className="text-gray-300 mb-4">Schedule an in-person meeting</p>
                  <div className="text-lg font-semibold text-purple-400">
                    <div>364 E Main St STE 1008</div>
                    <div>Middletown DE 19709</div>
                  </div>
                  <p className="text-sm text-gray-400 mt-2">By appointment only</p>
                </div>
              </div>
              
              {/* Additional Info */}
              <div className="text-center mt-16">
                <div className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl border border-blue-400/30">
                  <p className="text-gray-300 mb-2">
                    <strong className="text-white">Visit our website:</strong> 
                    <a href="https://ziontechgroup.com" className="text-blue-400 hover:text-blue-300 ml-2 underline">
                      ziontechgroup.com
                    </a>
                  </p>
                  <p className="text-sm text-gray-400">
                    Discover more about our services and solutions online
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
