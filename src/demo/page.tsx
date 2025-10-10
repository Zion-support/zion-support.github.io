import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Play, CheckCircle, ArrowRight, Brain, Cloud, Shield, Zap, BarChart, Users, Clock, Star, Phone, Mail, Calendar } from 'lucide-react';

const DemoPage: React.FC = () => {
  const [selectedDemo, setSelectedDemo] = useState('ai-analytics');
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const demos = [
    {
      id: 'ai-analytics',
      title: 'AI Analytics Dashboard',
      description: 'Real-time business intelligence with AI-powered insights',
      duration: '15 minutes',
      features: ['Live Data Visualization', 'Predictive Analytics', 'Custom Reports', 'Real-time Alerts'],
      icon: BarChart,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'ai-automation',
      title: 'AI Workflow Automation',
      description: 'Intelligent process automation and optimization',
      duration: '20 minutes',
      features: ['Process Mapping', 'Automation Rules', 'Performance Metrics', 'Integration Testing'],
      icon: Zap,
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'ai-crm',
      title: 'AI-Powered CRM',
      description: 'Smart customer relationship management with AI insights',
      duration: '25 minutes',
      features: ['Lead Scoring', 'Customer Insights', 'Sales Forecasting', 'Automated Follow-ups'],
      icon: Users,
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'ai-cybersecurity',
      title: 'AI Cybersecurity Suite',
      description: 'Advanced threat detection and security monitoring',
      duration: '30 minutes',
      features: ['Threat Detection', 'Risk Assessment', 'Incident Response', 'Compliance Monitoring'],
      icon: Shield,
      color: 'from-red-500 to-orange-500'
    },
    {
      id: 'ai-content',
      title: 'AI Content Generation',
      description: 'Automated content creation and optimization',
      duration: '18 minutes',
      features: ['Content Creation', 'SEO Optimization', 'Brand Consistency', 'Performance Analytics'],
      icon: Brain,
      color: 'from-indigo-500 to-purple-500'
    },
    {
      id: 'ai-cloud',
      title: 'AI Cloud Infrastructure',
      description: 'Intelligent cloud management and optimization',
      duration: '22 minutes',
      features: ['Resource Optimization', 'Cost Management', 'Auto-scaling', 'Performance Monitoring'],
      icon: Cloud,
      color: 'from-cyan-500 to-blue-500'
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: 'Save Time',
      description: 'See immediate results and understand implementation timeframes'
    },
    {
      icon: CheckCircle,
      title: 'Proven Results',
      description: 'Experience real-world applications with measurable outcomes'
    },
    {
      icon: Star,
      title: 'Expert Guidance',
      description: 'Get personalized recommendations from our AI specialists'
    },
    {
      icon: BarChart,
      title: 'ROI Analysis',
      description: 'Understand potential returns and cost savings for your business'
    }
  ];

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsFormSubmitted(true);
    // Here you would typically send the form data to your backend
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="absolute inset-0 cyber-grid"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="neon-text-advanced">Live</span>
              <span className="holographic-text ml-4">Demos</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Experience our AI and IT solutions in action. See how they can transform your business with interactive demonstrations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#demos"
                className="cyber-button px-8 py-4 text-lg font-semibold group"
              >
                <span className="relative z-10">Explore Demos</span>
              </a>
              <a
                href="#schedule"
                className="quantum-button px-8 py-4 text-lg font-semibold group"
              >
                <span className="relative z-10">Schedule Demo</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-slate-800/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Why Choose Our Demos?</h2>
            <p className="text-xl text-gray-300">Interactive, personalized, and results-driven</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center cyber-card-advanced p-6">
                <benefit.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Selection */}
      <section id="demos" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Choose Your Demo</h2>
            <p className="text-xl text-gray-300">Select the solution that best fits your business needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {demos.map((demo) => (
              <div
                key={demo.id}
                className={`cyber-card-advanced p-6 cursor-pointer transition-all duration-300 ${
                  selectedDemo === demo.id 
                    ? 'ring-2 ring-cyan-400 scale-105' 
                    : 'hover:scale-105'
                }`}
                onClick={() => setSelectedDemo(demo.id)}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${demo.color} rounded-lg flex items-center justify-center mb-4`}>
                  <demo.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{demo.title}</h3>
                <p className="text-gray-300 mb-4">{demo.description}</p>
                <div className="flex items-center text-cyan-400 text-sm mb-4">
                  <Clock className="w-4 h-4 mr-2" />
                  {demo.duration}
                </div>
                <div className="space-y-2">
                  {demo.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {feature}
                    </div>
                  ))}
                </div>
                {selectedDemo === demo.id && (
                  <div className="mt-4 pt-4 border-t border-gray-700">
                    <button className="w-full cyber-button py-2 text-sm font-semibold">
                      Start Demo
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Preview */}
      <section className="py-16 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="cyber-card-advanced p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {demos.find(d => d.id === selectedDemo)?.title} Preview
                </h3>
                <p className="text-gray-300 mb-6">
                  {demos.find(d => d.id === selectedDemo)?.description}
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Play className="w-5 h-5 text-cyan-400 mr-3" />
                    <span className="text-white">Interactive demonstration</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-5 h-5 text-cyan-400 mr-3" />
                    <span className="text-white">Personalized for your industry</span>
                  </div>
                  <div className="flex items-center">
                    <BarChart className="w-5 h-5 text-cyan-400 mr-3" />
                    <span className="text-white">Real-time data and analytics</span>
                  </div>
                </div>
              </div>
              <div className="bg-slate-900 rounded-lg p-6 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Play className="w-12 h-12 text-white" />
                  </div>
                  <p className="text-gray-300">Demo will start here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Demo Form */}
      <section id="schedule" className="py-24 bg-gradient-to-r from-cyan-600/20 to-purple-600/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Schedule Your Demo</h2>
            <p className="text-xl text-gray-300">
              Get a personalized demonstration tailored to your business needs
            </p>
          </div>

          {!isFormSubmitted ? (
            <div className="cyber-card-advanced p-8">
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">Full Name</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">Email Address</label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">Company</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400"
                      placeholder="Enter your company name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">Phone Number</label>
                    <input
                      type="tel"
                      required
                      className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-white mb-2">Preferred Demo</label>
                  <select
                    value={selectedDemo}
                    onChange={(e) => setSelectedDemo(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400"
                  >
                    {demos.map((demo) => (
                      <option key={demo.id} value={demo.id}>
                        {demo.title} - {demo.duration}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-2">Business Requirements</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400"
                    placeholder="Tell us about your specific business needs and challenges..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full cyber-button py-4 text-lg font-semibold"
                >
                  Schedule My Demo
                </button>
              </form>
            </div>
          ) : (
            <div className="cyber-card-advanced p-8 text-center">
              <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">Demo Scheduled Successfully!</h3>
              <p className="text-gray-300 mb-6">
                Thank you for your interest! Our team will contact you within 24 hours to confirm your demo appointment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="cyber-button px-6 py-3 font-semibold"
                >
                  Contact Us
                </Link>
                <Link
                  to="/case-studies"
                  className="quantum-button px-6 py-3 font-semibold"
                >
                  View Case Studies
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DemoPage;
