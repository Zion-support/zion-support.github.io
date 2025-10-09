'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Building, Zap, Shield, CheckCircle, ArrowRight, Star, Globe, Smartphone, Code, Database, Cloud, Lock, Users, Target, TrendingUp, Brain, Settings, BarChart } from 'lucide-react';

const SmartCitiesPage: React.FC = () => {
  const features = [
    {
      icon: Building,
      title: 'Smart Infrastructure',
      description: 'Intelligent city infrastructure with IoT sensors, smart grids, and automated systems for optimal resource management.'
    },
    {
      icon: Zap,
      title: 'Energy Management',
      description: 'Smart energy grids, renewable energy integration, and intelligent power distribution systems.'
    },
    {
      icon: Shield,
      title: 'Public Safety',
      description: 'AI-powered surveillance, emergency response systems, and predictive crime prevention technologies.'
    },
    {
      icon: Globe,
      title: 'Traffic Optimization',
      description: 'Smart traffic management, autonomous vehicle integration, and intelligent transportation systems.'
    },
    {
      icon: Users,
      title: 'Citizen Services',
      description: 'Digital government services, mobile apps, and online platforms for citizen engagement.'
    },
    {
      icon: Brain,
      title: 'Data Analytics',
      description: 'City-wide data collection, analysis, and insights for informed decision-making and policy development.'
    }
  ];

  const solutions = [
    {
      title: 'Smart Transportation',
      description: 'Intelligent traffic management, public transit optimization, and autonomous vehicle infrastructure.',
      icon: Globe
    },
    {
      title: 'Environmental Monitoring',
      description: 'Air quality sensors, water management, waste optimization, and sustainability tracking.',
      icon: Shield
    },
    {
      title: 'Digital Governance',
      description: 'E-government services, digital citizen portals, and automated administrative processes.',
      icon: Users
    },
    {
      title: 'Smart Buildings',
      description: 'Energy-efficient buildings, automated systems, and intelligent facility management.',
      icon: Building
    },
    {
      title: 'Public Safety',
      description: 'Emergency response systems, surveillance networks, and predictive policing technologies.',
      icon: Target
    },
    {
      title: 'Urban Planning',
      description: 'Data-driven city planning, growth modeling, and infrastructure development optimization.',
      icon: BarChart
    }
  ];

  const benefits = [
    'Reduce energy consumption by up to 30%',
    'Improve traffic flow and reduce congestion',
    'Enhance public safety and emergency response',
    'Increase citizen satisfaction and engagement',
    'Optimize resource utilization and costs',
    'Create sustainable and livable urban environments'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/20 border border-green-500/30 text-green-300 text-sm font-medium mb-6">
              <Building className="w-4 h-4 mr-2" />
              Smart Cities Solutions
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Intelligent Smart
              <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent"> Cities</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform urban environments with smart city technologies that improve quality of life, sustainability, and operational efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="cyber-button inline-flex items-center px-8 py-4 text-lg">
                Start Planning
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="px-8 py-4 border border-cyan-500 text-cyan-400 rounded-lg hover:bg-cyan-500/10 transition-colors">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Smart City Technologies
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our smart city solutions integrate IoT, AI, and data analytics to create intelligent urban environments.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-green-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Smart City Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From transportation to governance, our smart city solutions address every aspect of urban life.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-4">
                  <solution.icon className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{solution.title}</h3>
                <p className="text-gray-300">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Measurable Urban Impact
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Our smart city solutions deliver quantifiable results that improve urban living and operational efficiency.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-300 text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-500/20 to-cyan-500/20 rounded-2xl p-8 border border-green-500/30">
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">30%</div>
                <div className="text-gray-300 mb-6">Energy Reduction</div>
                <div className="text-4xl font-bold text-white mb-2">50%</div>
                <div className="text-gray-300 mb-6">Traffic Improvement</div>
                <div className="text-4xl font-bold text-white mb-2">90%</div>
                <div className="text-gray-300">Citizen Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Build a Smart City?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join leading cities worldwide already using smart technologies to improve urban living and sustainability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="cyber-button inline-flex items-center px-8 py-4 text-lg">
              Start Planning
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="px-8 py-4 border border-cyan-500 text-cyan-400 rounded-lg hover:bg-cyan-500/10 transition-colors">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SmartCitiesPage;