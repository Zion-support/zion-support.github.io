<<<<<<< HEAD
'use client';
import React from 'react';
import {Helmet}}from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
import {CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings}}from 'lucide-react';
const AiCloudInfrastructurePage: React.FC = () => {,
=======
>>>>>>> origin/main
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings } from 'lucide-react';
const AiCloudInfrastructurePage: React.FC = () => {
>>>>>>> main
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Intelligence',
      description: 'Advanced AI algorithms that provide intelligent insights and recommendations.',
      benefits: ['Smart recommendations', 'Predictive analytics', 'Automated insights', 'Real-time analysis']},
    {icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive analytics dashboard with real-time data visualization.',
      benefits: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'Performance metrics']},
    {icon: Target,
      title: 'Precision Targeting',
      description: 'Target specific goals and objectives with precision and accuracy.',
      benefits: ['Goal tracking', 'Performance optimization', 'Strategic planning', 'Success metrics']},
    {icon: TrendingUp,
      title: 'Growth Optimization',
      description: 'Optimize your business growth with data-driven strategies.',
<<<<<<< HEAD
      benefits: ['Growth strategies', 'Market analysis', 'Competitive insights', 'ROI optimization']
    }
  ];

  const benefits = [
<<<<<<< HEAD
    'Reduce infrastructure costs by 40%',
    'Improve performance by 60%',
    'Increase reliability by 95%',
    'Lower operational overhead by 50%',
    'Enable global scalability',
    'Automate infrastructure management',
    'Enhance security and compliance',
    'Optimize resource utilization'
  ];

  const useCases = [
    {
      title: 'Enterprise Migration',
      description: 'Migrate enterprise applications to cloud with AI-powered optimization',
      icon: '🏢'
    },
    {
      title: 'E-commerce Platforms',
      description: 'Scale e-commerce platforms with intelligent cloud infrastructure',
      icon: '🛒'
    },
    {
      title: 'Data Analytics',
      description: 'Build scalable data analytics platforms in the cloud',
      icon: '📊'
    },
    {
      title: 'IoT Applications',
      description: 'Support IoT applications with edge computing and cloud infrastructure',
      icon: '📡'
    },
    {
      title: 'Mobile Apps',
      description: 'Power mobile applications with scalable cloud backend services',
      icon: '📱'
    },
    {
      title: 'AI/ML Workloads',
      description: 'Run AI and machine learning workloads on optimized cloud infrastructure',
      icon: '🤖'
    }
=======
'Increase efficiency by up to 50%',
    'Reduce costs by 30% with automation',
    'Improve decision-making with AI insights',
    'Scale operations without proportional staff increases',
    'Gain competitive advantage with advanced technology'
>>>>>>> origin/main
  ];

  return (
    <>
  </>
      <Helmet>
        <title>Ai Cloud Infrastructure - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered ai cloud infrastructure solution for modern businesses." />
        <meta name="keywords" content="AI ai cloud infrastructure, artificial intelligence, ai cloud infrastructure, AI solutions, intelligent automation" />
=======
      benefits: ['Growth strategies', 'Market analysis', 'Competitive insights', 'ROI optimization']},
  ]
  return(<React.Fragment>)</React.Fragment>
      <Helmet />
        <title>AI Cloud Infrastructure - Zion Tech Group</title>
        <meta name="description" content="Scalable cloud infrastructure enhanced with AI capabilities." />
        <meta name="keywords" content="AI cloud infrastructure, artificial intelligence, cloud computing, AI solutions, intelligent infrastructure" />
>>>>>>> origin/main
      </Helmet>
      <Navigation />
<<<<<<< HEAD
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-pink-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
        </section>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Ai Cloud Infrastructure
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Advanced AI-powered ai cloud infrastructure solution for modern businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-pink-500 to-blue-600 hover:from-pink-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="border border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
        </section>
