import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Play, Pause, SkipForward, SkipBack, Maximize, ArrowRight, CheckCircle, Star, Users, Award, BarChart3, Calendar } from "lucide-react";;

export default function DemoPage() {
  const [currentDemo, setCurrentDemo] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const demos = [
    {
      id: 'ai-analytics',
      title: 'AI Analytics Dashboard',
      description: 'See how our AI-powered analytics platform transforms raw data into actionable insights with real-time dashboards and predictive analytics.',
      duration: '3:45',
      category: 'AI Analytics',
      features: ['Real-time Data Processing', 'Predictive Analytics', 'Interactive Dashboards', 'Automated Reporting'],
      thumbnail: '/api/placeholder/800/450',
      videoUrl: '#'
    },
    {
      id: 'ai-customer-support',
      title: 'AI Customer Support Bot',
      description: 'Experience our intelligent chatbot in action with natural language processing, sentiment analysis, and seamless human handoff.',
      duration: '2:30',
      category: 'AI Customer Service',
      features: ['Natural Language Processing', 'Sentiment Analysis', 'Multi-language Support', 'Human Handoff'],
      thumbnail: '/api/placeholder/800/450',
      videoUrl: '#'
    },
    {
      id: 'ai-content-generation',
      title: 'AI Content Generation Studio',
      description: 'Watch our AI create high-quality content including blog posts, social media content, and marketing materials with SEO optimization.',
      duration: '4:15',
      category: 'AI Content',
      features: ['SEO Optimization', 'Brand Voice Training', 'Multi-format Output', 'Content Calendar'],
      thumbnail: '/api/placeholder/800/450',
      videoUrl: '#'
    },
    {
      id: 'ai-cybersecurity',
      title: 'AI Cybersecurity Defense',
      description: 'See our advanced threat detection system in action with real-time monitoring, automated response, and compliance reporting.',
      duration: '3:20',
      category: 'Cybersecurity',
      features: ['Threat Detection', 'Automated Response', 'Real-time Monitoring', 'Compliance Reports'],
      thumbnail: '/api/placeholder/800/450',
      videoUrl: '#'
    },
    {
      id: '5g-solutions',
      title: '5G Network Solutions',
      description: 'Explore our 5G network infrastructure solutions with ultra-low latency, massive IoT connectivity, and edge computing capabilities.',
      duration: '5:00',
      category: '5G Technology',
      features: ['Ultra-low Latency', 'IoT Connectivity', 'Edge Computing', 'Smart City Solutions'],
      thumbnail: '/api/placeholder/800/450',
      videoUrl: '#'
    },
    {
      id: 'cloud-infrastructure',
      title: 'Cloud Infrastructure Management',
      description: 'Discover our comprehensive cloud solutions with automated scaling, backup, disaster recovery, and cost optimization.',
      duration: '4:30',
      category: 'Cloud Services',
      features: ['Auto-scaling', 'Disaster Recovery', 'Cost Optimization', 'Multi-cloud Support'],
      thumbnail: '/api/placeholder/800/450',
      videoUrl: '#'
    }
  ];

  const benefits = [
    {
      title: 'Interactive Demos',
      description: 'Experience our solutions hands-on with interactive demonstrations',
      icon: <Play className="w-6 h-6" />
    },
    {
      title: 'Real Use Cases',
      description: 'See how our solutions work in real-world business scenarios',
      icon: <BarChart3 className="w-6 h-6" />
    },
    {
      title: 'Expert Commentary',
      description: 'Get insights from our technical experts during the demos',
      icon: <Users className="w-6 h-6" />
    },
    {
      title: 'Q&A Sessions',
      description: 'Ask questions and get immediate answers from our team',
      icon: <Award className="w-6 h-6" />
    }
  ];

  const stats = [
    { number: '50+', label: 'Live Demos Available' },
    { number: '1000+', label: 'Businesses Transformed' },
    { number: '99.9%', label: 'Customer Satisfaction' },
    { number: '24/7', label: 'Demo Access' }
  ];

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleNextDemo = () => {
    setCurrentDemo((prev) => (prev + 1) % demos.length);
    setIsPlaying(false);
  };

  const handlePrevDemo = () => {
    setCurrentDemo((prev) => (prev - 1 + demos.length) % demos.length);
    setIsPlaying(false);
  };

  return (
    <>
      <Helmet>
        <title>Live Demos - Zion Tech Group | Interactive AI & IT Solutions</title>
        <meta
          name="description"
          content="Experience our AI and IT solutions through interactive live demos. See real-world applications, get expert insights, and discover how our technology can transform your business."
        />
        <meta
          name="keywords"
          content="live demos, AI solutions demo, IT services demo, interactive demonstrations, technology showcase, business automation demo"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <Play className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">Interactive Live Demos</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                Experience Our Solutions
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              See our AI and IT solutions in action through interactive live demonstrations. 
              Experience real-world applications and discover how our technology can transform your business.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 text-sm md:text-base">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Why Watch Our Demos?
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our interactive demonstrations provide valuable insights into how our solutions work in real business environments.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Main Demo Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Featured Demos
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our most popular solutions through interactive demonstrations and real-world use cases.
              </p>
            </div>

            {/* Demo Player */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 mb-12">
              <div className="aspect-video bg-slate-800 rounded-lg overflow-hidden relative group">
                {/* Demo Thumbnail/Video Placeholder */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      {isPlaying ? <Pause className="w-8 h-8 text-white" /> : <Play className="w-8 h-8 text-white ml-1" />}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{demos[currentDemo].title}</h3>
                    <p className="text-gray-300">{demos[currentDemo].description}</p>
                  </div>
                </div>

                {/* Demo Controls */}
                <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <button
                        onClick={handlePlayPause}
                        className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                      >
                        {isPlaying ? <Pause className="w-5 h-5 text-white" /> : <Play className="w-5 h-5 text-white ml-0.5" />}
                      </button>
                      <button
                        onClick={handlePrevDemo}
                        className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                      >
                        <SkipBack className="w-5 h-5 text-white" />
                      </button>
                      <button
                        onClick={handleNextDemo}
                        className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                      >
                        <SkipForward className="w-5 h-5 text-white" />
                      </button>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className="text-white text-sm">{demos[currentDemo].duration}</span>
                      <button className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                        <Maximize className="w-5 h-5 text-white" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Demo Info */}
              <div className="mt-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white">{demos[currentDemo].title}</h3>
                    <p className="text-gray-300">{demos[currentDemo].description}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-cyan-400 font-semibold">{demos[currentDemo].category}</div>
                    <div className="text-gray-400 text-sm">{demos[currentDemo].duration}</div>
                  </div>
                </div>

                {/* Features */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {demos[currentDemo].features.map((feature, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Demo Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {demos.map((demo, index) => (
                <div
                  key={demo.id}
                  className={`group bg-white/10 backdrop-blur-sm rounded-xl p-6 border transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 cursor-pointer ${
                    currentDemo === index 
                      ? 'border-cyan-500 bg-cyan-500/10' 
                      : 'border-white/20 hover:bg-white/20'
                  }`}
                  onClick={() => setCurrentDemo(index)}
                >
                  <div className="aspect-video bg-slate-800 rounded-lg mb-4 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Play className="w-6 h-6 text-white ml-1" />
                      </div>
                    </div>
                    <div className="absolute top-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded">
                      {demo.duration}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded-full border border-cyan-500/30">
                      {demo.category}
                    </span>
                    {currentDemo === index && (
                      <div className="flex items-center text-cyan-400 text-sm">
                        <Star className="w-4 h-4 mr-1" />
                        Currently Playing
                      </div>
                    )}
                  </div>
                  
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {demo.title}
                  </h3>
                  
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {demo.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold text-white mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Ready to Get Started?
                </span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Schedule a personalized demo with our experts to see how our solutions can work specifically for your business.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/consultation"
                  className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
                >
                  Schedule Personal Demo
                  <Calendar className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/contact"
                  className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
                >
                  Contact Our Team
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}