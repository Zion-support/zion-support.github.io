import React, { memo, useState, useEffect } from 'react';
import { Phone, Mail, MapPin, ArrowRight, Shield, Brain, Code, Cloud, Wifi, Star, CheckCircle, Users, Award, TrendingUp, Clock, Heart, DollarSign, BookOpen } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

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
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI Analytics Dashboard Pro",
      description: "Advanced AI-powered analytics with real-time insights, predictive modeling, and automated reporting.",
      price: "$299/month",
      features: ["Real-time Analytics", "Predictive Modeling", "Custom Dashboards", "API Integration"],
      link: "/ai-analytics-dashboard-pro"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "AI Code Assistant Pro",
      description: "Intelligent code generation, debugging, and optimization with support for 50+ programming languages.",
      price: "$199/month",
      features: ["Code Generation", "Bug Detection", "Performance Optimization", "Multi-language Support"],
      link: "/ai-code-assistant-pro"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "AI Voice Assistant Enterprise",
      description: "Advanced conversational AI with 99.5% accuracy, 50+ languages, and enterprise-grade security.",
      price: "$199/month",
      features: ["99.5% Accuracy", "50+ Languages", "Natural Language Processing", "Enterprise Security"],
      link: "/ai-voice-assistant-enterprise"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "AI Cybersecurity Platform",
      description: "Advanced threat protection with AI-powered detection, 24/7 monitoring, and compliance management.",
      price: "$299/month",
      features: ["AI Threat Detection", "24/7 Monitoring", "HIPAA Compliance", "Real-time Protection"],
      link: "/ai-cybersecurity-platform"
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "AI E-commerce Platform",
      description: "Intelligent online stores with AI recommendations, analytics, and automation for modern businesses.",
      price: "$199/month",
      features: ["AI Recommendations", "Smart Search", "Analytics Dashboard", "Mobile Optimization"],
      link: "/ai-ecommerce-platform"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "AI Healthcare Platform",
      description: "Revolutionary healthcare delivery with AI diagnosis assistance, telemedicine, and patient care.",
      price: "$399/month",
      features: ["AI Diagnosis", "Telemedicine", "EHR System", "HIPAA Compliance"],
      link: "/ai-healthcare-platform"
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "AI Financial Platform",
      description: "Intelligent financial operations with AI analytics, payment processing, and investment management.",
      price: "$299/month",
      features: ["AI Analytics", "Payment Processing", "Fraud Detection", "Investment Management"],
      link: "/ai-financial-platform"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "AI Education Platform",
      description: "Transform education with personalized learning, virtual classrooms, and smart assessment tools.",
      price: "$199/month",
      features: ["Personalized Learning", "Virtual Classrooms", "Smart Assessment", "Learning Analytics"],
      link: "/ai-education-platform"
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed", icon: <Award className="w-6 h-6" /> },
    { number: "150+", label: "Happy Clients", icon: <Users className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime Guarantee", icon: <TrendingUp className="w-6 h-6" /> },
    { number: "24/7", label: "Support Available", icon: <Clock className="w-6 h-6" /> }
  ];

  return (
    <>
      <div>
      <Performance Monitor />
      <Helmet>
        <title>Zion Tech Group - Advanced A I and I T Solutions</title>
        <meta name="description" content="Leading provider of A I solutions, cybersecurity, and I T services for modern businesses" />
        <meta name="keywords" content="A I solutions, cybersecurity, I T services, digital transformation, automation" />
        <meta property="og:title" content="Zion Tech Group - Advanced A I and I T Solutions" />
        <meta property="og:description" content="Leading provider of A I solutions, cybersecurity, and I T services for modern businesses" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zion Tech Group - Advanced A I and I T Solutions" />
        <meta name="twitter:description" content="Leading provider of A I solutions, cybersecurity, and I T services for modern businesses" />
        <link rel="canonical" href="https://zion.app" />
      </Helmet>
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Zion Tech Group
            </h1>
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Advanced AI and IT Solutions for the Digital Future
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
        
              <Link 
                to="/services" 
                className="inline-flex items-center bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"
              >
                Explore Our Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                to="/contact" 
                className="inline-flex items-center border-2 border-purple-500 hover:bg-purple-500 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"
              >
                Get Started
              </Link>
            </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-slate-800 p-6 rounded-lg border border-slate-700 hover:border-purple-500 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/2 0"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <feature.icon className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
  )
          </div>
        </section>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-purple-900/5 0 to-cyan-900/5 0 p-12 rounded-lg">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Let our experts help you implement cutting-edge solutions
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"
            >
              Contact Us Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20bg-gradient-to-r from-slate-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xlmx-auto text-center">
            <h2 className="text-4xlmd:text-5xl font-bold text-white mb-8">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              With over 4 years of experience in cutting-edge technology solutions, 
              we've helped businesses across various industries transform their operations 
              and achieve unprecedented growth.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">50+</div>
                <div className="text-gray-300">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">25+</div>
                <div className="text-gray-300">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">99%</div>
                <div className="text-gray-300">Success Rate</div>
              </div>
            </div>
          </div>
        </div>

        <main className="relative z-10">
          {/* Hero Section */}
          <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            <div className="container mx-auto px-4 py-20 relative z-10">
              <div className={`text-center max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="inline-flex items-center px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-8">
                  <Star className="w-4 h-4 mr-2" />
                  Trusted by 150+ Companies Worldwide
                </div>
                <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
                  <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Advanced AI & IT
                  </span>
                  <br />
                  <span className="text-white">Solutions</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto">
                  Transform your business with cutting-edge artificial intelligence, 
                  5G technology, and comprehensive IT services. From micro SAAS solutions 
                  to enterprise-grade platforms.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                  <a
                    href="tel:+13024640950"
                    className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call +1 302 464 0950
                  </a>
                  <a
                    href="mailto:kleber@ziontechgroup.com"
                    className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Get Quote
                  </a>
                </div>
                
                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center group">
                      <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                        <div className="text-cyan-400">{stat.icon}</div>
                      </div>
                      <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                      <div className="text-gray-400 text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900 relative">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <div className="inline-flex items-center px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-6">
                  <Star className="w-4 h-4 mr-2" />
                  Premium Services
                </div>
                <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Our Services
                  </span>
                </h2>
                <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                  Comprehensive AI, IT, and 5G solutions designed to accelerate your business growth. 
                  From micro SAAS platforms to enterprise-grade systems.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <div 
                    key={index} 
                    className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-400/40 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <div className="text-white">{service.icon}</div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="mb-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                        <div className="flex items-center text-yellow-400">
                          <Star className="w-4 h-4 fill-current" />
                          <Star className="w-4 h-4 fill-current" />
                          <Star className="w-4 h-4 fill-current" />
                          <Star className="w-4 h-4 fill-current" />
                          <Star className="w-4 h-4 fill-current" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                    <a
                      href={service.link}
                      className="inline-flex items-center justify-center w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="py-20 bg-gray-900">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Contact us today to discuss how our AI and IT solutions can accelerate your success.
                </p>
              </div>
              
              <div className="max-w-4xl mx-auto">
                <div className="grid md:grid-cols-3 gap-8 text-center">
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                      <Phone className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
                    <p className="text-gray-300">+1 302 464 0950</p>
                  </div>
                  
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mb-4">
                      <Mail className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
                    <p className="text-gray-300">kleber@ziontechgroup.com</p>
                  </div>
                  
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mb-4">
                      <MapPin className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
                    <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
</>
  );
};

export default HomePage;
