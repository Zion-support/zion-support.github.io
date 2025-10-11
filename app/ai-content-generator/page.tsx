'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ArrowRight, CheckCircle, Star, Users, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Settings, Smartphone, Calendar, FileText, MessageCircle, Heart, DollarSign, Box, Monitor, Package, Mic, Workflow, Eye, Wifi, MessageSquare, ShoppingCart } from 'lucide-react';

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

  const features = [
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive analytics dashboard with real-time data visualization.',
      benefits: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'Performance metrics']
    },
    {
      icon: TrendingUp,
      title: 'Performance Optimization',
      description: 'AI-powered insights to optimize your business performance.',
      benefits: ['Predictive analytics', 'Trend analysis', 'Performance metrics', 'Growth forecasting']
    },
    {
      icon: PieChart,
      title: 'Data Visualization',
      description: 'Transform complex data into clear, actionable insights.',
      benefits: ['Interactive charts', 'Custom reports', 'Data export', 'Visual storytelling']
    },
    {
      icon: Target,
      title: 'Precision Targeting',
      description: 'Target specific goals and objectives with precision.',
      benefits: ['Goal tracking', 'Performance optimization', 'Strategic planning', 'Success metrics']
    }
  ]

const benefits = [
    'Increase efficiency by up to 80%',
    'Reduce costs by 30% with automation',
    'Improve decision-making with AI insights',
    'Scale operations without proportional staff increases',
    'Real-time processing and analysis',
    'Seamless integration with existing systems'
  ]

  return (
    </div>
<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      </div><main className="pt-20">
        {/* Hero Section */}
        </main><section className="py-20 px-4 sm: px-6 lg:px-8">
          </section>
<div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-6">
              Ai Content Generator
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with our advanced AI-powered solutions.
            </p>
            </div>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover: bg-cyan-400 hover:text-white transition-all duration-300">
                Learn More
              </button>
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
                Learn More;
                <ArrowRight className="w-5 h-5 ml-2" />

            </p>
            </div></button><div className="flex flex-col sm: flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover: bg-cyan-400 hover:text-white transition-all duration-300">
                Contact Sales
</button>
            </div>
          </div>
</section>
</div>
      
      <Footer />
    </>

  )
};
<div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8"></div></div>
            {contentTypes.map((type, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300"></div></div>
<div className="flex justify-center mb-4"></div></div>
                  {type.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4"></h3></h3>{type.title}</h3>
                <p className="text-gray-300"></p></p>{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 sm: px-6 lg:px-8"></section></section>
<div className="max-w-7xl mx-auto"></div></div>
<div className="text-center mb-16"></div></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4"></h2></h2>
              Simple Pricing
            </h2>
            <p className="text-xl text-gray-300"></p></p>
              Choose the plan that fits your content needs.
            </p>
          </div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8"></div></div>
            {pricingPlans.map((plan, index) => (<div key={index} className="{`bg-white/10" backdrop-blur-sm rounded-2xl p-8 relative ${
                plan.popular  ? 'ring-2 ring-cyan-400 bg-white/15'  : ''
              }`}></div></div>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2"&gt</div & gt
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium" & gt</span & gt
                      Most Popular
                    </span & gt
                  </div & gt)}
                <div className="text-center mb-8"></div>
                  <h3 className="text-2xl font-bold text-white mb-2"></h3></h3>{plan.name}</h3>
                  <p className="text-gray-300 mb-4"></p></p>{plan.description}</p>
                  <div className="flex items-baseline justify-center"></div></div>
                    <span className="text-4xl font-bold text-white"></span></span>{plan.price}</span>
                    <span className="text-gray-300 ml-1"></span></span>{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8"></ul>
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300"></li>
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="{`w-full" py-3 px-6 rounded-lg font-medium transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 hover: from-cyan-600 hover:to-blue-600 text-white transform hover:scale-105' 
                    : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white'
                }`}></button>
                  Start Free Trial
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 sm: px-6 lg:px-8"></section></section>
<div className="max-w-7xl mx-auto"></div></div>
<div className="text-center mb-16"></div></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4"></h2></h2>
              What Our Users Say
            </h2>
            <p className="text-xl text-gray-300"></p></p>
              Join thousands of content creators using our AI platform.
            </p>
          </div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8"></div></div>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8"></div></div>
<div className="flex items-center mb-4"></div></div>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic"></p></p>"{testimonial.content}"</p>
                <div>
                  </div>
<div className="font-semibold text-white"></div></div>{testimonial.name}</div>
<div className="text-cyan-400 text-sm"></div></div>{testimonial.role}</div>
<div className="text-gray-400 text-sm"></div></div>{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm: px-6 lg:px-8"></section></section>
<div className="max-w-4xl mx-auto text-center"></div></div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6"></h2></h2>
            Ready to Create Amazing Content?
          </h2>
          <p className="text-xl text-gray-300 mb-8"></p></p>
            Start your free trial today and experience the power of AI content generation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div></div>
            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"></button>
              <ArrowRight className="w-5 h-5 mr-2" />
              Start Free Trial
            </button>
            <button className="border border-white text-white hover:bg-white hover:text-gray-900 font-bold py-4 px-8 rounded-lg transition-all duration-300"></button>
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
export default AiContentGeneratorPage