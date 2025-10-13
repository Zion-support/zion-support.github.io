import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Brain, Clock, Shield, ArrowRight, CheckCircle, Star, FileText, TrendingUp, Calendar, Heart } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';

const ZionHRAssistantPro = () => 
    },
    
    },
    
    },
    
    },
    
    },
    
    }
  ];

  const pricingPlans = [
    
    },
    
    },
    
    }
  ];

  const hrProcesses = [
    
    },
    
    },
    
    },
    
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" />
      <EnhancedSEO
        title="Zion HR Assistant Pro - AI-Powered Human Resources Management | Zion Tech Group"
        description="Revolutionary AI-powered HR management system with intelligent recruitment, performance analytics, and automated workflows. Transform your HR operations with cutting-edge technology."
        keywords="AI HR management, recruitment automation, performance analytics, employee engagement, HR software, talent management, human resources AI"
        canonical="https://ziontechgroup.com/zion-hr-assistant-pro"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8" />
        <div className="max-w-7xl mx-auto" />
          <div className="text-center mb-16" />
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6" />
              <Brain className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">AI-Powered HR Management</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400" />
                Zion HR Assistant Pro
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed" />
              Revolutionize your human resources with AI-powered recruitment, performance analytics, 
              and automated workflows. Transform HR from administrative burden to strategic advantage.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12" />
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
               />
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
               />
                Watch Demo
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto" />
              
                <div key={index} className="text-center group" />
                  <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300" />
                    {stat.icon}
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HR Processes Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" />
        <div className="max-w-7xl mx-auto" />
          <div className="text-center mb-16" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" />
              Complete HR Management Suite
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto" />
              From recruitment to retirement, manage every aspect of your human resources 
              with intelligent automation and AI-powered insights.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" />
            
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 text-center"
               />
                <div className={`w-16 h-16 mx-auto mb-4 rounded-lg bg-gradient-to-r ${process.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform`} />
                  {process.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors" />
                  {process.title}
                </h3>
                <p className="text-gray-300 leading-relaxed" />
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50" />
        <div className="max-w-7xl mx-auto" />
          <div className="text-center mb-16" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" />
              AI-Powered HR Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto" />
              Leverage cutting-edge artificial intelligence to automate HR processes, 
              improve decision-making, and enhance employee experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" />
            
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
               />
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform" />
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors" />
                  {feature.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed" />
                  {feature.description}
                </p>
                <div className="flex items-center text-cyan-400 text-sm font-medium" />
                  <CheckCircle className="w-4 h-4 mr-2" />
                  {feature.benefit}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" />
        <div className="max-w-7xl mx-auto" />
          <div className="text-center mb-16" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" />
              Flexible Pricing for Every Organization
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto" />
              Choose the plan that fits your team size and HR needs. All plans include our core AI features 
              and come with a 30-day free trial.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" />
            
                key={index}
                className=
                }`}
               />
                
                )}
                
                <div className="text-center mb-8" />
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center" />
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300 ml-2">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8" />
                  
                    <li key={featureIndex} className="flex items-center text-gray-300" />
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      {feature.title}
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/contact"
                  className=
                  }`}
                 />
                  Start Free Trial
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50" />
        <div className="max-w-7xl mx-auto" />
          <div className="text-center mb-16" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" />
              Trusted by HR Leaders Worldwide
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto" />
              See how HR professionals are transforming their departments with our AI-powered solution.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" />
            
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
               />
                <div className="flex items-center mb-4" />
                  
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center justify-between" />
                  <div />
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                  </div>
                  <div className="text-cyan-400 text-sm font-medium bg-cyan-400/10 px-3 py-1 rounded-full" />
                    {testimonial.savings}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30" />
        <div className="max-w-4xl mx-auto text-center" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" />
            Ready to Transform Your HR Operations?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed" />
            Join thousands of HR professionals already using Zion HR Assistant Pro to streamline their operations. 
            Start your free trial today and experience the future of HR management.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center" />
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
             />
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/demo"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
             />
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ZionHRAssistantPro;
