import { ArrowRight, Play, Calendar, Clock, Users, CheckCircle, Star, Brain, Shield, Zap, Globe, BarChart3, Mail, Smartphone, Globe as GlobeIcon } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Demo() {
  const [selectedDemo, setSelectedDemo] = useState("ai-analytics");

  const demos = [
    {
      id: "ai-analytics",
      title: "AI Analytics Dashboard",
      description: "Experience our powerful AI analytics platform with real-time data visualization and predictive insights.",
      duration: "15 minutes",
      features: [
        "Real-time data visualization",
        "Predictive analytics",
        "Custom dashboard creation",
        "Automated reporting",
        "Interactive charts and graphs"
      ],
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      videoUrl: "/api/placeholder/video/ai-analytics-demo.mp4",
      thumbnail: "/api/placeholder/600/400"
    },
    {
      id: "ai-customer-support",
      title: "AI Customer Support",
      description: "See how our intelligent chatbots can transform your customer service with natural language processing.",
      duration: "12 minutes",
      features: [
        "Natural language processing",
        "Multi-language support",
        "Sentiment analysis",
        "Live chat handoff",
        "Knowledge base integration"
      ],
      icon: <Brain className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      videoUrl: "/api/placeholder/video/ai-customer-support-demo.mp4",
      thumbnail: "/api/placeholder/600/400"
    },
    {
      id: "ai-content-generation",
      title: "AI Content Generation",
      description: "Watch our AI create high-quality content including blog posts, social media, and marketing materials.",
      duration: "10 minutes",
      features: [
        "SEO-optimized content",
        "Brand voice training",
        "Multi-format output",
        "Plagiarism detection",
        "Content calendar integration"
      ],
      icon: <Zap className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      videoUrl: "/api/placeholder/video/ai-content-generation-demo.mp4",
      thumbnail: "/api/placeholder/600/400"
    },
    {
      id: "cybersecurity-monitor",
      title: "Cybersecurity Monitor",
      description: "Explore our advanced security monitoring system with real-time threat detection and response.",
      duration: "18 minutes",
      features: [
        "Real-time threat detection",
        "Automated incident response",
        "Vulnerability scanning",
        "Compliance reporting",
        "Security dashboard"
      ],
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-orange-500",
      videoUrl: "/api/placeholder/video/cybersecurity-monitor-demo.mp4",
      thumbnail: "/api/placeholder/600/400"
    },
    {
      id: "5g-solutions",
      title: "5G Solutions",
      description: "Discover how 5G technology can revolutionize your business with ultra-low latency and massive connectivity.",
      duration: "20 minutes",
      features: [
        "Ultra-low latency",
        "Massive IoT connectivity",
        "Edge computing",
        "Network slicing",
        "Real-time monitoring"
      ],
      icon: <Globe className="w-8 h-8" />,
      color: "from-cyan-500 to-blue-500",
      videoUrl: "/api/placeholder/video/5g-solutions-demo.mp4",
      thumbnail: "/api/placeholder/600/400"
    },
    {
      id: "cloud-infrastructure",
      title: "Cloud Infrastructure",
      description: "Learn about our comprehensive cloud solutions with automated scaling and disaster recovery.",
      duration: "16 minutes",
      features: [
        "Auto-scaling capabilities",
        "Disaster recovery",
        "Cost optimization",
        "Security hardening",
        "Multi-cloud support"
      ],
      icon: <Globe className="w-8 h-8" />,
      color: "from-indigo-500 to-purple-500",
      videoUrl: "/api/placeholder/video/cloud-infrastructure-demo.mp4",
      thumbnail: "/api/placeholder/600/400"
    }
  ];

  const selectedDemoData = demos.find(demo => demo.id === selectedDemo);

  const demoStats = [
    { number: "50+", label: "Live Demos", icon: <Play className="w-6 h-6" /> },
    { number: "500+", label: "Demo Views", icon: <Users className="w-6 h-6" /> },
    { number: "95%", label: "Satisfaction Rate", icon: <Star className="w-6 h-6" /> },
    { number: "24/7", label: "Demo Access", icon: <Clock className="w-6 h-6" /> }
  ];

  const benefits = [
    {
      icon: <Play className="w-6 h-6" />,
      title: "Interactive Experience",
      description: "Hands-on experience with our solutions"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Expert Guidance",
      description: "Personalized demo with our specialists"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Real Use Cases",
      description: "See solutions in real business scenarios"
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Flexible Scheduling",
      description: "Book at your convenience"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Live Demos - Zion Tech Group | Experience Our Solutions</title>
        <meta
          name="description"
          content="Experience our AI and technology solutions through interactive live demos. See how our platforms work in real-time with expert guidance."
        />
        <meta
          name="keywords"
          content="live demo, AI demo, technology demo, interactive demo, solution demonstration, product showcase"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-block">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 relative">
                Live
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
                  {" "}Demos
                </span>
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-lg blur opacity-30 animate-pulse"></div>
              </h1>
            </div>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Experience our AI and technology solutions firsthand. Watch interactive demos, 
              ask questions, and see how our platforms can transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#demo-selection"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Start Demo
                <Play className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <Link
                to="/consultation"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Schedule Live Demo
                <Calendar className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {demoStats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Demo Selection */}
        <section id="demo-selection" className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Choose Your Demo
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Select from our comprehensive collection of interactive demos to see our solutions in action.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {demos.map((demo) => (
                <div
                  key={demo.id}
                  onClick={() => setSelectedDemo(demo.id)}
                  className={`group cursor-pointer bg-white/10 backdrop-blur-sm rounded-xl p-6 border transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 ${
                    selectedDemo === demo.id
                      ? 'border-cyan-400 bg-gradient-to-br from-cyan-500/10 to-purple-500/10'
                      : 'border-white/20 hover:border-cyan-400'
                  }`}
                >
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${demo.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                    {demo.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 text-center group-hover:text-cyan-300 transition-colors">
                    {demo.title}
                  </h3>
                  <p className="text-gray-300 text-center mb-4 leading-relaxed">
                    {demo.description}
                  </p>
                  <div className="text-center mb-4">
                    <span className="text-cyan-400 font-bold text-lg">{demo.duration}</span>
                  </div>
                  <ul className="space-y-2">
                    {demo.features.slice(0, 3).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Selected Demo Display */}
        {selectedDemoData && (
          <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="text-center mb-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    {selectedDemoData.title} Demo
                  </h3>
                  <p className="text-gray-300 mb-6 max-w-3xl mx-auto">
                    {selectedDemoData.description}
                  </p>
                  <div className="flex items-center justify-center gap-4 mb-8">
                    <div className="flex items-center text-gray-300">
                      <Clock className="w-4 h-4 mr-2 text-cyan-400" />
                      <span>{selectedDemoData.duration}</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <Users className="w-4 h-4 mr-2 text-cyan-400" />
                      <span>Interactive Demo</span>
                    </div>
                  </div>
                </div>
                
                {/* Demo Video Placeholder */}
                <div className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-xl h-96 flex items-center justify-center mb-8 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 animate-pulse"></div>
                  <div className="relative z-10 text-center">
                    <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group hover:scale-110 transition-transform cursor-pointer">
                      <Play className="w-8 h-8 text-white ml-1" />
                    </div>
                    <h4 className="text-xl font-semibold text-white mb-2">Demo Video</h4>
                    <p className="text-gray-300">Click to play the interactive demo</p>
                  </div>
                </div>
                
                {/* Demo Features */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-4">What You'll See:</h4>
                    <ul className="space-y-3">
                      {selectedDemoData.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-300">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-4">Demo Benefits:</h4>
                    <ul className="space-y-3">
                      <li className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        Hands-on experience with real data
                      </li>
                      <li className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        Ask questions during the demo
                      </li>
                      <li className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        See how it fits your business needs
                      </li>
                      <li className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        Get personalized recommendations
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="text-center mt-8">
                  <Link
                    to="/consultation"
                    className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105 mx-auto w-fit"
                  >
                    Schedule Live Demo
                    <Calendar className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our Demos?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our interactive demos provide you with a comprehensive understanding of our solutions.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="text-center group"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to See Our Solutions in Action?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Schedule a personalized demo with our experts and discover how our solutions can transform your business.
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
                  <Smartphone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Phone</h3>
                <p className="text-cyan-400">+1 302 464 0950</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <GlobeIcon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Address</h3>
                <p className="text-cyan-400 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/consultation"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Schedule Live Demo
                <Calendar className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Contact Us
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
