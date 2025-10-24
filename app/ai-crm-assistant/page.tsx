'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings } from 'lucide-react'
const AiCrmAssistantPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Intelligence',
      description: 'Advanced AI algorithms that provide intelligent insights and recommendations.',
      benefits: ['Smart recommendations', 'Predictive analytics', 'Automated insights', 'Real-time analysis']
    },
    {
      icon: BarChart
    },
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive analytics dashboard with real-time data visualization.'
    }
    ];
  return (
    <>
      <Helmet>
        <title>AI CRM Assistant | Zion Tech Group - Intelligent Customer Relationship Management</title>
        <meta name="description" content="Transform your CRM with AI-powered assistant. Automated customer management, intelligent insights, and enhanced productivity." />
        <meta name="keywords" content="AI CRM assistant, customer relationship management, AI automation, CRM optimization, intelligent CRM" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="py-20 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AI CRM Assistant
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Advanced AI-powered CRM assistant solution for modern businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-full font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300">
                Get Started
              </button>
              <button className="border border-white/20 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Powerful Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Unlock the full potential of your CRM with our advanced AI CRM assistant platform.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/50 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mb-6">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  {feature.benefits && (
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300">
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
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Why Choose Our AI CRM Assistant?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the benefits of AI-powered CRM assistant that drive real business results.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center p-6 bg-white/5 rounded-xl border border-white/10">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" />
                  <span className="text-white font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your CRM?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses already using our AI CRM assistant platform to drive growth and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-full font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300">
                Start Free Trial
              </button>
              <button className="border border-white/20 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
  const benefits = [
    'Increase efficiency by up to 50%',
    'Reduce costs by 30% with automation',
    'Improve decision-making with AI insights',
    'Scale operations without proportional staff increases',
    'Gain competitive advantage with advanced technology'
  ];
    return (
    <>
      <Helmet>
        <title>Page Title</title>
        <meta name="description" content="Page description" />
      </Helmet>
        <title>AI CRM Assistant - Zion Tech Group</title>
        <meta name="description" content="Transform your customer relationship management with our AI CRM Assistant. Intelligent automation, lead scoring, and sales insights for better business growth." />
        <meta name="keywords" content="AI CRM, customer relationship management, sales automation, lead scoring, CRM AI, business intelligence" />
      

<title>Ai Crm Assistant - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered ai crm assistant solution for modern businesses." />
        <meta name="keywords" content="AI ai crm assistant, artificial intelligence, ai crm assistant, AI solutions, intelligent automation" />
      
      
      <Navigation />

<Navigation />
      <div className="...">
        {/* Hero Section */}
        <section>
        <div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="...">
            <h1 className="...">
              Ai Crm Assistant
            </h1>
            <p className="...">
              Advanced AI-powered ai crm assistant solution for modern businesses.
            </p>
            <div className="...">
              <button className="...">
                Get Started
              </button>
              <button className="...">
                View Demo
              </button>
            </div>
        </div>
      </section>

        {/* Features Section */}
        <section>
        <div>
            <div className="...">
              <h2 className="...">
                Key Features
              </h2>
              <p className="...">
                Advanced AI technology that drives results
              </p>
            </div>

            <div className="...">
              {features.map((feature, index) => (
                <div key={index} className="...">
                  <div className="...">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  {feature.benefits && (
                    <ul className="...">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="...">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
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

        {/* Benefits Section */}
        <section>
        <div>
            <div className="...">
              <h2 className="...">
                Why Choose Our Solution?
              </h2>
              <p className="...">
                Proven results that drive business growth and efficiency
              </p>
            </div>

            <div className="...">
              {benefits.map((benefit, index) => (
                <div key={index} className="...">
                  <div className="...">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-lg text-white font-medium">{benefit}</p>
                </div>
              ))}
            </div>
        </div>
      </section>

        {/* CTA Section */}
        <section>
        <div>
            <div className="...">
              <h2 className="...">
                Ready to Get Started?
              </h2>
              <p className="...">
                Contact our experts to discuss your requirements and get started today.
              </p>
              <div className="...">
                <button className="...">
                  Contact Us
                </button>
                <button className="...">
                  Learn More
                </button>
              </div>
            ))}
          </div>
</section>
      ))
        <meta name="description" content="Intelligent CRM assistant powered by AI technology." />
    <React.Fragment>
      </React><Helmet>
        <title>Page Title</title>
        <meta name="description" content="Page description" />
      </Helmet>
        <meta name="description" content="Intelligent CRM assistant powered by AI technology." />
        <meta name="keywords" content="AI CRM assistant, artificial intelligence, customer relationship management, AI solutions, intelligent CRM" />
      <Navigation />
      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">{/* Hero Section */</main>} <section className="relative py-20 px-4 sm: px-6 lg:px-8">,</section>
          <div className="...">
            <div className="...">
              <h1 className="text-4xl md: text-6xl font-bold text-gray-900 mb-6">,</h1>
                AI CRM Assistant
  </
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">Transform your business with intelligent solutions powered by cutting-edge AI technology.</p>
              </p>
              <div className="flex flex-col sm: flex-row gap-4 justify-center">,</div>
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover: bg-blue-700 transition-colors">,</button>
                  Get Started
  </
                <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover: bg-blue-50 transition-colors">,</button>
                  Learn More
              </div>
            </div>
        </div>
      </section>
        {/* Features Section */} <section className="py-20 px-4 sm: px-6 lg:px-8">,<section>
        <div>
          <div>
            <h2>,</h2>
                Powerful AI Features
  </
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">Discover how our AI platform can revolutionize your business operations.</p>
        {/* Features Section */}
        <section className="...">
          </section>< className=" />
            </div><div className="...">
              </div><h2 className="...">
                Powerful AI Features
              <p className="text-xl text-gray-600 max-w-3xl mx-auto" /></p>
                Discover how our AI platform can revolutionize your business operations.
              </p>
            </div>
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8">,</div>
              {features.map((feature, index) => (
                <div key={index}className="bg-white p-6 rounded-xl shadow-lg hover: shadow-xl transition-shadow">,</div>
                  <div className="...">
                    <feature.icon className="h-8 w-8 text-blue-600 mr-3" />
                    <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{feature.description</p>}</p>
                  <ul className="...">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex}className="...">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {benefit} </li>
                    ))}
              ))}
            </div>
        </div>
      </section>
        {/* CTA Section */} <section className="py-20 px-4 sm: px-6 lg:px-8 bg-blue-600">,</section>
          <div className="...">
            <h2 className="text-3xl md: text-4xl font-bold text-white mb-6">,</h2>
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8">Join thousands of businesses already using our AI platform.</p>
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover: bg-gray-100 transition-colors font-semibold">,</button>
              Start Your Free Trial
          </div>
            {features.map((feature, index) => (
              <div key={index}className="bg-slate-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover: border-blue-400/50 transition-all duration-300 group">,</div>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover: scale-110 transition-transform duration-300">,</div>
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description</p>}</p>
                <ul className="...">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex}className="...">
                      <CheckCircle className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                      {benefit} </li>
                  ))}
            ))}
          </div>
        </div>
      </section>
      {/* Benefits Section */} <section className="...">
        <div className="...">
          <div className="...">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our AI CRM Assistant?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">Experience the benefits of our proven solutions;</p>
  </
          </div>
          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-6">,</div>
            {benefits.map((benefit, index) => (
              <div key={index}className="...">
                <div className="...">
                  <CheckCircle className="w-8 h-8 text-white" />
                <h3 className="text-lg font-semibold text-white">{benefit}
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */} <section className="...">
        <div className="...">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8">Transform your customer relationships with our AI CRM Assistant solutions today;</p>
  </
          <div className="flex flex-col sm: flex-row gap-4 justify-center">,</div>
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover: from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">,</button>
              Start Free Trial
  </
            <button className="border border-blue-400 text-blue-400 hover: bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">,</button>
              Contact Sales
  </
          </div>
        </div>
      </section>
      <Footer />
    </React.Fragment>
  )
}
export default AiCrmAssistantPage
  </button>
  </button>
  </p>
  </p>
  </button>
  </h2>
  </button>
  </button>
  </h1>
  </main>
      {/* CTA Section */}
      <section className="...">
        </section>< className=" />
          </div><h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="...">
            Transform your customer relationships with our AI CRM Assistant solutions today
  
          <div className="...">
            </div><button className="...">
              Start Free Trial
  
            <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300" /></button>
              Contact Sales
  
          </div>
        </div>
      </section>

        <div className="...">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?
          <p className="text-xl text-gray-300 mb-8">Transform your customer relationships with our AI CRM Assistant solutions today
          <div className="...">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">Start Free Trial
            <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">Contact Sales
      <Footer />
  )
}
export default AiCrmAssistantPage</div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></button></button></button></button></button></p></p></p></p></p></p></p></h1></h2></h2></h2></h2></h3></h3></h3></ul></ul></li></main></section></section></section></section></section>
