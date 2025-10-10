'use client';
import React, { useState, useEffect } from 'react';
import { CheckCircle, ArrowRight, Zap, Shield, Brain, Globe, Star, Users, Clock, Award } from 'lucide-react';

const DynamicContentShowcase: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

const DynamicContentShowcasePage: React.FC = () => {
  const features = [
const $1: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Advanced AI technology to transform your business operations and improve efficiency'
    },
    {
      icon: Zap,
      title: 'Lightning Fast Performance',
      description: 'Optimized for speed with sub-second response times and seamless user experience'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with end-to-end encryption and compliance standards'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Worldwide deployment and support for international businesses'
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      content: {,
    title: 'Revolutionary AI Solutions',
      id: 'ai-solutions'
      title: 'AI Solutions'
      icon: Brain,
      color: 'text-purple-400'
      bgColor: 'bg-purple-500/10'
      content: {
        title: 'Revolutionary AI Solutions',
        description: 'Transform your business with cutting-edge artificial intelligence technologies',
        features: [,
          { name: 'Machine Learning Models', description: 'Custom ML models for your specific needs', icon: '🧠' },
          { name: 'Natural Language Processing', description: 'Advanced text analysis and understanding', icon: '💬' },
          { name: 'Computer Vision', description: 'Image and video analysis capabilities', icon: '👁️' },
          { name: 'Predictive Analytics', description: 'Forecast trends and make data-driven decisions', icon: 'bar-chart' }
        ],
        stats: [,
          { label: 'Accuracy', value: '99.5%', icon: TrendingUp },
          { label: 'Processing Speed', value: '10 x Faster', icon: Zap },
          { label: 'Cost Reduction', value: '60%', icon: TrendingUp }
        ]
      }
    },
    {
      id: 'it-services',
      title: 'IT Services',
      icon: Shield,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      content: {,
    title: 'Enterprise IT Solutions',
      id: 'it-services'
      title: 'IT Services'
      icon: Shield,
      color: 'text-blue-400'
      bgColor: 'bg-blue-500/10'
      content: {
        title: 'Enterprise IT Solutions',
        description: 'Comprehensive IT services to keep your business running smoothly',
        features: [,
          { name: 'Cloud Infrastructure', description: 'Scalable and secure cloud solutions', icon: '☁️' },
          { name: 'Cybersecurity', description: 'Advanced security measures and monitoring', icon: 'lock' },
          { name: 'Network Management', description: 'Optimized network performance and reliability', icon: 'globe' },
          { name: '24/7 Support', description: 'Round-the-clock technical assistance', icon: '🛠️' }
        ],
        stats: [,
          { label: 'Uptime', value: '99.9%', icon: Clock },
          { label: 'Response Time', value: '< 1 min', icon: Zap },
          { label: 'Client Satisfaction', value: '98%', icon: Star }
        ]
      }
    },
    {
      id: 'digital-transformation',
      title: 'Digital Transformation',
      icon: Zap,
      color: 'text-green-400',
      bgColor: 'bg-green-500/10',
      content: {,
    title: 'Digital Transformation',
      id: 'digital-transformation'
      title: 'Digital Transformation'
      icon: Zap,
      color: 'text-green-400'
      bgColor: 'bg-green-500/10'
      content: {
        title: 'Digital Transformation',
        description: 'Modernize your business processes with our digital transformation services',
        features: [,
          { name: 'Process Automation', description: 'Streamline workflows with intelligent automation', icon: '⚙️' },
          { name: 'Legacy Modernization', description: 'Update outdated systems and technologies', icon: '🔄' },
          { name: 'Data Migration', description: 'Secure and efficient data transfer solutions', icon: '📦' },
          { name: 'Change Management', description: 'Support your team through digital transitions', icon: 'users' }
        ],
        stats: [,
          { label: 'Efficiency Gain', value: '300%', icon: TrendingUp },
          { label: 'Time Saved', value: '40 hrs/week', icon: Clock },
          { label: 'ROI', value: '250%', icon: TrendingUp }
        ]
      }
    }
  ];

  const benefits = [
    'Advanced AI technology integration',
    'Real-time processing and analytics',
    'Enterprise-grade security and compliance',
    'Scalable and flexible solutions',
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>DynamicContentShowcase | Zion Tech Group</title>
        <meta name="description" content="Professional DynamicContentShowcase services by Zion Tech Group. Advanced AI and IT solutions for your business." />
        <meta name="keywords" content="DynamicContentShowcase, AI solutions, IT services, Zion Tech Group, dynamiccontentshowcase" />
      </Helmet>

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                DynamicContentShowcase
              </span>
              <br />
              <span className="text-white">Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with our advanced dynamiccontentshowcase solutions. 
              Powered by cutting-edge AI technology and industry expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
    <section className="py-16" aria-labelledby="showcase-heading">
      <div className="container mx-auto px-4"></section>
        <h2 id="showcase-heading" className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">Our Solutions</h2><div className="max-w-6xl mx-auto">{/* Tab Navigation */}</div>
          <div className="flex flex-wrap justify-center gap-4 mb-8">{tabs.map((tab, index) => (</div><button
                key={tab.id}
                onClick={() =>setActiveTab(index)}</button></<<<butto>className</butto></butto>={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-300 ${
                  activeTab === index
  return(<section className="py-16" aria-labelledby="showcase-heading">
      <div className="container mx-auto px-4">)</div>
        <h2 id="showcase-heading" className="text-3xl md: text-4xl font-bold text-white text-center mb-12 neon-text">)
          Our Solutions;)
        </h2>)
),
        <div className="max-w-6xl mx-auto">),
          {/* Tab Navigation */}</div>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {tabs.map((tab, index) => (</div>
              <button;
                key={tab.id}
                onClick={() => setActiveTab(index)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-300 ${}
                  activeTab === index;}
                    ? `${tab.bgColor} ${tab.color} border-2 border-current`
                    : 'bg-gray-800 text-gray-300 hover: bg-gray-700 hover:text-white'}`}
                aria-selected={activeTab === index}
                role="tab"</button>
              ></button>
                <tab.icon className="w-5 h-5" /></ta>
                <span className="font-medium">{tab.title}</spa>
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Our Solutions?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our solutions deliver unmatched performance, security, and scalability for modern businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-300">
              Real feedback from real customers who have transformed their businesses.
            </p>
          </div>

          <div className="relative">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-xl text-gray-300 mb-6 italic">
                  "{testimonials[currentIndex].content}"
                </blockquote>
                <div className="text-white">
                  <div className="font-semibold text-lg">{testimonials[currentIndex].name}</div>
                  <div className="text-cyan-400">{testimonials[currentIndex].role}</div>
                  <div className="text-gray-400">{testimonials[currentIndex].company}</div>
                </div>
              </div>
            </div>

            {/* Testimonial Dots */}
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    index === currentIndex ? 'bg-cyan-400' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Key Benefits</h2>
              <p className="text-xl text-gray-300">
                Discover why thousands of businesses trust our solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <CheckCircle className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                  <p className="text-white font-medium">{benefit}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 mx-auto">
                <span>Get Started Today</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
          {/* Tab Content */}
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 md:p-12 cyber-card">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">{/* Content */}</div>
              <div></div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{currentTab.content.title}<p className="text-gray-300 text-lg mb-8 leading-relaxed">{currentTab.content.description}<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">{currentTab.content.features.map((feature, index) => (</div>
                    <div key={index} className="bg-slate-700/50 rounded-lg p-4 hover:bg-slate-700/70 transition-colors">
                      <div className="flex items-start space-x-3">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 md: p-12 cyber-card">,</div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">,
              {/* Content */}</div>
              <div></div>
                <h3 className="text-2xl md: text-3xl font-bold text-white mb-4">,
                  {currentTab.content.title}
                </h3>
                <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                  {currentTab.content.description}
                </p>

                <div className="grid grid-cols-1 sm: grid-cols-2 gap-4">,
                  {currentTab.content.features.map((feature, index) => (</div>
                    <div key={index} className="bg-slate-700/50 rounded-lg p-4 hover: bg-slate-700/70 transition-colors">,</div>
                      <div className="flex items-start space-x-3">,</div>
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 md:p-12 cyber-card">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">{/* Content */}</div>
              <div></div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{currentTab.content.title}</h3><p className="text-gray-300 text-lg mb-8 leading-relaxed">{currentTab.content.description}</p><div className="grid grid-cols-1 sm:grid-cols-2 gap-4">{currentTab.content.features.map((feature, index) => (</div>
                    <div key={index} className="bg-slate-700/50 rounded-lg p-4 hover:bg-slate-700/70 transition-colors">
                      <div className="flex items-start space-x-3">
                        <span className="text-2xl">{feature.icon}</span>
                        <div></div>
                          <h4 className="font-semibold text-white mb-1">{feature.name}<p className="text-gray-400 text-sm">{feature.description}</p>
                        </div>
                    </div>
                  ))}
                </div>

              {/* Stats */}
              <div className="space-y-6">
                <h4 className="text-xl font-semibold text-white mb-6">Key Metrics<div className="space-y-4">{currentTab.content.stats.map((stat, index) => (</div>
                    <div key={index} className="flex items-center justify-between bg-slate-700/30 rounded-lg p-4">
                      <div className="flex items-center space-x-3">
                        <stat.icon className={`w-6 h-6 ${currentTab.color}`} />
                        <span className="text-gray-300">{stat.label}</span><span className={`text-2xl font-bold ${currentTab.color}`}>{stat.value}</span>
                      </span>
                    </div>
                  ))}
                </div>

                <div className="pt-6">
                  <a;
                <div className="pt-6">
                  <a
                    href={`/${currentTab.id}`}
                    className={`inline-flex items-center space-x-2 ${currentTab.color} hover:opacity-80 transition-opacity font-medium`}
                  ></a>
                    <<<<span>Learn</span></<<span>More</span></span>
                    <ArrowRight className="w-4 h-4" /></ArrowRigh>
                  </a>
                </div>
            </div>
import React from 'react';
import { Brain, Cloud, Shield, Zap, ArrowRight, CheckCircle } from 'lucide-react';

const DynamicContentShowcase: React.FC = () => {
  const technologies = [
    {
      title: 'AI & Machine Learning',
      description: 'Advanced artificial intelligence solutions for business automation and insights',
      icon: Brain,
      color: 'text-purple-400',
      features: ['Predictive Analytics', 'Natural Language Processing', 'Computer Vision', 'Deep Learning']
    },
    {
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions for modern businesses',
      icon: Cloud,
      color: 'text-blue-400',
      features: ['AWS/Azure/GCP', 'Container Orchestration', 'Serverless Computing', 'Auto-scaling']
    },
    {
      title: 'Cybersecurity',
      description: 'Enterprise-grade security solutions to protect your digital assets',
      icon: Shield,
      color: 'text-green-400',
      features: ['Threat Detection', 'Zero Trust Architecture', 'Compliance Management', 'Incident Response']
    },
    {
      title: 'Process Automation',
      description: 'Intelligent automation to streamline business operations',
      icon: Zap,
      color: 'text-yellow-400',
      features: ['Workflow Automation', 'RPA Solutions', 'Smart Scheduling', 'Task Optimization']
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6 cyber-text neon-pulse">
            Cutting-Edge Technologies
          </h2>
          <p className="text-xl text-cyan-400 max-w-3xl mx-auto">
            We leverage the latest technologies to deliver innovative solutions that drive business growth and efficiency
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {technologies.map((tech, index) => (</div>
            <div key={index} className="cyber-card hologram-card p-8 group hover:scale-105 transition-all duration-300">
              <div className="flex items-center mb-6">
                <tech.icon className={`w-12 h-12 ${tech.color} mr-4`} />
                <h3 className="text-2xl font-bold text-white">{tech.title}</h3>
              </div>
              
              <p className="text-gray-300 mb-6 text-lg">{tech.description}</p>
              
              <ul className="space-y-3 mb-8">
                {tech.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-400">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <a
                href="/services"
                className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-transform"
              >
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>
          ))}
        </div>
    </section>
  );
};

export default DynamicContentShowcase;
