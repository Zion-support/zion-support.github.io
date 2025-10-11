import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Play, Clock, Users, Star, ArrowRight, CheckCircle } from 'lucide-react';

const DemoPage: React.FC = () => {
  const demos = [
    {
      id: '1',
      title: 'AI-Powered Analytics Dashboard',
      description: 'Experience our advanced analytics platform with real-time data visualization and AI insights.',
      duration: '10 min',
      category: 'AI Solutions',
      features: ['Real-time data processing', 'AI-powered insights', 'Interactive dashboards', 'Custom reports']
    },
    {
      id: '2',
      title: 'Cloud Infrastructure Management',
      description: 'See how our cloud management platform simplifies complex infrastructure operations.',
      duration: '15 min',
      category: 'Cloud Services',
      features: ['Auto-scaling', 'Resource optimization', 'Cost management', 'Security monitoring']
    },
    {
      id: '3',
      title: 'Cybersecurity Threat Detection',
      description: 'Watch our AI-powered security system detect and respond to threats in real-time.',
      duration: '12 min',
      category: 'Cybersecurity',
      features: ['Threat detection', 'Automated response', 'Risk assessment', 'Compliance monitoring']
    },
    {
      id: '4',
      title: 'Mobile App Development',
      description: 'See our rapid mobile app development process with cross-platform deployment.',
      duration: '20 min',
      category: 'Mobile Development',
      features: ['Cross-platform development', 'Real-time testing', 'Instant deployment', 'Performance optimization']
    }
  ];

  const stats = [
    { number: '500+', label: 'Live Demos' },
    { number: '10K+', label: 'Users' },
    { number: '99.9%', label: 'Uptime' },
    { number: '24/7', label: 'Support' }
  ];

  return (
    <>
      <Helmet>
        <title>Live Demo - Zion Tech Group | See Our Solutions in Action</title>
        <meta name="description" content="Experience our AI and IT solutions through interactive demos. See how our technology can transform your business." />
        <meta name="keywords" content="demo, live demo, AI solutions, IT solutions, technology demonstration, business solutions" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              See It in
              <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Action
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Experience our cutting-edge AI and IT solutions through interactive demos. See how our technology can transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 text-lg">
                Start Demo
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300 text-lg">
                Schedule Live Demo
              </button>
            </div>
          </div>
        </section>

        {/* Demo Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Interactive Demos
              </h2>
              <p className="text-xl text-gray-300">
                Explore our solutions through hands-on demonstrations
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {demos.map((demo) => (
                <div key={demo.id} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="relative mb-6">
                    <div className="w-full h-64 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-lg flex items-center justify-center">
                      <Play className="w-20 h-20 text-white/80" />
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {demo.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {demo.title}
                    </h3>
                    <p className="text-gray-300 mb-4">
                      {demo.description}
                    </p>
                    <div className="flex items-center text-sm text-gray-400 mb-4">
                      <Clock className="w-4 h-4 mr-1" />
                      {demo.duration}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {demo.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                    Launch Demo
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Trusted by Industry Leaders
              </h2>
              <p className="text-xl text-gray-300">
                Join thousands of satisfied customers worldwide
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to See More?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Schedule a personalized demo with our experts to see how our solutions can meet your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                Schedule Live Demo
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </>
  );
};

export default DemoPage;