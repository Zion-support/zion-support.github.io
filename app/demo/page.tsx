'use client';
import React, { useState } from 'react';
import { 
  Play, 
  Pause, 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Users, 
  Clock, 
  DollarSign,
  Phone,
  Mail,
  Calendar,
  Video,
  Monitor,
  Smartphone,
  Globe,
  Zap,
  Shield,
  Brain,
  Cloud,
  Code
} from 'lucide-react';

const DemoPage: React.FC = () => {
  const [selectedDemo, setSelectedDemo] = useState('ai-analytics');

  const demos = [
    {
      id: 'ai-analytics',
      title: 'AI Analytics Dashboard',
      description: 'Experience our advanced AI-powered analytics platform with real-time insights and predictive analytics.',
      duration: '5 minutes',
      category: 'AI Services',
      icon: Brain,
      features: [
        'Real-time data visualization',
        'Predictive analytics',
        'Custom dashboard creation',
        'Automated reporting',
        'Interactive charts and graphs'
      ],
      benefits: [
        'Make data-driven decisions',
        'Identify trends and patterns',
        'Improve business performance',
        'Save time on reporting'
      ]
    },
    {
      id: 'cloud-infrastructure',
      title: 'Cloud Infrastructure Management',
      description: 'See how we manage and optimize cloud infrastructure for maximum performance and cost efficiency.',
      duration: '7 minutes',
      category: 'IT Services',
      icon: Cloud,
      features: [
        'Multi-cloud management',
        'Auto-scaling capabilities',
        'Cost optimization',
        'Security monitoring',
        'Performance analytics'
      ],
      benefits: [
        'Reduce cloud costs',
        'Improve performance',
        'Enhance security',
        'Simplify management'
      ]
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity Solutions',
      description: 'Explore our comprehensive cybersecurity platform with threat detection and prevention capabilities.',
      duration: '6 minutes',
      category: 'IT Services',
      icon: Shield,
      features: [
        'Threat detection',
        'Vulnerability scanning',
        'Incident response',
        'Compliance monitoring',
        'Security analytics'
      ],
      benefits: [
        'Protect against threats',
        'Ensure compliance',
        'Reduce security risks',
        'Improve response time'
      ]
    },
    {
      id: 'micro-saas',
      title: 'Micro SaaS Platform',
      description: 'Discover our micro SaaS solutions designed to solve specific business problems efficiently.',
      duration: '4 minutes',
      category: 'Micro SaaS',
      icon: Code,
      features: [
        'Rapid deployment',
        'Scalable architecture',
        'API integration',
        'User management',
        'Analytics and reporting'
      ],
      benefits: [
        'Quick time to market',
        'Lower development costs',
        'Easy maintenance',
        'Scalable growth'
      ]
    }
  ];

  const testimonials = [
    {
      name: 'John Smith',
      role: 'CTO',
      company: 'TechCorp',
      content: 'The AI analytics demo was incredible. We could see exactly how it would transform our data analysis process.',
      rating: 5
    },
    {
      name: 'Sarah Johnson',
      role: 'IT Director',
      company: 'FinanceFlow',
      content: 'The cybersecurity demo showed us vulnerabilities we didn\'t even know existed. Highly recommended!',
      rating: 5
    },
    {
      name: 'Mike Chen',
      role: 'VP Engineering',
      company: 'DataFlow',
      content: 'The cloud infrastructure demo was eye-opening. We could see significant cost savings and performance improvements.',
      rating: 5
    }
  ];

  const selectedDemoData = demos.find(demo => demo.id === selectedDemo);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            See Our <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Solutions</span> in Action
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Experience our AI and IT solutions through interactive demos. See how our technology can transform your business operations.
          </p>
        </div>
      </section>

      {/* Demo Selection */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {demos.map((demo) => (
              <button
                key={demo.id}
                onClick={() => setSelectedDemo(demo.id)}
                className={`flex items-center space-x-3 px-6 py-4 rounded-lg font-semibold transition-all duration-300 ${
                  selectedDemo === demo.id
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                <demo.icon className="w-5 h-5" />
                <div className="text-left">
                  <div className="font-semibold">{demo.title}</div>
                  <div className="text-xs opacity-75">{demo.duration}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Demo */}
      {selectedDemoData && (
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  {selectedDemoData.title}
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  {selectedDemoData.description}
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-2xl font-bold text-cyan-400 mb-1">{selectedDemoData.duration}</div>
                    <div className="text-sm text-gray-300">Demo Duration</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-2xl font-bold text-cyan-400 mb-1">{selectedDemoData.category}</div>
                    <div className="text-sm text-gray-300">Category</div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Key Features:</h3>
                    <ul className="space-y-2">
                      {selectedDemoData.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-300">
                          <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Benefits:</h3>
                    <ul className="space-y-2">
                      {selectedDemoData.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-gray-300">
                          <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center">
                    <Play className="w-5 h-5 mr-2" />
                    Start Demo
                  </button>
                  <a
                    href="/contact"
                    className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 font-bold py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center justify-center"
                  >
                    <span>Schedule Live Demo</span>
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </a>
                </div>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
                <div className="bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-xl p-8 text-center mb-6">
                  <Video className="w-24 h-24 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Interactive Demo</h3>
                  <p className="text-gray-300">Experience the solution in action</p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Duration:</span>
                    <span className="text-white">{selectedDemoData.duration}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Category:</span>
                    <span className="text-white">{selectedDemoData.category}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Features:</span>
                    <span className="text-white">{selectedDemoData.features.length}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what industry leaders say about our demos.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="text-white font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to See More?
          </h2>
          <p className="text-xl text-cyan-100 mb-8">
            Schedule a personalized demo with our experts and see how our solutions can transform your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/contact"
              className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center space-x-2"
            >
              <Calendar className="w-5 h-5" />
              <span>Schedule Demo</span>
            </a>
            <a
              href="tel:+13024640950"
              className="border-2 border-white text-white hover:bg-white hover:text-cyan-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>Call (302) 464-0950</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DemoPage;