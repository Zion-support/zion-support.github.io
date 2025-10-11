'use client';
import React from 'react';
import {Helmet} from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import {ArrowRight, CheckCircle, Star, Users, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Settings, Smartphone, Calendar, FileText, MessageCircle, Heart, DollarSign, Box, Monitor, Package, Mic, Workflow, Eye, Wifi, MessageSquare, ShoppingCart} from 'lucide-react';

const AiCustomerSupportPage: React.FC = () => {const features = [
    {
icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive analytics dashboard with real-time data visualization.',
      benefits: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'Performance metrics']
icon: Brain,
      title: 'AI-Powered Intelligence',
      description: 'Advanced AI algorithms that understand customer intent and provide intelligent responses.',
      benefits: ['Natural language processing', 'Context awareness', 'Learning capabilities', 'Personalized responses']},
    {icon: MessageCircle,
      title: 'Multi-Channel Support',
      description: 'Provide support across all customer touchpoints with consistent AI assistance.',
      benefits: ['Chat integration', 'Email automation', 'Phone support', 'Social media']},
    {icon: Zap,
      title: 'Instant Response',
      description: 'Get immediate answers to customer queries with 24/7 AI availability.',
      benefits: ['Real-time responses', '24/7 availability', 'Instant resolution', 'No wait times']},
    {icon: Shield,
      title: 'Secure  & Reliable',
      description: 'Enterprise-grade security and reliability for all customer interactions.',
      benefits: ['Data encryption', 'Compliance ready', 'High availability', 'Secure processing']}
  ]

const benefits = [
    'Reduce response time by up to 80%',
    'Increase customer satisfaction by 40%',
    'Handle 10x more queries simultaneously',
    'Reduce support costs by 60%',
    '24/7 availability without breaks',
    'Consistent quality across all interactions'
  ]

  const stats = [
    {icon: <Clock className="h-8 w-8 text-cyan-400" />,
      value: '80%',
      label: 'Faster Response'},
    {icon: <Star className="h-8 w-8 text-cyan-400" />,
      value: '95%',
      label: 'Satisfaction Rate'},
    {icon: <Zap className="h-8 w-8 text-cyan-400" />,
      value: '24/7',
      label: 'Availability'},
    {icon: <Shield className="h-8 w-8 text-cyan-400" />,
      value: '100%',
      label: 'Secure'}
  ]
const PagePage: React.FC = () => {return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        </div>
<section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
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
                Learn More
                <ArrowRight className="w-5 h-5 ml-2" />

        {/* Features Section */}
        </div></button><section className="py-16 px-4 sm: px-6 lg:px-8">
          </section>
<div className="max-w-7xl mx-auto">
</div>
<div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Powerful AI Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI customer support platform combines cutting-edge technology with user-friendly design.
              </p>
            </div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                </div>
<div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
                  </div>
<div className="flex items-center mb-4">
                    </div>
<div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mr-4">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-6">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
{/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8"></section></section>
<div className="max-w-7xl mx-auto">
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8"></div>
</div>
            {stats.map((stat, index) => (
              <div key={index} className="text-center"></div>
</div>
<div className="flex justify-center mb-4"></div>
</div>
                  {stat.icon}
                </div>
<div className="text-3xl md:text-4xl font-bold text-white mb-2"></div>
</div>
                  {stat.value}
                </div>
<div className="text-gray-300"></div>
</div>
                  {stat.label}
                </div>
</div>
            ))}
          </div>
</div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm: px-6 lg:px-8"></section></section>
<div className="max-w-7xl mx-auto">
</div>
</div>
<div className="text-center mb-16"></div>
</div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4"></h2></h2>
              Powerful AI Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p></p>
              Our AI customer support platform combines cutting-edge technology with user-friendly design.
            </p>
          </div>
<div className="max-w-7xl mx-auto">
</div>
</div>
<div className="text-center mb-16"></div>
</div>
              <h2 className="text-4xl md: text-5xl font-bold text-white mb-6"></h2></h2>Key Features
              <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p></p>Advanced AI technology that drives results
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8"></div>
</div>
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group"></div>
</div>
<div className="w-16 h-16 bg-gradient-to-br from-sky-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"></div>
</div>
                    <feature.icon className="w-8 h-8 text-white" />
                  <h3 className="text-xl font-bold text-white mb-4"></h3></h3>{feature.title}
                  <p className="text-gray-300 mb-4"></p></p>{feature.description}
                  {feature.benefits && (
                    <ul className="space-y-2"></ul>
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-400"></li>
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  )}
</div>
              ))}
            </div>
</div>
        </section>
{/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          </section>
<div className="max-w-7xl mx-auto">
</div>
<div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our AI Support ? </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Transform your customer support with intelligent automation and human-like interactions.
              </p>
            </div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                </div>
<div key={index} className="flex items-start space-x-3">
                  </div>
<div className="flex-shrink-0">
                    <Zap className="h-6 w-6 text-cyan-400" />
                  </div>
                  <p className="text-gray-300">{benefit}</p>
                </div>

              ))}
            </div>
</div>
        </section>

        {/* CTA Section */}
<section className="py-20 px-4 sm: px-6 lg:px-8">

          </section>
<div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Customer Support?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses already using our AI-powered customer support solutions.
            </p>
            </div>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                Contact Sales
</button>
            </div>
</div>
        </section>
</div>
      
      <Footer />
    </>
  )
}

export default PagePage;
</main>

      <Footer />
    </div>
  );
};

export default AiCustomerSupportPage;
