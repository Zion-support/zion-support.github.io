import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Play, Calendar, Clock, CheckCircle, ArrowRight, Star, Users, Shield, Zap, Globe } from 'lucide-react';

const DemoPage = () => {
  const [selectedDemo, setSelectedDemo] = useState('ai-analytics');

  const demos = [
    {
      id: 'ai-analytics',
      title: 'AI Analytics Dashboard',
      description: 'See how our AI-powered analytics can transform your business intelligence',
      duration: '15 minutes',
      features: ['Real-time data visualization', 'Predictive analytics', 'Custom dashboards', 'Automated insights'],
      icon: <Users className="w-8 h-8" />
    },
    {
      id: 'ai-security',
      title: 'AI Cybersecurity Suite',
      description: 'Experience advanced threat detection and automated security responses',
      duration: '20 minutes',
      features: ['Threat detection', 'Automated response', 'Compliance monitoring', 'Security analytics'],
      icon: <Shield className="w-8 h-8" />
    },
    {
      id: 'ai-content',
      title: 'AI Content Generation',
      description: 'Watch AI create high-quality content for your marketing and communications',
      duration: '10 minutes',
      features: ['Content creation', 'Brand consistency', 'Multi-language support', 'SEO optimization'],
      icon: <Zap className="w-8 h-8" />
    },
    {
      id: 'micro-saas',
      title: 'Micro SAAS Solutions',
      description: 'Explore our ready-to-use software solutions for immediate deployment',
      duration: '25 minutes',
      features: ['Quick deployment', 'Custom configuration', 'Integration options', 'Scalability'],
      icon: <Globe className="w-8 h-8" />
    }
  ];

  const benefits = [
    {
      title: 'Live Product Demo',
      description: 'See our solutions in action with real data and scenarios',
      icon: <Play className="w-6 h-6" />
    },
    {
      title: 'Expert Consultation',
      description: 'Get personalized recommendations from our AI specialists',
      icon: <Users className="w-6 h-6" />
    },
    {
      title: 'Custom Use Cases',
      description: 'Discuss how our solutions can address your specific needs',
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      title: 'Q&A Session',
      description: 'Ask questions and get immediate answers from our experts',
      icon: <Star className="w-6 h-6" />
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      role: "CEO",
      content: "The demo was incredibly insightful. We could see exactly how the AI solutions would fit into our workflow.",
      rating: 5
    },
    {
      name: "Michael Chen",
      company: "E-commerce Solutions",
      role: "CTO",
      content: "The team was knowledgeable and answered all our technical questions. Highly recommend scheduling a demo.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      company: "Digital Marketing Agency",
      role: "Operations Director",
      content: "The demo helped us understand the ROI potential. We signed up immediately after the session.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Book a Demo - Zion Tech Group | See Our AI Solutions in Action</title>
        <meta name="description" content="Schedule a personalized demo of our AI solutions and micro SAAS products. See how we can transform your business with cutting-edge technology." />
        <meta name="keywords" content="demo, AI demo, technology demo, business consultation, AI solutions demo" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              See It In Action
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
            Schedule a personalized demo and discover how our AI solutions can transform your business. 
            See real results with your own data.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105">
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Demo
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105">
              <Play className="w-5 h-5 mr-2" />
              Watch Video Demo
            </button>
          </div>
        </div>
      </section>

      {/* Demo Options */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Choose Your Demo</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Select the solution you'd like to see in action
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {demos.map((demo) => (
              <button
                key={demo.id}
                onClick={() => setSelectedDemo(demo.id)}
                className={`group p-6 rounded-xl border transition-all duration-300 text-left ${
                  selectedDemo === demo.id
                    ? 'bg-white/20 border-cyan-400 shadow-cyan-500/25'
                    : 'bg-white/10 border-white/20 hover:bg-white/15 hover:border-cyan-400/50'
                }`}
              >
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center text-white mr-4 ${
                    selectedDemo === demo.id ? 'scale-110' : 'group-hover:scale-105'
                  } transition-transform`}>
                    {demo.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{demo.title}</h3>
                    <div className="flex items-center text-gray-400 text-sm">
                      <Clock className="w-4 h-4 mr-1" />
                      {demo.duration}
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 text-sm mb-4">{demo.description}</p>
                <ul className="space-y-1">
                  {demo.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-3 h-3 text-cyan-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </button>
            ))}
          </div>

          {/* Selected Demo Details */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {demos.find(d => d.id === selectedDemo)?.title} Demo
                </h3>
                <p className="text-gray-300 mb-6">
                  {demos.find(d => d.id === selectedDemo)?.description}
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-cyan-400 mr-3" />
                    <span className="text-gray-300">Duration: {demos.find(d => d.id === selectedDemo)?.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-5 h-5 text-cyan-400 mr-3" />
                    <span className="text-gray-300">Up to 5 participants</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 text-cyan-400 mr-3" />
                    <span className="text-gray-300">Available weekdays 9 AM - 6 PM EST</span>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-r from-cyan-900/30 to-purple-900/30 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-white mb-4">What You'll See</h4>
                <ul className="space-y-3">
                  {demos.find(d => d.id === selectedDemo)?.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full mt-6 bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group">
                  Schedule This Demo
                  <ArrowRight className="w-4 h-4 ml-2 inline group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Schedule a Demo?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get the most out of your demo experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Hear from businesses that have experienced our demos
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to See the Future?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Book your personalized demo today and discover how our AI solutions can transform your business.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105">
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Your Demo
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="/contact"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              Contact Sales
              <Users className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DemoPage;