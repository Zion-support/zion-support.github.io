import React from 'react';
import { Link } from 'react-router-dom';
import { Server, Shield, Zap, BarChart3, Star, CheckCircle, AlertTriangle, Clock, Users, ArrowRight, Sparkles, Brain, Activity, Cpu, HardDrive } from 'lucide-react';
import SEOOptimizer from '../components/SEOOptimizer';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';
import ResponsiveGrid from '../components/ResponsiveGrid';

const AiInfrastructureMonitoringPage = () => {
  const features = [
    {
      title: "AI-Powered Monitoring",
      description: "Advanced machine learning algorithms predict infrastructure issues before they impact your business",
      icon: <Brain className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Real-time Analytics",
      description: "Monitor server performance, network health, and application metrics with real-time dashboards",
      icon: <Activity className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Predictive Maintenance",
      description: "AI-driven insights help prevent downtime by identifying potential issues before they occur",
      icon: <AlertTriangle className="w-8 h-8" />,
      color: "from-red-500 to-pink-500"
    },
    {
      title: "Automated Remediation",
      description: "Automatically resolve common infrastructure issues without human intervention",
      icon: <Zap className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    }
  ];

  const services = [
    {
      title: "Server Monitoring",
      description: "Comprehensive monitoring of CPU, memory, disk usage, and network performance",
      icon: <Server className="w-6 h-6" />,
      price: "From $99/month"
    },
    {
      title: "Network Infrastructure",
      description: "Monitor network devices, bandwidth utilization, and connectivity issues",
      icon: <Activity className="w-6 h-6" />,
      price: "From $149/month"
    },
    {
      title: "Cloud Infrastructure",
      description: "Monitor AWS, Azure, and Google Cloud resources with intelligent alerting",
      icon: <Cpu className="w-6 h-6" />,
      price: "From $199/month"
    },
    {
      title: "Database Monitoring",
      description: "Track database performance, query optimization, and storage utilization",
      icon: <HardDrive className="w-6 h-6" />,
      price: "From $129/month"
    }
  ];

  const stats = [
    { number: "99.9%", label: "Uptime Guarantee", icon: <CheckCircle className="w-6 h-6" /> },
    { number: "50%", label: "Faster Issue Resolution", icon: <Clock className="w-6 h-6" /> },
    { number: "1,000+", label: "Infrastructure Assets Monitored", icon: <Server className="w-6 h-6" /> },
    { number: "24/7", label: "Expert Support", icon: <Users className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOOptimizer
        title="AI Infrastructure Monitoring - Intelligent IT Infrastructure Management | Zion Tech Group"
        description="Advanced AI-powered infrastructure monitoring solutions that predict issues, optimize performance, and ensure maximum uptime for your IT systems."
        keywords="infrastructure monitoring, IT monitoring, server monitoring, network monitoring, AI monitoring, predictive maintenance, IT infrastructure management"
        canonical="https://ziontechgroup.com/ai-infrastructure-monitoring"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer className="text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-blue-400 mr-2" />
            <span className="text-blue-400 text-sm font-medium">AI-Powered Infrastructure Monitoring</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400">
              AI Infrastructure Monitoring
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Proactively monitor and manage your IT infrastructure with AI-powered insights that predict issues, 
            optimize performance, and ensure maximum uptime for your critical systems.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <FuturisticButton
              href="#contact"
              variant="primary"
              size="lg"
              icon={<Server className="w-5 h-5" />}
            >
              Get Started
            </FuturisticButton>
            <FuturisticButton
              href="#demo"
              variant="outline"
              size="lg"
              icon={<BarChart3 className="w-5 h-5" />}
            >
              Schedule Demo
            </FuturisticButton>
          </div>
          
          {/* Stats */}
          <ResponsiveGrid cols={{ default: 2, md: 4 }} className="max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </ResponsiveGrid>
        </ResponsiveContainer>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Intelligent Monitoring Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Our AI-powered platform provides comprehensive infrastructure monitoring with predictive analytics 
              and automated remediation to keep your systems running smoothly.
            </p>
          </div>
          
          <ResponsiveGrid cols={{ default: 1, md: 2, lg: 4 }}>
            {features.map((feature, index) => (
              <FuturisticCard
                key={index}
                className="group cursor-pointer"
                glowColor="blue"
              >
                <div className="p-6">
                  <div
                    className={`w-16 h-16 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 text-center group-hover:text-blue-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-center leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </FuturisticCard>
            ))}
          </ResponsiveGrid>
        </ResponsiveContainer>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Monitoring Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from our range of specialized monitoring services designed to meet your specific infrastructure needs.
            </p>
          </div>
          
          <ResponsiveGrid cols={{ default: 1, md: 2, lg: 4 }} className="max-w-6xl mx-auto">
            {services.map((service, index) => (
              <FuturisticCard
                key={index}
                className="group cursor-pointer"
                glowColor="blue"
              >
                <div className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500/20 to-cyan-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="text-blue-400 font-semibold text-sm">
                    {service.price}
                  </div>
                </div>
              </FuturisticCard>
            ))}
          </ResponsiveGrid>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Optimize Your Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact our experts to discuss your infrastructure monitoring needs and get a customized solution 
              that ensures maximum uptime and performance for your critical systems.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <FuturisticButton
                href="/contact"
                variant="primary"
                size="lg"
                icon={<ArrowRight className="w-5 h-5" />}
              >
                Get Free Consultation
              </FuturisticButton>
              <FuturisticButton
                href="tel:+13024640950"
                variant="outline"
                size="lg"
                icon={<Server className="w-5 h-5" />}
              >
                Call Now
              </FuturisticButton>
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-gray-400 mb-4">Get in touch with our infrastructure experts</p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6">
                <a href="tel:+13024640950" className="text-blue-400 hover:text-blue-300 transition-colors">
                  +1 302 464 0950
                </a>
                <a href="mailto:kleber@ziontechgroup.com" className="text-blue-400 hover:text-blue-300 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <p className="text-gray-400 text-sm mt-2">
                364 E Main St STE 1008, Middletown DE 19709
              </p>
            </div>
          </div>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default AiInfrastructureMonitoringPage;