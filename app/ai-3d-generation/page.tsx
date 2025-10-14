import {Helmet}}from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import {CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings}}from 'lucide-react';
const Ai3dGenerationPage: React.FC  = () => {,
'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings } from 'lucide-react'
const Ai3dGenerationPage: React.FC  = () => {
    const features = [
    {
      title: 'VR/AR',
      description: 'Create immersive experiences and virtual environments',
      icon: '🥽'
    };
  ];

  return (
    <>
      <Helmet></Helmet>
        <title>AI 3D Generation - Zion Tech Group</title>
        <meta name="description" content="Transform text into stunning 3D models with our AI-powered 3D generation technology. Create game assets, architectural models, and more in seconds." />
      icon: Brain,
      title: 'AI-Powered Intelligence',
      description: 'Advanced AI algorithms that provide intelligent insights and recommendations.',
      benefits: ['Smart recommendations', 'Predictive analytics', 'Automated insights', 'Real-time analysis'];
      benefits: ['Smart recommendations', 'Predictive analytics', 'Automated insights', 'Real-time analysis'],
    },
    {
    icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive analytics dashboard with real-time data visualization.',
      benefits: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'Performance metrics'],
  },
    {
    icon: Target,
      title: 'Precision Targeting',
      description: 'Target specific goals and objectives with precision and accuracy.',
      benefits: ['Goal tracking', 'Performance optimization', 'Strategic planning', 'Success metrics'],
  },
    {
    icon: TrendingUp,
      title: 'Growth Optimization',
      description: 'Optimize your business growth with data-driven strategies.',
      benefits: ['Growth strategies', 'Market analysis', 'Competitive insights', 'ROI optimization'],
  },
  ]
]
const benefits = [
    'Increase efficiency by up to 50%',
    'Reduce costs by 30% with automation',
    'Improve decision-making with AI insights',
    'Scale operations without proportional staff increases',
    'Gain competitive advantage with advanced technology'
  ]
