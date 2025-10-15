import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Bot, Zap, Target, Clock, Shield, Smartphone, Globe, MessageSquare, FileText, Settings, Star, Award, Phone, MapPin, Envelope } from 'lucide-react';

const AIAutomationPlatformPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Automation Platform - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI automation platform for streamlining business processes and increasing efficiency." />
      </Helmet>
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              AI Automation Platform
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Streamline your business processes with our comprehensive AI automation platform. 
              Increase efficiency, reduce costs, and scale your operations with intelligent automation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-slate-800 rounded-xl p-8 border border-slate-700">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Bot className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Process Automation</h3>
                <p className="text-gray-300 mb-6">Automate repetitive tasks and workflows with intelligent AI agents.</p>
                <ul className="space-y-2 text-left">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Workflow automation
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Task scheduling
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Data processing
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-slate-800 rounded-xl p-8 border border-slate-700">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Smart Integration</h3>
                <p className="text-gray-300 mb-6">Seamlessly integrate with your existing systems and tools.</p>
                <ul className="space-y-2 text-left">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    API integrations
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Database connections
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Third-party tools
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-slate-800 rounded-xl p-8 border border-slate-700">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Intelligent Analytics</h3>
                <p className="text-gray-300 mb-6">Get insights and optimize your automation processes.</p>
                <ul className="space-y-2 text-left">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Performance metrics
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Predictive analytics
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Optimization suggestions
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 flex items-center mx-auto">
              Get Started with AI Automation
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIAutomationPlatformPage;
