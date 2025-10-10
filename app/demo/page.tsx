'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Play, CheckCircle, ArrowRight, Star, Monitor, Smartphone, Tablet, Zap, BarChart, Brain, Cloud, Shield } from 'lucide-react';

const DemoPage: React.FC = () => {

  const demos = [
    {
      id: 'ai-analytics',
      title: 'AI Analytics Dashboard',
      description: 'See how our AI-powered analytics can transform your data into actionable insights.',
      features: ['Real-time data visualization', 'Predictive analytics', 'Custom dashboards', 'Automated reporting'],
      icon: BarChart,
      duration: '5 min demo'
    },
    {
      id: 'ai-chatbot',
      title: 'AI Customer Service Chatbot',
      description: 'Experience our intelligent chatbot that can handle customer inquiries 24/7.',
      features: ['Natural language processing', 'Multi-language support', 'Context awareness', 'Seamless handoff to humans'],
      icon: Brain,
      duration: '3 min demo'
    },
    {
      id: 'cloud-infrastructure',
      title: 'Cloud Infrastructure Management',
      description: 'Explore our cloud management platform for scalable and secure infrastructure.',
      features: ['Auto-scaling', 'Cost optimization', 'Security monitoring', 'Disaster recovery'],
      icon: Cloud,
      duration: '7 min demo'
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity Monitoring',
      description: 'See our advanced security monitoring and threat detection capabilities.',
      features: ['Real-time threat detection', 'Automated response', 'Compliance reporting', 'Security analytics'],
      icon: Shield,
      duration: '4 min demo'
    }]
  ];

  const selectedDemoData = demos.find(demo => demo.id === selectedDemo) || demos[0]];

  return (
    <>
      <Helmet>
        <title>Demo - Zion Tech Group | See Our Solutions in Action</title>
        <meta name="description" content="Experience our AI and IT solutions through interactive demos. See how our technology can transform your business." />
        <meta name="keywords" content="demo, AI demo, technology demo, interactive demo, Zion Tech Group" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        </div><section className="relative py-20 px-4 overflow-hidden">
          </section><div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          </div><div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          </div><div className="relative max-w-7xl mx-auto text-center">
            </div><h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              See Our Solutions
              <span className="block bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                in Action
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Experience our cutting-edge AI and IT solutions through interactive demos
            </p>
          </div>
        </section>

        {/* Demo Selection */}
        <section className="py-16 px-4">
          </section><div className="max-w-7xl mx-auto">
            </div><div className="text-center mb-12">
              </div><h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Choose a Demo
              </h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Select a demo to see how our solutions can transform your business
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {demos.map((demo) => (
                <button
                  key={demo.id}
                  onClick={() => setSelectedDemo(demo.id)}
                  className={`p-6 rounded-2xl border transition-all duration-300 text-left ${
                    selectedDemo === demo.id
                      ? 'bg-cyan-500/20 border-cyan-400 text-white'
                      : 'bg-white/5 border-white/10 text-gray-300 hover: bg-white/10 hover:border-cyan-400/50'
                  }`}
                >
                  </div><div className="flex items-center mb-4">
                    </div><div className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 ${
                      selectedDemo === demo.id
                        ? 'bg-cyan-500'
                        : 'bg-white/10'
                    }`}>
                      <demo.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      </div><h3 className="font-semibold">{demo.title}</h3>
                      <p className="text-sm opacity-75">{demo.duration}</p>
                    </div>
                  </div>
                  <p className="text-sm opacity-90">{demo.description}</p>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Demo Content */}
        <section className="py-16 px-4">
          </section><div className="max-w-7xl mx-auto">
            </div><div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Demo Video/Interface */}
              </div><div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                </div><div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mb-6">
                  </div><div className="text-center">
                    </div><div className="w-20 h-20 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Play className="w-10 h-10 text-white ml-1" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {selectedDemoData.title}
                    </h3>
                    <p className="text-gray-300 text-sm">
                      Click to start the interactive demo
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between mb-6">
                  </div><div className="flex items-center gap-4">
                    </div><div className="flex items-center gap-2 text-gray-400">
                      <Monitor className="w-4 h-4" />
                      <span className="text-sm">Desktop</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400">
                      <Tablet className="w-4 h-4" />
                      <span className="text-sm">Tablet</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400">
                      <Smartphone className="w-4 h-4" />
                      <span className="text-sm">Mobile</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-cyan-400">
                    <Zap className="w-4 h-4" />
                    <span className="text-sm font-semibold">Live Demo</span>
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                  <Play className="w-5 h-5" />
                  Start Demo
                </button>
              </div>

              {/* Demo Details */}
              <div>
                </div><h3 className="text-3xl font-bold text-white mb-6">
                  {selectedDemoData.title}
                </h3>
                <p className="text-gray-300 mb-8 text-lg">
                  {selectedDemoData.description}
                </p>

                <div className="mb-8">
                  </div><h4 className="text-xl font-semibold text-white mb-4">Key Features:</h4>
                  <ul className="space-y-3">
                    {selectedDemoData.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  </div><h4 className="text-lg font-semibold text-white mb-4">What You'll Learn:</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• How to integrate our solutions into your workflow</li>
                    <li>• Best practices for implementation</li>
                    <li>• Customization options available</li>
                    <li>• ROI and business impact potential</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          </section><div className="max-w-4xl mx-auto text-center">
            </div><div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              </div><h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Schedule a personalized demo with our experts to see how our solutions 
                can specifically address your business needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Schedule Demo
                </button>
                <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default DemoPage;