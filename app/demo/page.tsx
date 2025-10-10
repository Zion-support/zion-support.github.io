'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Play, Pause, RotateCcw, Download, Share2, Star, CheckCircle, ArrowRight, Zap, Shield, Brain, Globe } from 'lucide-react';

const DemoPage: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentDemo, setCurrentDemo] = useState(0);

  const demos = [
    {
      id: 1,
      title: 'AI-Powered Chatbot Demo',
      description: 'Experience our intelligent chatbot that can handle customer inquiries with natural language processing',
      category: 'AI & Machine Learning',
      duration: '5 min',
      features: ['Natural Language Processing', 'Multi-language Support', 'Real-time Responses', 'Context Awareness'],
      videoUrl: '/videos/chatbot-demo.mp4',
      thumbnail: '/images/demos/chatbot-thumbnail.jpg'
    },
    {
      id: 2,
      title: 'Data Analytics Dashboard',
      description: 'Explore our comprehensive analytics platform with real-time data visualization and insights',
      category: 'Data & Analytics',
      duration: '8 min',
      features: ['Real-time Dashboards', 'Interactive Charts', 'Custom Reports', 'Data Export'],
      videoUrl: '/videos/analytics-demo.mp4',
      thumbnail: '/images/demos/analytics-thumbnail.jpg'
    },
    {
      id: 3,
      title: 'Cloud Infrastructure Management',
      description: 'See how we manage and optimize cloud resources with automated scaling and monitoring',
      category: 'Cloud Computing',
      duration: '6 min',
      features: ['Auto-scaling', 'Resource Monitoring', 'Cost Optimization', 'Security Management'],
      videoUrl: '/videos/cloud-demo.mp4',
      thumbnail: '/images/demos/cloud-thumbnail.jpg'
    },
    {
      id: 4,
      title: 'Mobile App Development',
      description: 'Discover our mobile app development process and see the results in action',
      category: 'Mobile Development',
      duration: '7 min',
      features: ['Cross-platform Development', 'Native Performance', 'Offline Capabilities', 'Push Notifications'],
      videoUrl: '/videos/mobile-demo.mp4',
      thumbnail: '/images/demos/mobile-thumbnail.jpg'
    }
  ];

  const benefits = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Experience cutting-edge AI technology in action'
    },
    {
      icon: Zap,
      title: 'Real-time Performance',
      description: 'See our solutions working at lightning speed'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Witness our robust security measures'
    },
    {
      icon: Globe,
      title: 'Global Scalability',
      description: 'Watch our solutions scale across the globe'
    }
  ];

  const stats = [
    { number: '50+', label: 'Live Demos', icon: Play },
    { number: '1000+', label: 'Demo Views', icon: Star },
    { number: '95%', label: 'Satisfaction Rate', icon: CheckCircle },
    { number: '24/7', label: 'Available', icon: Globe }
  ];

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleDemoSelect = (demoId: number) => {
    setCurrentDemo(demoId - 1);
    setIsPlaying(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
      <Helmet>
        <title>Live Demos - Zion Tech Group | See Our Solutions in Action</title>
        <meta name="description" content="Experience our AI and technology solutions through interactive demos. See how our solutions can transform your business." />
        <meta name="keywords" content="demos, live demos, AI solutions, technology demonstrations, interactive demos" />
        <link rel="canonical" href="https://ziontechgroup.com/demo" />
      </Helmet>
      
      <Navigation />
      
      <main className="relative">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Live <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Demos</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Experience our AI and technology solutions in action. See how we can transform your business.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <stat.icon className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Demo Player */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/10">
                {/* Video Player */}
                <div className="relative aspect-video bg-black">
                  <img
                    src={demos[currentDemo].thumbnail}
                    alt={demos[currentDemo].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <button
                      onClick={handlePlayPause}
                      className="w-20 h-20 bg-white/20 backdrop-blur-lg rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300"
                    >
                      {isPlaying ? (
                        <Pause className="w-8 h-8 text-white" />
                      ) : (
                        <Play className="w-8 h-8 text-white ml-1" />
                      )}
                    </button>
                  </div>
                  
                  {/* Demo Info Overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-black/70 backdrop-blur-lg rounded-lg p-4">
                      <h3 className="text-xl font-bold text-white mb-2">{demos[currentDemo].title}</h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-300">
                        <span>{demos[currentDemo].category}</span>
                        <span>•</span>
                        <span>{demos[currentDemo].duration}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Demo Controls */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-white">{demos[currentDemo].title}</h2>
                    <div className="flex items-center space-x-4">
                      <button className="flex items-center text-gray-300 hover:text-white transition-colors">
                        <Share2 className="w-5 h-5 mr-2" />
                        Share
                      </button>
                      <button className="flex items-center text-gray-300 hover:text-white transition-colors">
                        <Download className="w-5 h-5 mr-2" />
                        Download
                      </button>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-6">{demos[currentDemo].description}</p>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {demos[currentDemo].features.map((feature, index) => (
                      <div key={index} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Demo Selection */}
        <section className="py-20 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Choose Your Demo</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore different aspects of our technology solutions through interactive demonstrations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {demos.map((demo, index) => (
                <div
                  key={demo.id}
                  onClick={() => handleDemoSelect(demo.id)}
                  className={`bg-white/5 backdrop-blur-lg rounded-xl p-6 border cursor-pointer transition-all duration-300 hover:bg-white/10 ${
                    currentDemo === index ? 'border-cyan-500 bg-cyan-500/10' : 'border-white/10'
                  }`}
                >
                  <div className="relative mb-4">
                    <img
                      src={demo.thumbnail}
                      alt={demo.title}
                      className="w-full h-32 object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 bg-black/50 rounded-lg flex items-center justify-center">
                      <Play className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-white mb-2">{demo.title}</h3>
                  <p className="text-gray-300 text-sm mb-3">{demo.description}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <span>{demo.category}</span>
                    <span>{demo.duration}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Why Watch Our Demos?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See our solutions in action and understand how they can benefit your business.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 group text-center"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl p-12 text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to See More?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                Schedule a personalized demo with our team to see how our solutions can work for your specific needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
                >
                  Schedule Demo
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <a
                  href="/consultation"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors inline-flex items-center justify-center"
                >
                  Get Consultation
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default DemoPage;
