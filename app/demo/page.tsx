import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Play, 
  Monitor, 
  Smartphone, 
  Tablet,
  Mail,
  Phone,
  Globe,
  CheckCircle,
  Star,
  Sparkles,
  Brain,
  Shield,
  Zap,
  BarChart3,
  Users,
  Calendar,
  Clock
} from 'lucide-react';

const DemoPage = () => {
  const demoFeatures = [
    {
      title: "AI Analytics Dashboard",
      description: "See real-time data processing and predictive analytics in action",
      icon: <BarChart3 className="w-8 h-8" />,
      duration: "5 min",
      category: "AI Services"
    },
    {
      title: "AI Content Generation",
      description: "Watch AI create high-quality content for your business needs",
      icon: <Brain className="w-8 h-8" />,
      duration: "3 min",
      category: "AI Services"
    },
    {
      title: "Cybersecurity Monitoring",
      description: "Experience advanced threat detection and automated response",
      icon: <Shield className="w-8 h-8" />,
      duration: "4 min",
      category: "Security"
    },
    {
      title: "Micro SAAS Solutions",
      description: "Explore ready-to-use business tools and applications",
      icon: <Zap className="w-8 h-8" />,
      duration: "6 min",
      category: "Micro SAAS"
    },
    {
      title: "5G Network Solutions",
      description: "Discover next-generation connectivity and infrastructure",
      icon: <Globe className="w-8 h-8" />,
      duration: "5 min",
      category: "5G Technology"
    },
    {
      title: "Customer Support AI",
      description: "See intelligent chatbots and automated support in action",
      icon: <Users className="w-8 h-8" />,
      duration: "4 min",
      category: "AI Services"
    }
  ];

  const benefits = [
    {
      title: "Live Product Demo",
      description: "See our solutions working with real data and scenarios",
      icon: <Play className="w-6 h-6" />
    },
    {
      title: "Expert Guidance",
      description: "Get personalized recommendations from our AI specialists",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Custom Scenarios",
      description: "Tailored demonstrations based on your specific business needs",
      icon: <Sparkles className="w-6 h-6" />
    }
  ];

  const stats = [
    { number: "500+", label: "Demos Conducted", icon: <Play className="w-6 h-6" /> },
    { number: "95%", label: "Customer Satisfaction", icon: <Star className="w-6 h-6" /> },
    { number: "30 min", label: "Average Demo Time", icon: <Clock className="w-6 h-6" /> },
    { number: "24/7", label: "Demo Availability", icon: <Calendar className="w-6 h-6" /> }
  ];

  return (
    <>
      <Helmet>
        <title>Product Demo - See Our Solutions in Action | Zion Tech Group</title>
        <meta
          name="description"
          content="Experience our AI and IT solutions through live product demos. See how our technology can transform your business with personalized demonstrations."
        />
        <meta
          name="keywords"
          content="product demo, AI demo, technology demonstration, business solutions demo, Zion Tech Group demo"
        />
        <link rel="canonical" href="https://ziontechgroup.com/demo" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <Play className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">Live Product Demonstrations</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                See Our Solutions
              </span>
              <br />
              <span className="text-white">In Action</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Experience the power of our AI and IT solutions through personalized live demonstrations. 
              See how our technology can transform your business with real-world scenarios.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Schedule Demo
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Explore Services
                <Sparkles className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
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

        {/* Demo Features */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Available Demonstrations
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our comprehensive suite of product demonstrations tailored to your business needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {demoFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                        {feature.icon}
                      </div>
                      <div className="text-right">
                        <div className="text-xs bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded-full border border-cyan-500/30 mb-2">
                          {feature.category}
                        </div>
                        <div className="text-sm text-gray-400">{feature.duration}</div>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                      {feature.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {feature.description}
                    </p>
                    
                    <div className="flex items-center text-cyan-400 text-sm font-medium group-hover:text-cyan-300 transition-colors">
                      <Play className="w-4 h-4 mr-2" />
                      Watch Demo
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Why Choose Our Demos?
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Get the most out of your demonstration experience with our comprehensive approach
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Demo Request Form */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                    Request Your Demo
                  </span>
                </h2>
                <p className="text-xl text-gray-300">
                  Schedule a personalized demonstration tailored to your business needs
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">What to Expect</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">30-minute personalized demonstration</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">Real-time Q&A with our experts</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">Customized scenarios for your industry</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">Follow-up consultation and pricing</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Available Platforms</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Monitor className="w-6 h-6 text-cyan-400" />
                      <span className="text-gray-300">Desktop & Web Applications</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Smartphone className="w-6 h-6 text-cyan-400" />
                      <span className="text-gray-300">Mobile Applications</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Tablet className="w-6 h-6 text-cyan-400" />
                      <span className="text-gray-300">Tablet Interfaces</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Globe className="w-6 h-6 text-cyan-400" />
                      <span className="text-gray-300">Cloud-based Solutions</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
                >
                  Schedule Your Demo Now
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-xl p-8 border border-cyan-500/20">
              <h2 className="text-2xl font-bold text-white mb-4">
                Ready to See Our Solutions?
              </h2>
              <p className="text-gray-300 mb-6">
                Contact us to schedule your personalized demonstration and discover how our technology can transform your business.
              </p>
              
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
                    <Phone className="w-6 h-6 text-white" />
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
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default DemoPage;