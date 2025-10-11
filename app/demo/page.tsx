'use client';
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Play, Clock, Users, Star, ArrowRight, CheckCircle, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Settings, Smartphone, Calendar, FileText, MessageCircle, Heart, DollarSign, Box, Monitor, Package, Mic, Workflow, Eye, Wifi, MessageSquare, ShoppingCart } from 'lucide-react';

const DemoPage: React.FC = () => {
  const [selectedDemo, setSelectedDemo] = useState(0)

  const demos = [
    {
id: 1,
      title: 'AI-Powered Analytics Dashboard',
      description: 'Experience our advanced analytics platform with real-time data visualization and predictive insights.',
      duration: '10 min',
      category: 'AI Solutions',
      features: ['Real-time Analytics', 'Predictive Modeling', 'Interactive Dashboards', 'Custom Reports'],
      image: '/demos/analytics-dashboard.jpg'
    },
    {
      id: 2,
      title: 'Smart Chatbot Assistant',
      description: 'Interact with our intelligent chatbot that understands context and provides personalized responses.',
      duration: '5 min',
      category: 'AI Solutions',
      features: ['Natural Language Processing', 'Context Awareness', 'Multi-language Support', 'Integration APIs'],
      image: '/demos/chatbot.jpg'
    },
    {
      id: 3,
      title: 'Cloud Migration Tool',
      description: 'Watch our automated cloud migration process in action with zero-downtime deployment.',
      duration: '15 min',
      category: 'Cloud Services',
      features: ['Automated Migration', 'Zero Downtime', 'Data Validation', 'Rollback Capability'],
      image: '/demos/cloud-migration.jpg'
    },
    {
      id: 4,
      title: 'Cybersecurity Monitor',
      description: 'See how our AI-powered security system detects and prevents threats in real-time.',
      duration: '8 min',
      category: 'Cybersecurity',
      features: ['Threat Detection', 'Real-time Alerts', 'Automated Response', 'Compliance Reporting'],
      image: '/demos/security-monitor.jpg'
    }
  ]

  const benefits = [
    {
      icon: Play,
      title: 'Interactive Demos',
      description: 'Hands-on experience with our solutions'
    },
    {
      icon: Clock,
      title: 'Quick Setup',
      description: 'Get started in minutes, not hours'
    },
    {
      icon: Users,
      title: 'Expert Guidance',
      description: 'Live support from our technical team'
    },
    {
      icon: Star,
      title: 'Proven Results',
      description: 'See real-world success stories'
    }
  ]

  return (
    <></>
<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        </div><section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
          </section>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          </div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
<div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md: text-7xl font-bold text-white mb-6 leading-tight">
              See It in <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Action
              </span>
            </h1>
<p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Experience our cutting-edge AI and IT solutions through interactive demos. 
              See how we can transform your business in real-time.
            </p>
            </div>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="cyber-button">
                <Play className="w-5 h-5 mr-2" />
                Start Demo
              </button>
              <button className="cyber-button-secondary">
                <Users className="w-5 h-5 mr-2" />

                Schedule Live Demo
              </button>
            </div>
          </div>
        </section>

{/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          </section>
<div className="max-w-7xl mx-auto">
            </div>
<div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Try Our Demos ? </h2>
              <p className="text-xl text-gray-300">
                Experience the power of our solutions before you commit.
              </p>
            </div>
<div className="grid grid-cols-1 md : grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                </div>
<div key={index} className="text-center">
                  </div>
<div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>

                </div>
              ))}
            </div>
          </div>
        </section>

{/* Demo Selection */}
        <section className="py-16 px-4 sm: px-6 lg:px-8">
          </section>
<div className="max-w-7xl mx-auto">
            </div>
<div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Choose Your Demo
              </h2>
              <p className="text-xl text-gray-300">
                Select from our range of interactive demonstrations.
              </p>
            </div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {demos.map((demo, index) => (
                <button
                  key={demo.id}
                  onClick={() => setSelectedDemo(index)}
                  className={`p-6 rounded-xl border transition-all duration-300 text-left ${
                    selectedDemo === index
                      ? 'bg-cyan-500/20 border-cyan-500 text-white'
                      : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10'
                  }`}
                >
                  </div></button><div className="flex items-center mb-3">
                    </div>
<div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mr-3">
                      <Play className="w-5 h-5 text-white" />
                    </div>
<div>
                      <h3 className="font-bold text-lg">{demo.title}</h3>
                      <p className="text-sm text-gray-400">{demo.category}</p>
                    </div>
                  </div>
                  <p className="text-sm mb-3">{demo.description}</p>
                  <div className="flex items-center text-sm">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{demo.duration}</span>
                  </div>
                </button>
              ))}
            </div>

            {/* Selected Demo Details */}
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10">
              </div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                </div>
<div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {demos[selectedDemo].title}
                  </h3>
                  <p className="text-gray-300 mb-6">
                    {demos[selectedDemo].description}
                  </p>
                  
                  </div>
<div className="mb-6">
                    <h4 className="text-lg font-semibold text-cyan-400 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {demos[selectedDemo].features.map((feature, index) => (
                        <li key={index} className="text-gray-300 flex items-center">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
<div className="flex items-center space-x-4 mb-6">
                    </div>
<div className="flex items-center text-gray-300">
                      <Clock className="w-5 h-5 mr-2" />
                      <span>{demos[selectedDemo].duration}</span>
                    </div>
<div className="flex items-center text-gray-300">
                      <Users className="w-5 h-5 mr-2" />
                      <span>Live Support</span>
                    </div>
                  </div>
                  
                  <button className="cyber-button">
                    <Play className="w-5 h-5 mr-2" />
                    Start Demo
                  </button>
                </div>
<div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg p-8 flex items-center justify-center">
                  </div>
<div className="text-center">
                    </div>
<div className="w-24 h-24 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Play className="w-12 h-12 text-white" />
                    </div>
                    <p className="text-white font-medium">Demo Preview</p>
                    <p className="text-gray-300 text-sm">Click to start interactive demo</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* CTA Section */}
<section className="py-16 px-4 sm: px-6 lg:px-8">

          </section>
<div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to See More?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
Schedule a personalized demo with our experts to see how our solutions can work for your specific needs.
            </p>
            </div>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="cyber-button">
                Schedule Live Demo
                <Calendar className="w-5 h-5 ml-2" />
              </button>
              <button className="cyber-button-secondary">
                Contact Sales
                <MessageCircle className="w-5 h-5 ml-2" />

              </button>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </>
  )
};

export default DemoPage;