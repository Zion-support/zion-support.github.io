import React, { useState } from 'react';
import SEOHead from '../components/SEOHead';
import { 
  PlayIcon, 
  CalendarDaysIcon, 
  ClockIcon, 
  CheckCircleIcon,
  ArrowRightIcon,
  UserGroupIcon,
  CpuChipIcon,
  CloudIcon
} from '@heroicons/react/24/outline';

const DemoPage: React.FC = () => {
  const [selectedDemo, setSelectedDemo] = useState('ai-solutions');

  const demos = [
    {
      id: 'ai-solutions',
      title: 'AI Solutions Demo',
      description: 'See our AI-powered solutions in action',
      duration: '30 minutes',
      icon: CpuChipIcon,
      features: ['AI Chatbot Builder', 'Document Processing', 'Predictive Analytics', 'Voice Assistant']
    },
    {
      id: 'cloud-infrastructure',
      title: 'Cloud Infrastructure Demo',
      description: 'Explore our cloud migration and management solutions',
      duration: '45 minutes',
      icon: CloudIcon,
      features: ['AWS Migration', 'Azure Setup', 'Security Configuration', 'Cost Optimization']
    },
    {
      id: 'micro-saas',
      title: 'Micro SaaS Demo',
      description: 'Experience our innovative micro software solutions',
      duration: '25 minutes',
      icon: UserGroupIcon,
      features: ['Smart Analytics', 'CRM Automation', 'Inventory Management', 'Expense Tracking']
    }
  ];

  const benefits = [
    'See solutions tailored to your industry',
    'Get personalized recommendations',
    'Ask questions to our experts',
    'Understand implementation timeline',
    'Discuss pricing and packages',
    'No commitment required'
  ];

  return (
    <>
      <SEOHead
        title="Schedule a Demo - Zion Tech Group"
        description="Schedule a personalized demo of our AI and IT solutions. See how our technology can transform your business."
        keywords="demo, schedule demo, AI solutions demo, cloud demo, micro saas demo, technology demonstration"
        canonicalUrl="https://ziontechgroup.com/demo"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-slate-900 to-blue-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-slate-900 to-blue-600/20"></div>
          <div className="cyber-grid absolute inset-0 opacity-20"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Schedule a Demo
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              See our <span className="text-purple-400 font-semibold">AI and IT solutions</span> in action with a personalized demonstration 
              tailored to your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 text-lg font-semibold">
                Schedule Now
              </button>
              <button className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300 text-lg font-semibold">
                Watch Quick Demo
              </button>
            </div>
          </div>
        </section>

        {/* Demo Types Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Choose Your <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Demo Type</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Select the demo that best matches your interests and business needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {demos.map((demo) => (
                <div 
                  key={demo.id}
                  className={`p-8 rounded-xl border-2 transition-all duration-300 cursor-pointer ${
                    selectedDemo === demo.id 
                      ? 'border-purple-500 bg-purple-500/10 shadow-xl shadow-purple-500/20' 
                      : 'border-slate-700 bg-slate-800/50 hover:border-purple-400 hover:bg-purple-500/5'
                  }`}
                  onClick={() => setSelectedDemo(demo.id)}
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <demo.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{demo.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{demo.description}</p>
                  
                  <div className="flex items-center text-purple-400 mb-6">
                    <ClockIcon className="w-5 h-5 mr-2" />
                    <span className="font-semibold">{demo.duration}</span>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-purple-400 mb-3">What You'll See</h4>
                    {demo.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-gray-300 text-sm">
                        <CheckCircleIcon className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Demo Benefits Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Why Schedule a <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Demo</span>?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Get a personalized experience tailored to your specific business needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-4 p-6 bg-slate-800/30 rounded-lg hover:bg-slate-700/30 transition-all duration-300 group hover:scale-105 hover:shadow-lg hover:shadow-purple-500/10">
                  <div className="relative">
                    <CheckCircleIcon className="w-6 h-6 text-green-400 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <div className="absolute inset-0 bg-green-400 rounded-full blur opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                  </div>
                  <span className="text-gray-300 font-medium group-hover:text-white transition-colors">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Schedule Form Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Schedule</span>?
              </h2>
              <p className="text-xl text-gray-300">
                Fill out the form below and we'll contact you to schedule your personalized demo
              </p>
            </div>

            <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">First Name *</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Last Name *</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Your last name"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Email *</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="your.email@company.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Phone</label>
                    <input 
                      type="tel" 
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Company</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Demo Type *</label>
                  <select className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                    <option value="">Select demo type</option>
                    {demos.map((demo) => (
                      <option key={demo.id} value={demo.id}>{demo.title}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Tell us about your specific needs or questions..."
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 text-lg font-semibold"
                >
                  Schedule My Demo
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-900/40 via-slate-900 to-blue-900/40">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-white mb-6">
              Questions About Our Solutions?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Our team is here to help you understand how our technology can benefit your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950"
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 text-lg font-semibold"
              >
                Call +1 (302) 464-0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 text-lg font-semibold"
              >
                Email Us
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default DemoPage;