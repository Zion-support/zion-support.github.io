'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Play, ArrowRight, CheckCircle, Zap, Brain, Shield } from 'lucide-react';

const DemoPage: React.FC = () => {
  const demos = [
    {
      title: 'AI-Powered Analytics Dashboard',
      description: 'See how our AI analytics can transform your data into actionable insights.',
      duration: '5 min',
      category: 'AI Analytics',
      icon: Brain
    },
    {
      title: 'Automated Security Monitoring',
      description: 'Experience real-time threat detection and automated security responses.',
      duration: '3 min',
      category: 'Cybersecurity',
      icon: Shield
    },
    {
      title: 'Cloud Infrastructure Management',
      description: 'Watch how we optimize and manage your cloud resources automatically.',
      duration: '4 min',
      category: 'Cloud Computing',
      icon: Zap
    }
  ];

  const features = [
    'Interactive demos with real data',
    'Live Q&A with our experts',
    'Customized scenarios for your industry',
    'Immediate access to try our solutions',
    'No commitment required',
    'Expert guidance throughout'
  ];

  return (
    <React.Fragment>
      <Helmet>
        <title>Demo - Zion Tech Group | See Our Solutions in Action</title>
        <meta name="description" content="Experience our AI and IT solutions through interactive demos. See how our technology can transform your business." />
        <meta name="keywords" content="demo, interactive demo, AI solutions, IT solutions, technology showcase, Zion Tech Group" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              See Our <span className="text-cyan-400">Solutions</span> in Action
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Experience our AI and IT solutions through interactive demos. See how our technology can transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                <Play className="w-5 h-5 mr-2" />
                Start Demo
              </button>
              <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                Schedule Live Demo
              </button>
            </div>
          </div>
        </section>

        {/* Demo Showcase Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Interactive Demos
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our solutions through hands-on demonstrations tailored to your industry.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {demos.map((demo, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <demo.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="mb-4">
                    <span className="inline-block bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-sm font-medium">
                      {demo.category}
                    </span>
                    <span className="ml-2 text-gray-400 text-sm">{demo.duration}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {demo.title}
                  </h3>
                  <p className="text-gray-300 mb-6">{demo.description}</p>
                  <button className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors group">
                    Try Demo
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Why Choose Our Demos?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our demos are designed to give you a real understanding of how our solutions work.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" />
                  <span className="text-gray-300 text-lg">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to See More?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Schedule a personalized demo with our experts to see how our solutions can work for your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Schedule Live Demo
              </button>
              <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};

export default DemoPage;
