import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Target, 
  Award, 
  Globe, 
  Rocket, 
  Brain, 
  Shield, 
  Cpu,
  TrendingUp,
  CheckCircle,
  Star,
  Zap
} from 'lucide-react';

export default function About() {
  const stats = [
    { label: 'Years of Experience', value: '10+', icon: Award },
    { label: 'Projects Completed', value: '500+', icon: CheckCircle },
    { label: 'Happy Clients', value: '200+', icon: Star },
    { label: 'Team Members', value: '50+', icon: Users }
  ];

  const values = [
    {
      icon: Brain,
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible with cutting-edge AI and emerging technologies.'
    },
    {
      icon: Shield,
      title: 'Trust & Security',
      description: 'Your data and business operations are protected with enterprise-grade security measures.'
    },
    {
      icon: Users,
      title: 'Client Success',
      description: 'We measure our success by the success of our clients and their digital transformation journey.'
    },
    {
      icon: Rocket,
      title: 'Future-Ready',
      description: 'We build solutions that not only solve today\'s problems but prepare you for tomorrow\'s challenges.'
    }
  ];

  const timeline = [
    {
      year: '2015',
      title: 'Company Founded',
      description: 'Zion Tech Group was established with a vision to democratize AI and emerging technologies.'
    },
    {
      year: '2017',
      title: 'AI Solutions Launch',
      description: 'Launched our first AI-powered business solutions and autonomous systems platform.'
    },
    {
      year: '2019',
      title: 'Quantum Technology',
      description: 'Expanded into quantum computing and quantum-secure solutions for enterprise clients.'
    },
    {
      year: '2021',
      title: 'Global Expansion',
      description: 'Opened offices in multiple countries and served clients across 25+ nations.'
    },
    {
      year: '2023',
      title: 'AI Consciousness Platform',
      description: 'Pioneered the development of AI consciousness evolution and simulation platforms.'
    },
    {
      year: '2025',
      title: 'Future Vision',
      description: 'Leading the charge in autonomous business operations and next-generation AI systems.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
              About Zion Tech Group
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              We are a forward-thinking technology company dedicated to transforming businesses through 
              cutting-edge AI, quantum computing, and autonomous systems solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <stat.icon className="w-12 h-12 text-cyan-400" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-cyan-400">
                Our Mission
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                To democratize access to advanced AI and emerging technologies, enabling businesses 
                of all sizes to leverage the power of autonomous systems, quantum computing, and 
                intelligent automation for unprecedented growth and innovation.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Democratize AI technology</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Enable autonomous business operations</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Drive digital transformation</span>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-purple-400">
                Our Vision
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                To be the global leader in autonomous business technology, pioneering the future 
                of work where AI and humans collaborate seamlessly to create unprecedented value 
                and solve humanity's greatest challenges.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <TrendingUp className="w-5 h-5 text-purple-400" />
                  <span className="text-gray-300">Global AI leadership</span>
                </div>
                <div className="flex items-center space-x-3">
                  <TrendingUp className="w-5 h-5 text-purple-400" />
                  <span className="text-gray-300">Human-AI collaboration</span>
                </div>
                <div className="flex items-center space-x-3">
                  <TrendingUp className="w-5 h-5 text-purple-400" />
                  <span className="text-gray-300">Solve global challenges</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              The principles that guide everything we do and every solution we create.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-cyan-500 transition-all duration-300">
                <div className="flex justify-center mb-4">
                  <value.icon className="w-12 h-12 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {value.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Our Journey
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              From startup to global technology leader - our story of innovation and growth.
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-cyan-500 to-purple-600 h-full"></div>
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'}`}>
                    <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                      <div className="text-2xl font-bold text-cyan-400 mb-2">
                        {item.year}
                      </div>
                      <h3 className="text-xl font-semibold mb-2 text-white">
                        {item.title}
                      </h3>
                      <p className="text-gray-400">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cyan-400 rounded-full border-4 border-gray-900"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Join hundreds of companies already leveraging our AI and autonomous technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              <Zap className="w-5 h-5 mr-2" />
              Get Started Today
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center px-8 py-3 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
            >
              <Rocket className="w-5 h-5 mr-2" />
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
