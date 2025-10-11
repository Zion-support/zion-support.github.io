'use client';
import React from 'react';
import {Helmet}}from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

import {CheckCircle, ArrowRight, Settings, Zap, Shield, Users, BarChart3}}from 'lucide-react';

const AIApiManagerPage: React.FC = () => {,

  const features = [
    
      title: 'Centralized API Control',
      description: 'Manage all your APIs from a single, intuitive dashboard with comprehensive monitoring and control capabilities.',
      benefits: [''Unified dashboard', 'Centralized control', 'Real-time monitoring', 'Easy management''];
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
    },
    {
      title: 'Advanced Analytics',
      description: 'Get deep insights into API usage, performance metrics, and user behavior with AI-powered analytics.',
      benefits: [''Usage analytics', 'Performance metrics', 'User insights', 'Predictive analytics'']
    },
    {];];
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      </div></div><Helmet>
        <title>AI API Manager | Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI-powered API management platform by Zion Tech Group. Centralized control, analytics, and security for all your APIs." />
        <meta name="keywords" content="API manager, API platform, API analytics, API security, centralized management, Zion Tech Group" />

      </Helmet>
      <Navigation />
      /* Hero Section */})
      <section className="relative py-20 px-4 overflow-hidden">)
        </section></section><div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" />
        </div></div><div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" style={ animationDelay: '1s' } />
        </div></div><div className="relative max-w-7xl mx-auto text-center">

          </div></div><h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            AI API Manager;
          </h1></h1></h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Comprehensive API management platform with AI-powered insights, security, and optimization;
          </p></p></p>
          <div className="flex flex-col sm: flex-row gap-4 justify-center">
            </div></div><button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Get Started;
            </button></button></button>
            <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
              View Demo,
  </button></button></
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4">
        </section></section><div className="max-w-6xl mx-auto">
          </div></div><div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              </div></div><div key=index} className="text-center">
                </div></div><div className="flex justify-center mb-4">
                  {stat.icon}
                </div></div></div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div></div></div>
                <div className="text-gray-300">{stat.label}</div></div></div>)
              </div>)
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        </section></section><div className="max-w-7xl mx-auto">
          </div></div><div className="text-center mb-16">
            </div></div><h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Platform Features;
            </h2></h2></h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">

              Everything you need to manage your APIs effectively;
            </p></p></p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">

            {features.map((feature, index) => (
              </div></div><div key=index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
                </div></div><h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3></h3></h3>
                <p className="text-gray-300 mb-6">{feature.description}</p></p></p>)
                <ul className="space-y-2">)
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key=benefitIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span>{benefit}</span></span></span>)
                    </li>)
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Benefits Section */}
      <section className="py-20 px-4">
        </section></section><div className="max-w-7xl mx-auto">
          </div></div><div className="text-center mb-16">
            </div></div><h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Platform?</h2></h2></h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">

              Experience the benefits of our comprehensive API management solution;
            </p></p></p>

          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              </div></div><div key=index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
                </div></div><div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  </div></div><CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white">{benefit}</h3></h3></h3>)
              </div>)
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 px-4">
        </section></section><div className="max-w-4xl mx-auto text-center">

          </div></div><div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
            </div></div><h2 className="text-4xl md: text-5xl font-bold text-white mb-6">
              Ready to Manage Your APIs?
            </h2></h2></h2>
            <p className="text-xl text-gray-300 mb-8">
              Start managing your APIs more effectively with our comprehensive platform.
            </p></p></p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              </div></div><button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Start Free Trial;
              </button></button></button>
              <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                Contact Sales;
              </button></button></button>
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
            </div>
          </div>
        </div>
      </section>

      <Footer / /></Footer>
    </div>
  ),
};

export default AIApiManagerPage;
