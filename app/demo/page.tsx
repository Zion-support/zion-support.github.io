'use client';
import React, { useState } from 'react';
import { Play, Calendar, Phone, Mail, CheckCircle, ArrowRight, Star, Users, Clock } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

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
      presenter: 'Dr. Sarah Chen',
      role: 'Head of AI Research'
    },
    {
      id: 'cloud-solutions',
      title: 'Cloud Solutions Demo',
      description: 'See how our cloud infrastructure and migration services can transform your business',
      duration: '25 minutes',
      features: [
        'Cloud Migration',
        'Infrastructure Management',
        'Scalability Solutions',
        'Cost Optimization'
      ],
      presenter: 'Michael Rodriguez',
      role: 'Head of Engineering'
    },
    {
      id: 'enterprise-platform',
      title: 'Enterprise Platform Demo',
      description: 'Comprehensive demo of our enterprise-grade solutions and integrations',
      duration: '45 minutes',
      features: [
        'Enterprise Architecture',
        'Security Features',
        'Integration Capabilities',
        'Custom Development'
      ],
      presenter: 'Kleber Santos',
      role: 'CEO & Founder'
    }
  ],

  const benefits = [
    {
      icon: Star,
      title: 'Expert Guidance',
      description: 'Learn from our experienced team of AI and IT experts'
    },
    {
      icon: Users,
      title: 'Personalized Demo',
      description: 'Tailored demonstration based on your specific needs and use cases'
    },
    {
      icon: Clock,
      title: 'Flexible Scheduling',
      description: 'Book a demo at a time that works best for your schedule'
    },
    {
      icon: CheckCircle,
      title: 'No Commitment',
      description: 'Free demo with no obligation to purchase our services'
    }
  ],

  const selectedDemoData = demos.find(demo => demo.id === selectedDemo) || demos[0];
const Component = () => {

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOOptimizer 
        title="Book a Demo - See Our Solutions | Zion Tech Group"
        description="Schedule a personalized demo of our AI and IT solutions. See how we can transform your business with cutting-edge technology."
        keywords="book demo, schedule demo, AI demo, IT solutions demo, personalized demonstration"
      />
      <Navigation />
      
      <main className="relative">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Book a
              <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Demo
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              See our AI and IT solutions in action. Schedule a personalized demo tailored to your business needs and discover how we can help you succeed.
            </p>
          </div>
        </section>

        {/* Demo Selection */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Choose Your Demo</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {demos.map((demo) => (
                <div
                  key={demo.id}
                  onClick={() => setSelectedDemo(demo.id)}
                  className={`bg-white/5 backdrop-blur-sm border rounded-xl p-6 cursor-pointer transition-all duration-300 ${
                    selectedDemo === demo.id
                      ? 'border-purple-400 bg-white/10'
                      : 'border-white/10 hover:bg-white/10'
                  }`}
                >
                  <div className="text-center">
                    <h3 className="text-xl font-semibold text-white mb-2">{demo.title}</h3>
                    <p className="text-gray-300 mb-4">{demo.description}</p>
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
                        <Clock className="w-4 h-4" />
                        <span>{demo.duration}</span>
                      </div>
                      <div className="text-sm text-purple-400">
                        Presented by {demo.presenter}
                      </div>
                      <div className="text-xs text-gray-500">
                        {demo.role}
                      </div>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-300">
                      {demo.features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Selected Demo Details */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
              <h2 className="text-3xl font-bold text-white mb-6 text-center">
                {selectedDemoData.title}
              </h2>
              <p className="text-xl text-gray-300 mb-8 text-center">
                {selectedDemoData.description}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">What You'll Learn</h3>
                  <ul className="space-y-2">
                    {selectedDemoData.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">Demo Details</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-purple-400" />
                      <span className="text-gray-300">Duration: {selectedDemoData.duration}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="w-5 h-5 text-purple-400" />
                      <span className="text-gray-300">Presenter: {selectedDemoData.presenter}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Star className="w-5 h-5 text-purple-400" />
                      <span className="text-gray-300">Role: {selectedDemoData.role}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Schedule This Demo
                  <ArrowRight className="inline-block ml-2 w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Why Book a Demo?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover: bg-white/10 transition-all duration-300">
                  <benefit.icon className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to See the Future?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Don't miss the opportunity to see how our AI and IT solutions can transform your business. 
              Book your personalized demo today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                <Calendar className="inline-block mr-2 w-5 h-5" />
                Schedule Demo
              </button>
              <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                <Phone className="inline-block mr-2 w-5 h-5" />
                Call Us
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  ),
};

export default DemoPage;