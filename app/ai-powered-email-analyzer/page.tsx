import { Link } from 'react-router-dom';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import 
} from 'lucide-react';

const AIPoweredEmailAnalyzerPage = () => 
    { label: "Emails Analyzed", value: "1M+", icon: <Mail className="w-6 h-6" / /> },
    { label: "Accuracy Rate", value: "99.5%", icon: <Target className="w-6 h-6" / /> },
    { label: "Time Saved", value: "80%", icon: <Clock className="w-6 h-6" / /> },
    { label: "Cost Reduction", value: "60%", icon: <TrendingUp className="w-6 h-6" / /> }
  ];

  const features = [
    
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden" /></div>
      <Helmet /></Helmet>
        <title />AI Services - Zion Tech Group</title>
        <meta name="description" content="Advanced AI services with cutting-edge technology and expert solutions." / />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, automation" / />
        <link rel="canonical" href="https://ziontechgroup.com/ai-services" / />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4" /></section>
        <div className="max-w-7xl mx-auto" /></div>
          <motion.div
            initial={{ opacity: 20 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
           /></motion>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-500/30 mb-6" /></div>
              <Mail className="w-5 h-5 text-cyan-400 mr-2" / />
              <span className="text-cyan-300 font-medium" />AI-Powered Email Intelligence</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6" /></h1>
              Transform Your
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent" /> Email Communication</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto" />
              Leverage advanced AI to analyze, optimize, and enhance your email communications with intelligent insights, 
              sentiment analysis, and smart response suggestions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center" /></div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
               /></motion>
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 inline" / />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-gray-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-300"
               /></motion>
                View Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10" /></div>
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6" /></div>
            <Sparkles className="w-4 h-4 text-cyan-400 mr-2" / />
            <span className="text-cyan-400 text-sm font-medium" />AI-Powered Solutions</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight" /></h1>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400" /></span>
              AI Services
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed" />
            Transform your business with our comprehensive AI services. From machine learning to automation, 
            we provide cutting-edge solutions tailored to your needs.
          </p>

      {/* Stats Section */}
      <section className="py-16 px-4" /></section>
        <div className="max-w-7xl mx-auto" /></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8" /></div>
            
                key={index}
                initial={{ opacity: 20 }}
                animate={{ opacity: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              ></motio></motion>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2" /></div>
                  {stat.value}
                </div>
                <div className="text-gray-400 font-medium" /></div>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" /></section>
        <div className="max-w-7xl mx-auto" /></div>
          <motion.div
            initial={{ opacity: 20 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
           /></motion>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" /></h2>
              Powerful AI Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto" />
              Comprehensive AI solutions designed to accelerate your digital transformation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" /></div>
            
                key={index}
                initial={{ opacity: 20 }}
                animate={{ opacity: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all duration-300"
              ></motio></motion>
                <div className="mb-6" /></div>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4" /></h3>
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed" />
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

      {/* Pricing Section */}
      <section className="py-20 px-4" /></section>
        <div className="max-w-7xl mx-auto" /></div>
          <motion.div
            initial={{ opacity: 20 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
           /></motion>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" /></h2>
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto" />
              Choose the perfect plan for your business needs. All plans include our core AI features 
              with no hidden fees or long-term contracts.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8" /></div>
            
                key={index}
                initial={{ opacity: 20 }}
                animate={{ opacity: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className=
                }`}
              ></motio></motion>
                
                )}
                <div className="text-center mb-8" /></div>
                  <h3 className="text-2xl font-bold text-white mb-2" />{plan.name}</h3>
                  <p className="text-gray-400 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center" /></div>
                    <span className="text-5xl font-bold text-white" />{plan.price}</span>
                    <span className="text-gray-400 ml-2" />{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8" /></ul>
                  
                    <li key={featureIndex} className="flex items-center" /></li>
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" / />
                      <span className="text-gray-300" />{feature.title}</span>
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className=
                  }`}
                 /></motion>
                  Get Started
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4" /></section>
        <div className="max-w-7xl mx-auto" /></div>
          <motion.div
            initial={{ opacity: 20 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-cyan-500/20 to-purple-600/20 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-12 text-center"
           /></motion>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" /></h2>
              Ready to Transform Your Email Communication?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto" />
              Join thousands of businesses already using our AI-powered email analyzer 
              to improve their communication effectiveness and drive better results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center" /></div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
               /></motion>
                Start Your Free Trial
                <ArrowRight className="w-5 h-5 ml-2 inline" / />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-white/30 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-300"
               /></motion>
                Contact Sales
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 bg-black/20" /></section>
        <div className="max-w-7xl mx-auto text-center" /></div>
          <h3 className="text-2xl font-bold text-white mb-4" />Ready to Get Started?</h3>
          <p className="text-gray-300 mb-6" />
            Contact us today to learn more about our AI-Powered Email Analyzer and how it can transform your business communication.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
           /></Link>
            Start Your AI Journey
            <Zap className="w-5 h-5 ml-2" / />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Page;
