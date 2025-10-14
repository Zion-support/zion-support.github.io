'use client';
import React from 'react';
import { Helmet  } from 'react-helmet-async';
import { Brain, Zap, CheckCircle, ArrowRight, Star, Users, BarChart, Shield, Target, Clock, Cpu  } from 'lucide-react';

const ZionAIRecruitmentProPage: React.FC  = () => {return (
    <>
      <Helmet></Helmet>
        <title>Zion AI Recruitment Pro | Zion Tech Group</title>
        <meta name="description" content="Advanced recruitment automation with AI-powered candidate screening, resume analysis, and intelligent hiring workflows." />
        <meta name="keywords" content="recruitment AI, hiring automation, candidate screening, resume analysis, recruitment optimization" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
                {/* Hero Section */}
                <section className="relative py-20 px-4 sm:px-6 lg:px-8"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center"></div>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-8"></div>
                <Cpu className="w-5 h-5 text-cyan-400 mr-2" />
                <span className="text-cyan-400 font-medium">Zion Micro SAAS</span>
                </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6"></h1>
                Zion AI Recruitment Pro
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p>
                Advanced recruitment automation with AI-powered candidate screening, resume analysis, and intelligent hiring workflows.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25"></button>
                  Try Free
                  <ArrowRight className="w-5 h-5 ml-2 inline" />
                </button>
                <button className="px-8 py-4 border border-cyan-500/30 text-cyan-400 rounded-xl font-semibold hover:bg-cyan-500/10 transition-all duration-300"></button>
                  View Demo
                </button>
                </div>
            </div>
                </div>
        </section>
                {/* Features Section */}
                <section className="py-20 px-4 sm:px-6 lg:px-8"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-4xl font-bold text-white mb-4"></h2>
                Powerful AI Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
                Leverage advanced artificial intelligence to automate complex tasks, 
                gain intelligent insights, and optimize your business operations.
              </p>
                </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300"></div>
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-6"></div>
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">AI-Powered Intelligence</h3>
                <p className="text-gray-300 mb-4"></p>
                  Advanced machine learning algorithms provide intelligent automation, 
                  predictive insights, and smart decision-making capabilities.
                </p>
                <ul className="space-y-2 text-sm text-gray-400"></ul>
                  <li className="flex items-center"></li>
                    <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                    Machine learning models
                  </li>
                  <li className="flex items-center"></li>
                    <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                    Predictive analytics
                  </li>
                  <li className="flex items-center"></li>
                    <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                    Smart automation
                  </li>
                </ul>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"></div>
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-6"></div>
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Automated Workflows</h3>
                <p className="text-gray-300 mb-4"></p>
                  Streamline your processes with intelligent automation that handles 
                  complex workflows and reduces manual effort significantly.
                </p>
                <ul className="space-y-2 text-sm text-gray-400"></ul>
                  <li className="flex items-center"></li>
                    <CheckCircle className="w-4 h-4 text-purple-400 mr-2" />
                    Process automation
                  </li>
                  <li className="flex items-center"></li>
                    <CheckCircle className="w-4 h-4 text-purple-400 mr-2" />
                    Smart scheduling
                  </li>
                  <li className="flex items-center"></li>
                    <CheckCircle className="w-4 h-4 text-purple-400 mr-2" />
                    Dynamic optimization
                  </li>
                </ul>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-green-500/20 hover:border-green-500/40 transition-all duration-300"></div>
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-6"></div>
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Enterprise Security</h3>
                <p className="text-gray-300 mb-4"></p>
                  Bank-level security with advanced encryption, compliance standards, 
                  and enterprise-grade access controls for your data protection.
                </p>
                <ul className="space-y-2 text-sm text-gray-400"></ul>
                  <li className="flex items-center"></li>
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    End-to-end encryption
                  </li>
                  <li className="flex items-center"></li>
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Compliance standards
                  </li>
                  <li className="flex items-center"></li>
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Access controls
                  </li>
                </ul>
              </div>
                </div>
          </div>
                </section>
                {/* Benefits Section */}
                <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-4xl font-bold text-white mb-4"></h2>
                Why Choose Zion AI Solutions?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
                Transform your business with our comprehensive AI-powered micro SAAS solutions 
                designed for modern enterprises and growing businesses.
              </p>
                </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"></div>
              <div></div>
                <div className="space-y-8"></div>
                  <div className="flex items-start space-x-4"></div>
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0"></div>
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div></div>
                      <h3 className="text-xl font-semibold text-white mb-2">Save 80% Time</h3>
                      <p className="text-gray-300"></p>
                        Automate repetitive tasks and focus on strategic initiatives 
                        while our AI handles the complex work.
                      </p>
                </div>
                  </div>

                  <div className="flex items-start space-x-4"></div>
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0"></div>
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div></div>
                      <h3 className="text-xl font-semibold text-white mb-2">Easy to Use</h3>
                      <p className="text-gray-300"></p>
                        Intuitive interface designed for non-technical users with 
                        powerful features accessible to everyone.
                      </p>
                </div>
                  </div>

                  <div className="flex items-start space-x-4"></div>
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0"></div>
                      <BarChart className="w-6 h-6 text-white" />
                    </div>
                    <div></div>
                      <h3 className="text-xl font-semibold text-white mb-2">Real-time Insights</h3>
                      <p className="text-gray-300"></p>
                        Get instant insights and analytics to make data-driven 
                        decisions and optimize your business performance.
                      </p>
                </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-cyan-500/20"></div>
                <h3 className="text-2xl font-bold text-white mb-6">Key Benefits</h3>
                <div className="space-y-6"></div>
                  <div className="flex justify-between items-center"></div>
                    <span className="text-gray-300">Time Savings</span>
                    <span className="text-cyan-400 font-bold">80%</span>
                </div>
                  <div className="flex justify-between items-center"></div>
                    <span className="text-gray-300">Accuracy</span>
                    <span className="text-green-400 font-bold">99.9%</span>
                </div>
                  <div className="flex justify-between items-center"></div>
                    <span className="text-gray-300">Cost Reduction</span>
                    <span className="text-purple-400 font-bold">60%</span>
                </div>
                  <div className="flex justify-between items-center"></div>
                    <span className="text-gray-300">User Satisfaction</span>
                    <span className="text-orange-400 font-bold">95%</span>
                </div>
                </div>
                </div>
            </div>
                </div>
        </section>
                {/* CTA Section */}
                <section className="py-20 px-4 sm:px-6 lg:px-8"></section>
          <div className="max-w-4xl mx-auto text-center"></div>
            <h2 className="text-4xl font-bold text-white mb-6"></h2>
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8"></p>
              Join thousands of businesses already using Zion AI solutions to 
              automate processes and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25"></button>
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </button>
              <button className="px-8 py-4 border border-cyan-500/30 text-cyan-400 rounded-xl font-semibold hover:bg-cyan-500/10 transition-all duration-300"></button>
                Schedule Demo
              </button>
                </div>
          </div>
                </section>
      </div>
    </>
  );
};

export default ZionAIRecruitmentProPage;