'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ArrowRight, CheckCircle, Star, Users, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Settings, Smartphone, Calendar, FileText, MessageCircle, Heart, DollarSign, Box, Monitor, Package, Mic, Workflow, Eye, Wifi, MessageSquare, ShoppingCart } from 'lucide-react';

const AiComputerVisionPage: React.FC = () => {
  const features = [
    {
      icon: Eye,
      title: 'Object Detection',
      description: 'Advanced AI algorithms for real-time object detection and recognition.',
      benefits: ['Real-time detection', 'High accuracy', 'Multiple object types', 'Custom models']
    },
    {
      icon: Camera,
      title: 'Image Analysis',
      description: 'Comprehensive image analysis and processing capabilities.',
      benefits: ['Image classification', 'Feature extraction', 'Pattern recognition', 'Quality assessment']
    },
    {
      icon: Brain,
      title: 'AI-Powered Intelligence',
description: 'Machine learning models that continuously improve accuracy.',
      benefits: ['Deep learning', 'Neural networks', 'Continuous learning', 'Adaptive algorithms']

    },
    {
      icon: BarChart,
      title: 'Analytics Dashboard',
description: 'Real-time analytics and insights from visual data.',
      benefits: ['Real-time metrics', 'Data visualization', 'Performance tracking', 'Custom reports']
    }
  ]

const benefits = [
    'Enhanced visual recognition accuracy',
    'Real-time processing capabilities',
    'Scalable AI solutions',
    'Custom model training',
    'Integration with existing systems',
    'Cost-effective implementation'
  ];
const PagePage: React.FC = () => {
  return (
    <></>
<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        </div><section className="pt-20 pb-16 px-4 sm: px-6 lg:px-8">
          </section>
<div className="max-w-7xl mx-auto">
            </div>
<div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Page
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Discover our comprehensive solutions designed to transform your business.
              </p>

            </div>
          </div>
        </section>

{/* Content Section */}
        <section className="py-16 px-4 sm: px-6 lg:px-8">
          </section>
<div className="max-w-7xl mx-auto">
            </div>
<div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Coming Soon
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                This page is under development. Please check back soon for updates.
              </p>
<button className="cyber-button">
                Learn More
                <ArrowRight className="w-5 h-5 ml-2" />

            </p>
            </div></button><div className="flex flex-col sm: flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-amber-600 hover:to-orange-700 transition-all duration-300 flex items-center justify-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
<button className="border border-amber-400 text-amber-400 hover: bg-amber-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View Demo
</button>
            </div>
          </div>
        </section>
</div>
      

            </div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                </div>
<div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-amber-400/50 transition-all duration-300">
                  </div>
<div className="text-amber-400 mb-4">
                    <feature.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>

                  {feature.benefits && (
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
<li key={idx} className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-amber-400 mr-2" />

                          {benefit}
                        </li>
                      ))}
                    </ul>
                  )}
<ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="h-4 w-4 text-amber-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
</div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
<section className="py-20 px-4">
          </section>
<div className="max-w-7xl mx-auto">
            </div>
<div className="text-center mb-16">
              <h2 className="text-4xl md: text-5xl font-bold text-white mb-6">

                Why Choose Our Solution ? </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Proven results that enhance your visual capabilities
              </p>
            </div>
<div className="grid grid-cols-1 md : grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                </div>
<div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  </div>
<div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-lg text-white font-medium">{benefit}</p>

<section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          </section>
<div className="max-w-7xl mx-auto">
            </div>
<div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Computer Vision?</h2>
              <p className="text-xl text-gray-300">Transform your visual processing with intelligent automation</p>
            </div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                </div>
<div key={index} className="flex items-start space-x-3">
                  </div>
<div className="flex-shrink-0">
                    <Zap className="h-6 w-6 text-amber-400" />
                  </div>
                  <p className="text-gray-300">{benefit}</p>
</div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
<section className="py-20 px-4">
          </section>
<div className="max-w-4xl mx-auto text-center">
            </div>
<div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-4xl md: text-5xl font-bold text-white mb-6">

                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our experts to discuss your computer vision requirements and get started today.
              </p>
              </div>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-amber-500 to-blue-600 hover:from-amber-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Contact Us
                </button>
                <button className="border border-amber-400 text-amber-400 hover: bg-amber-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                  Learn More
                </button>
              </div>
<section className="py-20 px-4 sm: px-6 lg:px-8">
          </section>
<div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to See the Future?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the future of visual intelligence with our AI-powered computer vision solutions.
            </p>
            </div>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-amber-600 hover:to-orange-700 transition-all duration-300 flex items-center justify-center">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-amber-400 text-amber-400 px-8 py-4 rounded-lg font-semibold hover:bg-amber-400 hover:text-white transition-all duration-300">
                Contact Sales
              </button>
</div>
          </div>
        </section>
      </main>

<Footer />
    </>
  )
}

export default PagePage;

export default AiComputerVisionPage;
      {/* CTA Section */}
      <section className="py-20 px-4"></section></section>
        </section>< className="$2 />
          </div><h2 className="text-4xl font-bold text-white mb-6"></h2></h2>Ready to Get Started ? </h2>
          <p className="text-xl text-gray-300 mb-8"></p></p>
            Transform your business with our page solutions today;
          <div className="flex flex-col sm : flex-row gap-4 justify-center"></div></div>
            </div><button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"></button>
              Start Free Trial
            <button className="border border-blue-400 text-blue-400 hover: bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300" /></button>
              Contact Sales
          </div>
        </div>
      </section>
<div className="max-w-4xl mx-auto text-center"></div></div>
          <h2 className="text-4xl font-bold text-white mb-6"></h2></h2>Ready to Get Started?
          <p className="text-xl text-gray-300 mb-8"></p></p>Transform your business with our page solutions today
          <div className="flex flex-col sm: flex-row gap-4 justify-center"></div></div>
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"></button>Start Free Trial
            <button className="border border-blue-400 text-blue-400 hover: bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"></button>Contact Sales
      <Footer />
  )
}

export default AiComputerVisionPage
<Footer />
    </div>
  );
};

export default AiComputerVisionPage;
