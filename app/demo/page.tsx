import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Play, Pause, RotateCcw, Download, Share2, Star, Users, Clock } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const DemoPage: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentDemo, setCurrentDemo] = useState(0);

  const demos = [
    {
      id: 1,
      title: 'AI Content Generation',
      description: 'Watch how our AI generates high-quality content for your business needs.',
      duration: '2:30',
      category: 'AI Tools',
      thumbnail: '/images/demo-1.jpg'
    },
    {
      id: 2,
      title: 'Automation Workflows',
      description: 'See how to set up powerful automation workflows in minutes.',
      duration: '3:15',
      category: 'Automation',
      thumbnail: '/images/demo-2.jpg'
    },
    {
      id: 3,
      title: 'Analytics Dashboard',
      description: 'Explore our comprehensive analytics and reporting features.',
      duration: '4:00',
      category: 'Analytics',
      thumbnail: '/images/demo-3.jpg'
    },
    {
      id: 4,
      title: 'Customer Support Bot',
      description: 'Experience our AI-powered customer support chatbot in action.',
      duration: '2:45',
      category: 'Support',
      thumbnail: '/images/demo-4.jpg'
    }
  ];

  const features = [
    {
      icon: Play,
      title: 'Interactive Demos',
      description: 'Hands-on experience with our products'
    },
    {
      icon: Users,
      title: 'Live Support',
      description: 'Get help from our experts during demos'
    },
    {
      icon: Download,
      title: 'Free Trial',
      description: 'Start your free trial after the demo'
    },
    {
      icon: Star,
      title: 'Expert Guidance',
      description: 'Learn best practices from our team'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Product Demos - Zion Tech Group | See Our Solutions in Action</title>
        <meta name="description" content="Watch interactive demos of our AI and IT solutions. See how our products can transform your business with live demonstrations." />
        <meta name="keywords" content="product demo, AI demo, software demonstration, live demo, interactive demo" />
      </Helmet>

      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              See Our <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Watch interactive demos of our AI and IT solutions in action. Experience the power 
              of our technology and see how it can transform your business.
            </p>
          </div>
        </div>
      </section>

      {/* Demo Player */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-12">
            <div className="relative">
              <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    {isPlaying ? (
                      <Pause className="w-8 h-8 text-white" />
                    ) : (
                      <Play className="w-8 h-8 text-white ml-1" />
                    )}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{demos[currentDemo].title}</h3>
                  <p className="text-gray-300 mb-4">{demos[currentDemo].description}</p>
                  <div className="flex items-center justify-center space-x-4">
                    <span className="text-cyan-400 font-semibold">{demos[currentDemo].category}</span>
                    <div className="flex items-center text-gray-400">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{demos[currentDemo].duration}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-black/50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-4">
                      <button
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg flex items-center"
                      >
                        {isPlaying ? <Pause className="w-4 h-4 mr-2" /> : <Play className="w-4 h-4 mr-2" />}
                        {isPlaying ? 'Pause' : 'Play'}
                      </button>
                      <button className="text-gray-300 hover:text-white">
                        <RotateCcw className="w-5 h-5" />
                      </button>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button className="text-gray-300 hover:text-white">
                        <Download className="w-5 h-5" />
                      </button>
                      <button className="text-gray-300 hover:text-white">
                        <Share2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                  <div className="w-full bg-gray-600 rounded-full h-2">
                    <div className="bg-cyan-500 h-2 rounded-full" style={{ width: '30%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Demo List */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {demos.map((demo, index) => (
              <div
                key={demo.id}
                onClick={() => setCurrentDemo(index)}
                className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 cursor-pointer transition-all duration-300 hover:bg-white/20 ${
                  currentDemo === index ? 'ring-2 ring-cyan-400' : ''
                }`}
              >
                <div className="aspect-video bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg mb-4 flex items-center justify-center">
                  <Play className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{demo.title}</h4>
                <p className="text-gray-300 text-sm mb-3">{demo.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-cyan-400 text-sm font-medium">{demo.category}</span>
                  <div className="flex items-center text-gray-400 text-sm">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{demo.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Why Watch Our Demos?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our interactive demos give you a hands-on experience with our solutions before you commit.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            After watching our demos, start your free trial and experience the full power of our solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
              Start Free Trial
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300">
              Schedule Live Demo
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DemoPage;