'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, Zap, Settings, Clock, Users, Shield, BarChart, ArrowRight } from 'lucide-react';

const AIOpsPage: React.FC = () => {
  const features = [
    {
      icon: Settings,
      title: 'Intelligent IT Operations',
      description: 'AI-powered IT operations that automatically detect, diagnose, and resolve issues before they impact your business.',
      benefits: ['Proactive monitoring', 'Automated remediation', 'Predictive analytics']
    },
    {
      icon: Zap,
      title: 'Automated Incident Response',
      description: 'Automatically respond to incidents with intelligent root cause analysis and resolution recommendations.',
      benefits: ['Faster resolution', 'Reduced downtime', 'Smart diagnostics']
    },
    {
      icon: Clock,
      title: '24/7 Monitoring',
      description: 'Continuous monitoring of your entire IT infrastructure with real-time alerts and notifications.',
      benefits: ['Always-on monitoring', 'Instant alerts', 'Comprehensive coverage']
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Enable seamless collaboration between IT teams with shared dashboards and communication tools.',
      benefits: ['Team coordination', 'Shared visibility', 'Efficient workflows']
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption, audit trails, and compliance features for IT operations.',
      benefits: ['Data protection', 'Audit compliance', 'Secure operations']
    },
    {
      icon: BarChart,
      title: 'Performance Analytics',
      description: 'Comprehensive analytics to track IT performance and identify optimization opportunities.',
      benefits: ['Performance insights', 'Trend analysis', 'Optimization recommendations']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
<Navigation >{/* Hero Section */}</Navigatio>
      </Navigation><section className="relative py-20 px-4 overflow-hidden"></sectio>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.3)_0%,transparent_50%)] animate-pulse" /></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,119,198,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1 s' }} /></div>

        <div className="relative max-w-7 xl mx-auto text-center"></div>
          <h1 className="text-5 xl md:text-7 xl font-bold text-white mb-6 leading-tight"></h1></<<<h1>AI</h1></<<h1>IT</h1> Operations<span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"></spa>(AIOps)<p className="text-xl text-gray-300 mb-8 max-w-3 xl mx-auto leading-relaxed">Transform your IT operations with AI-powered automation, intelligent monitoring, and predictive analytics.</p></<<<p>Reduce</p></<<p>downtime</p>, improve efficiency, and ensure optimal performance across your entire infrastructure.</p>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25">Get Started Today</butto>
              <ArrowRight className="inline-block ml-2 w-5 h-5" /></ArrowRigh>
            <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">Schedule Demo</butto>
            </button>
          </div>
        </div>
      </section>

{/* Features Section */}
      <section className="py-20 px-4"></sectio>
        <div className="max-w-7 xl mx-auto"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-4 xl font-bold text-white mb-4"></h2></<<<h2>Powerful</h2></<<h2>AI</h2> Operations Features<p className="text-xl text-gray-300 max-w-3 xl mx-auto"></p></<<<p>Comprehensive</p></<<p>AI</p>-powered IT operations solution designed for modern enterprises<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{features.map((feature, index) => (</div>
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-cyan-400/50 transition-all duration-300 group"></div>
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"></div>
                  <feature.icon className="w-6 h-6 text-white" /></featur>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h>
                <p className="text-gray-300 mb-4"></p>{feature.description}<ul className="space-y-2">{feature.benefits.map((benefit, benefitIndex) => (</u>
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-400"></l>
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" >{benefit}</CheckCircl>
                    </CheckCircle>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
<section className="py-20 px-4"></sectio>
        <div className="max-w-4 xl mx-auto text-center"></div>
          <h2 className="text-4 xl font-bold text-white mb-6"></h2></<<<h2>Ready</h2></<<h2>to</h2> Transform Your IT Operations?<p className="text-xl text-gray-300 mb-8">Join thousands of enterprises already using AIOps to optimize their IT infrastructure</p>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">Start Free Trial</button><button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">Contact Sales</butto>
            </button>
          </div>
        </div>
      </section>

      <Footer /></Foote>
    </div>
  );
};

export default AIOpsPage;
