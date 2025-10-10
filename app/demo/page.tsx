'use client';
import React, { useState } from 'react';
import { Play, Calendar, Phone, Mail, CheckCircle, ArrowRight, Star, Users, Clock, Brain, Cloud, Shield, BarChart, Code, Settings, Globe, Lock, Award, Target, MapPin, Sparkles, Activity, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar as CalendarIcon, Clock3, Compass, Navigation as NavIcon, PieChart, TrendingDown, TrendingUp, Eye, MessageSquare, Zap } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const DemoPage: React.FC = () => {
  const [selectedDemo, setSelectedDemo] = useState('ai-services');

  const demos = [
    {
      id: 'ai-services',
      title: 'AI Services Demo',
      description: 'Experience our AI-powered solutions including content generation, analytics, and automation',
      duration: '30 minutes',
      features: [
        'AI Content Generation',
        'Predictive Analytics',
        'Workflow Automation',
        'Natural Language Processing'
      ],
      icon: Brain,
      color: 'from-purple-500 to-blue-600'
    },
    {
      id: 'cloud-platform',
      title: 'Cloud Platform Demo',
      description: 'See how our cloud infrastructure can scale your applications and improve performance',
      duration: '25 minutes',
      features: [
        'Auto-scaling Infrastructure',
        'Load Balancing',
        'Database Optimization',
        'Security Features'
      ],
      icon: Cloud,
      color: 'from-blue-500 to-cyan-600'
    },
    {
      id: 'analytics-dashboard',
      title: 'Analytics Dashboard Demo',
      description: 'Explore our comprehensive analytics platform with real-time insights and reporting',
      duration: '20 minutes',
      features: [
        'Real-time Dashboards',
        'Custom Reports',
        'Data Visualization',
        'Performance Metrics'
      ],
      icon: BarChart,
      color: 'from-green-500 to-emerald-600'
    },
    {
      id: 'security-suite',
      title: 'Security Suite Demo',
      description: 'Learn about our enterprise-grade security solutions and compliance features',
      duration: '35 minutes',
      features: [
        'Threat Detection',
        'Access Controls',
        'Data Encryption',
        'Compliance Reporting'
      ],
      icon: Shield,
      color: 'from-red-500 to-pink-600'
    },
    {
      id: 'api-platform',
      title: 'API Platform Demo',
      description: 'Discover our comprehensive API platform with documentation and testing tools',
      duration: '15 minutes',
      features: [
        'API Documentation',
        'Testing Tools',
        'SDK Libraries',
        'Rate Limiting'
      ],
      icon: Code,
      color: 'from-orange-500 to-yellow-600'
    },
    {
      id: 'custom-solution',
      title: 'Custom Solution Demo',
      description: 'See how we can build a tailored solution for your specific business needs',
      duration: '45 minutes',
      features: [
        'Requirements Analysis',
        'Custom Development',
        'Integration Planning',
        'Deployment Strategy'
      ],
      icon: Settings,
      color: 'from-indigo-500 to-purple-600'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CTO',
      company: 'TechCorp Inc.',
      content: 'The AI demo was incredible. We could see exactly how it would fit into our workflow.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'VP of Engineering',
      company: 'StartupXYZ',
      content: 'The cloud platform demo showed us the scalability we needed for our growing business.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Analytics',
      company: 'DataFlow Ltd.',
      content: 'The analytics dashboard demo was exactly what we were looking for. Very impressive!',
      rating: 5
    }
  ];

  const selectedDemoData = demos.find(demo => demo.id === selectedDemo);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Live
            <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Demos
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Experience our solutions firsthand with interactive demos tailored to your business needs.
          </p>
        </div>
      </section>

      {/* Demo Selection */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Choose Your Demo</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {demos.map((demo) => (
              <div
                key={demo.id}
                onClick={() => setSelectedDemo(demo.id)}
                className={`bg-white/5 backdrop-blur-sm border rounded-xl p-6 cursor-pointer transition-all duration-300 hover:bg-white/10 ${
                  selectedDemo === demo.id ? 'border-purple-400 bg-purple-500/10' : 'border-white/10'
                }`}
              >
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${demo.color} flex items-center justify-center mr-4`}>
                    <demo.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{demo.title}</h3>
                    <p className="text-sm text-gray-400">{demo.duration}</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">{demo.description}</p>
                <ul className="space-y-2">
                  {demo.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Demo Details */}
      {selectedDemoData && (
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-white mb-6">{selectedDemoData.title}</h2>
                <p className="text-xl text-gray-300 mb-8">{selectedDemoData.description}</p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-purple-400 mr-3" />
                    <span className="text-gray-300">Duration: {selectedDemoData.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-5 h-5 text-purple-400 mr-3" />
                    <span className="text-gray-300">Perfect for: Technical teams, decision makers</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="w-5 h-5 text-purple-400 mr-3" />
                    <span className="text-gray-300">Interactive and hands-on experience</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                    <Play className="inline-block mr-2 w-5 h-5" />
                    Start Demo
                  </button>
                  <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                    <Calendar className="inline-block mr-2 w-5 h-5" />
                    Schedule Demo
                  </button>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">What You'll See</h3>
                <ul className="space-y-4">
                  {selectedDemoData.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-1" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
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
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to See It in Action?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Book a personalized demo with our experts and discover how our solutions can transform your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Book Demo Now
            </button>
            <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DemoPage;