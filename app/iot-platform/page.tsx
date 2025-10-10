import React from 'react';
import { Wifi, Cpu, Database, Shield, CheckCircle, ArrowRight, Phone, Mail, MapPin, Calendar, MessageSquare, Network, Zap, Target, Award, Star, Brain, TrendingUp, Smartphone, Globe } from 'lucide-react';

export default function IoTPlatformPage() {
  const services = [
    {
      icon: Wifi,
      title: 'IoT Device Management',
      description: 'Comprehensive platform for managing and monitoring IoT devices at scale.',
      features: ['Device Provisioning', 'Remote Management', 'Firmware Updates', 'Health Monitoring']
    },
    {
      icon: Cpu,
      title: 'Data Processing',
      description: 'Real-time data processing and analytics for IoT sensor data.',
      features: ['Stream Processing', 'Data Analytics', 'Machine Learning', 'Predictive Maintenance']
    },
    {
      icon: Database,
      title: 'Data Storage',
      description: 'Scalable data storage solutions for massive IoT data volumes.',
      features: ['Time Series DB', 'Data Lake', 'Data Warehousing', 'Data Archiving']
    },
    {
      icon: Shield,
      title: 'IoT Security',
      description: 'End-to-end security solutions for IoT devices and data.',
      features: ['Device Authentication', 'Data Encryption', 'Network Security', 'Threat Detection']
    }
  ];

  const industries = [
    {
      title: 'Smart Manufacturing',
      description: 'Industrial IoT solutions for smart factories and production lines.',
      icon: '🏭'
    },
    {
      title: 'Smart Cities',
      description: 'Urban IoT infrastructure for traffic, utilities, and public services.',
      icon: '🏙️'
    },
    {
      title: 'Agriculture',
      description: 'Precision agriculture with IoT sensors and automated systems.',
      icon: '🌾'
    },
    {
      title: 'Healthcare',
      description: 'Medical IoT devices for patient monitoring and care.',
      icon: '🏥'
    },
    {
      title: 'Energy',
      description: 'Smart grid and energy management IoT solutions.',
      icon: '⚡'
    },
    {
      title: 'Transportation',
      description: 'Fleet management and smart transportation systems.',
      icon: '🚛'
    }
  ];

  const benefits = [
    {
      metric: '10M+',
      label: 'Devices',
      description: 'Support for massive device connectivity'
    },
    {
      metric: '99.9%',
      label: 'Uptime',
      description: 'High availability IoT platform'
    },
    {
      metric: '50%',
      label: 'Cost Reduction',
      description: 'Reduced operational costs through automation'
    },
    {
      metric: 'Real-time',
      label: 'Processing',
      description: 'Real-time data processing and analytics'
    }
  ];

  const technologies = [
    { name: 'MQTT', description: 'Lightweight messaging protocol for IoT', icon: '📡' },
    { name: 'CoAP', description: 'Constrained Application Protocol', icon: '🔗' },
    { name: 'LoRaWAN', description: 'Long Range Wide Area Network', icon: '📶' },
    { name: 'Edge Computing', description: 'Distributed processing at the edge', icon: '⚡' },
    { name: 'Time Series DB', description: 'Optimized database for IoT data', icon: '📊' },
    { name: 'Machine Learning', description: 'AI-powered IoT analytics', icon: '🧠' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 cyber-text neon-pulse">
              IoT Platform Solutions
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
              Comprehensive IoT platform for connecting, managing, and analyzing 
              millions of devices with real-time data processing and intelligent insights.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2 bg-cyan-500/20 px-4 py-2 rounded-lg">
                <Wifi className="w-5 h-5 text-cyan-400" />
                <span className="text-white font-medium">Massive Scale</span>
              </div>
              <div className="flex items-center space-x-2 bg-purple-500/20 px-4 py-2 rounded-lg">
                <Zap className="w-5 h-5 text-purple-400" />
                <span className="text-white font-medium">Real-time</span>
              </div>
              <div className="flex items-center space-x-2 bg-green-500/20 px-4 py-2 rounded-lg">
                <Shield className="w-5 h-5 text-green-400" />
                <span className="text-white font-medium">Secure</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              IoT Platform Services
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              End-to-end IoT platform solutions for device management and data processing
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-6 text-center group hover:bg-slate-700/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2 text-sm text-cyan-400">
                      <CheckCircle className="w-4 h-4" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Industry Applications
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              IoT solutions across various industries and use cases
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-slate-900/50 rounded-lg p-6 hover:bg-slate-800/50 transition-all duration-300">
                <div className="text-4xl mb-4">{industry.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{industry.title}</h3>
                <p className="text-gray-300">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              IoT Technologies
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Advanced technologies powering our IoT platform
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-6 text-center hover:bg-slate-700/50 transition-all duration-300">
                <div className="text-4xl mb-4">{tech.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{tech.name}</h3>
                <p className="text-gray-300 text-sm">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              IoT Platform Benefits
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Key advantages of our IoT platform solutions
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-cyan-400 mb-2">
                  {benefit.metric}
                </div>
                <div className="text-xl font-bold text-white mb-2">
                  {benefit.label}
                </div>
                <div className="text-gray-300 text-sm">
                  {benefit.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-purple-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Build Your IoT Platform?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Let our IoT experts help you build a scalable, secure platform for your connected devices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center"
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              Get Started Today
            </a>
            <a
              href="/consultation"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-cyan-600 transition-colors inline-flex items-center"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Free Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}