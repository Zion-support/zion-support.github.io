'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, CheckCircle, Star, Users, Zap, Shield, Globe, Brain, BarChart3, Code, Mail } from 'lucide-react';

const DemoPage: React.FC = () => {
  const [selectedDemo, setSelectedDemo] = useState('ai-analytics');

  const demos = [
    {
      id: 'ai-analytics',
      title: 'AI Analytics Dashboard',
      description: 'See how our AI-powered analytics can transform your business intelligence',
      icon: <BarChart3 className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500',
      features: [
        'Real-time data visualization',
        'Predictive analytics',
        'Custom dashboard creation',
        'Automated reporting'
      ],
      duration: '5 minutes',
      difficulty: 'Beginner'
    },
    {
      id: 'ai-chatbot',
      title: 'AI Customer Support Bot',
      description: 'Experience our intelligent chatbot handling customer inquiries',
      icon: <Brain className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500',
      features: [
        'Natural language processing',
        'Multi-language support',
        'Context awareness',
        'Seamless handoff to humans'
      ],
      duration: '3 minutes',
      difficulty: 'Beginner'
    },
    {
      id: 'ai-content',
      title: 'AI Content Generation',
      description: 'Watch our AI create high-quality content in seconds',
      icon: <Code className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-500',
      features: [
        'Blog post generation',
        'Social media content',
        'Product descriptions',
        'SEO optimization'
      ],
      duration: '4 minutes',
      difficulty: 'Beginner'
    },
    {
      id: 'ai-security',
      title: 'AI Cybersecurity Monitor',
      description: 'See our AI detecting and preventing security threats in real-time',
      icon: <Shield className="w-8 h-8" />,
      color: 'from-red-500 to-orange-500',
      features: [
        'Threat detection',
        'Automated response',
        'Risk assessment',
        'Compliance monitoring'
      ],
      duration: '6 minutes',
      difficulty: 'Intermediate'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechStart Inc.',
      role: 'CEO',
      content: 'The AI analytics demo was incredible. We could see exactly how it would transform our data insights.',
      rating: 5,
      avatar: 'SJ'
    },
    {
      name: 'Michael Chen',
      company: 'E-commerce Solutions',
      role: 'CTO',
      content: 'The chatbot demo showed us how we could handle 10x more customer inquiries with the same team.',
      rating: 5,
      avatar: 'MC'
    },
    {
      name: 'Emily Rodriguez',
      company: 'Digital Marketing Agency',
      role: 'Operations Director',
      content: 'The content generation demo saved us hours of work. The quality was outstanding.',
      rating: 5,
      avatar: 'ER'
    }
  ];

  const stats = [
    { label: 'Demo Requests', value: '10,000+', icon: Play },
    { label: 'Conversion Rate', value: '85%', icon: CheckCircle },
    { label: 'Customer Satisfaction', value: '98%', icon: Star },
    { label: 'Time Saved', value: '40+ hrs', icon: Zap }
  ];

  return (
    <>
      <Helmet>
        <title>Demo - Zion Tech Group | See Our AI Solutions in Action</title>
        <meta name="description" content="Experience our AI solutions firsthand. Interactive demos of our analytics, chatbot, content generation, and cybersecurity tools. See the power of AI for your business." />
        <meta name="keywords" content="AI demo, technology demo, AI solutions demo, business automation demo, AI analytics demo, chatbot demo" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              See Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">AI Solutions</span> in Action
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Experience the power of our AI solutions through interactive demos. See how we can transform your business operations.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-12">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-purple-400" />
                    </div>
                    <div className="text-2xl font-bold text-white mb-2">{stat.value}</div>
                    <div className="text-gray-300 text-sm">{stat.label}</div>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 flex items-center justify-center group">
                <Play className="w-5 h-5 mr-2" />
                Start Interactive Demo
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <Link
                to="/contact"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
              >
                Schedule Live Demo
              </Link>
            </div>
          </div>
        </section>

        {/* Demo Selection */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Choose Your Demo</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Select the AI solution you'd like to explore. Each demo is designed to show real-world applications.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {demos.map((demo) => (
                <div
                  key={demo.id}
                  onClick={() => setSelectedDemo(demo.id)}
                  className={`cursor-pointer bg-white/10 backdrop-blur-lg rounded-2xl p-6 border transition-all duration-300 hover:scale-105 ${
                    selectedDemo === demo.id
                      ? 'border-purple-400 shadow-2xl shadow-purple-500/25'
                      : 'border-white/20 hover:border-purple-400'
                  }`}
                >
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${demo.color} flex items-center justify-center mx-auto mb-4`}>
                    {demo.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 text-center">{demo.title}</h3>
                  <p className="text-gray-300 text-sm mb-4 text-center">{demo.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    {demo.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <span>Duration: {demo.duration}</span>
                    <span>Level: {demo.difficulty}</span>
                  </div>

                  <button className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
                    selectedDemo === demo.id
                      ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white'
                      : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                  }`}>
                    {selectedDemo === demo.id ? 'Selected' : 'Select Demo'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Interactive Demo Section */}
        <section className="py-16 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Interactive Demo</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience our AI solutions with hands-on interactive demos.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Demo Video/Interface */}
                <div className="space-y-6">
                  <div className="aspect-video bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
                    <div className="text-center text-white">
                      <Play className="w-16 h-16 mx-auto mb-4 opacity-80" />
                      <h3 className="text-xl font-semibold mb-2">
                        {demos.find(d => d.id === selectedDemo)?.title} Demo
                      </h3>
                      <p className="text-sm opacity-80">
                        Click play to start the interactive demo
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <button className="flex-1 bg-gradient-to-r from-purple-500 to-blue-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 flex items-center justify-center">
                      <Play className="w-5 h-5 mr-2" />
                      Play Demo
                    </button>
                    <button className="flex-1 bg-white/10 text-white py-3 px-6 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300">
                      Download PDF
                    </button>
                  </div>
                </div>

                {/* Demo Details */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {demos.find(d => d.id === selectedDemo)?.title}
                    </h3>
                    <p className="text-gray-300 mb-6">
                      {demos.find(d => d.id === selectedDemo)?.description}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-white">What You'll Learn:</h4>
                    <ul className="space-y-2">
                      {demos.find(d => d.id === selectedDemo)?.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-300">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-white/5 rounded-xl p-6">
                    <h4 className="text-lg font-semibold text-white mb-4">Demo Information</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-300">Duration:</span>
                        <span className="text-white font-medium">
                          {demos.find(d => d.id === selectedDemo)?.duration}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">Difficulty:</span>
                        <span className="text-white font-medium">
                          {demos.find(d => d.id === selectedDemo)?.difficulty}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">Format:</span>
                        <span className="text-white font-medium">Interactive</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">What Our Clients Say</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what business leaders say about our AI solutions after experiencing our demos.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-purple-400 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Schedule a personalized demo with our experts and see how our AI solutions can work for your specific needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
                >
                  Schedule Live Demo
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/consultation"
                  className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <Mail className="w-5 h-5" />
                  Contact Sales
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default DemoPage;
