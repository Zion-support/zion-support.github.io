'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Play, Calendar, Clock, User, ArrowRight, Brain, Cloud, Shield, BarChart, Zap, Users, Code, Database, Mic, Target, Globe, FileText, Workflow, Settings, ShoppingCart, Rocket } from 'lucide-react';

const DemoPage: React.FC = () => {
  const [selectedDemo, setSelectedDemo] = useState<string | null>(null);

  const demos = [
    {
      id: 'ai-analytics',
      title: 'AI Analytics Dashboard',
      description: 'See how our AI-powered analytics can transform your data into actionable insights.',
      duration: '5 min',
      category: 'AI Solutions',
      icon: BarChart,
      features: ['Real-time data visualization', 'Predictive analytics', 'Custom dashboards', 'Automated reporting']
    },
    {
      id: 'ai-chatbot',
      title: 'AI Chatbot Demo',
      description: 'Experience our intelligent chatbot that can handle customer inquiries 24/7.',
      duration: '3 min',
      category: 'AI Solutions',
      icon: Brain,
      features: ['Natural language processing', 'Multi-language support', 'Integration capabilities', 'Custom training']
    },
    {
      id: 'cloud-infrastructure',
      title: 'Cloud Infrastructure',
      description: 'Explore our scalable cloud solutions and see how they can grow with your business.',
      duration: '7 min',
      category: 'IT Services',
      icon: Cloud,
      features: ['Auto-scaling', 'Security monitoring', 'Cost optimization', 'Disaster recovery']
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity Suite',
      description: 'Discover our advanced security solutions that protect your digital assets.',
      duration: '4 min',
      category: 'IT Services',
      icon: Shield,
      features: ['Threat detection', 'Vulnerability scanning', 'Incident response', 'Compliance monitoring']
    },
    {
      id: 'micro-saas',
      title: 'Micro SaaS Platform',
      description: 'Try our ready-to-use business tools that can be deployed in minutes.',
      duration: '6 min',
      category: 'Micro SaaS',
      icon: Rocket,
      features: ['Quick setup', 'Custom branding', 'API integration', 'Analytics dashboard']
    }
  ];

  const categories = ['All', 'AI Solutions', 'IT Services', 'Micro SaaS'];

  const filteredDemos = demos;

  return (
    <>
      <Helmet>
        <title>Live Demos - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Experience our AI and IT solutions through interactive demos. See how our technology can transform your business." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Live Demos
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience our AI and IT solutions through interactive demos. See how our technology can transform your business.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-3 bg-white/10 border border-white/20 rounded-lg text-white hover:bg-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300"
              >
                {category}
              </button>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDemos.map((demo) => (
              <div
                key={demo.id}
                className="group bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                    <demo.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {demo.title}
                    </h3>
                    <span className="text-cyan-400 text-sm font-medium">{demo.category}</span>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6 group-hover:text-gray-200 transition-colors">
                  {demo.description}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-400 mb-6">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    {demo.duration}
                  </div>
                  <div className="flex items-center">
                    <Play className="w-4 h-4 mr-2" />
                    Interactive Demo
                  </div>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {demo.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-300">
                      <ArrowRight className="w-3 h-3 text-cyan-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button
                  onClick={() => setSelectedDemo(demo.id)}
                  className="w-full flex items-center justify-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
                >
                  <Play className="w-4 h-4 mr-2" />
                  Start Demo
                </button>
              </div>
            ))}
          </div>
          
          {selectedDemo && (
            <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
              <div className="bg-slate-900 rounded-2xl p-8 max-w-4xl w-full max-h-[80vh] overflow-y-auto">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-white">
                    {demos.find(d => d.id === selectedDemo)?.title} Demo
                  </h2>
                  <button
                    onClick={() => setSelectedDemo(null)}
                    className="text-gray-400 hover:text-white text-2xl"
                  >
                    ×
                  </button>
                </div>
                
                <div className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg p-8 text-center">
                  <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Play className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Demo Coming Soon</h3>
                  <p className="text-gray-300 mb-6">
                    This interactive demo is currently being prepared. Contact us to schedule a personalized demonstration.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href="/contact"
                      className="px-6 py-3 bg-cyan-500 text-white rounded-lg font-semibold hover:bg-cyan-600 transition-colors"
                    >
                      Schedule Demo
                    </a>
                    <a
                      href="tel:+13024640950"
                      className="px-6 py-3 border border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-colors"
                    >
                      Call Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          <div className="text-center mt-16">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to See More?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Schedule a personalized demonstration with our experts to see how our solutions can address your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/consultation"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
              >
                Schedule Consultation
              </a>
              <a
                href="tel:+13024640950"
                className="px-8 py-4 border border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                📞 Call: (302) 464-0950
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DemoPage;