'use client';
import React, { useState } from 'react';
import { Play, Calendar, Phone, Mail, CheckCircle, ArrowRight, Star, Users, Clock, Brain, Cloud, Shield, Settings, Globe, Database, Zap, Eye, Sparkles, BookOpen, FileText, Download } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

export default function DemoPage() {
  const [selectedDemo, setSelectedDemo] = useState('ai');
  const [isPlaying, setIsPlaying] = useState(false);

  const demos = [
    {
      id: 'ai',
      title: 'AI Solutions Demo',
      description: 'Experience our cutting-edge AI capabilities including natural language processing, computer vision, and predictive analytics.',
      duration: '15 minutes',
      features: ['Text Analysis', 'Image Recognition', 'Predictive Models', 'Real-time Processing'],
      icon: Brain
    },
    {
      id: 'cloud',
      title: 'Cloud Infrastructure Demo',
      description: 'See how our cloud solutions can scale your business with automated deployment, monitoring, and security.',
      duration: '20 minutes',
      features: ['Auto-scaling', 'Load Balancing', 'Security Monitoring', 'Cost Optimization'],
      icon: Cloud
    },
    {
      id: 'analytics',
      title: 'Data Analytics Demo',
      description: 'Transform your data into actionable insights with our advanced analytics and visualization tools.',
      duration: '12 minutes',
      features: ['Data Visualization', 'Real-time Dashboards', 'Predictive Analytics', 'Custom Reports'],
      icon: Database
    }
  ];

  const benefits = [
    {
      icon: CheckCircle,
      title: 'Hands-on Experience',
      description: 'Try our solutions in a real environment'
    },
    {
      icon: Users,
      title: 'Expert Guidance',
      description: 'Get personalized recommendations from our team'
    },
    {
      icon: Clock,
      title: 'Quick Setup',
      description: 'Start your demo in just a few minutes'
    },
    {
      icon: Star,
      title: 'Customized Demo',
      description: 'Tailored to your specific business needs'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechCorp Inc.',
      role: 'CTO',
      content: 'The demo was incredibly insightful. We could see exactly how the AI solutions would fit into our workflow.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'DataFlow Systems',
      role: 'Head of Engineering',
      content: 'The cloud infrastructure demo showed us the scalability we needed. Implementation was seamless.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'Analytics Plus',
      role: 'Data Director',
      content: 'The analytics demo transformed how we think about our data. The insights were game-changing.',
      rating: 5
    }
  ];

  const selectedDemoData = demos.find(demo => demo.id === selectedDemo);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOOptimizer 
        title="Request a Demo - Zion Tech Group"
        description="See our AI and IT solutions in action. Schedule a personalized demo to discover how we can transform your business."
        keywords="demo, AI demo, cloud demo, data analytics demo, personalized demo, business transformation"
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            See It In
            <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Action
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Experience our AI and IT solutions firsthand. Schedule a personalized demo 
            and discover how we can transform your business.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
              <Play className="inline-block mr-2 w-5 h-5" />
              Watch Demo
            </button>
            <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              <Calendar className="inline-block mr-2 w-5 h-5" />
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      {/* Demo Types */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Choose Your Demo</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {demos.map((demo) => (
              <div
                key={demo.id}
                onClick={() => setSelectedDemo(demo.id)}
                className={`bg-white/5 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 cursor-pointer ${
                  selectedDemo === demo.id
                    ? 'border-purple-500/50 bg-purple-500/10'
                    : 'border-white/10 hover:border-purple-500/30'
                }`}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  <demo.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{demo.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{demo.description}</p>
                
                <div className="mb-6">
                  <div className="flex items-center gap-2 text-purple-400 mb-4">
                    <Clock className="w-4 h-4" />
                    <span className="font-medium">{demo.duration}</span>
                  </div>
                  
                  <ul className="space-y-2">
                    {demo.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button className="w-full bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
                  Start Demo
                  <ArrowRight className="inline-block ml-2 w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Demo Details */}
      {selectedDemoData && (
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">{selectedDemoData.title}</h3>
                  <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                    {selectedDemoData.description}
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-purple-400" />
                      <span className="text-white">Duration: {selectedDemoData.duration}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="w-5 h-5 text-purple-400" />
                      <span className="text-white">Personalized for your business</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-purple-400" />
                      <span className="text-white">No commitment required</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-slate-900 rounded-xl p-6">
                  <div className="aspect-video bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                    >
                      <Play className="w-6 h-6 text-white ml-1" />
                    </button>
                  </div>
                  <p className="text-gray-400 text-sm text-center">
                    Click to preview {selectedDemoData.title}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Benefits */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Why Choose Our Demo?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-gray-400 text-sm">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-blue-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Schedule your personalized demo today and see how we can transform your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
              <Calendar className="inline-block mr-2 w-5 h-5" />
              Schedule Demo
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-purple-600 transition-colors">
              <Phone className="inline-block mr-2 w-5 h-5" />
              Call Us
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
