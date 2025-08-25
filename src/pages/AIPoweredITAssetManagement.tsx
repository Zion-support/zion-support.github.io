import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Database, 
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
  Network,
  Cloud,
  Lock,
  Eye,
  Sparkles,
  TrendingUp,
  Settings,
  Cpu,
  Brain,
  Server,
  HardDrive,
  Monitor,
  Smartphone,
  Printer,
  Router
} from 'lucide-react';

const AIPoweredITAssetManagement: React.FC = () => {
  const features = [
    {
      icon: Database,
      title: "Intelligent Asset Discovery",
      description: "AI-powered automatic discovery and classification of all IT assets across your network infrastructure."
    },
    {
      icon: Zap,
      title: "Real-time Monitoring",
      description: "Continuous monitoring of asset health, performance, and utilization with instant alerts and notifications."
    },
    {
      icon: Target,
      title: "Predictive Maintenance",
      description: "AI algorithms predict potential failures and maintenance needs before they impact your operations."
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Automated security monitoring, vulnerability assessment, and compliance reporting for all assets."
    },
    {
      icon: Rocket,
      title: "Lifecycle Management",
      description: "Complete asset lifecycle tracking from procurement to retirement with optimization recommendations."
    },
    {
      icon: Globe,
      title: "Multi-Platform Support",
      description: "Unified management across Windows, Linux, macOS, cloud platforms, and mobile devices."
    }
  ];

  const assetTypes = [
    {
      icon: Server,
      title: "Servers & Infrastructure",
      description: "Physical and virtual servers, storage systems, and network infrastructure management."
    },
    {
      icon: Monitor,
      title: "End User Devices",
      description: "Desktops, laptops, tablets, and mobile devices with user assignment tracking."
    },
    {
      icon: Network,
      title: "Network Equipment",
      description: "Routers, switches, firewalls, and wireless access points with performance monitoring."
    },
    {
      icon: Printer,
      title: "Peripheral Devices",
      description: "Printers, scanners, and other office equipment with usage analytics."
    },
    {
      icon: Cloud,
      title: "Cloud Resources",
      description: "Cloud instances, storage, and services across multiple cloud providers."
    },
    {
      icon: HardDrive,
      title: "Software & Licenses",
      description: "Application tracking, license management, and software deployment automation."
    }
  ];

  const benefits = [
    "Complete visibility into all IT assets across your organization",
    "Reduced asset downtime through predictive maintenance",
    "Optimized asset utilization and cost savings",
    "Automated compliance reporting and audit preparation",
    "Streamlined procurement and retirement processes",
    "Enhanced security through continuous monitoring"
  ];

  const capabilities = [
    {
      icon: Brain,
      title: "AI-Powered Analytics",
      description: "Machine learning algorithms analyze asset data to provide insights and optimization recommendations."
    },
    {
      icon: BarChart3,
      title: "Advanced Reporting",
      description: "Comprehensive dashboards and reports for asset performance, costs, and compliance."
    },
    {
      icon: Settings,
      title: "Automated Workflows",
      description: "Streamlined processes for asset procurement, deployment, maintenance, and retirement."
    },
    {
      icon: Eye,
      title: "Real-time Visibility",
      description: "Live monitoring and tracking of all assets with instant status updates and alerts."
    },
    {
      icon: Lock,
      title: "Security Management",
      description: "Integrated security monitoring, vulnerability assessment, and threat detection."
    },
    {
      icon: TrendingUp,
      title: "Performance Optimization",
      description: "Continuous optimization of asset performance and resource utilization."
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI-Powered IT Asset Management - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered IT asset management platform that provides complete visibility, predictive maintenance, and automated lifecycle management for all your technology assets." />
        <meta name="keywords" content="IT asset management, AI asset management, IT infrastructure management, asset tracking, predictive maintenance, IT compliance" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-powered-it-asset-management" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.1),transparent_50%)]"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-4">
                <Database className="w-8 h-8 text-white" />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AI-Powered IT Asset
              <span className="block bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Management
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Transform your IT asset management with AI-powered intelligence. Get complete visibility, 
              predictive maintenance, and automated lifecycle management for all your technology assets 
              across the enterprise.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border-2 border-purple-500/50 text-purple-400 hover:bg-purple-500/10 font-semibold rounded-xl transition-all duration-300">
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
                Our AI-powered IT asset management platform delivers unprecedented capabilities 
                that redefine how organizations manage their technology infrastructure.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="group">
                    <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 h-full hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-8 h-8 text-purple-400" />
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

        {/* Asset Types Section */}
        <section className="py-20 relative bg-gray-900/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Comprehensive Asset Coverage
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our platform manages every type of IT asset across your organization, 
                providing unified visibility and control.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {assetTypes.map((assetType, index) => {
                const Icon = assetType.icon;
                return (
                  <div key={index} className="group">
                    <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-600/50 rounded-2xl p-8 h-full hover:border-pink-500/50 transition-all duration-300 hover:transform hover:scale-105">
                      <div className="w-16 h-16 bg-gradient-to-r from-pink-500/20 to-rose-500/20 border border-pink-500/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-8 h-8 text-pink-400" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">{assetType.title}</h3>
                      <p className="text-gray-300 leading-relaxed">{assetType.description}</p>
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
                Our platform combines cutting-edge AI technology with comprehensive asset management 
                to deliver unprecedented operational excellence.
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
                Why Choose AI-Powered Asset Management?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the competitive advantage that intelligent asset management provides 
                for your organization's efficiency and cost control.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white mb-6">Key Benefits</h3>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-purple-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300 text-lg">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-2xl p-8">
                <div className="text-center">
                  <Star className="w-16 h-16 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-4">Industry Leader</h3>
                  <p className="text-gray-300 mb-6">
                    Join forward-thinking organizations already leveraging AI-powered asset management 
                    for competitive advantage and operational excellence.
                  </p>
                  <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-500 hover:to-pink-500 transition-all duration-300">
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
            <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-3xl p-12">
              <Lightbulb className="w-20 h-20 text-purple-400 mx-auto mb-6" />
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Transform Your Asset Management?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Start your journey toward intelligent IT asset management today 
                and discover the unlimited potential of AI-powered infrastructure optimization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
                  Get Started Now
                  <ArrowRight className="w-5 h-5 ml-2 inline" />
                </button>
                <button className="px-8 py-4 border-2 border-purple-500/50 text-purple-400 hover:bg-purple-500/10 font-semibold rounded-xl transition-all duration-300">
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

export default AIPoweredITAssetManagement;