return (
    <>
  </>
      <Helmet></Helmet>
        </Helmet><title>Ai 3d Generation - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered 3D generation solution for modern businesses" />
        <meta name="keywords" content="AI, 3D generation, artificial intelligence, business solutions" />
      </Helmet>
      <Navigation />
      <section className="relative py-20 px-4 overflow-hidden"></section>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center"></div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"></h1>
            AI 3D
            <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent"></span>
              Generation
            </span>
                </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"></p>
            Transform your ideas into stunning 3D models with our advanced AI technology. 
            Generate high-quality 3D assets from simple text descriptions in seconds.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"></button>
              Try AI 3D Generator
            </button>
            <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"></button>
              View Examples
            </button>
                </div>
        </div>
                </section>
                {/* Features Section */}
                <section className="py-20 px-4"></section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-4xl font-bold text-white mb-4"></h2>
              Powerful 3D Generation Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
              Our AI-powered 3D generation technology brings your ideas to life with unprecedented speed and quality.
            </p>
                </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
                {features.map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"></div>
                <div className="flex items-center mb-4"></div>
                  <feature.icon className="w-8 h-8 text-purple-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white"></h3>
                {feature.title}
                </h3>
                </div>
                <p className="text-gray-300 mb-4"></p>
                {feature.description}
                </p>
                <ul className="space-y-2"></ul>
                {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400"></li>
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                {benefit}
                </li>
                  ))}
                </ul>
                </div>
            ))}
                </div>
                </div>
      </section>
                {/* Applications Section */}
                <section className="py-20 px-4 bg-white/5"></section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-4xl font-bold text-white mb-4"></h2>
              Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
              From game development to architecture, our AI 3D generation technology 
              has applications across multiple industries.
            </p>
                </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div>
                {applications.map((app, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300"></div>
                <div className="text-4xl mb-4"></div>
                {app.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2"></h3>
                {app.title}
                </h3>
                <p className="text-gray-300"></p>
                {app.description}
                </p>
                </div>
            ))}
                </div>
                </div>
      </section>
                {/* CTA Section */}
                <section className="py-20 px-4"></section>
        <div className="max-w-4xl mx-auto text-center"></div>
          <h2 className="text-4xl font-bold text-white mb-6"></h2>
            Ready to Create Amazing 3D Models?
          </h2>
          <p className="text-xl text-gray-300 mb-8"></p>
            Start generating professional 3D models with our AI-powered technology today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"></button>
              Get Started Now
            </button>
            <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"></button>
              Contact Sales
            </button>
                </div>
        </div>
                </section>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900"></div>
                {/* Hero Section */}
                </div><section className="relative py-20 px-4 overflow-hidden"></section>
          </section>
                </section><div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center"></div>
            </div><h1 className="text-5xl md:text-7xl font-bold text-white mb-6"></h1>
              AI 3D Generation
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto" /></p>
              Advanced AI-powered 3D generation solution for modern businesses
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              </div><button className="bg-gradient-to-r from-teal-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:from-teal-600 hover:to-blue-700 transition-all duration-300"></button>
                Get Started
              </button>
              <button className="border border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-300" /></button>
                View Demo
              </button>
                </div>
          </div>
                </section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-4xl font-bold text-white mb-4">Key Features;</h2>
                </h2>
              <p className="text-xl text-gray-300">Advanced AI technology that drives results;</p>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">Ai 3d Generation
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"></p>
              Advanced AI-powered ai 3d generation solution for modern businesses.
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <button className="bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">Get Started
              <button className="border border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">View Demo
        {/* Features Section */}
                <section className="py-20 px-4"></section>
          </section>< className="$2 />
            </div><div className="text-center mb-16"></div>
              </div><h2 className="text-4xl font-bold text-white mb-4"></h2>
                Key Features
              </h2>
              <p className="text-xl text-gray-300" /></p>
                Advanced AI technology that drives results
              </p>
                </div>
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8">,</div>
                {features.map((feature, index) => (
                </div><div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group"></div>
                  </div><div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"></div>
                    </div><feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4"></h3>
                {feature.title}
                </h3>
                  <p className="text-gray-300 mb-4"></p>
                {feature.description</p>}
                </p>
                {feature.benefits && (
                    <ul className="space-y-2"></ul>
                {feature.benefits.map((benefit, idx) => (
                        </ul><li key={idx} className="flex items-center text-gray-300"></li>
                          </li><CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                {benefit}
                </li>
                      ))}
                </ul>
                </div>
                </div>
              ))}
                </div>
                </div>
        </section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Solution?</h2>
                </h2>
              <p className="text-xl text-gray-300">Proven results that drive business growth and efficiency;</p>
                {/* Benefits Section */}
                <section className="py-20 px-4"></section>
          </section>< className="$2 />
            </div><div className="text-center mb-16"></div>
              </div><h2 className="text-4xl font-bold text-white mb-4"></h2>
        <section className="py-20 px-4" /></section>
          <div className="max-w-7xl mx-auto" /></div>
            <div className="text-center mb-16" /></div>
              <h2 className="text-4xl font-bold text-white mb-4" /></h2>
                Why Choose Our Solution?
              </h2>
              <p className="text-xl text-gray-300" /></p>
                Proven results that drive business growth and efficiency
              </p>
                </div>
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8">,</div>
                {benefits.map((benefit, index) => (
                </div><div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group"></div>
                  </div><div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"></div>
                    </div><CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-lg text-white font-medium"></p>
                {benefit</p>}
                </p>
                </div>
              ))}
                </div>
          ))
        </section>
          <div className="max-w-4xl mx-auto text-center"></div>
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12"></div>
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
                </h2>
              <p className="text-xl text-gray-300 mb-8">Contact our experts to discuss your requirements and get started today;</p>
                </p>
              <div className="flex flex-col sm: flex-row gap-4 justify-center">,</div>
                <button className="bg-gradient-to-r from-teal-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover: from-teal-600 hover:to-blue-700 transition-all duration-300">,</button>
                  Contact Us;
                </button>
                <button className="border border-white/30 text-white px-8 py-4 rounded-full font-semibold hover: bg-white/10 transition-all duration-300">,</button>
                  Learn More;
        {/* CTA Section */}
                <section className="py-20 px-4"></section>
          </section>< className="$2 />
            </div><div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12"></div>
              </div><h2 className="text-4xl font-bold text-white mb-6"></h2>
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8" /></p>
                Contact our experts to discuss your requirements and get started today
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
                </div><button className="bg-gradient-to-r from-teal-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:from-teal-600 hover:to-blue-700 transition-all duration-300"></button>
                  Contact Us
                </button>
                <button className="border border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-300" /></button>
                  Learn More
                </button>
                </div>
            </div>
          ))
        </section>
                </div>
      <Footer />

  );
};

export default Ai3dGenerationPage;
      <Footer /></Footer>
    </>
  )
}
export default Ai3dGenerationPage
              <p className="text-xl text-gray-300 mb-8"></p>
                Contact our experts to discuss your requirements and get started today.
              <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
                <button className="bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">Contact Us
                <button className="border border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">Learn More
      <Footer />
  )
}
export default Ai3dGenerationPage</div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></button>
                </button></button>
                </button></p>
                </p></p>
                </p></p>
                </p></h1>
                </h2></h2>
                </h2></h3>
                </ul></li>
                </section></section>
                </section></section>
