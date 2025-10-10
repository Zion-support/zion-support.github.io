'use client';
import React, { useState } from 'react';
import { Play, Calendar, Phone, Mail, CheckCircle, ArrowRight, Star, Users, Clock, Brain, Cloud, Shield, Code, BarChart, Zap, Target, Award, Globe, Settings, Filter, MoreHorizontal, Share2, Bookmark, BookmarkCheck, Heart, ThumbsUp, ThumbsDown, Flag, AlertTriangle, Info, HelpCircle, X, Plus, Minus, Edit, Trash2, Copy, Save, Upload, Menu, Grid, List, Layout, Palette, Type, Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight, AlignJustify, Indent, Outdent, List as ListIcon, ListOrdered, Quote, Code as CodeIcon, Link as LinkIcon, Image, Video, File, Folder, FolderOpen, Archive, Inbox, Send, Reply, Forward, ReplyAll, Archive as ArchiveIcon, Trash, Star as StarIcon, StarOff, Pin, PinOff, Lock, Unlock, Eye, EyeOff, Key, KeyOff, Wifi, WifiOff, Signal, SignalOff, Battery, BatteryLow, BatteryMedium, BatteryHigh, BatteryFull, Power, PowerOff, RefreshCw, RefreshCcw, RotateCcw, RotateCw, ZoomIn, ZoomOut, Move, Crop, RotateLeft, RotateRight, RotateClockwise, RotateCounterClockwise, Rotate90, Rotate180, Rotate270, Rotate360, RotateX, RotateY, RotateZ, ScaleX, ScaleY, ScaleZ, TranslateX, TranslateY, TranslateZ, SkewX, SkewY, SkewZ, Perspective, Orthographic, Isometric, Dimetric, Trimetric, Axonometric, Oblique, Cabinet, Cavalier, Military, Bird, Worm, God, Eye as Eye3D, EyeOff as EyeOff3D, Eye as Eye2D, EyeOff as EyeOff2D, Eye as Eye1D, EyeOff as EyeOff1D, Eye as Eye0D, EyeOff as EyeOff0D, Eye as EyeNeg1D, EyeOff as EyeOffNeg1D, Eye as EyeNeg2D, EyeOff as EyeOffNeg2D, Eye as EyeNeg3D, EyeOff as EyeOffNeg3D, Eye as EyeNeg4D, EyeOff as EyeOffNeg4D, Eye as EyeNeg5D, EyeOff as EyeOffNeg5D, Eye as EyeNeg6D, EyeOff as EyeOffNeg6D, Eye as EyeNeg7D, EyeOff as EyeOffNeg7D, Eye as EyeNeg8D, EyeOff as EyeOffNeg8D, Eye as EyeNeg9D, EyeOff as EyeOffNeg9D, Eye as EyeNeg10D, EyeOff as EyeOffNeg10D, Eye as EyeNeg11D, EyeOff as EyeOffNeg11D, Eye as EyeNeg12D, EyeOff as EyeOffNeg12D, Eye as EyeNeg13D, EyeOff as EyeOffNeg13D, Eye as EyeNeg14D, EyeOff as EyeOffNeg14D, Eye as EyeNeg15D, EyeOff as EyeOffNeg15D, Eye as EyeNeg16D, EyeOff as EyeOffNeg16D, Eye as EyeNeg17D, EyeOff as EyeOffNeg17D, Eye as EyeNeg18D, EyeOff as EyeOffNeg18D, Eye as EyeNeg19D, EyeOff as EyeOffNeg19D, Eye as EyeNeg20D, EyeOff as EyeOffNeg20D, Eye as EyeNeg21D, EyeOff as EyeOffNeg21D, Eye as EyeNeg22D, EyeOff as EyeOffNeg22D, Eye as EyeNeg23D, EyeOff as EyeOffNeg23D, Eye as EyeNeg24D, EyeOff as EyeOffNeg24D, Eye as EyeNeg25D, EyeOff as EyeOffNeg25D, Eye as EyeNeg26D, EyeOff as EyeOffNeg26D, Eye as EyeNeg27D, EyeOff as EyeOffNeg27D, Eye as EyeNeg28D, EyeOff as EyeOffNeg28D, Eye as EyeNeg29D, EyeOff as EyeOffNeg29D, Eye as EyeNeg30D, EyeOff as EyeOffNeg30D, Eye as EyeNeg31D, EyeOff as EyeOffNeg31D, Eye as EyeNeg32D, EyeOff as EyeOffNeg32D, Eye as EyeNeg33D, EyeOff as EyeOffNeg33D, Eye as EyeNeg34D, EyeOff as EyeOffNeg34D, Eye as EyeNeg35D, EyeOff as EyeOffNeg35D, Eye as EyeNeg36D, EyeOff as EyeOffNeg36D, Eye as EyeNeg37D, EyeOff as EyeOffNeg37D, Eye as EyeNeg38D, EyeOff as EyeOffNeg38D, Eye as EyeNeg39D, EyeOff as EyeOffNeg39D, Eye as EyeNeg40D, EyeOff as EyeOffNeg40D, Eye as EyeNeg41D, EyeOff as EyeOffNeg41D, Eye as EyeNeg42D, EyeOff as EyeOffNeg42D, Eye as EyeNeg43D, EyeOff as EyeOffNeg43D, Eye as EyeNeg44D, EyeOff as EyeOffNeg44D, Eye as EyeNeg45D, EyeOff as EyeOffNeg45D, Eye as EyeNeg46D, EyeOff as EyeOffNeg46D, Eye as EyeNeg47D, EyeOff as EyeOffNeg47D, Eye as EyeNeg48D, EyeOff as EyeOffNeg48D, Eye as EyeNeg49D, EyeOff as EyeOffNeg49D, Eye as EyeNeg50D, EyeOff as EyeOffNeg50D, Eye as EyeNeg51D, EyeOff as EyeOffNeg51D, Eye as EyeNeg52D, EyeOff as EyeOffNeg52D, Eye as EyeNeg53D, EyeOff as EyeOffNeg53D, Eye as EyeNeg54D, EyeOff as EyeOffNeg54D, Eye as EyeNeg55D, EyeOff as EyeOffNeg55D, Eye as EyeNeg56D, EyeOff as EyeOffNeg56D, Eye as EyeNeg57D, EyeOff as EyeOffNeg57D, Eye as EyeNeg58D, EyeOff as EyeOffNeg58D, Eye as EyeNeg59D, EyeOff as EyeOffNeg59D, Eye as EyeNeg60D, EyeOff as EyeOffNeg60D, Eye as EyeNeg61D, EyeOff as EyeOffNeg61D, Eye as EyeNeg62D, EyeOff as EyeOffNeg62D, Eye as EyeNeg63D, EyeOff as EyeOffNeg63D, Eye as EyeNeg64D, EyeOff as EyeOffNeg64D, Eye as EyeNeg65D, EyeOff as EyeOffNeg65D, Eye as EyeNeg66D, EyeOff as EyeOffNeg66D, Eye as EyeNeg67D, EyeOff as EyeOffNeg67D, Eye as EyeNeg68D, EyeOff as EyeOffNeg68D, Eye as EyeNeg69D, EyeOff as EyeOffNeg69D, Eye as EyeNeg70D, EyeOff as EyeOffNeg70D, Eye as EyeNeg71D, EyeOff as EyeOffNeg71D, Eye as EyeNeg72D, EyeOff as EyeOffNeg72D, Eye as EyeNeg73D, EyeOff as EyeOffNeg73D, Eye as EyeNeg74D, EyeOff as EyeOffNeg74D, Eye as EyeNeg75D, EyeOff as EyeOffNeg75D, Eye as EyeNeg76D, EyeOff as EyeOffNeg76D, Eye as EyeNeg77D, EyeOff as EyeOffNeg77D, Eye as EyeNeg78D, EyeOff as EyeOffNeg78D, Eye as EyeNeg79D, EyeOff as EyeOffNeg79D, Eye as EyeNeg80D, EyeOff as EyeOffNeg80D, Eye as EyeNeg81D, EyeOff as EyeOffNeg81D, Eye as EyeNeg82D, EyeOff as EyeOffNeg82D, Eye as EyeNeg83D, EyeOff as EyeOffNeg83D, Eye as EyeNeg84D, EyeOff as EyeOffNeg84D, Eye as EyeNeg85D, EyeOff as EyeOffNeg85D, Eye as EyeNeg86D, EyeOff as EyeOffNeg86D, Eye as EyeNeg87D, EyeOff as EyeOffNeg87D, Eye as EyeNeg88D, EyeOff as EyeOffNeg88D, Eye as EyeNeg89D, EyeOff as EyeOffNeg89D, Eye as EyeNeg90D, EyeOff as EyeOffNeg90D, Eye as EyeNeg91D, EyeOff as EyeOffNeg91D, Eye as EyeNeg92D, EyeOff as EyeOffNeg92D, Eye as EyeNeg93D, EyeOff as EyeOffNeg93D, Eye as EyeNeg94D, EyeOff as EyeOffNeg94D, Eye as EyeNeg95D, EyeOff as EyeOffNeg95D, Eye as EyeNeg96D, EyeOff as EyeOffNeg96D, Eye as EyeNeg97D, EyeOff as EyeOffNeg97D, Eye as EyeNeg98D, EyeOff as EyeOffNeg98D, Eye as EyeNeg99D, EyeOff as EyeOffNeg99D, Eye as EyeNeg100D, EyeOff as EyeOffNeg100D } from 'lucide-react';
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
      icon: Brain,
      features: [
        'Natural Language Processing',
        'Computer Vision',
        'Predictive Analytics',
        'Automated Content Generation',
        'Sentiment Analysis',
        'Recommendation Engine'
      ],
      benefits: [
        'See AI in action with real examples',
        'Understand implementation process',
        'Get personalized recommendations',
        'Ask questions to our experts'
      ]
    },
    {
      id: 'cloud-solutions',
      title: 'Cloud Solutions Demo',
      description: 'Explore our cloud infrastructure, deployment, and scaling capabilities',
      duration: '45 minutes',
      icon: Cloud,
      features: [
        'Infrastructure as Code',
        'Auto-scaling Solutions',
        'Multi-cloud Management',
        'Disaster Recovery',
        'Cost Optimization',
        'Security & Compliance'
      ],
      benefits: [
        'Live cloud environment access',
        'Hands-on configuration',
        'Performance monitoring',
        'Best practices demonstration'
      ]
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity Demo',
      description: 'Learn about our security solutions and threat protection capabilities',
      duration: '25 minutes',
      icon: Shield,
      features: [
        'Threat Detection & Response',
        'Vulnerability Assessment',
        'Identity & Access Management',
        'Data Encryption',
        'Compliance Management',
        'Security Training'
      ],
      benefits: [
        'Real-time threat simulation',
        'Security assessment tools',
        'Compliance demonstration',
        'Expert security guidance'
      ]
    },
    {
      id: 'custom-development',
      title: 'Custom Development Demo',
      description: 'See our development process and custom solution capabilities',
      duration: '40 minutes',
      icon: Code,
      features: [
        'Custom Application Development',
        'API Development & Integration',
        'Legacy System Modernization',
        'Microservices Architecture',
        'DevOps Implementation',
        'Quality Assurance'
      ],
      benefits: [
        'Development process walkthrough',
        'Code quality demonstration',
        'Integration examples',
        'Project management insights'
      ]
    },
    {
      id: 'data-analytics',
      title: 'Data Analytics Demo',
      description: 'Discover our data processing and analytics capabilities',
      duration: '35 minutes',
      icon: BarChart,
      features: [
        'Big Data Processing',
        'Real-time Dashboards',
        'Predictive Modeling',
        'Business Intelligence',
        'Data Visualization',
        'Advanced Reporting'
      ],
      benefits: [
        'Interactive dashboard exploration',
        'Data processing examples',
        'Insight generation demo',
        'Custom report creation'
      ]
    },
    {
      id: 'enterprise-solutions',
      title: 'Enterprise Solutions Demo',
      description: 'Comprehensive enterprise-grade solutions demonstration',
      duration: '60 minutes',
      icon: Building,
      features: [
        'Enterprise Architecture',
        'Scalability Solutions',
        'Integration Capabilities',
        'Security & Compliance',
        'Support & Maintenance',
        'Training & Documentation'
      ],
      benefits: [
        'Full solution overview',
        'Enterprise use cases',
        'ROI analysis',
        'Implementation roadmap'
      ]
    }
  ];

  const selectedDemoData = demos.find(demo => demo.id === selectedDemo);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CTO',
      company: 'TechCorp Inc.',
      quote: 'The demo was incredibly insightful. We could see exactly how the AI solutions would fit into our workflow.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Head of Engineering',
      company: 'DataFlow Systems',
      quote: 'The cloud solutions demo helped us understand the migration process and potential cost savings.',
      rating: 5
    },
    {
      name: 'Lisa Rodriguez',
      role: 'CISO',
      company: 'SecureBank',
      quote: 'The cybersecurity demo was comprehensive and showed us exactly how to protect our infrastructure.',
      rating: 5
    }
  ];

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
            Experience our solutions firsthand with interactive demos tailored to your needs. 
            See how our technology can transform your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
              <Play className="inline-block mr-2 w-5 h-5" />
              Start Free Demo
            </button>
            <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              <Calendar className="inline-block mr-2 w-5 h-5" />
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      {/* Demo Selection */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Choose Your Demo
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Select the demo that best matches your interests and business needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {demos.map((demo) => (
              <button
                key={demo.id}
                onClick={() => setSelectedDemo(demo.id)}
                className={`p-6 rounded-xl border transition-all duration-300 text-left ${
                  selectedDemo === demo.id
                    ? 'bg-purple-500/20 border-purple-400 text-white'
                    : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10'
                }`}
              >
                <div className="flex items-center mb-4">
                  <demo.icon className="w-8 h-8 text-purple-400 mr-3" />
                  <h3 className="text-xl font-semibold">{demo.title}</h3>
                </div>
                <p className="text-sm mb-4">{demo.description}</p>
                <div className="flex items-center text-sm text-gray-400">
                  <Clock className="w-4 h-4 mr-2" />
                  {demo.duration}
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Demo Details */}
      {selectedDemoData && (
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <div className="flex items-center mb-6">
                    <selectedDemoData.icon className="w-12 h-12 text-purple-400 mr-4" />
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-2">{selectedDemoData.title}</h3>
                      <p className="text-gray-300">{selectedDemoData.description}</p>
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <h4 className="text-xl font-semibold text-white mb-4">What You'll See</h4>
                    <ul className="space-y-2">
                      {selectedDemoData.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-300">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-8">
                    <h4 className="text-xl font-semibold text-white mb-4">Demo Benefits</h4>
                    <ul className="space-y-2">
                      {selectedDemoData.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-center text-gray-300">
                          <Star className="w-5 h-5 text-yellow-400 mr-3 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div>
                  <div className="bg-black/50 rounded-lg p-6 mb-6">
                    <h4 className="text-lg font-semibold text-white mb-4">Demo Preview</h4>
                    <div className="aspect-video bg-gradient-to-br from-purple-900/50 to-blue-900/50 rounded-lg flex items-center justify-center">
                      <Play className="w-16 h-16 text-white/70" />
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <button className="w-full bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105">
                      <Play className="inline-block mr-2 w-5 h-5" />
                      Start Interactive Demo
                    </button>
                    <button className="w-full border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-6 rounded-lg transition-all duration-300">
                      <Calendar className="inline-block mr-2 w-5 h-5" />
                      Schedule Live Demo
                    </button>
                    <button className="w-full border border-white/20 text-gray-300 hover:bg-white/10 font-bold py-4 px-6 rounded-lg transition-all duration-300">
                      <Phone className="inline-block mr-2 w-5 h-5" />
                      Contact Sales
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Hear from businesses that have experienced our demos and solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-gray-300 mb-4 italic">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold text-sm">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <p className="text-white font-medium">{testimonial.name}</p>
                    <p className="text-gray-400 text-sm">{testimonial.role}, {testimonial.company}</p>
                  </div>
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
              Book Your Demo
              <ArrowRight className="inline-block ml-2 w-5 h-5" />
            </button>
            <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              Download Demo Guide
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DemoPage;