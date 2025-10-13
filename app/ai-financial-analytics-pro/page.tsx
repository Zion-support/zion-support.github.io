import React from 'react';
"use client";
import { Brain, Shield, CheckCircle, Star, Target, BarChart3 } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function page() 
    },
    
    },
    
    },
    
    },
  ];

  const analyticsFeatures = [
    
    },
    
    },
    
    },
    
    },
  ];

  const pricingPlans = [
    
    },
    
    },
    
    },
  ];

  return (
    <div />
      <Helmet />
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Advanced AI services with cutting-edge technology and expert solutions." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, automation" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-services" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden" />
        <div className="absolute inset-0 overflow-hidden" />
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10" />
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6" />
            <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">AI-Powered Solutions</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400" />
              AI Services
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed" />
            Transform your business with our comprehensive AI services. From machine learning to automation, 
            we provide cutting-edge solutions tailored to your needs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center" />
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
             />
              Get Started
              <Zap className="w-5 h-5 ml-2" />
            </Link>
            <Link 
              to="/demo" 
              className="inline-flex items-center px-8 py-4 border border-cyan-500/30 text-cyan-400 font-semibold rounded-full hover:bg-cyan-500/10 transition-all duration-300"
             />
              View Demo
              <Target className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" />
        <div className="max-w-7xl mx-auto" />
          <div className="text-center mb-16" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" />
              Our AI Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto" />
              Comprehensive AI solutions designed to accelerate your digital transformation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" />
            <div className="bg-gradient-to-br from-slate-800/50 to-purple-800/20 p-8 rounded-2xl border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300" />
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mb-6" />
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Data Analytics</h3>
              <p className="text-gray-300" />
                Advanced analytics and insights to drive data-driven decision making
              </p>
            </div>

          {/* Pricing Section */}
          <div className="mb-16" />
            <h2 className="text-3xl font-bold text-white text-center mb-12" />
              Pricing Plans
            </h2>
            <div className="grid md:grid-cols-3 gap-8" />
              
                  key={index}
                  className={`bg-white/10 backdrop-blur-sm rounded-lg p-8 relative ${plan.popular ? "ring-2 ring-cyan-500" : ""}`}
                 />
                  
                  )}
                  <div className="text-center mb-6" />
                    <h3 className="text-2xl font-bold text-white mb-2" />
                      {plan.name}
                    </h3>
                    <div className="text-4xl font-bold text-cyan-400 mb-2" />
                      {plan.price}
                      <span className="text-lg text-gray-300" />
                        {plan.period}
                      </span>
                    </div>
                    <p className="text-gray-300">{plan.description}</p>
                  </div>
                  <ul className="space-y-3 mb-8" />
                    
                        key={featureIndex}
                        className="text-gray-300 flex items-center"
                       />
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature.title}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className=
                    }`}
                   />
                    Get Started
                  </Link>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-slate-800/50 to-purple-800/20 p-8 rounded-2xl border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300" />
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mb-6" />
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">AI Security</h3>
              <p className="text-gray-300" />
                Robust security measures to protect your AI systems and data
              </p>
            </div>
          </div>
        </div>
      </div>
</div>
  );
};

export default Page;
