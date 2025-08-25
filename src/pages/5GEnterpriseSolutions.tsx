import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Network, 
  Zap, 
  Target, 
  Shield, 
  Rocket, 
  Globe,
  BarChart3,
  Users,
  ArrowRight,
  CheckCircle,
  Star,
  Lightbulb,
  Code,
  Database,
  Cloud,
  Lock,
  Eye,
  Sparkles,
  TrendingUp,
  Settings,
  Cpu,
  Brain,
  Wifi,
  Smartphone,
  Server,
  Router,
  Satellite
} from 'lucide-react';

const FiveGEnterpriseSolutions: React.FC = () => {
  const features = [
    {
      icon: Network,
      title: "Ultra-Fast Connectivity",
      description: "Lightning-fast 5G networks delivering unprecedented speed and low latency for enterprise applications."
    },
    {
      icon: Zap,
      title: "Real-time Performance",
      description: "Ultra-low latency connections enabling real-time applications and instant data transmission."
    },
    {
      icon: Target,
      title: "Massive IoT Support",
      description: "Support for millions of connected devices with reliable, high-bandwidth connectivity."
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Advanced security protocols and network slicing for isolated, secure enterprise communications."
    },
    {
      icon: Rocket,
      title: "Scalable Infrastructure",
      description: "Flexible 5G infrastructure that scales with your business needs and growth requirements."
    },
    {
      icon: Globe,
      title: "Global Coverage",
      description: "Worldwide 5G network coverage with seamless roaming and consistent performance."
    }
  ];

  const useCases = [
    {
      icon: Smartphone,
      title: "Mobile Workforce",
      description: "High-speed mobile connectivity for remote workers, field teams, and mobile applications."
    },
    {
      icon: Server,
      title: "Edge Computing",
      description: "Distributed computing infrastructure with ultra-low latency for real-time processing."
    },
    {
      icon: Router,
      title: "Network Infrastructure",
      description: "High-capacity network backbone for data centers, offices, and distributed locations."
    },
    {
      icon: Wifi,
      title: "Wireless Connectivity",
      description: "Enterprise-grade wireless networks with gigabit speeds and reliable coverage."
    },
    {
      icon: Satellite,
      title: "Remote Locations",
      description: "5G connectivity for remote offices, manufacturing sites, and field operations."
    },
    {
      icon: Database,
      title: "Data Centers",
      description: "High-speed interconnections between data centers and cloud infrastructure."
    }
  ];

  const benefits = [
    "10x faster data transmission compared to 4G",
    "Ultra-low latency for real-time applications",
    "Massive IoT device support and management",
    "Enhanced security with network slicing",
    "Scalable infrastructure for business growth",
    "Global coverage with seamless roaming"
  ];

  const capabilities = [
    {
      icon: Brain,
      title: "AI-Powered Optimization",
      description: "Intelligent network optimization and traffic management using AI algorithms."
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Comprehensive network performance monitoring and analytics dashboards."
    },
    {
      icon: Settings,
      title: "Network Management",
      description: "Centralized network management with automated configuration and optimization."
    },
    {
      icon: Eye,
      title: "Real-time Monitoring",
      description: "Continuous monitoring of network performance, security, and user experience."
    },
    {
      icon: Lock,
      title: "Security Management",
      description: "Advanced security features including network slicing and threat detection."
    },
    {
      icon: TrendingUp,
      title: "Performance Optimization",
      description: "Continuous optimization of network performance and user experience."
    }
  ];

  return (
    <>
      <Helmet>
        <title>5G Enterprise Solutions - Zion Tech Group</title>
        <meta name="description" content="Revolutionary 5G enterprise solutions that deliver ultra-fast connectivity, ultra-low latency, and massive IoT support. Transform your business with next-generation 5G technology." />
        <meta name="keywords" content="5G enterprise, 5G solutions, enterprise connectivity, 5G networks, IoT connectivity, network infrastructure" />
        <link rel="canonical" href="https://ziontechgroup.com/5g-enterprise-solutions" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.1),transparent_50%)]"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-4">
                <Network className="w-8 h-8 text-white" />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              5G Enterprise
              <span className="block bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Experience the future of enterprise connectivity with our revolutionary 5G solutions. 
              Ultra-fast speeds, ultra-low latency, and massive IoT support for the next generation 
              of business applications.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-500 hover:to-cyan-500 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-teal-500/25">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border-2 border-teal-500/50 text-teal-400 hover:bg-teal-500/10 font-semibold rounded-xl transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Revolutionary Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our 5G enterprise solutions deliver unprecedented capabilities 
                that redefine how businesses connect and communicate.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="group">
                    <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 h-full hover:border-teal-500/50 transition-all duration-300 hover:transform hover:scale-105">
                      <div className="w-16 h-16 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 border border-teal-500/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-8 h-8 text-teal-400" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                      <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 relative bg-gray-900/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Transform Your Business
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover how 5G technology is revolutionizing various business operations 
                and creating new possibilities for innovation and growth.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => {
                const Icon = useCase.icon;
                return (
                  <div key={index} className="group">
                    <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-600/50 rounded-2xl p-8 h-full hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105">
                      <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-8 h-8 text-cyan-400" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">{useCase.title}</h3>
                      <p className="text-gray-300 leading-relaxed">{useCase.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Advanced Capabilities
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our platform combines cutting-edge 5G technology with comprehensive network management 
                to deliver unprecedented connectivity excellence.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {capabilities.map((capability, index) => {
                const Icon = capability.icon;
                return (
                  <div key={index} className="group">
                    <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 h-full hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-8 h-8 text-blue-400" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">{capability.title}</h3>
                      <p className="text-gray-300 leading-relaxed">{capability.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 relative bg-gray-900/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose 5G Enterprise Solutions?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the competitive advantage that 5G technology provides 
                for your organization's connectivity and digital transformation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white mb-6">Key Benefits</h3>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-teal-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300 text-lg">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-teal-500/10 to-cyan-500/10 border border-teal-500/30 rounded-2xl p-8">
                <div className="text-center">
                  <Star className="w-16 h-16 text-teal-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-4">Technology Pioneer</h3>
                  <p className="text-gray-300 mb-6">
                    Be among the first to experience the power of 5G enterprise solutions 
                    and gain a significant competitive advantage in your industry.
                  </p>
                  <button className="px-6 py-3 bg-gradient-to-r from-teal-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-teal-500 hover:to-cyan-500 transition-all duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-gradient-to-r from-teal-500/10 to-cyan-500/10 border border-teal-500/30 rounded-3xl p-12">
              <Lightbulb className="w-20 h-20 text-teal-400 mx-auto mb-6" />
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Experience 5G?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Start your journey toward next-generation connectivity today 
                and discover the unlimited potential of 5G enterprise solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-500 hover:to-cyan-500 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-teal-500/25">
                  Get Started Now
                  <ArrowRight className="w-5 h-5 ml-2 inline" />
                </button>
                <button className="px-8 py-4 border-2 border-teal-500/50 text-teal-400 hover:bg-teal-500/10 font-semibold rounded-xl transition-all duration-300">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default FiveGEnterpriseSolutions;