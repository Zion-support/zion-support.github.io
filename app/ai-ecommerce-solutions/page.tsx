'use client'
import React from 'react'
import {Helmet} from 'react-helmet-async'
import {ArrowRight, CheckCircle, Star, Users, Zap, Shield, Brain, BarChart, Target, TrendingUp} from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
const PagePage: React.FC = () => {const features = [
    {
      icon: Wifi,
      title: 'Feature 1',
      description: 'Description for feature 1.',
      benefits: ['Benefit 1', 'Benefit 2', 'Benefit 3']} ,
    {icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive analytics dashboard with real-time data visualization.',
      benefits: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'Performance metrics']} ,
    {icon: TrendingUp,
      title: 'Performance Optimization',
      description: 'AI-powered insights to optimize your business performance.',
      benefits: ['Predictive analytics', 'Trend analysis', 'Performance metrics', 'Growth forecasting']} ,
    {icon: Target,
      title: 'Precision Targeting',
      description: 'Target specific goals and objectives with precision.',
      benefits: ['Goal tracking', 'Performance optimization', 'Strategic planning', 'Success metrics']} ]
  const benefits = [
    'Increase efficiency by up to 80%',
    'Reduce costs by 30% with automation',
    'Improve decision-making with AI insights',
    'Scale operations without proportional staff increases',
    'Real-time processing and analysis',
    'Seamless integration with existing systems'
  ]
  return (
    <>
      <Helmet>
        <title>AI Analytics - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered analytics solutions for data-driven insights" />
        <meta name="keywords" content="AI analytics, data analysis, machine learning, business intelligence" />
      </Helmet>
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Analytics - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered analytics solutions for data-driven insights" />
        <meta name="keywords" content="AI analytics, data analysis, machine learning, business intelligence" />
      </Helmet>
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">;
          <div className="max-w-7xl mx-auto">;
            <div className="text-center">;
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">;
                AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Analytics</span>;
              </h1>;
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">;
                Transform your data into actionable insights with our advanced AI analytics platform;
              </p>;
              <div className="flex flex-col sm:flex-row gap-4 justify-center">;
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">;
                  Get Started;
                </button>;
                <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">;
                  View Demo;
                </button>;
              </div>;
      <Footer />;
    </>;
            </div>;
      <Footer />;
    </>;
          </div>;
      <Footer />;
    </>;
        </section>;
        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">AI Analytics Features</h2>
              <p className="text-xl text-gray-300">Powerful tools for data analysis and insights</p>
            </div>
      
      <Footer />
    </>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                  <div className="flex items-center mb-4"
                    <feature.icon className="h-8 w-8 text-blue-600 mr-3"
                    <h3 className="text-xl font-semibold text-gray-900"
                  </div>
      <Footer />
    </>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="h-4 w-4 text-cyan-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    )
    </>
  )
                  </ul>
                </div>
      
      <Footer />
    </>              ))}
            </div>;
      <Footer />;
    </>;
          </div>;
      <Footer />;
    </>;
        </section>;
        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Our AI Solutions?</h2>
              <p className="text-xl text-gray-300">Transform your business with intelligent automation</p>
            </div>
      
      <Footer />
    </>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg"
                  <div className="flex items-center"
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3"
                    <span className="text-lg font-medium text-gray-900"
                  </div>
      <Footer />
    </>
                  <p className="text-gray-300">{benefit}</p>
                </div>
      
      <Footer />
    </>
              ))}
            </div>
      
      <Footer />
    </>
          </div>
      
      <Footer />
    </>
        </section>

        <section className="py-20"
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 text-center"
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
              Contact us today to learn how our solutions can transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                Contact Us
              </button>
              <button className="
    ,
    r: bg-blue-600 hove, r:text-white transition-colors"
                Schedule Demo
              </button>
            </div>
      
      <Footer />
    </>
          </div>
      
      <Footer />
    </>
        </section>
      </div>
      
      <Footer />
    </>
      <Footer />
    </>
          </div>
      
      <Footer />
    </>
        </section>
        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">;
          <div className="max-w-7xl mx-auto">;
            <div className="text-center mb-16">;
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Powerful Features</h2>;
              <p className="text-xl text-gray-300">Everything you need to succeed with AI</p>;
            </div>;
      <Footer />;
    </>;
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">;
              {features.map((feature, index) => (}
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300">;
                  <div className="text-cyan-400 mb-4">;
                    <feature.icon className="h-8 w-8" />;
                  </div>;
      <Footer />;
    </>;
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>;
                  <p className="text-gray-300 mb-4">{feature.description}</p>;
                  <ul className="space-y-2">;
                    {feature.benefits.map((benefit, benefitIndex) => (}
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">;
                        <CheckCircle className="h-4 w-4 text-cyan-400 mr-2 flex-shrink-0" />;
                        {benefit}
                      </li>;
                    ))}
                  </ul>;
                </div>;
      <Footer />;
    </>;
              ))}
            </div>;
      <Footer />;
    </>;
          </div>;
      <Footer />;
    </>;
        </section>;
        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">;
          <div className="max-w-7xl mx-auto">;
            <div className="text-center mb-16">;
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Our AI Solutions?</h2>;
              <p className="text-xl text-gray-300">Transform your business with intelligent automation</p>;
            </div>;
      <Footer />;
    </>;
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
              {benefits.map((benefit, index) => (}
                <div key={index} className="flex items-start space-x-3">;
                  <div className="flex-shrink-0">;
                    <Zap className="h-6 w-6 text-cyan-400" />;
                  </div>;
      <Footer />;
    </>;
                  <p className="text-gray-300">{benefit}</p>;
                </div>;
      <Footer />;
    </>;
              ))}
            </div>;
      <Footer />;
    </>;
          </div>;
      <Footer />;
    </>;
        </section>;
        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">;
          <div className="max-w-4xl mx-auto text-center">;
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>;
            <p className="text-xl text-gray-300 mb-8">;
              Join thousands of businesses already using our AI-powered solutions.;
            </p>;
            <div className="flex flex-col sm:flex-row gap-4 justify-center">;
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">;
                Start Free Trial;
                <ArrowRight className="ml-2 h-5 w-5" />;
              </button>;
              <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">;
                Learn More;
              </button>;
            </div>;
      <Footer />;
    </>;
          </div>;
      <Footer />;
    </>;
        </section>;
      </div>;
      <Footer />;
    </>;
      <Footer />;
    </>;);
};