=======
      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">{/* Hero Section */</main>} <section className="relative py-20 px-4 sm: px-6 lg:px-8">,</section>
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md: text-6xl font-bold text-gray-900 mb-6">,</h1>
                AI Cloud Infrastructure;
  </
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">Transform your business with intelligent solutions powered by cutting-edge AI technology.</p>
              </p>
              <div className="flex flex-col sm: flex-row gap-4 justify-center">,</div>
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover: bg-blue-700 transition-colors">,</button>
                  Get Started;
  </
                <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover: bg-blue-50 transition-colors">,</button>
                  Learn More,
  </
              </div>
            </div>
          </div>
        </section>
        {/* Features Section */} <section className="py-20 px-4 sm: px-6 lg:px-8">,</section>
>>>>>>> origin/main
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md: text-4xl font-bold text-gray-900 mb-4">,</h2>
                Powerful AI Features,
  </
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">Discover how our AI platform can revolutionize your business operations.</p>
              </p>
            </div>
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8">,</div>
              {features.map((feature, index) => (
<<<<<<< HEAD
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-sky-500 to-blue-500 rounded-lg mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-sky-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
=======
                <div key={index}className="bg-white p-6 rounded-xl shadow-lg hover: shadow-xl transition-shadow">,</div>
                  <div className="flex items-center mb-4">
                    <feature.icon className="h-8 w-8 text-blue-600 mr-3" />
                    <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                  </div>
<<<<<<< HEAD
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  {feature.benefits && (
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
=======
                  <p className="text-gray-600 mb-4">{feature.description</p>}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex}className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {benefit} </li>
                    ))}
                  </ul>
<<<<<<< HEAD
=======

>>>>>>> origin/main
=======
>>>>>>> main
>>>>>>> origin/main
>>>>>>> origin/main
                </div>
              ))}
            </div>
          </div>
<<<<<<< HEAD
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Applications & Use Cases
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                From startups to enterprises, our AI Cloud Infrastructure serves diverse needs
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center">
                  <div className="text-4xl mb-4">{useCase.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                  <p className="text-gray-300">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our AI Cloud Infrastructure?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Experience the future of cloud computing with our revolutionary AI technology
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-sky-500 to-blue-500 rounded-lg mb-4">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-white font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
=======
        </section>
<<<<<<< HEAD

        {/* Benefits Section */}
        <section className="py-20 px-4">
        </section>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Our Solution?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Proven results that drive business growth and efficiency
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-lg text-white font-medium">{benefit}</p>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

{/* CTA Section */}
        <section className="py-20 px-4">
        </section>
>>>>>>> origin/main
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our experts to discuss your requirements and get started today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-pink-500 to-blue-600 hover:from-pink-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Contact Us
                </button>
                <button className="border border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                  Learn More
                </button>
              ))
            </div>
          </div>
        </section>
      </div>
=======
        {/* CTA Section */} <section className="py-20 px-4 sm: px-6 lg:px-8 bg-blue-600">,</section>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md: text-4xl font-bold text-white mb-6">,</h2>
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8">Join thousands of businesses already using our AI platform.</p>
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover: bg-gray-100 transition-colors font-semibold">,</button>
              Start Your Free Trial;
  </
          </div>
</section>
      </main>
>>>>>>> origin/main
      <Footer />
    </React.Fragment>
  ),
};

export default AiCloudInfrastructurePage;
<<<<<<< HEAD
=======
  </button>
  </h2>
  </button>
  </button>
  </h1>
<<<<<<< HEAD
=======
>>>>>>> origin/main
=======
>>>>>>> main
=======
'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'</div>
              ))}
        {/* CTA Section */}
        <section className="py-20 px-4 sm: px-6 lg:px-8 bg-blue-600">
          </section>< className="$2 />
            </div><h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8" /></p>
              Join thousands of businesses already using our AI platform.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold" /></button>
              Start Your Free Trial
  
          </div>

            <p className="text-xl text-blue-100 mb-8">
              Join thousands of businesses already using our AI platform.
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">Start Your Free Trial
      <Footer />
  )
}
export default AiCloudInfrastructurePage</div></div></div></div></div></div></div></div></div></button></button></button></p></p></p></p></h1></h2></h2></h3></ul></li></main></section></section></section>
>>>>>>> origin/main
>>>>>>> origin/main
