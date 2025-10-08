import React from 'react';
import { Award, Users, Target, Zap, Shield, Globe, TrendingUp, Brain } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-16'>
          <h1 className='text-4xl md:text-6xl font-bold text-white mb-6 neon-text'>
            About Zion Tech Group
          </h1>
          <p className='text-xl md:text-2xl text-cyan-400'>
            Leading the future of AI and IT solutions
          </p>
        </div>

        {/* Mission Section */}
        <div className='cyber-card hologram-card p-8 mb-12'>
          <div className="flex items-center mb-6">
            <Target className="w-8 h-8 text-cyan-400 mr-4" />
            <h2 className='text-3xl font-bold text-white'>
              Our Mission
            </h2>
          </div>
          <p className='text-gray-300 mb-6 text-lg leading-relaxed'>
            At Zion Tech Group, we are dedicated to transforming businesses through cutting-edge AI and IT solutions. 
            Our mission is to empower organizations with the technology they need to thrive in the digital age.
          </p>
          <p className='text-gray-300 text-lg leading-relaxed'>
            We combine deep technical expertise with innovative thinking to deliver solutions that drive real business value 
            and create sustainable competitive advantages for our clients.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="cyber-card text-center">
            <div className="text-4xl font-bold text-cyan-400 mb-2">500+</div>
            <div className="text-gray-300">Enterprise Clients</div>
          </div>
          <div className="cyber-card text-center">
            <div className="text-4xl font-bold text-green-400 mb-2">$2.5B+</div>
            <div className="text-gray-300">Cost Savings Delivered</div>
          </div>
          <div className="cyber-card text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">99.9%</div>
            <div className="text-gray-300">Uptime Guarantee</div>
          </div>
          <div className="cyber-card text-center">
            <div className="text-4xl font-bold text-orange-400 mb-2">24/7</div>
            <div className="text-gray-300">Support Available</div>
          </div>
        </div>

        {/* Expertise Section */}
        <div className='cyber-card hologram-card p-8 mb-12'>
          <div className="flex items-center mb-8">
            <Brain className="w-8 h-8 text-cyan-400 mr-4" />
            <h2 className='text-3xl font-bold text-white'>
              Our Expertise
            </h2>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            <div className="cyber-card p-6">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className='text-xl font-semibold text-white mb-3'>
                AI Solutions
              </h3>
              <p className='text-gray-300'>
                Advanced machine learning, natural language processing, and computer vision solutions 
                that transform how businesses operate and make decisions.
              </p>
            </div>
            <div className="cyber-card p-6">
              <div className="text-4xl mb-4">⚛️</div>
              <h3 className='text-xl font-semibold text-white mb-3'>
                Quantum Computing
              </h3>
              <p className='text-gray-300'>
                Next-generation quantum algorithms and quantum security implementations 
                that solve complex problems beyond classical computing capabilities.
              </p>
            </div>
            <div className="cyber-card p-6">
              <div className="text-4xl mb-4">🔄</div>
              <h3 className='text-xl font-semibold text-white mb-3'>
                Autonomous Systems
              </h3>
              <p className='text-gray-300'>
                Self-managing and self-optimizing systems for enterprise operations 
                that reduce human intervention and increase efficiency.
              </p>
            </div>
            <div className="cyber-card p-6">
              <div className="text-4xl mb-4">📊</div>
              <h3 className='text-xl font-semibold text-white mb-3'>
                Business Intelligence
              </h3>
              <p className='text-gray-300'>
                Data-driven insights and analytics for strategic decision making 
                that unlock hidden opportunities and optimize performance.
              </p>
            </div>
            <div className="cyber-card p-6">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className='text-xl font-semibold text-white mb-3'>
                Cybersecurity
              </h3>
              <p className='text-gray-300'>
                Advanced security solutions and threat detection systems 
                that protect your digital assets and ensure compliance.
              </p>
            </div>
            <div className="cyber-card p-6">
              <div className="text-4xl mb-4">☁️</div>
              <h3 className='text-xl font-semibold text-white mb-3'>
                Cloud Infrastructure
              </h3>
              <p className='text-gray-300'>
                Scalable cloud solutions and infrastructure optimization 
                that enable rapid growth and global expansion.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className='cyber-card hologram-card p-8 mb-12'>
          <div className="flex items-center mb-8">
            <Award className="w-8 h-8 text-cyan-400 mr-4" />
            <h2 className='text-3xl font-bold text-white'>
              Why Choose Us
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center mr-4 mt-1">
                  <TrendingUp className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Proven Track Record</h3>
                  <p className="text-gray-300">Successful AI implementations across 500+ enterprise clients with measurable ROI improvements.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center mr-4 mt-1">
                  <Users className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Expert Team</h3>
                  <p className="text-gray-300">World-class engineers and data scientists with deep technical knowledge and industry experience.</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center mr-4 mt-1">
                  <Zap className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Cutting-Edge Technology</h3>
                  <p className="text-gray-300">Latest AI frameworks, quantum computing capabilities, and innovative approaches to problem-solving.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center mr-4 mt-1">
                  <Shield className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Comprehensive Support</h3>
                  <p className="text-gray-300">24/7 support, maintenance services, and continuous optimization to ensure your success.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className='cyber-card hologram-card p-8'>
          <div className="flex items-center mb-8">
            <Globe className="w-8 h-8 text-cyan-400 mr-4" />
            <h2 className='text-3xl font-bold text-white'>
              Our Values
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold text-white mb-3">Excellence</h3>
              <p className="text-gray-300">We strive for excellence in everything we do, delivering solutions that exceed expectations.</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold text-white mb-3">Innovation</h3>
              <p className="text-gray-300">We embrace innovation and continuously push the boundaries of what's possible with technology.</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold text-white mb-3">Partnership</h3>
              <p className="text-gray-300">We build lasting partnerships with our clients, working together to achieve shared success.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
