import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Bot, Zap, Shield, Globe, Phone, CheckCircle, ArrowRight, Star, TrendingUp, Brain, Settings, Users, Award, Clock, Cpu, Target, Database } from 'lucide-react';

const AutonomousSystemsPage: React.FC = () => {
  const systems = [
    {
      title: 'Autonomous Vehicles',
      description: 'Self-driving vehicles with advanced AI navigation and safety systems',
      icon: Bot,
      features: ['AI Navigation', 'Object Detection', 'Path Planning', 'Safety Systems'],
      benefits: ['Reduced accidents', 'Lower costs', '24/7 operation', 'Efficient routing']
    },
    {
      title: 'Smart Infrastructure',
      description: 'Self-managing infrastructure systems that adapt and optimize automatically',
      icon: Settings,
      features: ['Predictive Maintenance', 'Energy Optimization', 'Traffic Management', 'Resource Allocation'],
      benefits: ['Reduced downtime', 'Energy savings', 'Improved efficiency', 'Cost reduction']
    },
    {
      title: 'Autonomous Drones',
      description: 'Intelligent drones for surveillance, delivery, and inspection tasks',
      icon: Globe,
      features: ['Autonomous Flight', 'Mission Planning', 'Obstacle Avoidance', 'Data Collection'],
      benefits: ['Remote operations', 'Cost effective', 'High precision', 'Scalable deployment']
    },
    {
      title: 'Self-Healing Networks',
      description: 'Network systems that automatically detect and fix issues without human intervention',
      icon: Shield,
      features: ['Fault Detection', 'Automatic Recovery', 'Load Balancing', 'Security Monitoring'],
      benefits: ['99.9% uptime', 'Reduced maintenance', 'Faster response', 'Lower costs']
    }
  ];

  const industries = [
    {
      name: 'Manufacturing',
      icon: Settings,
      applications: ['Robotic assembly', 'Quality control', 'Predictive maintenance', 'Supply chain optimization'],
      benefits: ['Increased productivity', 'Reduced errors', 'Lower costs', '24/7 operation']
    },
    {
      name: 'Healthcare',
      icon: Users,
      applications: ['Surgical robots', 'Patient monitoring', 'Drug delivery', 'Diagnostic systems'],
      benefits: ['Improved accuracy', 'Reduced human error', 'Better outcomes', 'Cost efficiency']
    },
    {
      name: 'Transportation',
      icon: Globe,
      applications: ['Autonomous vehicles', 'Traffic management', 'Fleet optimization', 'Route planning'],
      benefits: ['Safer roads', 'Reduced congestion', 'Lower emissions', 'Cost savings']
    },
    {
      name: 'Agriculture',
      icon: Target,
      applications: ['Precision farming', 'Crop monitoring', 'Automated harvesting', 'Pest control'],
      benefits: ['Higher yields', 'Resource optimization', 'Reduced waste', 'Sustainable farming']
    }
  ];

  const technologies = [
    {
      name: 'Machine Learning',
      description: 'AI algorithms that learn and adapt from data',
      applications: ['Pattern recognition', 'Predictive analytics', 'Decision making', 'Optimization']
    },
    {
      name: 'Computer Vision',
      description: 'Visual perception and understanding systems',
      applications: ['Object detection', 'Image recognition', 'Navigation', 'Quality control']
    },
    {
      name: 'Sensor Fusion',
      description: 'Integration of multiple sensor data sources',
      applications: ['Environmental awareness', 'Position tracking', 'Safety monitoring', 'Data accuracy']
    },
    {
      name: 'Edge Computing',
      description: 'Local processing for real-time decision making',
      applications: ['Low latency', 'Offline operation', 'Data privacy', 'Scalability']
    }
  ];

  return (
    <>
      <Helmet>
        <title>Autonomous Systems - Zion Tech Group | Self-Managing Technology</title>
        <meta name="description" content="Develop intelligent autonomous systems that operate independently. From self-driving vehicles to smart infrastructure, we create self-managing solutions." />
        <meta name="keywords" content="autonomous systems, self-driving vehicles, smart infrastructure, autonomous drones, self-healing networks, AI automation" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="pt-24">
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-16">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text neon-pulse">
                Autonomous Systems
              </h1>
              <p className="text-xl text-cyan-400 mb-8 max-w-4xl mx-auto">
                Create intelligent systems that operate independently and adapt to changing conditions. 
                From self-driving vehicles to smart infrastructure, we build the future of automation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="cyber-button inline-flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call (302) 464-0950
                </a>
                <a
                  href="/contact"
                  className="cyber-button inline-flex items-center justify-center"
                  style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
                >
                  Get Free Consultation
                </a>
              </div>
            </div>
          </section>

          {/* Systems */}
          <section className="container mx-auto px-4 py-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Our Autonomous Systems</h2>
              <p className="text-xl text-gray-300">Intelligent systems that work independently</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {systems.map((system, index) => (
                <div key={index} className="cyber-card p-8">
                  <div className="flex items-center mb-6">
                    <system.icon className="w-12 h-12 text-cyan-400 mr-4" />
                    <h3 className="text-2xl font-bold text-white">{system.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-6 text-lg">{system.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-cyan-400 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {system.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-3" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-cyan-400 mb-3">Benefits:</h4>
                    <ul className="space-y-2">
                      {system.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-gray-300">
                          <TrendingUp className="w-4 h-4 text-green-400 mr-3" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Industries */}
          <section className="container mx-auto px-4 py-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Industry Applications</h2>
              <p className="text-xl text-gray-300">Autonomous systems across various industries</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {industries.map((industry, index) => (
                <div key={index} className="cyber-card p-6 text-center">
                  <industry.icon className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-4">{industry.name}</h3>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Applications:</h4>
                    <ul className="space-y-1">
                      {industry.applications.map((application, appIndex) => (
                        <li key={appIndex} className="text-xs text-gray-300">
                          • {application}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Benefits:</h4>
                    <ul className="space-y-1">
                      {industry.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="text-xs text-gray-300">
                          • {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Technologies */}
          <section className="container mx-auto px-4 py-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Core Technologies</h2>
              <p className="text-xl text-gray-300">Advanced technologies powering autonomous systems</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {technologies.map((tech, index) => (
                <div key={index} className="cyber-card p-6 text-center">
                  <h3 className="text-xl font-bold text-white mb-2">{tech.name}</h3>
                  <p className="text-gray-300 mb-4 text-sm">{tech.description}</p>
                  <ul className="space-y-1">
                    {tech.applications.map((application, appIndex) => (
                      <li key={appIndex} className="text-xs text-gray-400">
                        • {application}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="container mx-auto px-4 py-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Autonomous Solutions?</h2>
              <p className="text-xl text-gray-300">Expertise and innovation that delivers results</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center cyber-card p-6">
                <Brain className="w-16 h-16 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">AI Expertise</h3>
                <p className="text-gray-300">Advanced AI and machine learning capabilities</p>
              </div>
              <div className="text-center cyber-card p-6">
                <Shield className="w-16 h-16 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Safety First</h3>
                <p className="text-gray-300">Built-in safety mechanisms and fail-safes</p>
              </div>
              <div className="text-center cyber-card p-6">
                <Zap className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Performance</h3>
                <p className="text-gray-300">High-performance systems with real-time processing</p>
              </div>
              <div className="text-center cyber-card p-6">
                <Award className="w-16 h-16 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Proven Results</h3>
                <p className="text-gray-300">Successful deployments across industries</p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="container mx-auto px-4 py-16">
            <div className="cyber-card text-center p-12">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Build Autonomous Systems?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Transform your operations with intelligent autonomous systems that work independently 
                and adapt to changing conditions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="cyber-button inline-flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Get Free Consultation
                </a>
                <a
                  href="tel:+13024640950"
                  className="cyber-button inline-flex items-center justify-center"
                  style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call (302) 464-0950
                </a>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default AutonomousSystemsPage;