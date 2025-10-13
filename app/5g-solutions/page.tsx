import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, ArrowRight, CheckCircle, Star, Users, Award, BarChart3, Cloud, Sparkles, Mail, Smartphone, Monitor, Target, Calendar } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticBackground from '../components/FuturisticBackground';
import ResponsiveContainer from '../components/ResponsiveContainer';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';

const FiveGSolutionsPage = () => {
  const fiveGServices = [
    {
      title: '5G Data Analytics',
      description: 'Advanced analytics platform leveraging 5G networks for real-time data processing and insights.',
      icon: <BarChart3 className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500',
      link: '/5g-data-analytics',
      features: ['Real-time Processing', 'Edge Analytics', 'Predictive Modeling', 'IoT Integration']
    },
    {
      title: '5G Edge Computing',
      description: 'Distributed computing infrastructure bringing processing power closer to data sources.',
      icon: <Cloud className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-500',
      link: '/5g-edge-computing',
      features: ['Low Latency', 'High Bandwidth', 'Distributed Processing', 'Real-time Applications']
    },
    {
      title: '5G IoT Solutions',
      description: 'Comprehensive IoT platform powered by 5G connectivity for smart devices and sensors.',
      icon: <Target className="w-8 h-8" />,
      color: 'from-purple-500 to-indigo-500',
      link: '/5g-iot-solutions',
      features: ['Device Management', 'Data Collection', 'Remote Monitoring', 'Automation']
    },
    {
      title: '5G Smart City Solutions',
      description: 'Complete smart city infrastructure leveraging 5G for urban innovation and efficiency.',
      icon: <Globe className="w-8 h-8" />,
      color: 'from-orange-500 to-red-500',
      link: '/5g-smart-city-solutions',
      features: ['Traffic Management', 'Energy Optimization', 'Public Safety', 'Environmental Monitoring']
    },
    {
      title: '5G Mobile Applications',
      description: 'Next-generation mobile applications designed to leverage 5G capabilities and performance.',
      icon: <Smartphone className="w-8 h-8" />,
      color: 'from-cyan-500 to-blue-500',
      link: '/5g-mobile-applications',
      features: ['High-Speed Connectivity', 'Low Latency', 'Enhanced UX', 'Real-time Features']
    },
    {
      title: '5G Network Infrastructure',
      description: 'Complete 5G network deployment and management solutions for businesses and organizations.',
      icon: <Cloud className="w-8 h-8" />,
      color: 'from-yellow-500 to-orange-500',
      link: '/5g-network-infrastructure',
      features: ['Network Design', 'Deployment', 'Management', 'Optimization']
    }
  ];

  const benefits = [
    '10x faster data speeds',
    'Ultra-low latency (1ms)',
    'Massive device connectivity',
    'Enhanced reliability',
    'Real-time applications',
    'Future-proof technology'
  ];

  const stats = [
    { number: '10x', label: 'Faster Speeds', icon: <Globe className="w-6 h-6" /> },
    { number: '1ms', label: 'Ultra-Low Latency', icon: <Award className="w-6 h-6" /> },
    { number: '1M+', label: 'Devices per km²', icon: <Users className="w-6 h-6" /> },
    { number: '99.9%', label: 'Reliability', icon: <Cloud className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <FuturisticBackground />
      <EnhancedSEO
        title="5G Solutions - Zion Tech Group | Next-Generation Connectivity Services"
        description="Advanced 5G solutions including edge computing, IoT, smart city implementations, and mobile applications. Transform your business with next-generation connectivity."
        keywords="5G solutions, edge computing, IoT, smart city, mobile applications, network infrastructure, connectivity"
        canonical="https://ziontechgroup.com/5g-solutions"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              5G Solutions
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Next-generation connectivity and infrastructure services for IoT, edge computing, and smart city implementations. 
            Experience the power of 5G technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<Sparkles className="w-5 h-5" />}
            >
              Get Started Today
            </FuturisticButton>
            <FuturisticButton
              href="/demo"
              variant="outline"
              size="lg"
              icon={<Monitor className="w-5 h-5" />}
            >
              Watch Demo
            </FuturisticButton>
          </div>
        </ResponsiveContainer>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
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
        </ResponsiveContainer>
      </section>

      {/* 5G Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our 5G Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Comprehensive 5G services designed to unlock the full potential of next-generation connectivity.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fiveGServices.map((service, index) => (
              <FuturisticCard key={index} className="p-6 group hover:scale-105 transition-all duration-300">
                <Link to={service.link} className="block">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </Link>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why Choose Our 5G Solutions?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Our 5G solutions are designed to deliver unprecedented performance and unlock new possibilities for your business.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">Get Started Today</h3>
              <p className="text-gray-300 mb-6">
                Ready to experience the power of 5G technology? Contact our experts for a personalized consultation.
              </p>
              <FuturisticButton
                href="/contact"
                variant="primary"
                size="lg"
                className="w-full"
              >
                Contact Us
              </FuturisticButton>
            </div>
          </div>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Embrace 5G Technology?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join the 5G revolution and transform your business with next-generation connectivity solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Contact Us Today
            </FuturisticButton>
            <FuturisticButton
              href="/demo"
              variant="outline"
              size="lg"
              icon={<Monitor className="w-5 h-5" />}
            >
              Schedule Demo
            </FuturisticButton>
          </div>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default FiveGSolutionsPage;