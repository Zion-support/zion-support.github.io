'use client';
import React, { useState } from 'react';
import { Play, CheckCircle, ArrowRight, Zap, Brain, Cloud, Shield, Users, Award, Star } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const DemoPage: React.FC = () => {
  const [selectedDemo, setSelectedDemo] = useState('ai-chatbot');
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const demos = [
    {
      id: 'ai-chatbot',
      title: 'AI Chatbot Demo',
      description: 'Experience our intelligent customer service chatbot in action',
      duration: '5 min',
      category: 'AI Services',
      icon: Brain,
      features: ['Natural language processing', 'Multi-language support', 'Context awareness', 'Integration ready']
    },
    {
      id: 'data-analytics',
      title: 'AI Data Analytics',
      description: 'See how our AI transforms raw data into actionable insights',
      duration: '7 min',
      category: 'AI Services',
      icon: Zap,
      features: ['Real-time analysis', 'Predictive modeling', 'Visual dashboards', 'Automated reports']
    },
    {
      id: 'cloud-migration',
      title: 'Cloud Migration',
      description: 'Watch our seamless cloud migration process',
      duration: '6 min',
      category: 'IT Services',
      icon: Cloud,
      features: ['Zero downtime', 'Data security', 'Cost optimization', 'Scalability']
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity Suite',
      description: 'Explore our comprehensive security solutions',
      duration: '8 min',
      category: 'IT Services',
      icon: Shield,
      features: ['Threat detection', 'Real-time monitoring', 'Incident response', 'Compliance']
    }
  ];

  const benefits = [
    {
      icon: CheckCircle,
      title: 'No Commitment Required',
      description: 'Try our solutions risk-free with no obligation to purchase'
    },
    {
      icon: Users,
      title: 'Expert Guidance',
      description: 'Get personalized recommendations from our AI specialists'
    },
    {
      icon: Award,
      title: 'Proven Results',
      description: 'See real case studies and success stories from our clients'
    },
    {
      icon: Star,
      title: 'Custom Solutions',
      description: 'Discover how we can tailor solutions to your specific needs'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechCorp Inc.',
      role: 'CTO',
      content: 'The AI chatbot demo was incredible. We saw immediate improvements in customer satisfaction.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'DataFlow Systems',
      role: 'Data Director',
      content: 'The analytics demo showed us insights we never knew existed in our data.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'SecureNet LLC',
      role: 'Security Manager',
      content: 'The cybersecurity demo convinced us to upgrade our entire security infrastructure.',
      rating: 5
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="Request Demo - Zion Tech Group AI Solutions"
        description="Experience our AI and IT solutions firsthand. Schedule a personalized demo to see how we can transform your business."
        keywords={['AI demo', 'IT services demo', 'technology demonstration', 'AI solutions demo', 'business transformation demo']}
        canonicalUrl="https://ziontechgroup.com/demo"
      />
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
              See Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Solutions</span> in Action
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Experience the power of AI and cutting-edge technology through our interactive demos. 
              See how we can transform your business processes and drive real results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all text-lg">
                <Play className="w-6 h-6 mr-2" />
                Watch Live Demo
              </button>
              <button className="inline-flex items-center bg-slate-800 text-white px-8 py-4 rounded-lg font-semibold hover:bg-slate-700 transition-all border border-gray-600 text-lg">
                Schedule Personal Demo
              </button>
            </div>
          </div>
        </section>

        {/* Demo Selection */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Choose Your Demo</h2>
              <p className="text-gray-400">Select the solution you'd like to explore</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {demos.map((demo) => (
                <div
                  key={demo.id}
                  onClick={() => setSelectedDemo(demo.id)}
                  className={`cursor-pointer bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border-2 transition-all duration-300 hover:scale-105 ${
                    selectedDemo === demo.id
                      ? 'border-cyan-500 shadow-2xl shadow-cyan-500/20'
                      : 'border-gray-700 hover:border-cyan-500'
                  }`}
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                      <demo.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{demo.title}</h3>
                      <p className="text-sm text-gray-400">{demo.duration}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4">{demo.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {demo.features.map((feature, index) => (
                      <span key={index} className="text-xs bg-slate-700 text-gray-300 px-2 py-1 rounded">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Video Demo Section */}
        <section className="py-16 px-4 bg-slate-800/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">
                {demos.find(d => d.id === selectedDemo)?.title} Demo
              </h2>
              <p className="text-gray-400">
                {demos.find(d => d.id === selectedDemo)?.description}
              </p>
            </div>
            
            <div className="relative bg-slate-900 rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                {!isVideoPlaying ? (
                  <button
                    onClick={() => setIsVideoPlaying(true)}
                    className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center hover:from-cyan-600 hover:to-blue-700 transition-all shadow-2xl"
                  >
                    <Play className="w-8 h-8 text-white ml-1" />
                  </button>
                ) : (
                  <div className="w-full h-full bg-slate-800 flex items-center justify-center">
                    <p className="text-gray-400">Demo video would play here</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Why Choose Our Demos?</h2>
              <p className="text-gray-400">Experience the difference of working with industry leaders</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-400">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 px-4 bg-slate-800/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">What Our Clients Say</h2>
              <p className="text-gray-400">Real feedback from businesses that transformed with our solutions</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4">"{testimonial.content}"</p>
                  <div>
                    <p className="text-white font-semibold">{testimonial.name}</p>
                    <p className="text-gray-400 text-sm">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to See More?</h2>
            <p className="text-gray-300 mb-8">
              Schedule a personalized demo tailored to your specific business needs and challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all"
              >
                Schedule Personal Demo
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="/pricing"
                className="inline-flex items-center bg-slate-800 text-white px-8 py-4 rounded-lg font-semibold hover:bg-slate-700 transition-all border border-gray-600"
              >
                View Pricing
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default DemoPage;