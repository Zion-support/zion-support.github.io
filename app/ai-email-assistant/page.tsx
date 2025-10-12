import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Star, Zap, Shield, BarChart3, Users, MessageSquare, Brain, Settings} from 'lucide-react';
'use client';

const AIEmailAssistantPage: React.FC = () => {
  const features = [
    {
      icon: Mail,
      title: 'Smart Classification',
      description: 'Automatically categorize and prioritize emails based on content and sender.'
    },
    {
      icon: MessageSquare,
      title: 'Auto-Responses',
      description: 'Generate intelligent responses using AI to handle common inquiries.'
    },
    {
      icon: Brain,
      title: 'Sentiment Analysis',
      description: 'Analyze email tone and sentiment to provide better customer service.'
    },
    {
      icon: Settings,
      title: 'Workflow Automation',
      description: 'Create automated workflows to streamline your email management.'
    }
  ];
  const useCases = [
    {
      title: 'Customer Support',
      description: 'Automate responses to common customer inquiries and support tickets.',
      icon: Users
    },
    {
      title: 'Sales Follow-up',
      description: 'Automatically follow up with leads and prospects based on their behavior.',
      icon: BarChart3
    },
    {
      title: 'Email Marketing',
      description: 'Personalize and optimize email campaigns for better engagement.',
      icon: Zap
    },
    {
      title: 'Internal Communication',
      description: 'Streamline internal email workflows and team communication.',
      icon: Shield
    }
  ];
  return (
    <>
      <Helmet />
        <title  >AI Email Assistant - Zion Tech Group</title>
        <meta const name = "description" content="Transform your email management with our AI Email Assistant. Smart classification, auto-responses, sentiment analysis, and automated workflows." / / />
        <meta name="keywords" content="AI email assistant, email automation, smart email management, auto-responses, email classification" / / />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" />
        {/* Hero Section */}
        <section className="pt-32 pb-20" />
          <div className="container mx-auto px-4" />
            <div className="text-center max-w-4 xl mx-auto" />
              <h1 className="text-5 xl md:text-6 xl font-bold text-white mb-6" />
                AI <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"  >Email Assistant</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Transform your email management with intelligent automation, smart classification, 
                and AI-powered responses that save time and improve productivity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center" />
                <Link 
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                  />Start Building
                </Link>
                <Link 
                  to="/ai-services"
                  className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105"
                  />View All AI Services
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20" />
          <div className="container mx-auto px-4" />
            <div className="text-center mb-16" />
              <h2 className="text-4 xl font-bold text-white mb-6" />
                Powerful <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"  >Features</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3 xl mx-auto">
                Everything you need to automate and optimize your email management
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" />
              {features.map((feature, index) => (
                <div key="{index}" className="text-center group" />
                  <div className="w-20 h-20 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
                    <feature.icon className="w-10 h-10 text-cyan-400" / />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4"  >{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 bg-gradient-to-r from-slate-800/30 to-slate-900/30" />
          <div className="container mx-auto px-4" />
            <div className="text-center mb-16" />
              <h2 className="text-4 xl font-bold text-white mb-6" />
                Use <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"  >Cases</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3 xl mx-auto">
                Discover how our AI email assistant can transform your communication workflows
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" />
              {useCases.map((useCase, index) => (
                <div key="{index}" className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-cyan-400/40 transition-all duration-300 group hover:transform hover:scale-105" />
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <useCase.icon className="w-6 h-6 text-cyan-400" / />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors"  />{useCase.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {useCase.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20" />
          <div className="container mx-auto px-4" />
            <div className="bg-gradient-to-r from-cyan-900/50 to-purple-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2 xl p-12 text-center" />
              <h2 className="text-4 xl font-bold text-white mb-6"  />Ready to Transform Your Email Management?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2 xl mx-auto">
                Start automating your email workflows and boost productivity with AI-powered assistance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center" />
                <Link 
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                  />Start Building Now
                </Link>
                <Link 
                  to="/about"
                  className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105"
                  />Learn More About Us
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIEmailAssistantPage;