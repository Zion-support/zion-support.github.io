'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import SEOHead from '../components/SEOHead';
import FuturisticBackground from '../components/FuturisticBackground';
import NeonButton from '../components/NeonButton';
import AnimatedCard from '../components/AnimatedCard';
import { 
  Wifi, 
  Shield, 
  CheckCircle, 
  ArrowRight, 
  Clock, 
  Network, 
  Cpu, 
  Smartphone, 
  BarChart3, 
  Star,
  Globe,
  Zap
} from 'lucide-react';

const FiveGSolutionsPage: React.FC = () => {
  const solutions = [
    {
      name: "5G Implementation",
      description: "Complete 5G network deployment with zero-downtime migration and comprehensive testing.",
      features: ["Network planning & design", "Equipment installation", "Performance testing", "Compliance certification", "24/7 monitoring", "Maintenance support"],
      price: "From $5,999",
      marketPrice: "$12,999-49,999",
      popular: true,
      icon: Wifi,
      benefits: "Deploy 5G networks 60% faster than industry average"
    },
    {
      name: "5G Network Infrastructure",
      description: "Robust 5G infrastructure with advanced tower installation and fiber optic connectivity.",
      features: ["Tower installation", "Fiber optic setup", "Antenna configuration", "Power systems", "Backup systems", "Security implementation"],
      price: "From $9,999",
      marketPrice: "$19,999-79,999",
      popular: false,
      icon: Network,
      benefits: "99.9% uptime guarantee with enterprise-grade infrastructure"
    },
    {
      name: "5G Edge Computing",
      description: "Ultra-low latency edge computing solutions for real-time applications and IoT devices.",
      features: ["Edge server deployment", "Latency optimization", "IoT integration", "Real-time processing", "Data analytics", "Cloud connectivity"],
      price: "From $7,999",
      marketPrice: "$15,999-59,999",
      popular: false,
      icon: Cpu,
      benefits: "Reduce latency by 80% with edge computing architecture"
    },
    {
      name: "5G Mobile Applications",
      description: "High-performance mobile apps optimized for 5G networks with advanced features.",
      features: ["5G-optimized apps", "Real-time streaming", "AR/VR integration", "IoT connectivity", "Cloud sync", "Offline capabilities"],
      price: "From $4,999",
      marketPrice: "$9,999-39,999",
      popular: true,
      icon: Smartphone,
      benefits: "10x faster app performance with 5G optimization"
    },
    {
      name: "5G Data Analytics",
      description: "Advanced analytics platform for 5G network performance monitoring and optimization.",
      features: ["Real-time monitoring", "Performance analytics", "Predictive maintenance", "Network optimization", "Custom dashboards", "API integration"],
      price: "From $3,999",
      marketPrice: "$7,999-29,999",
      popular: false,
      icon: BarChart3,
      benefits: "Optimize network performance with AI-powered analytics"
    },
    {
      name: "5G Private Networks",
      description: "Dedicated 5G private networks for enterprise with enhanced security and control.",
      features: ["Private network setup", "Enhanced security", "Custom configuration", "Dedicated resources", "SLA guarantees", "24/7 support"],
      price: "From $12,999",
      marketPrice: "$24,999-99,999",
      popular: false,
      icon: Shield,
      benefits: "Enterprise-grade security with dedicated 5G infrastructure"
    },
    {
      name: "5G Smart City Solutions",
      description: "Comprehensive smart city infrastructure powered by 5G technology.",
      features: ["Smart traffic management", "Environmental monitoring", "Public safety systems", "Energy management", "Citizen services", "Data integration"],
      price: "From $49,999",
      marketPrice: "$99,999-499,999",
      popular: false,
      icon: Globe,
      benefits: "Transform cities with intelligent 5G-powered infrastructure"
    }
  ];

  const stats = [
    { number: '99.9%', label: 'Network Uptime' },
    { number: '< 1ms', label: 'Latency' },
    { number: '10Gbps', label: 'Peak Speed' },
    { number: '1M+', label: 'Devices Supported' }
  ];

  return (
    <>
      <SEOHead 
        title="5G Solutions - Zion Tech Group"
        description="Transform your business with our comprehensive 5G solutions. From network implementation to edge computing, we deliver cutting-edge 5G technology."
        keywords="5G solutions, 5G implementation, 5G network infrastructure, edge computing, 5G mobile apps, smart city solutions"
      />
      
      <div className="min-h-screen bg-slate-900 text-white relative overflow-hidden">
        <FuturisticBackground />
        
        {/* Hero Section */}
        <section className="relative z-10 py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center space-x-2 bg-green-500/10 text-green-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Wifi className="w-4 h-4" />
                <span>5G Technology Solutions</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 lg:mb-8">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">
                  5G Solutions
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-8 lg:mb-12 max-w-4xl mx-auto leading-relaxed">
                Transform your business with our comprehensive 5G solutions. From network implementation to edge computing, 
                we deliver cutting-edge 5G technology that drives innovation and growth.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <NeonButton href="/contact" size="lg">
                  Get Started Today
                </NeonButton>
                <NeonButton href="/demo" variant="secondary" size="lg">
                  View 5G Demo
                </NeonButton>
              </div>
              
              {/* 5G Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-green-400 mb-2">{stat.number}</div>
                    <div className="text-gray-300 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="relative z-10 py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">5G Solutions</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our comprehensive collection of 5G solutions, each designed to leverage the power of next-generation wireless technology.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <AnimatedCard key={index} glowColor="green">
                  <div className="space-y-6">
                    {/* Solution Header */}
                    <div className="flex items-start justify-between">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-cyan-600 rounded-lg flex items-center justify-center">
                        <solution.icon className="w-6 h-6 text-white" />
                      </div>
                      {solution.popular && (
                        <span className="bg-gradient-to-r from-green-500 to-cyan-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                          Popular
                        </span>
                      )}
                    </div>
                    
                    {/* Solution Info */}
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-green-300 transition-colors">
                        {solution.name}
                      </h3>
                      <p className="text-gray-400 leading-relaxed mb-4">
                        {solution.description}
                      </p>
                      <div className="text-sm text-green-400 font-medium mb-4">
                        {solution.benefits}
                      </div>
                    </div>
                    
                    {/* Pricing */}
                    <div className="border-t border-slate-700 pt-4">
                      <div className="flex items-baseline justify-between">
                        <div>
                          <div className="text-2xl font-bold text-white">{solution.price}</div>
                          <div className="text-sm text-gray-400">Market: {solution.marketPrice}</div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-green-400 font-medium">Save up to 60%</div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Features */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-gray-300">Key Features:</h4>
                      {solution.features.slice(0, 4).map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span className="text-sm text-gray-300">{feature}</span>
                        </div>
                      ))}
                      <div className="text-sm text-green-400 font-medium">
                        +{solution.features.length - 4} more features
                      </div>
                    </div>
                    
                    {/* CTA */}
                    <div className="pt-4">
                      <NeonButton href="/contact" size="md" className="w-full">
                        Get Quote
                      </NeonButton>
                    </div>
                  </div>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose 5G Section */}
        <section className="relative z-10 py-16 lg:py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">5G Technology</span>?
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
                5G technology offers unprecedented speed, reliability, and connectivity for modern businesses.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatedCard glowColor="green">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Ultra-Fast Speed</h3>
                  <p className="text-gray-400">
                    10x faster than 4G with speeds up to 10 Gbps for lightning-fast data transfer and real-time applications.
                  </p>
                </div>
              </AnimatedCard>
              
              <AnimatedCard glowColor="cyan">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto">
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Ultra-Low Latency</h3>
                  <p className="text-gray-400">
                    Sub-millisecond latency for real-time applications, IoT devices, and mission-critical operations.
                  </p>
                </div>
              </AnimatedCard>
              
              <AnimatedCard glowColor="purple">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Massive Connectivity</h3>
                  <p className="text-gray-400">
                    Support for over 1 million devices per square kilometer, perfect for smart cities and IoT deployments.
                  </p>
                </div>
              </AnimatedCard>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative z-10 py-16 lg:py-20">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              Ready to Embrace 5G Technology?
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-8 lg:mb-12">
              Transform your business with our cutting-edge 5G solutions. Get started today and experience the future of wireless technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <NeonButton href="/contact" size="lg">
                Start 5G Journey
              </NeonButton>
              <NeonButton href="/demo" variant="secondary" size="lg">
                5G Consultation
              </NeonButton>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default FiveGSolutionsPage;