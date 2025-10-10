'use client';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Play,
  Pause,
  RefreshCw,
  Settings,
  BarChart,
  Brain,
  Cloud,
  Shield,
  Database,
  Zap,
  CheckCircle,
  ArrowRight,
  Download,
  ExternalLink,
  Star,
  Users,
  Clock,
  Target,
  TrendingUp,
  Phone,
  Mail,
  MessageCircle,
  Calendar
} from 'lucide-react';

const DemoPage: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState('ai-monitoring');
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const demos = [
    {
      id: 'ai-monitoring',
      title: 'AI-Powered Monitoring',
      description: 'See how our AI algorithms predict and prevent system issues before they impact your business.',
      duration: '5 min',
      features: ['Predictive Analytics', 'Anomaly Detection', 'Automated Alerts', 'Self-Healing Systems'],
      icon: Brain
    },
    {
      id: 'cloud-automation',
      title: 'Cloud Automation',
      description: 'Experience seamless cloud infrastructure management with intelligent automation.',
      duration: '4 min',
      features: ['Auto-scaling', 'Resource Optimization', 'Cost Management', 'Deployment Automation'],
      icon: Cloud
    },
    {
      id: 'security-analytics',
      title: 'Security Analytics',
      description: 'Discover advanced threat detection and security monitoring capabilities.',
      duration: '6 min',
      features: ['Threat Detection', 'Vulnerability Scanning', 'Compliance Monitoring', 'Incident Response'],
      icon: Shield
    },
    {
      id: 'data-insights',
      title: 'Data Intelligence',
      description: 'Transform your data into actionable insights with our AI-powered analytics platform.',
      duration: '7 min',
      features: ['Real-time Analytics', 'Predictive Modeling', 'Data Visualization', 'Business Intelligence'],
      icon: Database
    }
  ];

  const demoSteps = {
    'ai-monitoring': [
      {
        title: 'System Overview',
        description: 'Monitor all your systems in real-time with intelligent dashboards.',
        image: '/images/demo/ai-monitoring-1.jpg',
        highlights: ['Real-time monitoring', 'System health status', 'Performance metrics']
      },
      {
        title: 'Anomaly Detection',
        description: 'AI algorithms automatically detect unusual patterns and potential issues.',
        image: '/images/demo/ai-monitoring-2.jpg',
        highlights: ['Pattern recognition', 'Anomaly alerts', 'Predictive insights']
      },
      {
        title: 'Automated Response',
        description: 'System automatically responds to issues with self-healing capabilities.',
        image: '/images/demo/ai-monitoring-3.jpg',
        highlights: ['Auto-remediation', 'Incident response', 'Self-healing systems']
      }
    ],
    'cloud-automation': [
      {
        title: 'Infrastructure Overview',
        description: 'Comprehensive view of your cloud infrastructure and resources.',
        image: '/images/demo/cloud-automation-1.jpg',
        highlights: ['Resource monitoring', 'Cost tracking', 'Performance metrics']
      },
      {
        title: 'Auto-scaling',
        description: 'Intelligent scaling based on demand and performance metrics.',
        image: '/images/demo/cloud-automation-2.jpg',
        highlights: ['Dynamic scaling', 'Load balancing', 'Resource optimization']
      },
      {
        title: 'Cost Optimization',
        description: 'Automated cost management and resource optimization recommendations.',
        image: '/images/demo/cloud-automation-3.jpg',
        highlights: ['Cost analysis', 'Optimization suggestions', 'Budget management']
      }
    ],
    'security-analytics': [
      {
        title: 'Security Dashboard',
        description: 'Comprehensive security monitoring and threat detection dashboard.',
        image: '/images/demo/security-analytics-1.jpg',
        highlights: ['Threat monitoring', 'Security events', 'Risk assessment']
      },
      {
        title: 'Threat Detection',
        description: 'Advanced AI-powered threat detection and analysis capabilities.',
        image: '/images/demo/security-analytics-2.jpg',
        highlights: ['Real-time detection', 'Threat analysis', 'Risk scoring']
      },
      {
        title: 'Incident Response',
        description: 'Automated incident response and remediation procedures.',
        image: '/images/demo/security-analytics-3.jpg',
        highlights: ['Incident management', 'Response automation', 'Compliance reporting']
      }
    ],
    'data-insights': [
      {
        title: 'Data Overview',
        description: 'Comprehensive data visualization and analytics dashboard.',
        image: '/images/demo/data-insights-1.jpg',
        highlights: ['Data visualization', 'Real-time analytics', 'Interactive dashboards']
      },
      {
        title: 'Predictive Analytics',
        description: 'AI-powered predictive modeling and forecasting capabilities.',
        image: '/images/demo/data-insights-2.jpg',
        highlights: ['Predictive modeling', 'Forecasting', 'Trend analysis']
      },
      {
        title: 'Business Intelligence',
        description: 'Transform data into actionable business insights and recommendations.',
        image: '/images/demo/data-insights-3.jpg',
        highlights: ['Business insights', 'Recommendations', 'Performance metrics']
      }
    ]
  };

  const currentDemo = demos.find(demo => demo.id === activeDemo);
  const currentSteps = demoSteps[activeDemo as keyof typeof demoSteps] || [];

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleNextStep = () => {
    if (currentStep < currentSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleDemoChange = (demoId: string) => {
    setActiveDemo(demoId);
    setCurrentStep(0);
    setIsPlaying(false);
  };

  const benefits = [
    {
      icon: CheckCircle,
      title: 'No Setup Required',
      description: 'Experience our solutions instantly without any installation or configuration.'
    },
    {
      icon: Clock,
      title: 'Quick & Interactive',
      description: 'Get hands-on experience with our platform in just a few minutes.'
    },
    {
      icon: Target,
      title: 'Real Scenarios',
      description: 'See how our solutions work with real-world use cases and data.'
    },
    {
      icon: Users,
      title: 'Expert Guidance',
      description: 'Get personalized guidance from our AI and IT specialists.'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechCorp Inc.',
      role: 'CTO',
      content: 'The demo was incredibly insightful. We could see exactly how the solution would work in our environment.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'DataFlow Systems',
      role: 'VP of Engineering',
      content: 'The interactive demo helped us understand the full potential of the platform. Highly recommended!',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'CloudScale Ltd.',
      role: 'Head of Operations',
      content: 'Outstanding demonstration. The team was knowledgeable and answered all our questions.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Interactive Demo - Zion Tech Group | Experience Our Solutions</title>
        <meta name="description" content="Experience our AI and IT solutions through interactive demos. See how our platforms work with real-world scenarios and get hands-on experience." />
        <meta name="keywords" content="interactive demo, AI solutions demo, IT platform demo, hands-on experience, Zion Tech Group" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Interactive Demo
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Experience our AI and IT solutions firsthand. Get hands-on experience with our platforms 
              and see how they can transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#demo-section"
                className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
              >
                <Play className="mr-2 h-5 w-5" />
                Start Demo
              </a>
              <a
                href="/contact"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center justify-center"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Schedule Live Demo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Selection */}
      <section id="demo-section" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Choose Your Demo
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Select from our range of interactive demos to explore different aspects of our solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {demos.map((demo) => (
              <button
                key={demo.id}
                onClick={() => handleDemoChange(demo.id)}
                className={`p-6 rounded-xl border transition-all duration-300 text-left ${
                  activeDemo === demo.id
                    ? 'bg-gradient-to-r from-purple-500 to-blue-600 border-purple-500 text-white'
                    : 'bg-white/10 border-white/20 text-gray-300 hover:bg-white/20'
                }`}
              >
                <div className="flex items-center mb-4">
                  <demo.icon className="h-8 w-8 mr-3" />
                  <div>
                    <h3 className="text-lg font-semibold">{demo.title}</h3>
                    <p className="text-sm opacity-75">{demo.duration}</p>
                  </div>
                </div>
                <p className="text-sm mb-4">{demo.description}</p>
                <ul className="space-y-1">
                  {demo.features.slice(0, 2).map((feature, index) => (
                    <li key={index} className="text-xs flex items-center">
                      <CheckCircle className="h-3 w-3 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Player */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">{currentDemo?.title}</h3>
                <p className="text-gray-300">{currentDemo?.description}</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <div className={`w-3 h-3 rounded-full ${isPlaying ? 'bg-green-400' : 'bg-red-400'}`}></div>
                  <span className="text-gray-300 text-sm">
                    {isPlaying ? 'Playing' : 'Paused'}
                  </span>
                </div>
                <button
                  onClick={handlePlayPause}
                  className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center"
                >
                  {isPlaying ? <Pause className="h-4 w-4 mr-2" /> : <Play className="h-4 w-4 mr-2" />}
                  {isPlaying ? 'Pause' : 'Play'}
                </button>
              </div>
            </div>

            {/* Demo Content */}
            <div className="bg-slate-900 rounded-lg p-8 mb-6">
              <div className="aspect-video bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center mb-6">
                <div className="text-center text-white">
                  <div className="text-6xl mb-4">🎥</div>
                  <p className="text-lg font-semibold">Demo Video Placeholder</p>
                  <p className="text-sm opacity-75">Interactive demo content would be displayed here</p>
                </div>
              </div>

              {/* Step Navigation */}
              <div className="flex items-center justify-between">
                <button
                  onClick={handlePrevStep}
                  disabled={currentStep === 0}
                  className="bg-white/10 text-white px-4 py-2 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                >
                  <ArrowRight className="h-4 w-4 mr-2 rotate-180" />
                  Previous
                </button>
                
                <div className="flex items-center space-x-2">
                  {currentSteps.map((_, index) => (
                    <div
                      key={index}
                      className={`w-3 h-3 rounded-full ${
                        index === currentStep ? 'bg-purple-500' : 'bg-white/30'
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={handleNextStep}
                  disabled={currentStep === currentSteps.length - 1}
                  className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                >
                  Next
                  <ArrowRight className="h-4 w-4 ml-2" />
                </button>
              </div>
            </div>

            {/* Current Step Info */}
            {currentSteps[currentStep] && (
              <div className="bg-white/5 rounded-lg p-6">
                <h4 className="text-xl font-semibold text-white mb-3">
                  {currentSteps[currentStep].title}
                </h4>
                <p className="text-gray-300 mb-4">
                  {currentSteps[currentStep].description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {currentSteps[currentStep].highlights.map((highlight, index) => (
                    <span
                      key={index}
                      className="bg-purple-500/20 text-purple-300 text-sm px-3 py-1 rounded-full"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Try Our Demo?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the power of our solutions before making any commitments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full mx-auto mb-4">
                  <benefit.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied clients have to say about our demos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-semibold">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="text-white font-semibold">{testimonial.name}</p>
                    <p className="text-gray-400 text-sm">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Schedule a personalized demo with our experts to see how our solutions can work for your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Schedule Live Demo
              </a>
              <a
                href="/consultation"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Free Consultation
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DemoPage;