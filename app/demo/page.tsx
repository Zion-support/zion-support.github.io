import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, Calendar, Clock, CheckCircle, Brain, Shield, Globe, Zap, BarChart3, Users, Award, Star, ExternalLink, Download } from 'lucide-react';

export default function Demo() {
  const [selectedDemo, setSelectedDemo] = useState('ai-analytics');

  const demos = [
    {
      id: 'ai-analytics',
      title: 'AI Business Intelligence Dashboard',
      description: 'See how our AI analytics platform transforms raw data into actionable insights with real-time dashboards and predictive analytics.',
      duration: '15 minutes',
      category: 'AI Analytics',
      features: [
        'Real-time data visualization',
        'Predictive analytics models',
        'Custom dashboard creation',
        'Automated reporting',
        'Mobile-responsive design'
      ],
      videoUrl: '/demos/ai-analytics-demo.mp4',
      thumbnail: '/api/placeholder/600/400',
      popular: true
    },
    {
      id: 'ai-customer-support',
      title: 'AI Customer Support Automation',
      description: 'Experience our intelligent chatbot and customer service automation solutions in action.',
      duration: '12 minutes',
      category: 'AI Customer Service',
      features: [
        'Natural language processing',
        'Multi-language support',
        'Sentiment analysis',
        'CRM integration',
        'Live chat handoff'
      ],
      videoUrl: '/demos/ai-customer-support-demo.mp4',
      thumbnail: '/api/placeholder/600/400',
      popular: true
    },
    {
      id: 'ai-content-generation',
      title: 'AI Content Generation Studio',
      description: 'Watch our AI content creation tools generate high-quality content across multiple formats and platforms.',
      duration: '10 minutes',
      category: 'AI Content',
      features: [
        'Multi-format content generation',
        'SEO optimization',
        'Brand voice training',
        'Plagiarism detection',
        'Content calendar integration'
      ],
      videoUrl: '/demos/ai-content-demo.mp4',
      thumbnail: '/api/placeholder/600/400',
      popular: false
    },
    {
      id: 'ai-cybersecurity',
      title: 'AI Cybersecurity Defense Matrix',
      description: 'See our advanced threat detection and response system protect against cyber threats in real-time.',
      duration: '18 minutes',
      category: 'Cybersecurity',
      features: [
        'Real-time threat detection',
        'Automated incident response',
        'Compliance reporting',
        '24/7 monitoring',
        'Security training modules'
      ],
      videoUrl: '/demos/ai-cybersecurity-demo.mp4',
      thumbnail: '/api/placeholder/600/400',
      popular: true
    },
    {
      id: '5g-solutions',
      title: '5G Network Infrastructure',
      description: 'Explore our 5G solutions for IoT, edge computing, and smart city implementations.',
      duration: '20 minutes',
      category: '5G Technology',
      features: [
        'Ultra-low latency connectivity',
        'Massive IoT support',
        'Edge computing capabilities',
        'Smart city integration',
        'Private network solutions'
      ],
      videoUrl: '/demos/5g-solutions-demo.mp4',
      thumbnail: '/api/placeholder/600/400',
      popular: false
    },
    {
      id: 'cloud-infrastructure',
      title: 'Cloud Infrastructure Management',
      description: 'Discover our comprehensive cloud solutions with automated scaling and disaster recovery.',
      duration: '14 minutes',
      category: 'Cloud Services',
      features: [
        'Auto-scaling capabilities',
        'Disaster recovery',
        'Cost optimization',
        'Multi-cloud support',
        'DevOps integration'
      ],
      videoUrl: '/demos/cloud-infrastructure-demo.mp4',
      thumbnail: '/api/placeholder/600/400',
      popular: false
    }
  ];

  const demoStats = [
    { number: "500+", label: "Demos Conducted", icon: <Play className="w-6 h-6" /> },
    { number: "95%", label: "Client Satisfaction", icon: <Star className="w-6 h-6" /> },
    { number: "40%", label: "Average Conversion", icon: <BarChart3 className="w-6 h-6" /> },
    { number: "24/7", label: "Demo Availability", icon: <Clock className="w-6 h-6" /> }
  ];

  const selectedDemoData = demos.find(demo => demo.id === selectedDemo) || demos[0];

  return (
    <>
      <Helmet>
        <title>Product Demos - See Our Solutions in Action | Zion Tech Group</title>
        <meta
          name="description"
          content="Watch live demos of our AI and IT solutions. See how our technology can transform your business with interactive demonstrations and real-world examples."
        />
        <meta
          name="keywords"
          content="product demos, AI demos, technology demonstrations, live demos, solution showcase, interactive demos"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-block">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 relative">
                See Our Solutions
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
                  {" "}in Action
                </span>
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-lg blur opacity-30 animate-pulse"></div>
              </h1>
            </div>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Experience our AI and technology solutions through interactive demos and live demonstrations. 
              See how our tools can transform your business operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#demo-section"
                className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Watch Demos
                <Play className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <Link
                to="/consultation"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
              >
                Schedule Live Demo
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {demoStats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-sm md:text-base">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Demo Selection */}
        <section id="demo-section" className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Choose Your Demo
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Select from our comprehensive library of product demonstrations to see our solutions in action.
              </p>
            </div>

            {/* Demo Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {demos.map((demo) => (
                <button
                  key={demo.id}
                  onClick={() => setSelectedDemo(demo.id)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    selectedDemo === demo.id
                      ? "bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg"
                      : "bg-white/10 text-gray-300 hover:bg-white/20"
                  }`}
                >
                  {demo.title}
                  {demo.popular && (
                    <span className="ml-2 text-xs bg-yellow-400 text-black px-2 py-1 rounded-full">
                      Popular
                    </span>
                  )}
                </button>
              ))}
            </div>

            {/* Selected Demo */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Demo Video */}
                <div className="space-y-4">
                  <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-xl overflow-hidden relative group">
                    <img
                      src={selectedDemoData.thumbnail}
                      alt={selectedDemoData.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center group-hover:bg-black/30 transition-colors duration-300">
                      <button className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-300">
                        <Play className="w-8 h-8 text-white ml-1" />
                      </button>
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {selectedDemoData.duration}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex space-x-4">
                    <button className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                      <Play className="w-5 h-5 mr-2" />
                      Watch Demo
                    </button>
                    <Link
                      to="/consultation"
                      className="flex-1 border border-cyan-400 text-cyan-400 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
                    >
                      <Calendar className="w-5 h-5 mr-2" />
                      Schedule Live Demo
                    </Link>
                  </div>
                </div>

                {/* Demo Details */}
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-xs bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded-full border border-cyan-500/30">
                        {selectedDemoData.category}
                      </span>
                      {selectedDemoData.popular && (
                        <span className="text-xs bg-yellow-400/20 text-yellow-300 px-2 py-1 rounded-full border border-yellow-400/30">
                          Popular
                        </span>
                      )}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {selectedDemoData.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {selectedDemoData.description}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                    <div className="space-y-2">
                      {selectedDemoData.features.map((feature, index) => (
                        <div key={index} className="flex items-center text-sm text-gray-300">
                          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3 flex-shrink-0"></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-400">
                        <Clock className="w-4 h-4 mr-2" />
                        Duration: {selectedDemoData.duration}
                      </div>
                      <div className="flex space-x-2">
                        <button className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-300">
                          <Download className="w-4 h-4 text-gray-300" />
                        </button>
                        <button className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-300">
                          <ExternalLink className="w-4 h-4 text-gray-300" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Live Demo CTA */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Want a Personalized Demo?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Schedule a live, personalized demonstration tailored to your specific business needs and use cases. 
              Our experts will show you exactly how our solutions can solve your challenges.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Schedule</h3>
                <p className="text-cyan-400 text-sm">Book a convenient time slot</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Personalized</h3>
                <p className="text-cyan-400 text-sm">Tailored to your needs</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Expert Led</h3>
                <p className="text-cyan-400 text-sm">Guided by our specialists</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/consultation"
                className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Schedule Live Demo
                <Calendar className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Contact Sales Team
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}