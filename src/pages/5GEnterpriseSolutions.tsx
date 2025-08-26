import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Network, 
  Zap, 
  Shield, 
  Cpu, 
  Database, 
  Globe, 
  Rocket, 
  Target,
  BarChart3,
  Users,
  Clock,
  CheckCircle,
  ArrowRight,
  Star,
  Building,
  Cloud,
  Server,
  Workflow,
  BarChart,
  Settings,
  Wifi,
  Signal,
  Smartphone,
  Monitor,
  Phone,
  Mail,
  MapPin,
  TrendingUp,
  Eye,
  Heart,
  DollarSign,
  ShoppingCart,
  Palette,
  Users2,
  Briefcase
} from 'lucide-react';

export default function FiveGEnterpriseSolutions() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700">
      <Helmet>
        <title>5G Enterprise Solutions - Zion Tech Group</title>
        <meta name="description" content="Transform your enterprise with cutting-edge 5G solutions. High-speed connectivity, low latency, and massive IoT support for modern businesses." />
        <meta name="keywords" content="5G, enterprise, networking, IoT, low latency, high bandwidth, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/services/5g-enterprise-solutions" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 border border-blue-400 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 border border-blue-300 rounded-full animate-pulse delay-1000"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight">
            5G Enterprise
            <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Solutions
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed">
            Transform your enterprise with next-generation 5G technology. Experience ultra-fast connectivity, 
            ultra-low latency, and massive IoT support for the modern digital business.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <button className="group px-10 py-5 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-blue-500/25 flex items-center gap-3">
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-10 py-5 border-2 border-blue-400 text-blue-400 rounded-xl font-semibold text-lg hover:bg-blue-400 hover:text-white transition-all duration-300 flex items-center gap-3">
              Watch Demo
              <Zap className="w-5 h-5" />
            </button>
          </div>

          {/* 5G Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">10Gbps</div>
              <div className="text-blue-100">Peak Speed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">1ms</div>
              <div className="text-blue-100">Latency</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">1M+</div>
              <div className="text-blue-100">IoT Devices/km²</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">99.999%</div>
              <div className="text-blue-100">Reliability</div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-zinc-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Why Choose 5G for Your Enterprise?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Ultra-Fast Speeds</h3>
              <p className="text-zinc-300">Experience speeds up to 10Gbps for lightning-fast data transfer and real-time applications.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Ultra-Low Latency</h3>
              <p className="text-zinc-300">1ms latency enables real-time applications like autonomous vehicles and remote surgery.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Network className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Massive IoT Support</h3>
              <p className="text-zinc-300">Connect millions of IoT devices per square kilometer for comprehensive monitoring.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Transform Your Enterprise with 5G?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join the 5G revolution and unlock unprecedented opportunities for your business. 
            Our experts are ready to guide you through the implementation process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              Schedule Consultation
            </button>
            <button className="px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300">
              Download Whitepaper
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}